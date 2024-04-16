import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import ListItem from '@material-ui/core/ListItem';

// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column, Spacer } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../../../UI/Layout';
import {
  FileMetadataAndStorageProviderName,
  StorageProvider,
} from '../../../../ProjectsStorage';
import AuthenticatedUserContext, {
  AuthenticatedUser,
} from '../../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../../../UI/CircularProgress';
import { getRelativeOrAbsoluteDisplayDate } from '../../../../Utils/DateDisplay';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// @ts-expect-error - TS6142 - Module '../../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../../../../UI/CustomSvgIcons/ThreeDotsMenu';
import {
  useLongTouch,
  ClientCoordinates,
} from '../../../../Utils/UseLongTouch';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { getGravatarUrl } from '../../../../UI/GravatarUrl';
// @ts-expect-error - TS6142 - Module './utils' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/utils.tsx', but '--jsx' is not set.
import { LastModifiedInfo } from './utils';
// @ts-expect-error - TS6142 - Module '../../../../UI/DotBadge' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DotBadge.tsx', but '--jsx' is not set.
import DotBadge from '../../../../UI/DotBadge';
import { FileMetadata } from '../../../../ProjectsStorage';
// @ts-expect-error - TS6142 - Module './StatusIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/StatusIndicator.tsx', but '--jsx' is not set.
import StatusIndicator from './StatusIndicator';

const styles = {
  listItem: {
    padding: 0,
    borderRadius: 8,
    overflowWrap: 'anywhere', // Ensure everything is wrapped on small devices.
  },
  projectSkeleton: { borderRadius: 6 },
  noProjectsContainer: { padding: 10 },
  avatar: {
    width: 20,
    height: 20,
  },
  mobileIconContainer: {
    marginTop: 4, // To align with project title.
  },
} as const;

type AvatarWithStatusAndTooltipProps = {
  avatarUrl: string | null | undefined,
  status: 'success' | 'error',
  tooltipMessage: string | null | undefined,
  hideStatus?: boolean
};

const AvatarWithStatusAndTooltip = ({
  avatarUrl,
  status,
  tooltipMessage,
  hideStatus,
}: AvatarWithStatusAndTooltipProps) =>
  !!avatarUrl ? (
    tooltipMessage ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DotBadge overlap="circle" color={status} invisible={hideStatus}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Tooltip title={tooltipMessage}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Avatar src={avatarUrl} style={styles.avatar} />
        </Tooltip>
      </DotBadge>
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DotBadge overlap="circle" color={status} invisible={hideStatus}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Avatar src={avatarUrl} style={styles.avatar} />
      </DotBadge>
    )
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <StatusIndicator status="success" />
  );

type ListItemLastModificationProps = {
  file: FileMetadataAndStorageProviderName,
  lastModifiedInfo?: LastModifiedInfo | null // If null, the project has been modified last by the current user.,
  storageProvider: StorageProvider | null | undefined,
  authenticatedUser: AuthenticatedUser,
  currentFileMetadata: FileMetadata | null | undefined,
  textColor?: 'primary' | 'secondary'
};

const ListItemLastModification = ({
  file,
  lastModifiedInfo,
  storageProvider,
  authenticatedUser,
  currentFileMetadata,
  textColor = 'primary',
}: ListItemLastModificationProps) => {
  const isProjectSavedOnCloud =
    !!storageProvider && storageProvider.internalName === 'Cloud';
  const isCurrentProjectOpened =
    !!currentFileMetadata &&
    currentFileMetadata.fileIdentifier === file.fileMetadata.fileIdentifier;
  const lastModifiedAt = !!lastModifiedInfo
    ? lastModifiedInfo.lastModifiedAt
    : !!file.fileMetadata.lastModifiedDate
    ? file.fileMetadata.lastModifiedDate
    : null;
  if (!lastModifiedAt) return null;

  // Current user info
  const currentUserEmail =
    authenticatedUser.profile && authenticatedUser.profile.email;
  const currentUserUsername =
    authenticatedUser.profile && authenticatedUser.profile.username;
  const currentUserAvatarUrl =
    isProjectSavedOnCloud && currentUserEmail
      ? getGravatarUrl(currentUserEmail, {
          size: 40,
        })
      : null;

  // Last editor info
  const lastEditorUsername = !!lastModifiedInfo
    ? lastModifiedInfo.lastModifiedByUsername
    : currentUserUsername;
  const lastEditorAvatarUrl = !!lastModifiedInfo
    ? lastModifiedInfo.lastModifiedByIconUrl
    : currentUserAvatarUrl;

  const isProjectOpenedNotTheLatestVersion =
    !!isCurrentProjectOpened &&
    !!currentFileMetadata &&
    !!lastModifiedInfo &&
    currentFileMetadata.version !== lastModifiedInfo.lastKnownVersionId;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LineStackLayout noMargin alignItems="center">
          {isCurrentProjectOpened && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AvatarWithStatusAndTooltip
              avatarUrl={currentUserAvatarUrl}
              tooltipMessage={currentUserUsername}
              status="success"
            />
          )}
          {isProjectSavedOnCloud &&
            (!isCurrentProjectOpened || isProjectOpenedNotTheLatestVersion) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AvatarWithStatusAndTooltip
                avatarUrl={lastEditorAvatarUrl}
                tooltipMessage={lastEditorUsername}
                status="error"
                hideStatus={!isProjectOpenedNotTheLatestVersion}
              />
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin color={textColor}>
            {isCurrentProjectOpened ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Modifying</Trans>
            ) : (
              getRelativeOrAbsoluteDisplayDate({
                i18n,
                dateAsNumber: lastModifiedAt,
                sameDayFormat: 'todayAndHour',
                dayBeforeFormat: 'yesterdayAndHour',
                relativeLimit: 'currentWeek',
                sameWeekFormat: 'thisWeek',
              })
            )}
          </Text>
        </LineStackLayout>
      )}
    </I18n>
  );
};

