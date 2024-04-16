import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';

import SemiControlledAutoComplete, {
  DataSource,
  SemiControlledAutoCompleteInterface,
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
} from '../UI/SemiControlledAutoComplete';
import {
  ResourceSource,
  ResourceManagementProps,
  ResourceKind,
} from '../ResourcesList/ResourceSource';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';
import { ResourceExternalEditor } from '../ResourcesList/ResourceExternalEditor';
import ResourcesLoader from '../ResourcesLoader';
import { applyResourceDefaults } from './ResourceUtils';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module '../UI/FlatButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButtonWithSplitMenu.tsx', but '--jsx' is not set.
import FlatButtonWithSplitMenu from '../UI/FlatButtonWithSplitMenu';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
import { showErrorBox } from '../UI/Messages/MessageBox';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/ExternalEditorOpenedDialog'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ExternalEditorOpenedDialog.js' implicitly has an 'any' type.
import { ExternalEditorOpenedDialog } from '../UI/ExternalEditorOpenedDialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import Edit from '../UI/CustomSvgIcons/Edit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from '../UI/CustomSvgIcons/Cross';
import useResourcesChangedWatcher from './UseResourcesChangedWatcher';
import useForceUpdate from '../Utils/UseForceUpdate';
import useAlertDialog from '../UI/Alert/useAlertDialog';

const styles = {
  textFieldStyle: { display: 'flex', flex: 1 },
} as const;

type Props = {
  project: gdProject,
  resourceManagementProps: ResourceManagementProps,
  resourcesLoader: typeof ResourcesLoader,
  resourceKind: ResourceKind,
  fallbackResourceKind?: ResourceKind | null | undefined,
  fullWidth?: boolean,
  canBeReset?: boolean,
  initialResourceName: string,
  defaultNewResourceName?: string,
  onChange: (arg1: string) => void,
  floatingLabelText?: React.ReactNode,
  helperMarkdownText?: string | null | undefined,
  hintText?: MessageDescriptor,
  onRequestClose?: () => void,
  onApply?: () => void,
  margin?: 'none' | 'dense',
  style?: {
    alignSelf?: 'center'
  },
  id?: string
};

export type ResourceSelectorInterface = {
  focus: FieldFocusFunction
};

