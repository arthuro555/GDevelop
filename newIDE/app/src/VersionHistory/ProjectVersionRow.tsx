import * as React from 'react';

import { I18n } from '@lingui/react';

import { Trans, t } from '@lingui/macro';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import ButtonBase from '@material-ui/core/ButtonBase';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  CLOUD_PROJECT_VERSION_LABEL_MAX_LENGTH,
  ExpandedCloudProjectVersion,
} from '../Utils/GDevelopServices/Project';

import { UserPublicProfileByIds } from '../Utils/GDevelopServices/User';

import { Column, Line, Spacer } from '../UI/Grid';

import Text from '../UI/Text';

import { ColumnStackLayout, LineStackLayout } from '../UI/Layout';

import IconButton from '../UI/IconButton';

import ChevronArrowBottom from '../UI/CustomSvgIcons/ChevronArrowBottom';

import ChevronArrowRight from '../UI/CustomSvgIcons/ChevronArrowRight';

import ThreeDotsMenu from '../UI/CustomSvgIcons/ThreeDotsMenu';
import {
  shouldCloseOrCancel,
  shouldValidate,
} from '../UI/KeyboardShortcuts/InteractionKeys';

import TextField, { TextFieldInterface } from '../UI/TextField';

import HistoryIcon from '../UI/CustomSvgIcons/History';

import type { OpenedVersionStatus, VersionRestoringStatus } from '.';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';

import Chip from '../UI/Chip';

import CircularProgress from '../UI/CircularProgress';

import CrossIcon from '../UI/CustomSvgIcons/Cross';

import CheckIcon from '../UI/CustomSvgIcons/Check';

import { getStatusColor } from './Utils';
import { useLongTouch, ClientCoordinates } from '../Utils/UseLongTouch';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';

const thisYear = new Date().getFullYear();

const styles = {
  avatar: {
    width: 20,
    height: 20,
  },
  greyed: { opacity: 0.7 },
  versionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 30, // Width of the collapse icon button.
    gap: 2,
  },
  dateContainer: {
    flexShrink: 0,
  },
  iconContainer: {
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
  },
  restoredVersionContainer: {
    opacity: 0.7,
  },
  sharedRowStyle: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
  labelTextfield: { width: '100%' },
  labelSubRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '2px 12px 2px 2px',
    borderRadius: 4,
  },
  versionSubRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 12px 2px 32px',
    borderRadius: 4,
  },
  statusIndicator: {
    height: 6,
    width: 6,
    borderRadius: 3,
  },
  rowContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
} as const;

const StatusIndicator = ({ status }: { status: VersionRestoringStatus }) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  if (status === 'opened') return null;
  const backgroundColor = getStatusColor(gdevelopTheme, status);

  return <span style={{ ...styles.statusIndicator, backgroundColor }} />;
};

const useBorder = (
  version: ExpandedCloudProjectVersion,
  openedVersionStatus?: OpenedVersionStatus | null
) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  if (
    !openedVersionStatus ||
    openedVersionStatus.version.id !== version.id ||
    openedVersionStatus.status !== 'unsavedChanges'
  )
    return undefined;

  return { border: `1px solid ${gdevelopTheme.statusIndicator.error}` };
};

const StatusChip = ({ status }: { status: VersionRestoringStatus }) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const label =
    status === 'unsavedChanges' ? (
      <Trans>Unsaved changes</Trans>
    ) : status === 'saving' ? (
      <Trans>Saving...</Trans>
    ) : status === 'latest' ? (
      <Trans>Latest save</Trans>
    ) : (
      <Trans>Changes saved</Trans>
    );
  const backgroundColor = getStatusColor(gdevelopTheme, status);

  return (
    <Chip
      style={{
        backgroundColor,
        color: '#111111',
        padding: '3px 0',
        height: 'auto',
      }}
      label={label}
    />
  );
};

const useClassesForRowContainer = makeStyles((theme) =>
  createStyles({
    root: {
      ...styles.sharedRowStyle,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.selected': {
        backgroundColor: theme.palette.action.focus,
      },
    },
  })
);