const PrettyBreakablePath = ({
  path,
}: {
  path: string
}) => {
  const separatorIndices = Array.from(path)
    .map((char, index) => (['/', '\\'].includes(char) ? index : null))
    .filter(Boolean);
  if (separatorIndices.length === 0) return path;

  return separatorIndices.reduce<Array<any>>((acc, separatorIndex, listIndex) => {
    const nextSeparatorIndex = separatorIndices[listIndex + 1];
    return [
      ...acc,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <wbr key={separatorIndex} />,
      path.substring(separatorIndex, nextSeparatorIndex || path.length),
    ];
  }, []);
};

const getStorageProviderByInternalName = (storageProviders: Array<StorageProvider>, internalName: string): StorageProvider | null | undefined => {
  return storageProviders.find(
    storageProvider => storageProvider.internalName === internalName
  );
};

type ProjectFileListItemProps = {
  file: FileMetadataAndStorageProviderName,
  currentFileMetadata: FileMetadata | null | undefined,
  lastModifiedInfo?: LastModifiedInfo | null,
  storageProviders: Array<StorageProvider>,
  onOpenRecentFile: (file: FileMetadataAndStorageProviderName) => Promise<void>,
  isWindowSizeMediumOrLarger: boolean,
  isLoading: boolean,
  onOpenContextMenu: (event: ClientCoordinates, file: FileMetadataAndStorageProviderName) => void
};

export const ProjectFileListItem = ({
  file,
  currentFileMetadata,

  // If null, the project has been modified last by the current user.
  lastModifiedInfo,

  storageProviders,
  onOpenRecentFile,
  isWindowSizeMediumOrLarger,
  isLoading,
  onOpenContextMenu,
}: ProjectFileListItemProps) => {
  const authenticatedUser = React.useContext(AuthenticatedUserContext);

  const storageProvider = getStorageProviderByInternalName(
    storageProviders,
    file.storageProviderName
  );

  const longTouchForContextMenuProps = useLongTouch(
    React.useCallback(
      event => {
        onOpenContextMenu(event, file);
      },
      [onOpenContextMenu, file]
    )
  );
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2769 - No overload matches this call. */}
          <ListItem
            button
            key={file.fileMetadata.fileIdentifier}
            onClick={() => {
              onOpenRecentFile(file);
            }}
            style={styles.listItem}
            onContextMenu={event => onOpenContextMenu(event, file)}
            {...longTouchForContextMenuProps}
          >
            {isWindowSizeMediumOrLarger ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LineStackLayout justifyContent="flex-start" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin alignItems="center">
                    {storageProvider && storageProvider.renderIcon && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <>
                        {storageProvider.renderIcon({
                          size: 'small',
                        })}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Spacer />
                      </>
                    )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text noMargin>
                      {file.fileMetadata.name || (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2786 - 'PrettyBreakablePath' cannot be used as a JSX component.
                        <PrettyBreakablePath
                          path={file.fileMetadata.fileIdentifier}
                        />
                      )}
                    </Text>

                    {isLoading && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <CircularProgress size={16} />
                      </>
                    )}
                  </Line>
                </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>
                    {storageProvider ? i18n._(storageProvider.name) : ''}
                  </Text>
                </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ListItemLastModification
                    file={file}
                    lastModifiedInfo={lastModifiedInfo}
                    storageProvider={storageProvider}
                    authenticatedUser={authenticatedUser}
                    currentFileMetadata={currentFileMetadata}
                  />
                </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <IconButton
                    size="small"
                    edge="end"
                    aria-label="menu"
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                    onClick={event => {
                      // prevent triggering the click on the list item.
                      event.stopPropagation();
                      onOpenContextMenu(event, file);
                    }}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ThreeDotsMenu />
                  </IconButton>
                </ListItemSecondaryAction>
              </LineStackLayout>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout alignItems="start">
                  {storageProvider && storageProvider.renderIcon && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <div style={styles.mobileIconContainer}>
                        {storageProvider.renderIcon({
                          size: 'small',
                        })}
                      </div>
                    </Column>
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text noMargin>
                      {file.fileMetadata.name || (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2786 - 'PrettyBreakablePath' cannot be used as a JSX component.
                        <PrettyBreakablePath
                          path={file.fileMetadata.fileIdentifier}
                        />
                      )}
                    </Text>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ListItemLastModification
                      file={file}
                      lastModifiedInfo={lastModifiedInfo}
                      storageProvider={storageProvider}
                      authenticatedUser={authenticatedUser}
                      currentFileMetadata={currentFileMetadata}
                      textColor="secondary"
                    />
                  </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  {isLoading && <CircularProgress size={24} />}
                </LineStackLayout>
              </Column>
            )}
          </ListItem>
        </>
      )}
    </I18n>
  );
};

export default ProjectFileListItem;
