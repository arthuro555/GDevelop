// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
import {
  getProjectPropertiesErrors,
  displayProjectErrorsBox,
  validatePackageName,
} from '../Utils/ProjectErrorsChecker';
// @ts-expect-error - TS6142 - Module '../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout, ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module './ExtensionsProperties' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectManager/ExtensionsProperties.tsx', but '--jsx' is not set.
import ExtensionsProperties from './ExtensionsProperties';
import { useSerializableObjectCancelableEditor } from '../Utils/SerializableObjectCancelableEditor';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import Window from '../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
// @ts-expect-error - TS6142 - Module './LoadingScreenEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectManager/LoadingScreenEditor.tsx', but '--jsx' is not set.
import { LoadingScreenEditor } from './LoadingScreenEditor';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
import { HotReloadPreviewButtonProps } from '../HotReload/HotReloadPreviewButton';
// @ts-expect-error - TS6142 - Module '../GameDashboard/PublicGameProperties' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/PublicGameProperties.tsx', but '--jsx' is not set.
import PublicGameProperties from '../GameDashboard/PublicGameProperties';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Preview'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Preview.js' implicitly has an 'any' type.
import PreviewIcon from '../UI/CustomSvgIcons/Preview';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';

type Props = {
  project: gdProject,
  open: boolean,
  initialTab: 'properties' | 'loading-screen',
  onClose: () => void,
  onApply: (
    options: {
      newName?: string
    },
  ) => Promise<boolean>,
  onPropertiesApplied: (
    options: {
      newName?: string
    },
  ) => void,
  hotReloadPreviewButtonProps?: HotReloadPreviewButtonProps | null | undefined,
  i18n: I18nType,
  // For resources:
  resourceManagementProps: ResourceManagementProps
};

type ProjectProperties = {
  gameResolutionWidth: number,
  gameResolutionHeight: number,
  adaptGameResolutionAtRuntime: boolean,
  name: string,
  description: string,
  author: string,
  authorIds: string[],
  authorUsernames: string[],
  version: string,
  packageName: string,
  orientation: string,
  scaleMode: string,
  pixelsRounding: boolean,
  sizeOnStartupMode: string,
  antialiasingMode: string,
  isAntialisingEnabledOnMobile: boolean,
  minFPS: number,
  maxFPS: number,
  isFolderProject: boolean,
  useDeprecatedZeroAsDefaultZOrder: boolean
};

const loadPropertiesFromProject = (project: gdProject): ProjectProperties => {
  return {
    gameResolutionWidth: project.getGameResolutionWidth(),
    gameResolutionHeight: project.getGameResolutionHeight(),
    adaptGameResolutionAtRuntime: project.getAdaptGameResolutionAtRuntime(),
    name: project.getName(),
    description: project.getDescription(),
    author: project.getAuthor(),
    authorIds: project.getAuthorIds().toJSArray(),
    authorUsernames: project.getAuthorUsernames().toJSArray(),
    version: project.getVersion(),
    packageName: project.getPackageName(),
    orientation: project.getOrientation(),
    scaleMode: project.getScaleMode(),
    pixelsRounding: project.getPixelsRounding(),
    sizeOnStartupMode: project.getSizeOnStartupMode(),
    antialiasingMode: project.getAntialiasingMode(),
    isAntialisingEnabledOnMobile: project.isAntialisingEnabledOnMobile(),
    minFPS: project.getMinimumFPS(),
    maxFPS: project.getMaximumFPS(),
    isFolderProject: project.isFolderProject(),
    useDeprecatedZeroAsDefaultZOrder: project.getUseDeprecatedZeroAsDefaultZOrder(),
  };
};

