import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer, { SectionRow } from '../SectionContainer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List } from '../../../../UI/List';
import { useResponsiveWindowSize } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
import {
  FileMetadataAndStorageProviderName,
  FileMetadata,
} from '../../../../ProjectsStorage';
import { StorageProvider } from '../../../../ProjectsStorage';
import { CloudProjectWithUserAccessInfo } from '../../../../Utils/GDevelopServices/Project';
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { User } from '../../../../Utils/GDevelopServices/User';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Refresh'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Refresh.js' implicitly has an 'any' type.
import Refresh from '../../../../UI/CustomSvgIcons/Refresh';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
import Skeleton from '@material-ui/lab/Skeleton';
import ListItem from '@material-ui/core/ListItem';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
import {
  getProjectLineHeight,
  transformCloudProjectsIntoFileMetadataWithStorageProviderName,
// @ts-expect-error - TS6142 - Module '../BuildSection/utils' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/utils.tsx', but '--jsx' is not set.
} from '../BuildSection/utils';
// @ts-expect-error - TS6142 - Module '../BuildSection/ProjectFileListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/ProjectFileListItem.tsx', but '--jsx' is not set.
import ProjectFileListItem from '../BuildSection/ProjectFileListItem';
import ContextMenu, {
  ContextMenuInterface,
// @ts-expect-error - TS6142 - Module '../../../../UI/Menu/ContextMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ContextMenu.tsx', but '--jsx' is not set.
} from '../../../../UI/Menu/ContextMenu';
import type { ClientCoordinates } from '../../../../Utils/UseLongTouch';
import { MenuItemTemplate } from '../../../../UI/Menu/Menu.flow';

const styles = {
  listItem: {
    padding: 0,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 8,
    overflowWrap: 'anywhere', // Ensure everything is wrapped on small devices.
  },
  skeleton: { borderRadius: 6 },
} as const;

type Props = {
  user: User,
  currentFileMetadata: FileMetadata | null | undefined,
  onClickBack: () => void,
  onOpenRecentFile: (file: FileMetadataAndStorageProviderName) => Promise<void>,
  storageProviders: Array<StorageProvider>,
  projects: Array<CloudProjectWithUserAccessInfo> | null | undefined,
  onRefreshProjects: (user: User) => Promise<void>,
  isLoadingProjects: boolean
};

const TeamMemberProjectsView = ({
  user,
  currentFileMetadata,
  onClickBack,
  onOpenRecentFile,
  storageProviders,
  projects,
  onRefreshProjects,
  isLoadingProjects,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const skeletonLineHeight = getProjectLineHeight({ isMobile });
  const contextMenu = React.useRef<ContextMenuInterface | null | undefined>(null);

  const fileMetadataAndStorageProviderNames = projects
    ? transformCloudProjectsIntoFileMetadataWithStorageProviderName(
        projects,
        user.id
      )
    : null;

  const buildContextMenu = (i18n: I18nType, file?: FileMetadataAndStorageProviderName | null): Array<MenuItemTemplate> => {
    if (!file) return [];
// @ts-expect-error - TS2322 - Type '() => Promise<void>' is not assignable to type '() => (() => Promise<void>) | null | undefined'.
    return [{ label: i18n._(t`Open`), click: () => onOpenRecentFile(file) }];
  };

  const openContextMenu = React.useCallback(
    (event: ClientCoordinates, file: FileMetadataAndStorageProviderName) => {
      if (contextMenu.current) {
        contextMenu.current.open(event.clientX, event.clientY, { file });
      }
    },
    []
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>{user.username || user.email}'s projects</Trans>}
      titleAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          primary
          disabled={isLoadingProjects}
          label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            isMobile ? <Trans>Refresh</Trans> : <Trans>Refresh dashboard</Trans>
          }
          onClick={() => onRefreshProjects(user)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftIcon={<Refresh fontSize="small" />}
        />
      }
      backAction={onClickBack}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
        {!isMobile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text color="secondary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>File name</Trans>
              </Text>
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text color="secondary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Location</Trans>
              </Text>
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text color="secondary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Last edited</Trans>
              </Text>
            </Column>
          </Line>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
            {!fileMetadataAndStorageProviderNames ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <List>
                {new Array(5).fill(0).map((_, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <ListItem style={styles.listItem} key={`skeleton-${index}`}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Skeleton
                          variant="rect"
                          height={skeletonLineHeight}
                          width={'100%'}
                          style={styles.skeleton}
                        />
                      </Column>
                    </Line>
                  </ListItem>
                ))}
              </List>
            ) : fileMetadataAndStorageProviderNames.length === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>This user does not have projects yet.</Trans>
                </EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Only cloud projects can be displayed here. If the user has
                    created local projects, they need to be saved as cloud
                    projects to be visible.
                  </Trans>
                </AlertMessage>
              </>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <List>
{ /* @ts-expect-error - TS7006 - Parameter 'file' implicitly has an 'any' type. */}
                {fileMetadataAndStorageProviderNames.map(file => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <ProjectFileListItem
                    file={file}
                    currentFileMetadata={currentFileMetadata}
                    key={file.fileMetadata.fileIdentifier}
                    isLoading={false}
                    onOpenContextMenu={openContextMenu}
                    onOpenRecentFile={onOpenRecentFile}
                    storageProviders={storageProviders}
                    isWindowSizeMediumOrLarger={!isMobile}
                  />
                ))}
              </List>
            )}
          </Column>
        </Line>
      </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ContextMenu
        ref={contextMenu}
// @ts-expect-error - TS7006 - Parameter '_i18n' implicitly has an 'any' type. | TS7031 - Binding element 'file' implicitly has an 'any' type.
        buildMenuTemplate={(_i18n, { file }) => buildContextMenu(_i18n, file)}
      />
    </SectionContainer>
  );
};

export default TeamMemberProjectsView;
