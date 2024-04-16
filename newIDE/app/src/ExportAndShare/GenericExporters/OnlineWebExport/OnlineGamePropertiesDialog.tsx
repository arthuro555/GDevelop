// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import * as React from 'react';
import { Game } from '../../../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../../UI/Dialog';
import {
  cleanUpGameSlug,
  PublicGameProperties,
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/PublicGameProperties' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/PublicGameProperties.tsx', but '--jsx' is not set.
} from '../../../GameDashboard/PublicGameProperties';
import {
  applyPublicPropertiesToProject,
  PartialGameChange,
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/PublicGamePropertiesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/PublicGamePropertiesDialog.tsx', but '--jsx' is not set.
} from '../../../GameDashboard/PublicGamePropertiesDialog';
import { getWebBuildThumbnailUrl } from '../../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButtonWithSplitMenu.tsx', but '--jsx' is not set.
import RaisedButtonWithSplitMenu from '../../../UI/RaisedButtonWithSplitMenu';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../../UI/LeftLoader';

type Props = {
  project: gdProject,
  onSaveProject: () => Promise<void>,
  buildId: string,
  game: Game,
  onClose: () => void,
  onApply: (arg1: PartialGameChange) => Promise<void>,
  isLoading: boolean,
  i18n: I18nType
};

export const OnlineGamePropertiesDialog = ({
  project,
  onSaveProject,
  buildId,
  game,
  onClose,
  onApply,
  isLoading,
  i18n,
}: Props) => {
  const { profile } = React.useContext(AuthenticatedUserContext);

  const [name, setName] = React.useState<string>(project.getName());
  const [categories, setCategories] = React.useState<string[]>(project.getCategories().toJSArray());
  const [description, setDescription] = React.useState<string>(project.getDescription());
  const [authorIds, setAuthorIds] = React.useState<string[]>(project.getAuthorIds().toJSArray());
  const [authorUsernames, setAuthorUsernames] = React.useState<string[]>(project.getAuthorUsernames().toJSArray());
  const [playWithKeyboard, setPlayableWithKeyboard] = React.useState<boolean>(project.isPlayableWithKeyboard());
  const [playWithGamepad, setPlayableWithGamepad] = React.useState<boolean>(project.isPlayableWithGamepad());
  const [playWithMobile, setPlayableWithMobile] = React.useState<boolean>(project.isPlayableWithMobile());
  const [userSlug, setUserSlug] = React.useState<string>((game.cachedCurrentSlug && game.cachedCurrentSlug.username) ||
    (profile && profile.username) ||
    '');
  const [gameSlug, setGameSlug] = React.useState<string>((game.cachedCurrentSlug && game.cachedCurrentSlug.gameSlug) ||
    cleanUpGameSlug(project.getName()));
  const [orientation, setOrientation] = React.useState<string>(project.getOrientation());
  const [discoverable, setDiscoverable] = React.useState<boolean>(!!game.discoverable);
  const thumbnailUrl = getWebBuildThumbnailUrl(project, buildId);

  const onPublish = async ({
    saveProject,
  }: {
    saveProject: boolean
  }) => {
    // First update the project with the new properties.
    if (
      applyPublicPropertiesToProject(project, i18n, {
        name,
        categories: categories || [],
        description: description || '',
        authorIds,
        authorUsernames,
        playWithKeyboard: !!playWithKeyboard,
        playWithGamepad: !!playWithGamepad,
        playWithMobile: !!playWithMobile,
        orientation: orientation || 'default',
      })
    ) {
      // If the project has been modified, then save it.
      if (saveProject) {
        await onSaveProject();
      }
      // Then, call the top function with the partial game updates.
      await onApply({ discoverable, userSlug, gameSlug });
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Verify your game info before publishing</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Back</Trans>}
          key="back"
          primary={false}
          onClick={onClose}
          disabled={isLoading}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeftLoader isLoading={isLoading} key="publish">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButtonWithSplitMenu
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Save project and publish</Trans>}
            primary
            onClick={() => {
              onPublish({ saveProject: true });
            }}
            disabled={isLoading}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
            buildMenuTemplate={i18n => [
              {
                label: i18n._(t`Publish without saving project`),
                click: () => onPublish({ saveProject: false }),
              },
            ]}
          />
        </LeftLoader>,
      ]}
      cannotBeDismissed={isLoading}
      onRequestClose={onClose}
      onApply={() => {
        onPublish({ saveProject: true });
      }}
      open
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PublicGameProperties
        name={name}
        setName={setName}
        categories={categories}
        setCategories={setCategories}
        description={description}
        setDescription={setDescription}
        project={project}
        authorIds={authorIds}
        setAuthorIds={setAuthorIds}
        setAuthorUsernames={setAuthorUsernames}
        setPlayableWithKeyboard={setPlayableWithKeyboard}
        playWithKeyboard={playWithKeyboard}
        setPlayableWithGamepad={setPlayableWithGamepad}
        playWithGamepad={playWithGamepad}
        setPlayableWithMobile={setPlayableWithMobile}
        playWithMobile={playWithMobile}
        setOrientation={setOrientation}
        orientation={orientation}
        userSlug={userSlug}
        setUserSlug={setUserSlug}
        gameSlug={gameSlug}
        setGameSlug={setGameSlug}
        discoverable={discoverable}
        setDiscoverable={setDiscoverable}
        displayThumbnail
        thumbnailUrl={thumbnailUrl}
        disabled={isLoading}
      />
    </Dialog>
  );
};

export default OnlineGamePropertiesDialog;