function applyPropertiesToProject(
  project: gdProject,
  i18n: I18nType,
  newProperties: ProjectProperties
) {
  const {
    gameResolutionWidth,
    gameResolutionHeight,
    adaptGameResolutionAtRuntime,
    name,
    description,
    authorIds,
    authorUsernames,
    author,
    version,
    packageName,
    orientation,
    scaleMode,
    pixelsRounding,
    sizeOnStartupMode,
    antialiasingMode,
    isAntialisingEnabledOnMobile,
    minFPS,
    maxFPS,
    isFolderProject,
    useDeprecatedZeroAsDefaultZOrder,
  } = newProperties;
  project.setGameResolutionSize(gameResolutionWidth, gameResolutionHeight);
  project.setAdaptGameResolutionAtRuntime(adaptGameResolutionAtRuntime);
  project.setName(name);
  project.setDescription(description);
  const projectAuthorIds = project.getAuthorIds();
  projectAuthorIds.clear();
  authorIds.forEach(authorId => projectAuthorIds.push_back(authorId));
  const projectAuthorUsernames = project.getAuthorUsernames();
  projectAuthorUsernames.clear();
  authorUsernames.forEach(authorUsername =>
    projectAuthorUsernames.push_back(authorUsername)
  );
  project.setAuthor(author);
  project.setVersion(version);
  project.setPackageName(packageName);
  project.setOrientation(orientation);
  project.setScaleMode(scaleMode);
  project.setPixelsRounding(pixelsRounding);
  project.setSizeOnStartupMode(sizeOnStartupMode);
  project.setAntialiasingMode(antialiasingMode);
  project.setAntialisingEnabledOnMobile(isAntialisingEnabledOnMobile);
  project.setMinimumFPS(minFPS);
  project.setMaximumFPS(maxFPS);
  project.setFolderProject(isFolderProject);
  project.setUseDeprecatedZeroAsDefaultZOrder(useDeprecatedZeroAsDefaultZOrder);

  return displayProjectErrorsBox(
    i18n,
    getProjectPropertiesErrors(i18n, project)
  );
}

