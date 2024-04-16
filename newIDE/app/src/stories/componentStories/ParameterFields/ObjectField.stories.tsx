import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/ObjectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectField.tsx', but '--jsx' is not set.
import ObjectField from '../../../EventsSheet/ParameterFields/ObjectField';
import ValueStateHolder from '../../ValueStateHolder';

const gd: libGDevelop = global.gd;

export default {
  title: 'ParameterFields/ObjectField',
  component: ObjectField,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue={'MySpriteObject'}
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ObjectField
        project={testProject.project}
        scope={{ project: testProject.project, layout: testProject.testLayout }}
        globalObjectsContainer={testProject.project}
        objectsContainer={testProject.testLayout}
        value={value}
        onChange={onChange}
      />
    )}
  />
);

export const NonExistingObject = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue={'ThisObjectDoesNotExist'}
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ObjectField
        project={testProject.project}
        scope={{ project: testProject.project, layout: testProject.testLayout }}
        globalObjectsContainer={testProject.project}
        objectsContainer={testProject.testLayout}
        value={value}
        onChange={onChange}
      />
    )}
  />
);
NonExistingObject.storyName = 'Error: non existing object';

export const WrongObjectType = () => {
  const instructionMetadata = gd.MetadataProvider.getConditionMetadata(
    gd.JsPlatform.get(),
    'AnimationEnded'
  );
  if (instructionMetadata.getParametersCount() !== 1) {
    throw new Error(
      'Unexpected number of parameters for condition "AnimationEnded" (was it properly found?).'
    );
  }
  const parameterMetadata = instructionMetadata.getParameter(0);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'MyTextObject'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ObjectField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          instructionMetadata={instructionMetadata}
          parameterMetadata={parameterMetadata}
          parameterIndex={0}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
WrongObjectType.storyName = 'Error: wrong object type';

export const WithRequiredBehavior = () => {
  const instructionMetadata = gd.MetadataProvider.getActionMetadata(
    gd.JsPlatform.get(),
    'EffectCapability::EffectBehavior::EnableEffect'
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'MyFakeObjectWithUnsupportedCapability'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ObjectField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          instructionMetadata={instructionMetadata}
          parameterIndex={0}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
WithRequiredBehavior.storyName =
  'Error: object not having a required capability';
