import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../ThemeDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/ThemeDecorator.tsx', but '--jsx' is not set.
import muiDecorator from '../../ThemeDecorator';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/CompactSemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CompactSemiControlledTextField/index.tsx', but '--jsx' is not set.
import CompactSemiControlledTextField from '../../../UI/CompactSemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Angle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Angle.js' implicitly has an 'any' type.
import Angle from '../../../UI/CustomSvgIcons/Angle';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../ElementHighlighterProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/ElementHighlighterProvider.tsx', but '--jsx' is not set.
import ElementHighlighterProvider from '../../ElementHighlighterProvider';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Restore'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Restore.js' implicitly has an 'any' type.
import Restore from '../../../UI/CustomSvgIcons/Restore';

export default {
  title: 'UI Building Blocks/CompactSemiControlledTextField',
  component: CompactSemiControlledTextField,
  decorators: [paperDecorator, muiDecorator],
};

export const Default = () => {
  const [value, setValue] = React.useState<string>('');
  const [value1, setValue1] = React.useState<string>('');
  const [value2, setValue2] = React.useState<string>('');
  const [value3, setValue3] = React.useState<string>('');
  const [value4, setValue4] = React.useState<string>('');
  const [value5, setValue5] = React.useState<string>('');
  const [value6, setValue6] = React.useState<string>('');

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ElementHighlighterProvider
      elements={[
        { label: 'With icon', id: 'with-icon' },
        { label: 'Without icon', id: 'without-icon' },
        { label: 'With end adornment', id: 'with-end-adornment' },
      ]}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout expand useLargeSpacer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            commitOnBlur
            value={value}
            onChange={setValue}
            id="without-icon"
          />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>State value is {value}</div>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            commitOnBlur
            value={value1}
            onChange={setValue1}
            errored
            errorText={'This value cannot be used'}
          />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>State value is {value1}</div>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            commitOnBlur
            value={value2}
            onChange={setValue2}
            placeholder="With placeholder"
          />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>State value is {value2}</div>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            disabled
            value={'disabled field'}
            onChange={() => {}}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>Disabled field</div>
        </Column>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            id="with-icon"
            commitOnBlur
            value={value3}
            onChange={setValue3}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            renderLeftIcon={className => <Angle className={className} />}
            leftIconTooltip={'Angle'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>State value is {value3}</div>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            commitOnBlur
            value={value4}
            onChange={setValue4}
            errored
            errorText={'An error occurred.'}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            renderLeftIcon={className => <Angle className={className} />}
            leftIconTooltip={'Angle'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>State value is {value4}</div>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            commitOnBlur
            value={value5}
            onChange={setValue5}
            placeholder="With placeholder"
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            renderLeftIcon={className => <Angle className={className} />}
            leftIconTooltip={'Angle'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>State value is {value5}</div>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            disabled
            value={'disabled field'}
            onChange={() => {}}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            renderLeftIcon={className => <Angle className={className} />}
            leftIconTooltip={'Angle'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>Disabled field</div>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>With end adornment</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            value={value6}
            onChange={setValue6}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            renderLeftIcon={className => <Angle className={className} />}
            leftIconTooltip={'Angle'}
            id="with-end-adornment"
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type.
            renderEndAdornmentOnHover={className => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Restore className={className} />
            )}
            onClickEndAdornment={action('onClickEndAdornment')}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div>State value is {value6}</div>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactSemiControlledTextField
            disabled
            value={'Disabled field'}
// @ts-expect-error - TS7006 - Parameter 'valueAsString' implicitly has an 'any' type.
            onChange={valueAsString => {}}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            renderLeftIcon={className => <Angle className={className} />}
            leftIconTooltip={'Angle disabled'}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type.
            renderEndAdornmentOnHover={className => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Restore className={className} />
            )}
            onClickEndAdornment={action('onClickEndAdornment')}
          />
        </Column>
      </ColumnStackLayout>
    </ElementHighlighterProvider>
  );
};