const ProjectPropertiesDialog = (props: Props) => {
  const { project, hotReloadPreviewButtonProps } = props;

  const initialProperties = React.useMemo(
    () => loadPropertiesFromProject(project),
    [project]
  );
  let [name, setName] = React.useState(initialProperties.name);
  let [description, setDescription] = React.useState(
    initialProperties.description
  );
  let [authorIds, setAuthorIds] = React.useState(initialProperties.authorIds);
  let [authorUsernames, setAuthorUsernames] = React.useState(
    initialProperties.authorUsernames
  );
  let [gameResolutionWidth, setGameResolutionWidth] = React.useState(
    initialProperties.gameResolutionWidth
  );
  let [gameResolutionHeight, setGameResolutionHeight] = React.useState(
    initialProperties.gameResolutionHeight
  );
  let [
    adaptGameResolutionAtRuntime,
    setAdaptGameResolutionAtRuntime,
  ] = React.useState(initialProperties.adaptGameResolutionAtRuntime);
  let [author, setAuthor] = React.useState(initialProperties.author);
  let [version, setVersion] = React.useState(initialProperties.version);
  let [packageName, setPackageName] = React.useState(
    initialProperties.packageName
  );
  let [orientation, setOrientation] = React.useState(
    initialProperties.orientation
  );
  let [scaleMode, setScaleMode] = React.useState(initialProperties.scaleMode);
  let [pixelsRounding, setPixelsRounding] = React.useState(
    initialProperties.pixelsRounding
  );
  let [sizeOnStartupMode, setSizeOnStartupMode] = React.useState(
    initialProperties.sizeOnStartupMode
  );
  let [antialiasingMode, setAntialiasingMode] = React.useState(
    initialProperties.antialiasingMode
  );
  let [
    isAntialisingEnabledOnMobile,
    setAntialisingEnabledOnMobile,
  ] = React.useState(initialProperties.isAntialisingEnabledOnMobile);
  let [minFPS, setMinFPS] = React.useState(initialProperties.minFPS);
  let [maxFPS, setMaxFPS] = React.useState(initialProperties.maxFPS);
  let [isFolderProject, setIsFolderProject] = React.useState(
    initialProperties.isFolderProject
  );
  let [
    useDeprecatedZeroAsDefaultZOrder,
    setUseDeprecatedZeroAsDefaultZOrder,
  ] = React.useState(initialProperties.useDeprecatedZeroAsDefaultZOrder);

  const { isMobile } = useResponsiveWindowSize();

  const defaultPackageName = 'com.example.mygame';
  const defaultVersion = '1.0.0';

  const [currentTab, setCurrentTab] = React.useState<'properties' | 'loading-screen'>(props.initialTab);

  const {
    onCancelChanges: onCancelLoadingScreenChanges,
    notifyOfChange: notifyOfLoadingScreenChange,
  } = useSerializableObjectCancelableEditor({
    serializableObject: project.getLoadingScreen(),
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => Promise<undefined> | undefined'.
    onCancel: props.onClose,
  });
  const {
    onCancelChanges,
    notifyOfChange,
  } = useSerializableObjectCancelableEditor({
    serializableObject: project.getExtensionProperties(),
// @ts-expect-error - TS2322 - Type '() => Promise<void>' is not assignable to type '() => Promise<undefined> | undefined'.
    onCancel: onCancelLoadingScreenChanges,
  });

  const onApply = async () => {
    const specialPropertiesChanged =
      name !== initialProperties.name ? { newName: name } : {};

    const proceed = await props.onApply(specialPropertiesChanged);
    if (!proceed) return;

    const wasProjectPropertiesApplied = applyPropertiesToProject(
      project,
      props.i18n,
      {
        gameResolutionWidth,
        gameResolutionHeight,
        adaptGameResolutionAtRuntime,
        name,
        description,
        author,
        authorIds,
        authorUsernames,
        version,
        packageName,
        orientation,
        scaleMode,
        pixelsRounding,
        antialiasingMode,
        isAntialisingEnabledOnMobile,
        sizeOnStartupMode,
        minFPS,
        maxFPS,
        isFolderProject,
        useDeprecatedZeroAsDefaultZOrder,
      }
    );

    if (wasProjectPropertiesApplied) {
      props.onPropertiesApplied(specialPropertiesChanged);
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Dialog
            id="project-properties-dialog"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            title={<Trans>Game properties</Trans>}
            actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Cancel</Trans>}
                primary={false}
                onClick={onCancelChanges}
                key="cancel"
              />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <DialogPrimaryButton
                id="apply-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Apply</Trans>}
                primary={true}
                onClick={onApply}
                key="apply"
              />,
            ]}
            secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <HelpButton
                helpPagePath="/interface/project-manager/properties"
                key="help"
              />,
              hotReloadPreviewButtonProps ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  key="hot-reload-preview-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  leftIcon={<PreviewIcon />}
                  label={
                    isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Preview</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Run a preview (with loading & branding)</Trans>
                    )
                  }
                  onClick={
                    hotReloadPreviewButtonProps.launchProjectWithLoadingScreenPreview
                  }
                />
              ) : null,
            ]}
            onRequestClose={onCancelChanges}
            onApply={onApply}
            open={props.open}
            fullHeight
            fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Tabs
                value={currentTab}
                onChange={setCurrentTab}
                options={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  { label: <Trans>Properties</Trans>, value: 'properties' },
                  {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label: <Trans>Branding and Loading screen</Trans>,
                    value: 'loading-screen',
                  },
                ]}
              />
            }
          >
            {currentTab === 'properties' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Game Info</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <PublicGameProperties
                  name={name}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
                  setName={newName => {
                    if (newName.trim() === name) {
                      return;
                    }
                    setName(newName.trim());
                    notifyOfChange();
                  }}
                  description={description}
// @ts-expect-error - TS7006 - Parameter 'newDescription' implicitly has an 'any' type.
                  setDescription={newDescription => {
                    if (newDescription === description) {
                      return;
                    }
                    setDescription(newDescription.trim());
                    notifyOfChange();
                  }}
                  project={project}
                  authorIds={authorIds}
// @ts-expect-error - TS7006 - Parameter 'newAuthorIds' implicitly has an 'any' type.
                  setAuthorIds={newAuthorIds => {
                    setAuthorIds(newAuthorIds);
                    notifyOfChange();
                  }}
// @ts-expect-error - TS7006 - Parameter 'newAuthorUsernames' implicitly has an 'any' type.
                  setAuthorUsernames={newAuthorUsernames => {
                    setAuthorUsernames(newAuthorUsernames);
                    notifyOfChange();
                  }}
                  orientation={orientation}
// @ts-expect-error - TS7006 - Parameter 'newOrientation' implicitly has an 'any' type.
                  setOrientation={newOrientation => {
                    if (newOrientation === orientation) {
                      return;
                    }
                    setOrientation(newOrientation);
                    notifyOfChange();
                  }}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Packaging</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SemiControlledTextField
                  floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Package name (for iOS and Android)</Trans>
                  }
                  fullWidth
                  hintText={defaultPackageName}
                  type="text"
                  value={packageName}
// @ts-expect-error - TS7006 - Parameter 'newPackageName' implicitly has an 'any' type.
                  onChange={newPackageName => {
                    if (newPackageName === packageName) {
                      return;
                    }
                    setPackageName(newPackageName);
                    notifyOfChange();
                  }}
                  errorText={
                    validatePackageName(packageName) ? (
                      undefined
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        The package name is containing invalid characters or not
                        following the convention "xxx.yyy.zzz" (numbers allowed
                        after a letter only).
                      </Trans>
                    )
                  }
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>Version number (X.Y.Z)</Trans>}
                  fullWidth
                  hintText={defaultVersion}
                  type="text"
                  value={version}
// @ts-expect-error - TS7006 - Parameter 'newVersion' implicitly has an 'any' type.
                  onChange={newVersion => {
                    if (newVersion === version) {
                      return;
                    }
                    setVersion(newVersion);
                    notifyOfChange();
                  }}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>Publisher name</Trans>}
                  fullWidth
                  translatableHintText={t`Your name`}
                  helperMarkdownText={i18n._(
                    t`This will be used when packaging and submitting your application to the stores.`
                  )}
                  type="text"
                  value={author}
