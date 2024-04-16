import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/InstructionEditor/InstructionOrExpressionSelector/ExpressionSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionOrExpressionSelector/ExpressionSelector.tsx', but '--jsx' is not set.
import ExpressionSelector from '../../../EventsSheet/InstructionEditor/InstructionOrExpressionSelector/ExpressionSelector';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

export default {
  title: 'InstructionEditor/ExpressionSelector',
  component: ExpressionSelector,
  decorators: [paperDecorator],
};

export const DefaultStringNoScope = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExpressionSelector
          i18n={i18n}
          expressionType="string"
          selectedType=""
          onChoose={action('Expression chosen')}
          focusOnMount
          scope={{ project: testProject.project }}
        />
      )}
    </I18n>
  </FixedHeightFlexContainer>
);

export const DefaultNumberNoScope = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExpressionSelector
          i18n={i18n}
          expressionType="number"
          selectedType=""
          onChoose={action('Expression chosen')}
          focusOnMount
          scope={{ project: testProject.project }}
        />
      )}
    </I18n>
  </FixedHeightFlexContainer>
);
