import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
import {
  ChooseResourceOptions,
  ResourceSource,
} from './ResourceSource';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../UI/Toggle';
import { StorageProvider, FileMetadata } from '../ProjectsStorage';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';

type Props = {
  project: gdProject,
  fileMetadata: FileMetadata | null | undefined,
  getStorageProvider: () => StorageProvider,
  i18n: I18nType,
  options: ChooseResourceOptions,
  resourceSources: Array<ResourceSource>,
  onClose: () => void,
  onChooseResources: (resources: Array<gdResource>) => void
};

export const NewResourceDialog = ({
  project,
  fileMetadata,
  getStorageProvider,
  options,
  i18n,
  resourceSources,
  onClose,
  onChooseResources,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const storageProvider = React.useMemo(() => getStorageProvider(), [
    getStorageProvider,
  ]);
  const preferences = React.useContext(PreferencesContext);
  const possibleResourceSources = resourceSources
    .filter(({ kind }) => kind === options.resourceKind)
    .filter(
      ({ onlyForStorageProvider }) =>
        !onlyForStorageProvider ||
        onlyForStorageProvider === storageProvider.internalName
    );
  const standaloneTabResourceSources = possibleResourceSources.filter(
    ({ displayTab }) => displayTab === 'standalone'
  );
  const importTabResourceSources = possibleResourceSources.filter(
    ({ displayTab }) => displayTab === 'import'
  );
  const importTabAdvancedResourceSources = possibleResourceSources.filter(
    ({ displayTab }) => displayTab === 'import-advanced'
  );
  const initialSource = possibleResourceSources.find(
    ({ name }) => name === options.initialSourceName
  );
  const isInitialSourceHeadless =
    initialSource && initialSource.selectResourcesHeadless;

  const [currentTab, setCurrentTab] = React.useState(() => {
    if (!initialSource) return 'import';

    if (initialSource.displayTab === 'import') return 'import';
    if (initialSource.displayTab === 'standalone') {
      return 'standalone-' + initialSource.name;
    }

    return 'import';
  });
  const [hasChangedTabs, setHasChangedTabs] = React.useState(false);
  const [isShowingAdvanced, setIsShowingAdvanced] = React.useState(false);

  React.useEffect(
    () => {
      return () => setHasChangedTabs(true);
    },
    [currentTab]
  );

  React.useEffect(
    () => {
      if (!initialSource) return;
      const { selectResourcesHeadless } = initialSource;
      if (!selectResourcesHeadless) return;

      (async () => {
        try {
          const resources = await selectResourcesHeadless({
            i18n,
            options,
            project,
            fileMetadata,
            getStorageProvider,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
            getLastUsedPath: preferences.getLastUsedPath,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
            setLastUsedPath: preferences.setLastUsedPath,
            resourcesImporationBehavior:
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
              preferences.values.resourcesImporationBehavior,
          });
// @ts-expect-error - TS2345 - Argument of type 'gdResource[] | null | undefined' is not assignable to parameter of type 'gdResource[]'.
          onChooseResources(resources);
        } catch (error: any) {
          console.error('Unexpected error from a resource source:', error);
          onChooseResources([]);
        }
      })();
    },
    // eslint-disable-next-line
    []
  );

  if (isInitialSourceHeadless) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>New resource</Trans>}
      open
      fullHeight
      flexColumnBody
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          primary
          onClick={onClose}
        />,
      ]}
      secondaryActions={[
        importTabAdvancedResourceSources.length > 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column key="show-advanced-toggle">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
              onToggle={(e, check) => setIsShowingAdvanced(check)}
              toggled={isShowingAdvanced}
              labelPosition="right"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Show advanced import options</Trans>}
            />
          </Column>
        ) : null,
      ]}
      onRequestClose={onClose}
      fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tabs
          value={currentTab}
          onChange={setCurrentTab}
          options={[
            ...standaloneTabResourceSources.map(({ name, displayName }) => ({
              label: i18n._(displayName),
              value: 'standalone-' + name,
            })),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            { label: <Trans>Choose a file</Trans>, value: 'import' },
          ]}
          // Enforce scroll on very small screens, because the tabs have long names.
          variant={isMobile ? 'scrollable' : undefined}
        />
      }
    >
      {standaloneTabResourceSources.map(source => {
        if (currentTab !== 'standalone-' + source.name) return null;

        return source.renderComponent({
          i18n,
          options,
          project,
          fileMetadata,
          getStorageProvider,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
          getLastUsedPath: preferences.getLastUsedPath,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
          setLastUsedPath: preferences.setLastUsedPath,
          onChooseResources,
          resourcesImporationBehavior:
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
            preferences.values.resourcesImporationBehavior,
        });
      })}
      {currentTab === 'import' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout expand noMargin>
            {importTabResourceSources.map(source => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <React.Fragment key={source.name}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="block-title">{i18n._(source.displayName)}</Text>
                {source.renderComponent({
                  i18n,
                  options,
                  project,
                  fileMetadata,
                  getStorageProvider,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                  getLastUsedPath: preferences.getLastUsedPath,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                  setLastUsedPath: preferences.setLastUsedPath,
                  onChooseResources,
                  resourcesImporationBehavior:
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                    preferences.values.resourcesImporationBehavior,

                  // Ask the component to try to automatically open the dialog to import file(s),
                  // but only if tabs were not changed, meaning the user navigated out of it already.
                  // In other words, only do this at the dialog opening.
                  automaticallyOpenIfPossible:
                    initialSource === source && !hasChangedTabs,
                })}
              </React.Fragment>
            ))}
            {isShowingAdvanced &&
              importTabAdvancedResourceSources.map(source => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <React.Fragment key={source.name}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title">{i18n._(source.displayName)}</Text>
                  {source.renderComponent({
                    i18n,
                    options,
                    project,
                    fileMetadata,
                    getStorageProvider,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                    getLastUsedPath: preferences.getLastUsedPath,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                    setLastUsedPath: preferences.setLastUsedPath,
                    onChooseResources,
                    resourcesImporationBehavior:
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                      preferences.values.resourcesImporationBehavior,
                  })}
                </React.Fragment>
              ))}
          </ColumnStackLayout>
        </Line>
      ) : null}
    </Dialog>
  );
};