const ResourceSelector = React.forwardRef<Props, ResourceSelectorInterface>((props, ref) => {
  const {
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'ResourceSelectorInterface'.
    project,
// @ts-expect-error - TS2339 - Property 'initialResourceName' does not exist on type 'ResourceSelectorInterface'.
    initialResourceName,
// @ts-expect-error - TS2339 - Property 'defaultNewResourceName' does not exist on type 'ResourceSelectorInterface'.
    defaultNewResourceName,
// @ts-expect-error - TS2339 - Property 'resourceManagementProps' does not exist on type 'ResourceSelectorInterface'.
    resourceManagementProps,
// @ts-expect-error - TS2339 - Property 'resourcesLoader' does not exist on type 'ResourceSelectorInterface'.
    resourcesLoader,
// @ts-expect-error - TS2339 - Property 'resourceKind' does not exist on type 'ResourceSelectorInterface'.
    resourceKind,
// @ts-expect-error - TS2339 - Property 'fallbackResourceKind' does not exist on type 'ResourceSelectorInterface'.
    fallbackResourceKind,
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'ResourceSelectorInterface'.
    onChange,
  } = props;
  const forceUpdate = useForceUpdate();
  const autoCompleteRef = React.useRef<SemiControlledAutoCompleteInterface | null | undefined>(null);
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  const abortControllerRef = React.useRef<AbortController | null | undefined>(null);
  const allResourcesNamesRef = React.useRef<Array<string>>([]);
  const [notFoundError, setNotFoundError] = React.useState<boolean>(false);
// @ts-expect-error - TS2339 - Property 'initialResourceName' does not exist on type 'ResourceSelectorInterface'.
  const [resourceName, setResourceName] = React.useState<string>(props.initialResourceName);
  const [
    externalEditorOpened,
    setExternalEditorOpened,
  ] = React.useState<boolean>(false);

  const focus: FieldFocusFunction = React.useCallback(options => {
    if (autoCompleteRef.current) autoCompleteRef.current.focus(options);
  }, []);

// @ts-expect-error - TS2740 - Type '{ focus: FieldFocusFunction; }' is missing the following properties from type 'Props': project, resourceManagementProps, resourcesLoader, resourceKind, and 2 more.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  React.useEffect(
    () => {
      setResourceName(initialResourceName);
    },
    // Update resource name with the one given by the parent if it changes.
    [initialResourceName]
  );

  const onResetResourceName = React.useCallback(
    () => {
      setResourceName('');
      setNotFoundError(false);
      if (onChange) onChange('');
    },
    [onChange]
  );

  const onChangeResourceName = React.useCallback(
    (newResourceName: string) => {
      if (newResourceName === '') {
        onResetResourceName();
        return;
      }
      const isMissing =
        allResourcesNamesRef.current.indexOf(newResourceName) === -1;

      if (!isMissing) {
        if (onChange) onChange(newResourceName);
      }
      setResourceName(newResourceName);
      setNotFoundError(isMissing);
    },
    [onChange, onResetResourceName]
  );

  const loadFrom = React.useCallback(
    (resourcesManager: gdResourcesManager) => {
      const allResourcesNames = resourcesManager
        .getAllResourceNames()
        .toJSArray();
      if (resourceKind) {
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
        const mainResourcesNames = allResourcesNames.filter(resourceName => {
          return (
            resourcesManager.getResource(resourceName).getKind() ===
            resourceKind
          );
        });

        if (fallbackResourceKind) {
          mainResourcesNames.push(
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
            ...allResourcesNames.filter(resourceName => {
              return (
                resourcesManager.getResource(resourceName).getKind() ===
                fallbackResourceKind
              );
            })
          );
        }

        allResourcesNamesRef.current = mainResourcesNames;
      }
    },
    [resourceKind, fallbackResourceKind]
  );

  const refreshResources = React.useCallback(
    () => {
      if (project) {
        loadFrom(project.getResourcesManager());
        forceUpdate();
      }
    },
    [project, forceUpdate, loadFrom]
  );

  React.useEffect(
    refreshResources,
    // Reload resources when loadFrom - and refreshResources - is updated, that's to say
    // when resourceKind or fallbackResourceKind is updated, or when the project changes.
    [refreshResources]
  );

  // Transfer responsibility of refreshing project resources to this hook.
  const { triggerResourcesHaveChanged } = useResourcesChangedWatcher({
    project,
    callback: refreshResources,
  });

  const addFrom = React.useCallback(
    async (source: ResourceSource) => {
      try {
        if (!source) return;

        const resources = await resourceManagementProps.onChooseResource({
          initialSourceName: source.name,
          multiSelection: false,
          resourceKind: resourceKind,
        });

        if (!resources.length) return;
        const resource = resources[0];
        applyResourceDefaults(project, resource);

        // addResource will check if a resource with the same name exists, and if it is
        // the case, no new resource will be added.
        project.getResourcesManager().addResource(resource);

        const resourceName: string = resource.getName();

        // Imperatively set the value of the autoComplete, as it can be (on Windows for example),
        // still focused. This means that when it's then getting blurred, the value we
        // set for the resource name would get erased by the one that was getting entered.
        if (autoCompleteRef.current)
          autoCompleteRef.current.forceInputValueTo(resourceName);

        // Important, we are responsible for deleting the resources that were given to us.
        // Otherwise we have a memory leak, as calling addResource is making a copy of the resource.
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type.
        resources.forEach(resource => resource.delete());

        await resourceManagementProps.onFetchNewlyAddedResources();
        triggerResourcesHaveChanged();
        onChangeResourceName(resourceName);
      } catch (err: any) {
        // Should never happen, errors should be shown in the interface.
        console.error('Unable to choose a resource', err);
      }
    },
    [
      project,
      resourceManagementProps,
      resourceKind,
      onChangeResourceName,
      triggerResourcesHaveChanged,
    ]
  );

  const getResourceSourceItems = React.useCallback(
    (): DataSource => {
      const sources = resourceManagementProps.resourceSources || [];
      const storageProvider = resourceManagementProps.getStorageProvider();

      return [
        ...sources
// @ts-expect-error - TS7006 - Parameter 'source' implicitly has an 'any' type.
          .filter(source => source.kind === resourceKind)
          .filter(
// @ts-expect-error - TS7031 - Binding element 'onlyForStorageProvider' implicitly has an 'any' type.
            ({ onlyForStorageProvider }) =>
              !onlyForStorageProvider ||
              onlyForStorageProvider === storageProvider.internalName
          )
// @ts-expect-error - TS7006 - Parameter 'source' implicitly has an 'any' type.
          .map(source => ({
            text: '',
            value: '',
            translatableValue: source.displayName,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            renderIcon: () => <Add />,
            onClick: () => addFrom(source),
          })),
        {
          type: 'separator',
        },
      ];
    },
    [addFrom, resourceManagementProps, resourceKind]
  );

  const editWith = React.useCallback(
    async (
      i18n: I18nType,
      resourceExternalEditor: ResourceExternalEditor
    ) => {
      abortControllerRef.current = new AbortController();
      const { signal } = abortControllerRef.current;
      const resourcesManager = project.getResourcesManager();
      const initialResource = resourcesManager.getResource(resourceName);

      try {
        setExternalEditorOpened(true);
        const editResult = await resourceExternalEditor.edit({
          project,
          i18n,
          getStorageProvider: resourceManagementProps.getStorageProvider,
          resourceManagementProps,
          resourceNames: [resourceName],
          extraOptions: {
            existingMetadata: initialResource.getMetadata(),

            // Only useful for images:
            singleFrame: true,
            fps: 0,
            name: resourceName || defaultNewResourceName,
            isLooping: false,
          },
          signal,
        });

        setExternalEditorOpened(false);
        if (!editResult) return;

        const { resources } = editResult;
        if (!resources.length) return;

        // Burst the ResourcesLoader cache to force the file to be reloaded (and not cached by the browser).
        resourcesLoader.burstUrlsCacheForResources(project, [
          resources[0].name,
        ]);

        onChange(resources[0].name);
        triggerResourcesHaveChanged();
        forceUpdate();
      } catch (error: any) {
        if (error.name !== 'UserCancellationError') {
          console.error(
            'An exception was thrown when launching or reading resources from the external editor:',
            error
          );
          showErrorBox({
            message:
              'There was an error while using the external editor. Try with another resource and if this persists, please report this as a bug.',
            rawError: error,
            errorId: 'external-editor-error',
          });
        }
        setExternalEditorOpened(false);
      } finally {
        abortControllerRef.current = null;
      }
    },
    [
      defaultNewResourceName,
      forceUpdate,
      onChange,
      project,
      resourceManagementProps,
      resourceName,
      resourcesLoader,
      triggerResourcesHaveChanged,
    ]
  );

  const cancelEditingWithExternalEditor = React.useCallback(
    async () => {
      const shouldContinue = await showConfirmation({
        title: t`Cancel editing`,
        message: t`You will lose any progress made with the external editor. Do you wish to cancel?`,
        confirmButtonLabel: t`Cancel edition`,
        dismissButtonLabel: t`Continue editing`,
      });
      if (!shouldContinue) return;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      } else {
        console.error(
          'Cannot cancel editing with external editor, abort controller is missing.'
        );
      }
    },
    [showConfirmation]
  );

  const errorText = notFoundError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>This resource does not exist in the game</Trans>
  ) : null;

  const externalEditors = resourceManagementProps.resourceExternalEditors.filter(
// @ts-expect-error - TS7006 - Parameter 'externalEditor' implicitly has an 'any' type.
    externalEditor => externalEditor.kind === resourceKind
  );

  const resourceSourceItems = getResourceSourceItems();
  const resourceItems = allResourcesNamesRef.current.map(resourceName => ({
    text: resourceName,
    value: resourceName,
  }));
  const autoCompleteData = [...resourceSourceItems, ...resourceItems];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ResponsiveLineStackLayout noMargin expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout expand noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledAutoComplete
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'ResourceSelectorInterface'.
                style={props.style}
                textFieldStyle={styles.textFieldStyle}
