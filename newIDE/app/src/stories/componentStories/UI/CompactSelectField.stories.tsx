import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../ThemeDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/ThemeDecorator.tsx', but '--jsx' is not set.
import muiDecorator from '../../ThemeDecorator';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/CompactSelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CompactSelectField/index.tsx', but '--jsx' is not set.
import CompactSelectField from '../../../UI/CompactSelectField';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Layers'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Layers.js' implicitly has an 'any' type.
import Layers from '../../../UI/CustomSvgIcons/Layers';
// @ts-expect-error - TS6142 - Module '../../ElementHighlighterProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/ElementHighlighterProvider.tsx', but '--jsx' is not set.
import ElementHighlighterProvider from '../../ElementHighlighterProvider';

export default {
  title: 'UI Building Blocks/CompactSelectField',
  component: CompactSelectField,
  decorators: [paperDecorator, muiDecorator],
};

const options = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <option>First option</option>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <option>Segundo</option>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <option>Troisième option</option>,
];

export const Default = () => {
  const [value, setValue] = React.useState<string>('');
  const [value1, setValue1] = React.useState<string>('');
  const [value2, setValue2] = React.useState<string>('');
  const [value3, setValue3] = React.useState<string>('');
  const [value4, setValue4] = React.useState<string>('');
  const [value5, setValue5] = React.useState<string>('');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ElementHighlighterProvider
      elements={[
        { label: 'With icon', id: 'with-icon' },
        { label: 'Without icon', id: 'without-icon' },
      ]}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactSelectField value={value} onChange={setValue} id="without-icon">
          {options}
        </CompactSelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactSelectField value={value1} onChange={setValue1} errored>
          {options}
        </CompactSelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactSelectField value={value2} onChange={setValue2}>
          {[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <option style={{ display: 'none' }}>Select an option</option>,
            ...options,
          ]}
        </CompactSelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactSelectField
          disabled
          value={'disabled field'}
          onChange={() => {}}
        >
          {options}
        </CompactSelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactSelectField
          value={value3}
          onChange={setValue3}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Layers className={className} />}
          leftIconTooltip={'Layer'}
          id="with-icon"
        >
          {options}
        </CompactSelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactSelectField
          value={value4}
          onChange={setValue4}
          errored
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Layers className={className} />}
          leftIconTooltip={'Layer'}
        >
          {options}
        </CompactSelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactSelectField
          value={value5}
          onChange={setValue5}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Layers className={className} />}
          leftIconTooltip={'Layer'}
        >
          {[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <option style={{ display: 'none' }}>Select an option</option>,
            ...options,
          ]}
        </CompactSelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactSelectField
          disabled
          value={'disabled field'}
          onChange={() => {}}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Layers className={className} />}
          leftIconTooltip={'Layer'}
        >
          {options}
        </CompactSelectField>
      </ColumnStackLayout>
    </ElementHighlighterProvider>
  );
};
