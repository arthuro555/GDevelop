import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import ButtonBase from '@material-ui/core/ButtonBase';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  CLOUD_PROJECT_VERSION_LABEL_MAX_LENGTH,
  ExpandedCloudProjectVersion,
} from '../Utils/GDevelopServices/Project';
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { UserPublicProfileByIds } from '../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowBottom'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowBottom.js' implicitly has an 'any' type.
import ChevronArrowBottom from '../UI/CustomSvgIcons/ChevronArrowBottom';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../UI/CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../UI/CustomSvgIcons/ThreeDotsMenu';
import {
  shouldCloseOrCancel,
  shouldValidate,
} from '../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField, { TextFieldInterface } from '../UI/TextField';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/History'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/History.js' implicitly has an 'any' type.
import HistoryIcon from '../UI/CustomSvgIcons/History';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VersionHistory/index.tsx', but '--jsx' is not set.
import type { OpenedVersionStatus, VersionRestoringStatus } from '.';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../UI/Chip';
// @ts-expect-error - TS6142 - Module '../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../UI/CircularProgress';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import CrossIcon from '../UI/CustomSvgIcons/Cross';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Check'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Check.js' implicitly has an 'any' type.
import CheckIcon from '../UI/CustomSvgIcons/Check';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Utils'. '/home/arthuro555/code/GDevelop/newIDE/app/src/VersionHistory/Utils.js' implicitly has an 'any' type.
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

const StatusIndicator = ({
  status,
}: {
  status: VersionRestoringStatus
}) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  if (status === 'opened') return null;
  const backgroundColor = getStatusColor(gdevelopTheme, status);
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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

const StatusChip = ({
  status,
}: {
  status: VersionRestoringStatus
}) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const label =
    status === 'unsavedChanges' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Unsaved changes</Trans>
    ) : status === 'saving' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Saving...</Trans>
    ) : status === 'latest' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Latest save</Trans>
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Changes saved</Trans>
    );
  const backgroundColor = getStatusColor(gdevelopTheme, status);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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