// @ts-expect-error - TS2339 - Property 'floatingLabelText' does not exist on type 'ResourceSelectorInterface'.
                floatingLabelText={props.floatingLabelText}
// @ts-expect-error - TS2339 - Property 'helperMarkdownText' does not exist on type 'ResourceSelectorInterface'.
                helperMarkdownText={props.helperMarkdownText}
// @ts-expect-error - TS2339 - Property 'hintText' does not exist on type 'ResourceSelectorInterface'.
                hintText={props.hintText}
                openOnFocus
                dataSource={autoCompleteData}
                value={resourceName}
                onChange={onChangeResourceName}
                errorText={errorText}
// @ts-expect-error - TS2339 - Property 'fullWidth' does not exist on type 'ResourceSelectorInterface'.
                fullWidth={props.fullWidth}
// @ts-expect-error - TS2339 - Property 'margin' does not exist on type 'ResourceSelectorInterface'.
                margin={props.margin}
// @ts-expect-error - TS2339 - Property 'onRequestClose' does not exist on type 'ResourceSelectorInterface'.
                onRequestClose={props.onRequestClose}
// @ts-expect-error - TS2339 - Property 'onApply' does not exist on type 'ResourceSelectorInterface'.
                onApply={props.onApply}
                ref={autoCompleteRef}
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'ResourceSelectorInterface'.
                id={props.id}
              />
{ /* @ts-expect-error - TS2339 - Property 'canBeReset' does not exist on type 'ResourceSelectorInterface'. */}
              {props.canBeReset && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <IconButton size="small" onClick={onResetResourceName}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Cross />
                </IconButton>
              )}
            </LineStackLayout>
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
            label={
              resourceName ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Replace</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Choose a file</Trans>
              )
            }
            onClick={() => {
              autoCompleteRef.current && autoCompleteRef.current.focus();
            }}
            primary
          />
          {externalEditors.length === 1 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              leftIcon={<Edit fontSize="small" />}
              label={i18n._(
                resourceName
                  ? externalEditors[0].editDisplayName
                  : externalEditors[0].createDisplayName
              )}
              onClick={() => editWith(i18n, externalEditors[0])}
            />
          )}
          {externalEditors.length > 1 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButtonWithSplitMenu
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Edit fontSize="small" />}
              label={i18n._(
                resourceName
                  ? externalEditors[0].editDisplayName
                  : externalEditors[0].createDisplayName
              )}
              onClick={() => editWith(i18n, externalEditors[0])}
              buildMenuTemplate={(i18n: I18nType) =>
// @ts-expect-error - TS7006 - Parameter 'externalEditor' implicitly has an 'any' type.
                externalEditors.map(externalEditor => ({
                  label: i18n._(
                    resourceName
                      ? externalEditor.editDisplayName
                      : externalEditor.createDisplayName
                  ),
                  click: () => editWith(i18n, externalEditor),
                }))
              }
            />
          ) : null}
          {externalEditorOpened && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ExternalEditorOpenedDialog
              onClose={cancelEditingWithExternalEditor}
            />
          )}
        </ResponsiveLineStackLayout>
      )}
    </I18n>
  );
});

export default ResourceSelector;