type Props = {
  authenticatedUserId: string;
  version: ExpandedCloudProjectVersion;
  usersPublicProfileByIds: UserPublicProfileByIds;
  isEditing: boolean;
  isLatest: boolean;
  onRename: (arg1: ExpandedCloudProjectVersion, arg2: string) => Promise<void>;
  isLoading: boolean;
  onCancelRenaming: () => void;
  onContextMenu: (
    event: ClientCoordinates,
    version: ExpandedCloudProjectVersion
  ) => void;
  displayFullDate?: boolean;
  openedVersionStatus: OpenedVersionStatus | null | undefined;
  getAnonymousAvatar: () => {
    src: string;
    alt: string;
  };
};

const ProjectVersionRow = ({
  authenticatedUserId,
  version,
  usersPublicProfileByIds,
  isEditing,
  isLatest,
  isLoading,
  onRename,
  onCancelRenaming,
  onContextMenu,
  displayFullDate,
  openedVersionStatus,
  getAnonymousAvatar,
}: Props) => {
  const textFieldRef = React.useRef<TextFieldInterface | null | undefined>(
    null
  );
  const [newLabel, setNewLabel] = React.useState<string>(version.label || '');
  const authorPublicProfile = version.userId
    ? usersPublicProfileByIds[version.userId]
    : null;

  const validateNewLabel = () => {
    onRename(version, newLabel);
  };

  const cancelRenaming = React.useCallback(() => {
    setNewLabel(version.label || '');
    onCancelRenaming();
  }, [version, onCancelRenaming]);
  const longTouchProps = useLongTouch((e) => onContextMenu(e, version));

  const classes = useClassesForRowContainer();
  const borderStyle = useBorder(version, openedVersionStatus);
  const anonymousAvatar = getAnonymousAvatar();
  const versionStatus =
    openedVersionStatus &&
    openedVersionStatus.status !== 'opened' &&
    openedVersionStatus.version.id === version.id
      ? openedVersionStatus.status
      : isLatest
        ? 'latest'
        : null;

  return (
    <I18n>
      {({ i18n }) => (
        <div
          className={classNames({
            [classes.root]: true,
            selected:
              !!openedVersionStatus &&
              openedVersionStatus.version.id === version.id,
          })}
          style={borderStyle}
        >
          {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children: any[]; onTouchStart: (event: TouchEvent) => void; onTouchMove: (event: TouchEvent) => void; onTouchEnd: () => void; onContextMenu: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void; style: { ...; }; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'. */}
          <div
            onContextMenu={(e) => onContextMenu(e, version)}
            style={styles.rowContainer}
            {...longTouchProps}
          >
            {versionStatus && (
              <>
                <Line noMargin>
                  <StatusChip status={versionStatus} />
                </Line>
                <Spacer />
              </>
            )}
            {isEditing ? (
              <TextField
// @ts-expect-error - TS2322 - Type 'MutableRefObject<TextFieldInterface | null | undefined>' is not assignable to type 'Ref<TextFieldInterface> | undefined'.
                ref={textFieldRef}
                margin="none"
                value={newLabel}
                stopContextMenuPropagation
                translatableHintText={t`End of jam`}
                // @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
                onChange={(event, text) =>
                  setNewLabel(
                    text.slice(0, CLOUD_PROJECT_VERSION_LABEL_MAX_LENGTH)
                  )
                }
                autoFocus="desktopAndMobileDevices"
                onKeyPress={(event) => {
                  if (shouldValidate(event)) {
                    validateNewLabel();
                  }
                }}
                onKeyDown={(event) => {
                  // Prevent parent drawer to be closed when Esc is hit.
                  event.stopPropagation();
                }}
                onKeyUp={(event) => {
                  if (shouldCloseOrCancel(event)) {
                    cancelRenaming();
                  }
                }}
                inputStyle={{ fontSize: 14 }}
                endAdornment={
                  <>
                    <IconButton
                      edge="end"
                      onClick={cancelRenaming}
                      disabled={isLoading}
                      size="small"
                    >
                      <CrossIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      onClick={validateNewLabel}
                      disabled={isLoading}
                      size="small"
                    >
                      <CheckIcon />
                    </IconButton>
                  </>
                }
                style={styles.labelTextfield}
              />
            ) : version.label ? (
              <LineStackLayout noMargin>
                <Text noMargin>{version.label}</Text>
                {isLoading && (
                  <Column noMargin>
                    <CircularProgress size={20} />
                  </Column>
                )}
                <div style={styles.dateContainer}>
                  <Text noMargin style={styles.greyed}>
                    {displayFullDate
// @ts-expect-error - TS2339 - Property 'date' does not exist on type 'I18n'.
                      ? i18n.date(version.createdAt, {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })
// @ts-expect-error - TS2339 - Property 'date' does not exist on type 'I18n'.
                      : i18n.date(version.createdAt, {
                          hour: 'numeric',
                          minute: 'numeric',
                        })}
                  </Text>
                </div>
              </LineStackLayout>
            ) : (
              <LineStackLayout noMargin>
                <Text noMargin>
{ /* @ts-expect-error - TS2339 - Property 'date' does not exist on type 'I18n'. */}
                  {i18n.date(version.createdAt, {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </Text>
                {isLoading && (
                  <Column noMargin>
                    <CircularProgress size={20} />
                  </Column>
                )}
              </LineStackLayout>
            )}
            {version.restoredFromVersion && (
              <div style={styles.restoredVersionContainer}>
                <LineStackLayout noMargin alignItems="center">
                  <div style={styles.iconContainer}>
                    <HistoryIcon fontSize="inherit" />
                  </div>
                  <Text noMargin>
                    {version.restoredFromVersion.label ||
// @ts-expect-error - TS2339 - Property 'date' does not exist on type 'I18n'.
                      i18n.date(version.restoredFromVersion.createdAt, {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                  </Text>
                </LineStackLayout>
              </div>
            )}
            {authorPublicProfile ? (
              <LineStackLayout noMargin alignItems="center">
                <Avatar
                  src={authorPublicProfile.iconUrl}
                  style={styles.avatar}
                />
                <Text noMargin style={styles.greyed}>
                  {authorPublicProfile.username ||
                    (version.userId === authenticatedUserId ? (
                      <Trans>Me</Trans>
                    ) : (
                      ''
                    ))}
                </Text>
              </LineStackLayout>
            ) : (
              <LineStackLayout noMargin alignItems="center">
                <img
                  src={anonymousAvatar.src}
                  alt={anonymousAvatar.alt}
                  style={styles.avatar}
                />
                <Text noMargin style={styles.greyed}>
                  <Trans>Anonymous</Trans>
                </Text>
              </LineStackLayout>
            )}
          </div>
          <IconButton
            size="small"
            // @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onClick={(event) => {
              onContextMenu(event, version);
            }}
          >
            <ThreeDotsMenu />
          </IconButton>
        </div>
      )}
    </I18n>
  );
};

const useClassesForDayCollapse = makeStyles((theme) =>
  createStyles({
    root: {
      ...styles.sharedRowStyle,
      justifyContent: 'flex-start',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:focus': {
        backgroundColor: theme.palette.action.hover,
      },
    },
    labelSubRow: {
      ...styles.labelSubRow,
      '&.selected': {
        backgroundColor: theme.palette.action.focus,
      },
    },
    versionSubRow: {
      ...styles.versionSubRow,
      '&.selected': {
        backgroundColor: theme.palette.action.focus,
      },
    },
  })
);

type DayGroupRowProps = {
  day: number;
  authenticatedUserId: string;
  versions: ExpandedCloudProjectVersion[];
  isOpenedInitially: boolean;
  editedVersionId: string | null | undefined;
  latestVersion: ExpandedCloudProjectVersion | null | undefined;
  onRenameVersion: (
    arg1: ExpandedCloudProjectVersion,
    arg2: string
  ) => Promise<void>;
  loadingVersionId: string | null | undefined;
  onCancelRenaming: () => void;
  onContextMenu: (
    event: ClientCoordinates,
    version: ExpandedCloudProjectVersion
  ) => void;
  openedVersionStatus: OpenedVersionStatus | null | undefined;
  usersPublicProfileByIds: UserPublicProfileByIds;
  getAnonymousAvatar: () => {
    src: string;
    alt: string;
  };
};

export const DayGroupRow = ({
  day,
  authenticatedUserId,
  versions,
  isOpenedInitially,
  editedVersionId,
  latestVersion,
  loadingVersionId,
  onRenameVersion,
  onCancelRenaming,
  onContextMenu,
  openedVersionStatus,
  usersPublicProfileByIds,
  getAnonymousAvatar,
}: DayGroupRowProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(isOpenedInitially);
  const displayYear = new Date(day).getFullYear() !== thisYear;
  const namedVersions = React.useMemo(
    () => versions.filter((version) => version.label),
    [versions]
  );
  const isLatestVersionInThisDayGroup = latestVersion
    ? versions.find((version) => version.id === latestVersion.id)
    : false;
  const isOpenedVersionInThisDayGroup = openedVersionStatus
    ? versions.find((version) => version.id === openedVersionStatus.version.id)
    : false;

  const shouldHighlightDay =
    isOpenedVersionInThisDayGroup &&
    !!openedVersionStatus &&
    !openedVersionStatus.version.label &&
    !isOpen;
  const shouldDisplayLatestIndicatorOnDay =
    isLatestVersionInThisDayGroup &&
    latestVersion &&
    !latestVersion.label &&
    !isOpen;

  const classes = useClassesForDayCollapse();

  return (
    <I18n>
      {({ i18n }) => (
        <React.Fragment>
          <ButtonBase
            onClick={() => setIsOpen(!isOpen)}
            className={classes.root}
          >
            <Column noMargin expand>
              <div
                className={classNames({
                  [classes.labelSubRow]: true,
                  selected: shouldHighlightDay,
                })}
              >
                {isOpen ? <ChevronArrowBottom /> : <ChevronArrowRight />}
                <Line
                  noMargin
                  justifyContent="space-between"
                  expand
                  alignItems="center"
                >
                  <Text noMargin>
{ /* @ts-expect-error - TS2339 - Property 'date' does not exist on type 'I18n'. */}
                    {i18n.date(day, {
                      month: 'short',
                      day: 'numeric',
                      year: displayYear ? 'numeric' : undefined,
                    })}
                  </Text>
                  {shouldHighlightDay && openedVersionStatus ? (
                    <StatusIndicator status={openedVersionStatus.status} />
                  ) : shouldDisplayLatestIndicatorOnDay ? (
                    <StatusIndicator status="latest" />
                  ) : null}
                </Line>
              </div>
              {namedVersions && (
                <Collapse in={!isOpen}>
                  <ColumnStackLayout noMargin>
                    {namedVersions.map((version) => {
                      const shouldHighlightVersion =
                        openedVersionStatus &&
                        openedVersionStatus.version.id === version.id;
                      const isLatestVersion =
                        latestVersion && latestVersion.id === version.id;
                      return (
                        <div
                          key={version.id}
                          className={classNames({
                            [classes.versionSubRow]: true,
                            selected: shouldHighlightVersion,
                          })}
                        >
                          <div style={styles.greyed}>
                            <Text size="body-small" noMargin>
                              {version.label}
                            </Text>
                          </div>
                          {shouldHighlightVersion && openedVersionStatus ? (
                            <StatusIndicator
                              status={openedVersionStatus.status}
                            />
                          ) : isLatestVersion ? (
                            <StatusIndicator status="latest" />
                          ) : null}
                        </div>
                      );
                    })}
                  </ColumnStackLayout>
                </Collapse>
              )}
            </Column>
          </ButtonBase>
          <Collapse in={isOpen}>
            <div style={styles.versionsContainer}>
              {versions.map((version) => (
                <ProjectVersionRow
                  key={version.id}
                  authenticatedUserId={authenticatedUserId}
                  isLatest={
                    latestVersion ? latestVersion.id === version.id : false
                  }
                  version={version}
                  onRename={onRenameVersion}
                  isLoading={loadingVersionId === version.id}
                  onCancelRenaming={onCancelRenaming}
                  usersPublicProfileByIds={usersPublicProfileByIds}
                  isEditing={version.id === editedVersionId}
                  onContextMenu={onContextMenu}
                  getAnonymousAvatar={getAnonymousAvatar}
                  openedVersionStatus={openedVersionStatus}
                />
              ))}
            </div>
          </Collapse>
        </React.Fragment>
      )}
    </I18n>
  );
};
