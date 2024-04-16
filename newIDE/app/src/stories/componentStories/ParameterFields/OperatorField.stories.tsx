import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/OperatorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/OperatorField.tsx', but '--jsx' is not set.
import OperatorField from '../../../EventsSheet/ParameterFields/OperatorField';
import ValueStateHolder from '../../ValueStateHolder';

const gd: libGDevelop = global.gd;

export default {
  title: 'ParameterFields/OperatorField',
  component: OperatorField,
  decorators: [paperDecorator],
};

export const OperatorFieldString = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue=""
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <OperatorField
        scope={{ project: testProject.project }}
        value={value}
        onChange={onChange}
        globalObjectsContainer={testProject.project}
        objectsContainer={testProject.testLayout}
        parameterMetadata={
          testProject.stringRelationalOperatorParameterMetadata
        }
      />
    )}
  />
);
export const OperatorFieldNumber = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue=""
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <OperatorField
        scope={{ project: testProject.project }}
        value={value}
        onChange={onChange}
        globalObjectsContainer={testProject.project}
        objectsContainer={testProject.testLayout}
        parameterMetadata={
          testProject.numberRelationalOperatorParameterMetadata
        }
      />
    )}
  />
);
export const OperatorFieldColor = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue=""
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <OperatorField
        scope={{ project: testProject.project }}
        value={value}
        onChange={onChange}
        globalObjectsContainer={testProject.project}
        objectsContainer={testProject.testLayout}
        parameterMetadata={testProject.colorRelationalOperatorParameterMetadata}
      />
    )}
  />
);
export const OperatorFieldUnknownType = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue=""
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <OperatorField
        scope={{ project: testProject.project }}
        value={value}
        onChange={onChange}
        globalObjectsContainer={testProject.project}
        objectsContainer={testProject.testLayout}
        parameterMetadata={
          testProject.unknownRelationalOperatorParameterMetadata
        }
      />
    )}
  />
);