// @ts-expect-error - TS7006 - Parameter 'newAuthor' implicitly has an 'any' type.
                  onChange={newAuthor => {
                    if (newAuthor === author) {
                      return;
                    }
                    setAuthor(newAuthor);
                    notifyOfChange();
                  }}
                />
                {useDeprecatedZeroAsDefaultZOrder ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Z Order of objects created from events</Trans>
                    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
                        When you create an object using an action, GDevelop now
                        sets the Z order of the object to the maximum value that
                        was found when starting the scene for each layer. This
                        allow to make sure that objects that you create are in
                        front of others. This game was created before this
                        change, so GDevelop maintains the old behavior: newly
                        created objects Z order is set to 0. It's recommended
                        that you switch to the new behavior by clicking the
                        following button.
                      </Trans>
                    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RaisedButton
                      onClick={() => {
                        const answer = Window.showConfirmDialog(
                          i18n._(
                            t`Make sure to verify all your events creating objects, and optionally add an action to set the Z order back to 0 if it's important for your game. Do you want to continue (recommended)?`
                          )
                        );
                        if (!answer) return;

                        setUseDeprecatedZeroAsDefaultZOrder(false);
                        notifyOfChange();
                      }}
                      label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>
                          Switch to create objects with the highest Z order of
                          the layer
                        </Trans>
                      }
                    />
                  </React.Fragment>
                ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Resolution and rendering</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SemiControlledTextField
                    id="game-resolution-width"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>Game resolution width</Trans>}
                    fullWidth
                    type="number"
                    value={'' + gameResolutionWidth}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                    onChange={value => {
                      const newResolutionWidth = Math.max(
                        1,
                        parseInt(value, 10)
                      );
                      if (newResolutionWidth === gameResolutionWidth) {
                        return;
                      }
                      setGameResolutionWidth(newResolutionWidth);
                      notifyOfChange();
                    }}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SemiControlledTextField
                    id="game-resolution-height"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>Game resolution height</Trans>}
                    fullWidth
                    type="number"
                    value={'' + gameResolutionHeight}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                    onChange={value => {
                      const newResolutionHeight = Math.max(
                        1,
                        parseInt(value, 10)
                      );
                      if (newResolutionHeight === gameResolutionHeight) {
                        return;
                      }
                      setGameResolutionHeight(newResolutionHeight);
                      notifyOfChange();
                    }}
                  />
                </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  id="game-resolution-resize-mode"
                  fullWidth
                  floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Game resolution resize mode (fullscreen or window)
                    </Trans>
                  }
                  value={sizeOnStartupMode}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                  onChange={(e, i, newSizeOnStartupMode: string) => {
                    if (newSizeOnStartupMode === sizeOnStartupMode) {
                      return;
                    }
                    setSizeOnStartupMode(newSizeOnStartupMode);
                    notifyOfChange();
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value=""
                    label={t`No changes to the game size`}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value="adaptWidth"
                    label={t`Change width to fit the screen or window size`}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value="adaptHeight"
                    label={t`Change height to fit the screen or window size`}
                  />
                </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Update resolution during the game to fit the screen or
                      window size
                    </Trans>
                  }
                  disabled={sizeOnStartupMode === ''}
                  checked={adaptGameResolutionAtRuntime}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => {
                    setAdaptGameResolutionAtRuntime(checked);
                    notifyOfChange();
                  }}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>Minimum FPS</Trans>}
                    fullWidth
                    type="number"
                    value={'' + minFPS}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                    onChange={value => {
                      const newMinFPS = Math.max(0, parseInt(value, 10));
                      if (newMinFPS === minFPS) {
                        return;
                      }
                      setMinFPS(newMinFPS);
                      notifyOfChange();
                    }}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SemiControlledTextField
                    floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Maximum FPS (0 for unlimited)</Trans>
                    }
                    fullWidth
                    type="number"
                    value={'' + maxFPS}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                    onChange={value => {
                      const newMaxFPS = Math.max(0, parseInt(value, 10));
                      if (newMaxFPS === maxFPS) {
                        return;
                      }
                      setMaxFPS(newMaxFPS);
                      notifyOfChange();
                    }}
                  />
                </ResponsiveLineStackLayout>
                {maxFPS > 0 && maxFPS < 60 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <DismissableAlertMessage
                    identifier="maximum-fps-too-low"
                    kind="warning"
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Most monitors have a refresh rate of 60 FPS. Setting a
                      maximum number of FPS under 60 will force the game to skip
                      frames, and the real number of FPS will be way below 60,
                      making the game laggy and impacting the gameplay
                      negatively. Consider putting 60 or more for the maximum
                      number or FPS, or disable it by setting 0.
                    </Trans>
                  </DismissableAlertMessage>
                )}
                {minFPS < 20 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <DismissableAlertMessage
                    identifier="minimum-fps-too-low"
                    kind="warning"
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Setting the minimum number of FPS below 20 will increase a
                      lot the time that is allowed between the simulation of two
                      frames of the game. If case of a sudden slowdown, or on
                      slow computers, this can create buggy behaviors like
                      objects passing beyond a wall. Consider setting 20 as the
                      minimum FPS.
                    </Trans>
                  </DismissableAlertMessage>
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  fullWidth
                  floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Scale mode (also called "Sampling")</Trans>
                  }
                  value={scaleMode}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                  onChange={(e, i, newScaleMode: string) => {
                    if (newScaleMode === scaleMode) {
                      return;
                    }
                    setScaleMode(newScaleMode);
                    notifyOfChange();
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value="linear"
                    label={t`Linear (antialiased rendering, good for most games)`}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value="nearest"
                    label={t`Nearest (no antialiasing, good for pixel perfect games)`}
                  />
                </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Round pixels when rendering, useful for pixel perfect
                      games.
                    </Trans>
                  }
                  checked={pixelsRounding}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => {
                    setPixelsRounding(checked);
                    notifyOfChange();
                  }}
                />
                {scaleMode === 'nearest' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <DismissableAlertMessage
                    identifier="use-non-smoothed-textures"
                    kind="info"
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      To obtain the best pixel-perfect effect possible, go in
                      the resources editor and disable the Smoothing for all
                      images of your game. It will be done automatically for new
                      images added from now.
                    </Trans>
                  </DismissableAlertMessage>
                )}
                {pixelsRounding && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <DismissableAlertMessage
                    identifier="use-pixel-rounding"
                    kind="info"
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      To avoid flickering on objects followed by the camera, use
                      sprites with even dimensions.
                    </Trans>
                  </DismissableAlertMessage>
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>Antialising for 3D</Trans>}
                  value={
                    antialiasingMode === 'none'
                      ? 'never'
                      : isAntialisingEnabledOnMobile
                      ? 'always'
                      : 'notOnMobile'
                  }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                  onChange={(e, i, newScaleMode: string) => {
                    if (newScaleMode === scaleMode) {
                      return;
                    }
                    setAntialiasingMode(
                      newScaleMode === 'never' ? 'none' : 'MSAA'
                    );
                    setAntialisingEnabledOnMobile(newScaleMode === 'always');
                    notifyOfChange();
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption value="notOnMobile" label={t`Not on mobile`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption value="always" label={t`Always`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption value="never" label={t`Never`} />
                </SelectField>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Project files</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>Project file type</Trans>}
                  value={isFolderProject ? 'folder-project' : 'single-file'}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                  onChange={(e, i, value: string) => {
                    const newIsFolderProject = value === 'folder-project';
                    if (newIsFolderProject === isFolderProject) {
                      return;
                    }
                    setIsFolderProject(newIsFolderProject);
                    notifyOfChange();
                  }}
                  helperMarkdownText={i18n._(
                    t`Note that this option will only have an effect when saving your project on your computer's filesystem from the desktop app. Read about [using Git or GitHub with projects in multiple files](https://wiki.gdevelop.io/gdevelop5/tutorials/using-github-desktop/).`
                  )}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value={'single-file'}
                    label={t`Single file (default)`}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value={'folder-project'}
                    label={t`Multiple files, saved in folder next to the main file`}
                  />
                </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ExtensionsProperties project={project} />
              </ColumnStackLayout>
            )}
            {currentTab === 'loading-screen' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LoadingScreenEditor
                loadingScreen={project.getLoadingScreen()}
                watermark={project.getWatermark()}
                onLoadingScreenUpdated={notifyOfLoadingScreenChange}
                onChangeSubscription={onCancelChanges}
                project={project}
                resourceManagementProps={props.resourceManagementProps}
              />
            )}
          </Dialog>
        </React.Fragment>
      )}
    </I18n>
  );
};

const ProjectPropertiesDialogWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Project properties</Trans>}
    scope="project-properties"
    onClose={props.onClose}
    showOnTop
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ProjectPropertiesDialog {...props} />
  </ErrorBoundary>
);

export default ProjectPropertiesDialogWithErrorBoundary;