const useClassesForRowContainer = makeStyles(theme =>
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
  authenticatedUserId: string,
  version: ExpandedCloudProjectVersion,
  usersPublicProfileByIds: UserPublicProfileByIds,
  isEditing: boolean,
  isLatest: boolean,
  onRename: (arg1: ExpandedCloudProjectVersion, arg2: string) => Promise<void>,
  isLoading: boolean,
  onCancelRenaming: () => void,
  onContextMenu: (event: ClientCoordinates, version: ExpandedCloudProjectVersion) => void,
  displayFullDate?: boolean,
  openedVersionStatus: OpenedVersionStatus | null | undefined,
  getAnonymousAvatar: () => {
    src: string,
    alt: string
  }
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
  const textFieldRef = React.useRef<TextFieldInterface | null | undefined>(null);
  const [newLabel, setNewLabel] = React.useState<string>(version.label || '');
  const authorPublicProfile = version.userId
    ? usersPublicProfileByIds[version.userId]
    : null;

  const validateNewLabel = () => {
    onRename(version, newLabel);
  };

  const cancelRenaming = React.useCallback(
    () => {
      setNewLabel(version.label || '');
      onCancelRenaming();
    },
    [version, onCancelRenaming]
  );
  const longTouchProps = useLongTouch(e => onContextMenu(e, version));

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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div
          className={classNames({
            [classes.root]: true,
            selected:
              !!openedVersionStatus &&
              openedVersionStatus.version.id === version.id,
          })}
          style={borderStyle}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children: any[]; onTouchStart: (event: TouchEvent) => void; onTouchMove: (event: TouchEvent) => void; onTouchEnd: () => void; onContextMenu: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void; style: { ...; }; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'. */}
          <div
            onContextMenu={e => onContextMenu(e, version)}
            style={styles.rowContainer}
            {...longTouchProps}
          >
            {versionStatus && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <StatusChip status={versionStatus} />
                </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Spacer />
              </>
            )}
            {isEditing ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <TextField
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
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                onKeyPress={event => {
                  if (shouldValidate(event)) {
                    validateNewLabel();
                  }
                }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                onKeyDown={event => {
                  // Prevent parent drawer to be closed when Esc is hit.
                  event.stopPropagation();
                }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                onKeyUp={event => {
                  if (shouldCloseOrCancel(event)) {
                    cancelRenaming();
                  }
                }}
                inputStyle={{ fontSize: 14 }}
                endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <IconButton
                      edge="end"
                      onClick={cancelRenaming}
                      disabled={isLoading}
                      size="small"
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CrossIcon />
                    </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <IconButton
                      edge="end"
                      onClick={validateNewLabel}
                      disabled={isLoading}
                      size="small"
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CheckIcon />
                    </IconButton>
                  </>
                }
                style={styles.labelTextfield}
              />
            ) : version.label ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin>{version.label}</Text>
                {isLoading && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <CircularProgress size={20} />
                  </Column>
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div style={styles.dateContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin style={styles.greyed}>
                    {displayFullDate
                      ? i18n.date(version.createdAt, {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })
                      : i18n.date(version.createdAt, {
                          hour: 'numeric',
                          minute: 'numeric',
                        })}
                  </Text>
                </div>
              </LineStackLayout>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin>
                  {i18n.date(version.createdAt, {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </Text>
                {isLoading && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <CircularProgress size={20} />
                  </Column>
                )}
              </LineStackLayout>
            )}
            {version.restoredFromVersion && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div style={styles.restoredVersionContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.iconContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <HistoryIcon fontSize="inherit" />
                  </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>
                    {version.restoredFromVersion.label ||
                      i18n.date(version.restoredFromVersion.createdAt, {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                  </Text>
                </LineStackLayout>
              </div>
            )}
            {authorPublicProfile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Avatar
                  src={authorPublicProfile.iconUrl}
                  style={styles.avatar}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin style={styles.greyed}>
                  {authorPublicProfile.username ||
                    (version.userId === authenticatedUserId ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Me</Trans>
                    ) : (
                      ''
                    ))}
                </Text>
              </LineStackLayout>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <img
                  src={anonymousAvatar.src}
                  alt={anonymousAvatar.alt}
                  style={styles.avatar}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin style={styles.greyed}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Anonymous</Trans>
                </Text>
              </LineStackLayout>
            )}
          </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            size="small"
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onClick={event => {
              onContextMenu(event, version);
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ThreeDotsMenu />
          </IconButton>
        </div>
      )}
    </I18n>
  );
};

const useClassesForDayCollapse = makeStyles(theme =>
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
  day: number,
  authenticatedUserId: string,
  versions: ExpandedCloudProjectVersion[],
  isOpenedInitially: boolean,
  editedVersionId: string | null | undefined,
  latestVersion: ExpandedCloudProjectVersion | null | undefined,
  onRenameVersion: (arg1: ExpandedCloudProjectVersion, arg2: string) => Promise<void>,
  loadingVersionId: string | null | undefined,
  onCancelRenaming: () => void,
  onContextMenu: (event: ClientCoordinates, version: ExpandedCloudProjectVersion) => void,
  openedVersionStatus: OpenedVersionStatus | null | undefined,
  usersPublicProfileByIds: UserPublicProfileByIds,
  getAnonymousAvatar: () => {
    src: string,
    alt: string
  }
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
    () => versions.filter(version => version.label),
    [versions]
  );
  const isLatestVersionInThisDayGroup = latestVersion
    ? versions.find(version => version.id === latestVersion.id)
    : false;
  const isOpenedVersionInThisDayGroup = openedVersionStatus
    ? versions.find(version => version.id === openedVersionStatus.version.id)
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ButtonBase
            onClick={() => setIsOpen(!isOpen)}
            className={classes.root}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                className={classNames({
                  [classes.labelSubRow]: true,
                  selected: shouldHighlightDay,
                })}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {isOpen ? <ChevronArrowBottom /> : <ChevronArrowRight />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line
                  noMargin
                  justifyContent="space-between"
                  expand
                  alignItems="center"
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>
                    {i18n.date(day, {
                      month: 'short',
                      day: 'numeric',
                      year: displayYear ? 'numeric' : undefined,
                    })}
                  </Text>
                  {shouldHighlightDay && openedVersionStatus ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <StatusIndicator status={openedVersionStatus.status} />
                  ) : shouldDisplayLatestIndicatorOnDay ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <StatusIndicator status="latest" />
                  ) : null}
                </Line>
              </div>
              {namedVersions && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Collapse in={!isOpen}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ColumnStackLayout noMargin>
                    {namedVersions.map(version => {
                      const shouldHighlightVersion =
                        openedVersionStatus &&
                        openedVersionStatus.version.id === version.id;
                      const isLatestVersion =
                        latestVersion && latestVersion.id === version.id;
                      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <div
                          key={version.id}
                          className={classNames({
                            [classes.versionSubRow]: true,
                            selected: shouldHighlightVersion,
                          })}
                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <div style={styles.greyed}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Text size="body-small" noMargin>
                              {version.label}
                            </Text>
                          </div>
                          {shouldHighlightVersion && openedVersionStatus ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <StatusIndicator
                              status={openedVersionStatus.status}
                            />
                          ) : isLatestVersion ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Collapse in={isOpen}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.versionsContainer}>
              {versions.map(version => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
