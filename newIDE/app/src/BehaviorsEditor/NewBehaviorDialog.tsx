// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
import { showMessageBox } from '../UI/Messages/MessageBox';
import { getDeprecatedBehaviorsInformation } from '../Hints';
import { enumerateBehaviorsMetadata } from './EnumerateBehaviorsMetadata';
// @ts-expect-error - TS6142 - Module '../AssetStore/BehaviorStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/index.tsx', but '--jsx' is not set.
import { BehaviorStore } from '../AssetStore/BehaviorStore';
// @ts-expect-error - TS6142 - Module '../AssetStore/BehaviorStore/BehaviorStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/BehaviorStoreContext.tsx', but '--jsx' is not set.
import { SearchableBehaviorMetadata } from '../AssetStore/BehaviorStore/BehaviorStoreContext';
import { BehaviorShortHeader } from '../Utils/GDevelopServices/Extension';
import EventsFunctionsExtensionsContext from '../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
import { installExtension } from '../AssetStore/ExtensionStore/InstallExtension';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import {
  addCreateBadgePreHookIfNotClaimed,
  TRIVIAL_FIRST_BEHAVIOR,
  TRIVIAL_FIRST_EXTENSION,
} from '../Utils/GDevelopServices/Badge';
import { mapVector } from '../Utils/MapFor';

const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  eventsFunctionsExtension?: gdEventsFunctionsExtension,
  objectType: string,
  objectBehaviorsTypes: Array<string>,
  open: boolean,
  onClose: () => void,
  onChoose: (type: string, defaultName: string) => void
};

export default function NewBehaviorDialog({
  project,
  eventsFunctionsExtension,
  open,
  onClose,
  onChoose,
  objectType,
  objectBehaviorsTypes,
}: Props) {
  const [isInstalling, setIsInstalling] = React.useState(false);
  const eventsFunctionsExtensionsState = React.useContext(
    EventsFunctionsExtensionsContext
  );
  const authenticatedUser = React.useContext(AuthenticatedUserContext);

  const installDisplayedExtension = addCreateBadgePreHookIfNotClaimed(
    authenticatedUser,
    TRIVIAL_FIRST_EXTENSION,
    installExtension
  );

  const deprecatedBehaviorsInformation = React.useMemo(
    () => getDeprecatedBehaviorsInformation(),
    []
  );

  const getAllRequiredBehaviorTypes = React.useCallback(
    (
      behaviorMetadata: gdBehaviorMetadata,
      allRequiredBehaviorTypes: Array<string> = [],
    ): Array<string> => {
      mapVector(
        behaviorMetadata.getRequiredBehaviorTypes(),
// @ts-expect-error - TS7006 - Parameter 'requiredBehaviorType' implicitly has an 'any' type.
        requiredBehaviorType => {
          if (allRequiredBehaviorTypes.includes(requiredBehaviorType)) {
            return;
          }
          allRequiredBehaviorTypes.push(requiredBehaviorType);
          const requiredBehaviorMetadata = gd.MetadataProvider.getBehaviorMetadata(
            project.getCurrentPlatform(),
            requiredBehaviorType
          );
          getAllRequiredBehaviorTypes(
            requiredBehaviorMetadata,
            allRequiredBehaviorTypes
          );
        }
      );
      return allRequiredBehaviorTypes;
    },
    [project]
  );

  const allInstalledBehaviorMetadataList: Array<SearchableBehaviorMetadata> = React.useMemo(
    () => {
      const platform = project.getCurrentPlatform();
      const behaviorMetadataList =
        project && platform
          ? enumerateBehaviorsMetadata(
              platform,
              project,
              eventsFunctionsExtension
            )
          : [];
      return behaviorMetadataList
        .filter(behavior => !behavior.behaviorMetadata.isHidden())
        .map(behavior => ({
          type: behavior.type,
          fullName: behavior.fullName,
          description: behavior.description,
          previewIconUrl: behavior.previewIconUrl,
          objectType: behavior.objectType,
          category: behavior.category,
          allRequiredBehaviorTypes: getAllRequiredBehaviorTypes(
            behavior.behaviorMetadata
          ),
          tags: behavior.tags,
        }));
    },
    [project, eventsFunctionsExtension, getAllRequiredBehaviorTypes]
  );

  const installedBehaviorMetadataList: Array<SearchableBehaviorMetadata> = React.useMemo(
    () =>
      allInstalledBehaviorMetadataList.filter(
        behavior => !deprecatedBehaviorsInformation[behavior.type]
      ),
    [allInstalledBehaviorMetadataList, deprecatedBehaviorsInformation]
  );

  const deprecatedBehaviorMetadataList: Array<SearchableBehaviorMetadata> = React.useMemo(
    () => {
      const deprecatedBehaviors = allInstalledBehaviorMetadataList.filter(
        behavior => deprecatedBehaviorsInformation[behavior.type]
      );
      deprecatedBehaviors.forEach(behavior => (behavior.isDeprecated = true));
      return deprecatedBehaviors;
    },
    [allInstalledBehaviorMetadataList, deprecatedBehaviorsInformation]
  );

  if (!open || !project) return null;

  const _chooseBehavior = (i18n: I18nType, behaviorType: string) => {
    if (deprecatedBehaviorsInformation[behaviorType]) {
      showMessageBox(
        i18n._(deprecatedBehaviorsInformation[behaviorType].warning)
      );
    }

    const behaviorMetadata = gd.MetadataProvider.getBehaviorMetadata(
      project.getCurrentPlatform(),
      behaviorType
    );

    return onChoose(behaviorType, behaviorMetadata.getDefaultName());
  };
  const chooseBehavior = addCreateBadgePreHookIfNotClaimed(
    authenticatedUser,
    TRIVIAL_FIRST_BEHAVIOR,
    _chooseBehavior
  );

  const onInstallExtension = async (
    i18n: I18nType,
    behaviorShortHeader: BehaviorShortHeader
  ) => {
    setIsInstalling(true);
    try {
      const wasExtensionInstalled = await installDisplayedExtension(
        i18n,
        project,
        eventsFunctionsExtensionsState,
        behaviorShortHeader
      );
      return wasExtensionInstalled;
    } finally {
      setIsInstalling(false);
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Add a new behavior to the object</Trans>}
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Close</Trans>}
              primary={false}
              onClick={onClose}
            />,
          ]}
          secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <HelpButton helpPagePath="/behaviors" key="help" />,
          ]}
          open
          onRequestClose={onClose}
          flexBody
          fullHeight
          id="new-behavior-dialog"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <BehaviorStore
            project={project}
            objectType={objectType}
            objectBehaviorsTypes={objectBehaviorsTypes}
            isInstalling={isInstalling}
// @ts-expect-error - TS7006 - Parameter 'shortHeader' implicitly has an 'any' type.
            onInstall={async shortHeader =>
              onInstallExtension(i18n, shortHeader)
            }
// @ts-expect-error - TS7006 - Parameter 'behaviorType' implicitly has an 'any' type.
            onChoose={behaviorType => chooseBehavior(i18n, behaviorType)}
            installedBehaviorMetadataList={installedBehaviorMetadataList}
            deprecatedBehaviorMetadataList={deprecatedBehaviorMetadataList}
          />
        </Dialog>
      )}
    </I18n>
  );
}
