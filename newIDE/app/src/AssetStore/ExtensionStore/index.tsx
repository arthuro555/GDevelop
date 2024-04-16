// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../../UI/SearchBar';
import { ExtensionShortHeader } from '../../Utils/GDevelopServices/Extension';
// @ts-expect-error - TS6142 - Module './ExtensionStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionStoreContext.tsx', but '--jsx' is not set.
import { ExtensionStoreContext } from './ExtensionStoreContext';
// @ts-expect-error - TS6142 - Module '../../UI/Search/ListSearchResults' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/ListSearchResults.tsx', but '--jsx' is not set.
import { ListSearchResults } from '../../UI/Search/ListSearchResults';
// @ts-expect-error - TS6142 - Module './ExtensionListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionListItem.tsx', but '--jsx' is not set.
import { ExtensionListItem } from './ExtensionListItem';
// @ts-expect-error - TS6142 - Module './ExtensionInstallDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionInstallDialog.tsx', but '--jsx' is not set.
import ExtensionInstallDialog from './ExtensionInstallDialog';
import { SearchMatch } from '../../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS6142 - Module '../../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../../UI/Toggle';
import {
  sendExtensionDetailsOpened,
  sendExtensionAddedToProject,
} from '../../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../../Hints/useDismissableTutorialMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Hints/useDismissableTutorialMessage.tsx', but '--jsx' is not set.
import useDismissableTutorialMessage from '../../Hints/useDismissableTutorialMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBarSelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBarSelectField.tsx', but '--jsx' is not set.
import SearchBarSelectField from '../../UI/SearchBarSelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';

type Props = {
  isInstalling: boolean,
  project: gdProject,
  onInstall: (arg1: ExtensionShortHeader) => Promise<boolean>,
  showOnlyWithBehaviors: boolean
};

const getExtensionName = (extensionShortHeader: ExtensionShortHeader) =>
  extensionShortHeader.name;

export const ExtensionStore = ({
  isInstalling,
  project,
  onInstall,
  showOnlyWithBehaviors,
}: Props) => {
  const preferences = React.useContext(PreferencesContext);
  const [
    selectedExtensionShortHeader,
    setSelectedExtensionShortHeader,
  ] = React.useState<ExtensionShortHeader | null | undefined>(null);
  const {
    filters,
    searchResults,
    error,
    fetchExtensionsAndFilters,
    filtersState,
    searchText,
    setSearchText,
    allCategories,
    chosenCategory,
    setChosenCategory,
  } = React.useContext(ExtensionStoreContext);

  React.useEffect(
    () => {
      fetchExtensionsAndFilters();
    },
    [fetchExtensionsAndFilters]
  );

  const filteredSearchResults = searchResults
    ? searchResults.filter(
// @ts-expect-error - TS7031 - Binding element 'extensionShortHeader' implicitly has an 'any' type.
        ({ item: extensionShortHeader }) =>
          !showOnlyWithBehaviors ||
          extensionShortHeader.eventsBasedBehaviorsCount > 0
      )
    : null;

  const tagsHandler = React.useMemo(
    () => ({
      add: filtersState.addFilter,
      remove: filtersState.removeFilter,
      chosenTags: filtersState.chosenFilters,
    }),
    [filtersState]
  );

  const getExtensionsMatches = (extensionShortHeader: ExtensionShortHeader): SearchMatch[] => {
    if (!searchResults) return [];
    const extensionMatches = searchResults.find(
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type.
      result => result.item.name === extensionShortHeader.name
    );
    return extensionMatches ? extensionMatches.matches : [];
  };

  const { DismissableTutorialMessage } = useDismissableTutorialMessage(
    'intro-behaviors-and-functions'
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
            <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SearchBar
                id="extension-search-bar"
                value={searchText}
                onChange={setSearchText}
                onRequestSearch={() => {}}
                tagsHandler={tagsHandler}
                tags={filters && filters.allTags}
                placeholder={t`Search extensions`}
                autoFocus="desktop"
              />
            </Column>
          </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
              onToggle={(e, check) =>
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
                preferences.setShowCommunityExtensions(check)
              }
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
              toggled={preferences.values.showCommunityExtensions}
              labelPosition="right"
              label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Show community extensions (not officially reviewed)
                </Trans>
              }
            />
          </Column>
          {DismissableTutorialMessage}
        </ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ListSearchResults
          disableAutoTranslate // Search results text highlighting conflicts with dom handling by browser auto-translations features. Disables auto translation to prevent crashes.
          onRetry={fetchExtensionsAndFilters}
          error={error}
          searchItems={
            filteredSearchResults &&
// @ts-expect-error - TS7031 - Binding element 'item' implicitly has an 'any' type.
            filteredSearchResults.map(({ item }) => item)
          }
          getSearchItemUniqueId={getExtensionName}
// @ts-expect-error - TS7006 - Parameter 'extensionShortHeader' implicitly has an 'any' type. | TS7006 - Parameter 'onHeightComputed' implicitly has an 'any' type.
          renderSearchItem={(extensionShortHeader, onHeightComputed) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ExtensionListItem
              id={`extension-list-item-${extensionShortHeader.name}`}
              key={extensionShortHeader.name}
              project={project}
              onHeightComputed={onHeightComputed}
              extensionShortHeader={extensionShortHeader}
              matches={getExtensionsMatches(extensionShortHeader)}
              onChoose={() => {
                sendExtensionDetailsOpened(extensionShortHeader.name);
                setSelectedExtensionShortHeader(extensionShortHeader);
              }}
            />
          )}
        />
      </ColumnStackLayout>
      {!!selectedExtensionShortHeader && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExtensionInstallDialog
          project={project}
          isInstalling={isInstalling}
          extensionShortHeader={selectedExtensionShortHeader}
          onInstall={async () => {
            sendExtensionAddedToProject(selectedExtensionShortHeader.name);
            const wasInstalled = await onInstall(selectedExtensionShortHeader);
            // An errorBox is already displayed by `installExtension`.
            if (wasInstalled) setSelectedExtensionShortHeader(null);
          }}
          onClose={() => setSelectedExtensionShortHeader(null)}
        />
      )}
    </React.Fragment>
  );
};
