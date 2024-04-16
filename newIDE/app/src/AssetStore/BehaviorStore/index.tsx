// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../../UI/SearchBar';
import { BehaviorShortHeader } from '../../Utils/GDevelopServices/Extension';
// @ts-expect-error - TS6142 - Module './BehaviorStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/BehaviorStoreContext.tsx', but '--jsx' is not set.
import { BehaviorStoreContext } from './BehaviorStoreContext';
// @ts-expect-error - TS6142 - Module '../../UI/Search/ListSearchResults' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/ListSearchResults.tsx', but '--jsx' is not set.
import { ListSearchResults } from '../../UI/Search/ListSearchResults';
// @ts-expect-error - TS6142 - Module './BehaviorListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/BehaviorListItem.tsx', but '--jsx' is not set.
import { BehaviorListItem } from './BehaviorListItem';
import { SearchMatch } from '../../UI/Search/UseSearchStructuredItem';
import { sendExtensionAddedToProject } from '../../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../../Hints/useDismissableTutorialMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Hints/useDismissableTutorialMessage.tsx', but '--jsx' is not set.
import useDismissableTutorialMessage from '../../Hints/useDismissableTutorialMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBarSelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBarSelectField.tsx', but '--jsx' is not set.
import SearchBarSelectField from '../../UI/SearchBarSelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module './BehaviorStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/BehaviorStoreContext.tsx', but '--jsx' is not set.
import { SearchableBehaviorMetadata } from './BehaviorStoreContext';
// @ts-expect-error - TS6142 - Module '../../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../../UI/Menu/ElementWithMenu';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../../UI/CustomSvgIcons/ThreeDotsMenu';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../ExtensionStore/ExtensionInstallDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionInstallDialog.tsx', but '--jsx' is not set.
import ExtensionInstallDialog from '../ExtensionStore/ExtensionInstallDialog';

export const useExtensionUpdateAlertDialog = () => {
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  return async (): Promise<boolean> => {
    return await showConfirmation({
      title: t`Extension update`,
      message: t`This behavior needs an extension update. You may have to do some adaptations to make sure your game still works.${'\n\n'}Do you want to update it now ?`,
      confirmButtonLabel: t`Update the extension`,
      dismissButtonLabel: t`Cancel`,
    });
  };
};

type Props = {
  isInstalling: boolean,
  project: gdProject,
  objectType: string,
  objectBehaviorsTypes: Array<string>,
  installedBehaviorMetadataList: Array<SearchableBehaviorMetadata>,
  deprecatedBehaviorMetadataList: Array<SearchableBehaviorMetadata>,
  onInstall: (behaviorShortHeader: BehaviorShortHeader) => Promise<boolean>,
  onChoose: (behaviorType: string) => void
};

const getBehaviorType = (
  behaviorShortHeader: BehaviorShortHeader | SearchableBehaviorMetadata
) => behaviorShortHeader.type;

