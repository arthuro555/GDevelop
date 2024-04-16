import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../../UI/SearchBar';
// @ts-expect-error - TS6142 - Module '../../UI/Search/FiltersChooser' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/FiltersChooser.tsx', but '--jsx' is not set.
import { useFilters } from '../../UI/Search/FiltersChooser';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';

export default {
  title: 'UI Building Blocks/SearchBar',
  component: SearchBar,
  decorators: [paperDecorator],
};

const Vanilla = () => {
  const [value, setValue] = React.useState<string>('');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Value in state is: "{value}".</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={action('request search')}
      />
    </>
  );
};

const WithPlaceholder = () => {
  const [value, setValue] = React.useState<string>('');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Value in state is: "{value}".</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={action('request search')}
        placeholder="Search with placeholder"
      />
    </>
  );
};

const Disabled = () => {
  const [value, setValue] = React.useState<string>('something typed in disabled field');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Value in state is: "{value}".</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={action('request search')}
        disabled
      />
    </>
  );
};

const Integrated = () => {
  const [value, setValue] = React.useState<string>('');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Value in state is: "{value}".</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={action('request search')}
        aspect="integrated-search-bar"
        placeholder="Search integrated"
      />
    </>
  );
};

const WithHelpIcon = () => {
  const [value, setValue] = React.useState<string>('');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Value in state is: "{value}".</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={action('request search')}
        helpPagePath="https://gdevelop.io"
        placeholder="Search with help icon"
      />
    </>
  );
};

const WithMenu = () => {
  const [value, setValue] = React.useState<string>('');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Value in state is: "{value}".</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={action('request search')}
        placeholder="Search with menu"
        buildMenuTemplate={() => [
          {
            type: 'checkbox',
            label: 'Tag 1',
            checked: false,
            click: action('Clicked Tag 1'),
          },
          {
            type: 'checkbox',
            label: 'Tag 2 (checked)',
            checked: true,
            click: action('Clicked Tag 2 (checked)'),
          },
          {
            type: 'checkbox',
            label: 'Tag 3',
            checked: false,
            click: action('Clicked Tag 3'),
          },
        ]}
      />
    </>
  );
};

const WithTags = () => {
  const [value, setValue] = React.useState<string>('');
  const filtersState = useFilters();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Value in state is: "{value}".</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={action('request search')}
        placeholder="Search with tags"
        tagsHandler={{
          add: filtersState.addFilter,
          remove: filtersState.removeFilter,
          chosenTags: filtersState.chosenFilters,
        }}
        tags={['Platformer', 'RPG', 'Beat them all', 'Top down']}
      />
    </>
  );
};

const WithTagsAndHelp = () => {
  const [value, setValue] = React.useState<string>('');
  const filtersState = useFilters();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Value in state is: "{value}".</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={action('request search')}
        placeholder="Search with tags and help"
        tagsHandler={{
          add: filtersState.addFilter,
          remove: filtersState.removeFilter,
          chosenTags: filtersState.chosenFilters,
        }}
        tags={['Platformer', 'RPG', 'Beat them all', 'Top down']}
        helpPagePath="https://gdevelop.io"
      />
    </>
  );
};

export const AllOptions = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Vanilla />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <WithPlaceholder />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Disabled />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Integrated />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <WithHelpIcon />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <WithMenu />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <WithTags />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <WithTagsAndHelp />
  </ColumnStackLayout>
);
