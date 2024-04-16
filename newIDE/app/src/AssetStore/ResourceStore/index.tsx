import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../../UI/SearchBar';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../UI/ScrollView';
import { Resource } from '../../Utils/GDevelopServices/Asset';
// @ts-expect-error - TS6142 - Module '../../UI/Search/FiltersChooser' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/FiltersChooser.tsx', but '--jsx' is not set.
import { FiltersChooser } from '../../UI/Search/FiltersChooser';
// @ts-expect-error - TS6142 - Module './ResourceStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ResourceStore/ResourceStoreContext.tsx', but '--jsx' is not set.
import { ResourceStoreContext } from './ResourceStoreContext';
// @ts-expect-error - TS6142 - Module '../../UI/Search/BoxSearchResults' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/BoxSearchResults.tsx', but '--jsx' is not set.
import { BoxSearchResults } from '../../UI/Search/BoxSearchResults';
// @ts-expect-error - TS6142 - Module './ResourceCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ResourceStore/ResourceCard.tsx', but '--jsx' is not set.
import { ResourceCard } from './ResourceCard';
// @ts-expect-error - TS6142 - Module '../../UI/Subheader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Subheader.tsx', but '--jsx' is not set.
import Subheader from '../../UI/Subheader';
// @ts-expect-error - TS6142 - Module '../../UI/Search/CategoryChooser' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/CategoryChooser.tsx', but '--jsx' is not set.
import { CategoryChooser } from '../../UI/Search/CategoryChooser';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';

const styles = {
  paper: { width: 250 },
} as const;

type Props = {
  onChoose: (arg1: Resource) => void,
  resourceKind: string
};

export const ResourceStore = ({
  onChoose,
  resourceKind,
}: Props) => {
  const {
    filters,
    searchResults,
    error,
    fetchResourcesAndFilters,
    filtersState,
    searchText,
    setSearchText,
  } = React.useContext(ResourceStoreContext);

  React.useEffect(
    () => {
      fetchResourcesAndFilters();
    },
    [fetchResourcesAndFilters]
  );

  const searchResultsForResourceKind = searchResults
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type.
    ? searchResults.filter(resource => resource.type === resourceKind)
    : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column expand noMargin useFullHeight>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SearchBar
            value={searchText}
            onChange={setSearchText}
            onRequestSearch={() => {}}
            placeholder={t`Search resources`}
          />
        </Column>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line
        expand
        overflow={
          'hidden' /* Somehow required on Chrome/Firefox to avoid children growing (but not on Safari) */
        }
        noMargin
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Paper style={styles.paper} background="medium">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Categories</Trans>
              </Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CategoryChooser
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                allItemsLabel={<Trans>All assets</Trans>}
                allFilters={filters}
                filtersState={filtersState}
                error={error}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Filters</Trans>
              </Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FiltersChooser
                allFilters={filters}
                filtersState={filtersState}
                error={error}
              />
            </Paper>
          </ScrollView>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <BoxSearchResults
          baseSize={128}
          spacing={8}
          onRetry={fetchResourcesAndFilters}
          error={error}
          searchItems={searchResultsForResourceKind}
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type. | TS7006 - Parameter 'size' implicitly has an 'any' type.
          renderSearchItem={(resource, size) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ResourceCard
              size={size}
              resource={resource}
              onChoose={() => onChoose(resource)}
            />
          )}
        />
      </Line>
    </Column>
  );
};