export const BehaviorStore = ({
  isInstalling,
  project,
  objectType,
  objectBehaviorsTypes,
  installedBehaviorMetadataList,
  deprecatedBehaviorMetadataList,
  onInstall,
  onChoose,
}: Props) => {
  const preferences = React.useContext(PreferencesContext);
  const [
    selectedBehaviorShortHeader,
    setSelectedBehaviorShortHeader,
  ] = React.useState<BehaviorShortHeader | null | undefined>(null);
  const {
    filters,
    searchResults,
    error,
    fetchBehaviors,
    filtersState,
    searchText,
    setSearchText,
    allCategories,
    chosenCategory,
    setChosenCategory,
    setInstalledBehaviorMetadataList,
  } = React.useContext(BehaviorStoreContext);

  const [showDeprecated, setShowDeprecated] = React.useState(false);

  React.useEffect(
    () => {
      setInstalledBehaviorMetadataList(
        showDeprecated
          ? [
              ...installedBehaviorMetadataList,
              ...deprecatedBehaviorMetadataList,
            ]
          : installedBehaviorMetadataList
      );
    },
    [
      deprecatedBehaviorMetadataList,
      installedBehaviorMetadataList,
      setInstalledBehaviorMetadataList,
      showDeprecated,
    ]
  );

  React.useEffect(
    () => {
      fetchBehaviors();
    },
    [fetchBehaviors]
  );

  const filteredSearchResults = searchResults ? searchResults : null;

  const tagsHandler = React.useMemo(
    () => ({
      add: filtersState.addFilter,
      remove: filtersState.removeFilter,
      chosenTags: filtersState.chosenFilters,
    }),
    [filtersState]
  );

  const getExtensionsMatches = React.useCallback(
    (extensionShortHeader: BehaviorShortHeader | SearchableBehaviorMetadata): SearchMatch[] => {
      if (!searchResults) return [];
      const extensionMatches = searchResults.find(
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type.
        result => result.item.type === extensionShortHeader.type
      );
      return extensionMatches ? extensionMatches.matches : [];
    },
    [searchResults]
  );

  const { DismissableTutorialMessage } = useDismissableTutorialMessage(
    'intro-behaviors-and-functions'
  );

  const showExtensionUpdateConfirmation = useExtensionUpdateAlertDialog();

  const installAndChoose = React.useCallback(
    async (
      behaviorShortHeader: BehaviorShortHeader | SearchableBehaviorMetadata
    ) => {
      const isExtensionAlreadyInstalled =
        behaviorShortHeader.extensionName &&
        project.hasEventsFunctionsExtensionNamed(
          behaviorShortHeader.extensionName
        );
      if (isExtensionAlreadyInstalled) {
        const shouldUpdateExtension = await showExtensionUpdateConfirmation();
        if (!shouldUpdateExtension) {
          return;
        }
      }

      if (behaviorShortHeader.url) {
        sendExtensionAddedToProject(behaviorShortHeader.name);
        const wasInstalled = await onInstall(behaviorShortHeader);
        // An errorBox is already displayed by `installExtension`.
        if (wasInstalled) {
          onChoose(behaviorShortHeader.type);
        }
      } else {
        onChoose(behaviorShortHeader.type);
      }
    },
    [project, onChoose, showExtensionUpdateConfirmation, onInstall]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout expand noMargin useFullHeight>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SearchBarSelectField
              value={chosenCategory}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
              onChange={(e, i, value: string) => {
                setChosenCategory(value);
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectOption value="" label={t`All categories`} />
{ /* @ts-expect-error - TS7006 - Parameter 'category' implicitly has an 'any' type. */}
              {allCategories.map(category => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SelectOption
                  key={category}
                  value={category}
                  label={category}
                />
              ))}
            </SearchBarSelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SearchBar
                  id="extension-search-bar"
                  value={searchText}
                  onChange={setSearchText}
                  onRequestSearch={() => {}}
                  tagsHandler={tagsHandler}
                  tags={filters && filters.allTags}
                  placeholder={t`Search behaviors`}
                  autoFocus="desktop"
                />
              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ElementWithMenu
                key="menu"
                element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <IconButton size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ThreeDotsMenu />
                  </IconButton>
                }
                buildMenuTemplate={(i18n: I18nType) => [
                  {
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                    label: preferences.values.showCommunityExtensions
                      ? i18n._(
                          t`Hide community behaviors (not officially reviewed)`
                        )
                      : i18n._(
                          t`Show community behaviors (not officially reviewed)`
                        ),
                    click: () => {
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                      preferences.setShowCommunityExtensions(
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                        !preferences.values.showCommunityExtensions
                      );
                    },
                  },
                  {
                    label: showDeprecated
                      ? i18n._(
                          t`Hide deprecated behaviors (prefer not to use anymore)`
                        )
                      : i18n._(
                          t`Show deprecated behaviors (prefer not to use anymore)`
                        ),
                    click: () => {
                      setShowDeprecated(!showDeprecated);
                    },
                  },
                ]}
              />
            </Line>
          </ResponsiveLineStackLayout>
          {DismissableTutorialMessage}
        </ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ListSearchResults
          disableAutoTranslate // Search results text highlighting conflicts with dom handling by browser auto-translations features. Disables auto translation to prevent crashes.
          onRetry={fetchBehaviors}
          error={error}
          searchItems={
            filteredSearchResults &&
// @ts-expect-error - TS7031 - Binding element 'item' implicitly has an 'any' type.
            filteredSearchResults.map(({ item }) => item)
          }
          getSearchItemUniqueId={getBehaviorType}
// @ts-expect-error - TS7006 - Parameter 'behaviorShortHeader' implicitly has an 'any' type. | TS7006 - Parameter 'onHeightComputed' implicitly has an 'any' type.
          renderSearchItem={(behaviorShortHeader, onHeightComputed) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <BehaviorListItem
              id={
                'behavior-item-' + behaviorShortHeader.type.replace(/:/g, '-')
              }
              key={behaviorShortHeader.type}
              objectType={objectType}
              objectBehaviorsTypes={objectBehaviorsTypes}
              onHeightComputed={onHeightComputed}
              behaviorShortHeader={behaviorShortHeader}
              matches={getExtensionsMatches(behaviorShortHeader)}
              onChoose={() => {
                installAndChoose(behaviorShortHeader);
              }}
              onShowDetails={() => {
                if (behaviorShortHeader.headerUrl) {
                  setSelectedBehaviorShortHeader(behaviorShortHeader);
                }
              }}
              platform={project.getCurrentPlatform()}
            />
          )}
        />
      </ColumnStackLayout>
      {!!selectedBehaviorShortHeader && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExtensionInstallDialog
          project={project}
          isInstalling={isInstalling}
          extensionShortHeader={selectedBehaviorShortHeader}
          onClose={() => setSelectedBehaviorShortHeader(null)}
        />
      )}
    </React.Fragment>
  );
};
