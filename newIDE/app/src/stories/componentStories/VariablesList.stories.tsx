import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';
import GDevelopJsInitializerDecorator, {
  testProject,
// @ts-expect-error - TS6142 - Module '../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
} from '../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../VariablesList/VariablesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariablesList.tsx', but '--jsx' is not set.
import VariablesList from '../../VariablesList/VariablesList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../FixedHeightFlexContainer';

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <VariablesList
        variablesContainer={testProject.testLayout.getVariables()}
        emptyPlaceholderDescription="Variables help you store data"
        emptyPlaceholderTitle="Variables"
        helpPagePath="/variables"
        onComputeAllVariableNames={() => [
          'VariableFromEventSheet',
          'VariableFromSomeWhere',
          'InstanceVariable', // already defined variable in testSpriteObjectInstance
        ]}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const InstanceWithObjectVariables = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <VariablesList
        variablesContainer={testProject.testSpriteObjectInstance.getVariables()}
        emptyPlaceholderDescription="Variables help you store data"
        emptyPlaceholderTitle="Variables"
        helpPagePath="/variables"
        inheritedVariablesContainer={testProject.spriteObject.getVariables()}
        onComputeAllVariableNames={() => [
          'VariableFromEventSheet',
          'VariableFromSomeWhere',
          'InstanceVariable', // already defined variable in testSpriteObjectInstance
        ]}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export default {
  title: 'VariablesList',
  component: VariablesList,
  decorators: [paperDecorator, GDevelopJsInitializerDecorator],
};
