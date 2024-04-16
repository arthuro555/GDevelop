// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../PropertiesEditor/PropertiesMapToSchema';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';

type Props = {
  behaviorSharedData: gdBehaviorsSharedData,
  project: gdProject,
  resourceManagementProps: ResourceManagementProps
};

export default class BehaviorSharedPropertiesEditor extends React.Component<Props> {
  render() {
    const { behaviorSharedData } = this.props;

    const propertiesSchema = propertiesMapToSchema(
      behaviorSharedData.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type.
      behavior => behavior.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type. | TS7006 - Parameter 'name' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
      (behavior, name, value) => {
        behavior.updateProperty(name, value);
      }
    );

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Column expand>
        {propertiesSchema.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PropertiesEditor
            schema={propertiesSchema}
            instances={[behaviorSharedData]}
            resourceManagementProps={this.props.resourceManagementProps}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              There is nothing to configure for this behavior. You can still use
              events to interact with the object and this behavior.
            </Trans>
          </EmptyMessage>
        )}
      </Column>
    );
  }
}
