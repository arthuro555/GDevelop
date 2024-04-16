import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../PropertiesEditor/PropertiesMapToSchema';
import { List } from '@material-ui/core';

type Props = {
  project: gdProject
};

function ExtensionsProperties(props: Props) {
  const { project } = props;
  const allExtensions = project.getCurrentPlatform().getAllPlatformExtensions();
  const propertyList: Array<React.ReactElement<React.ComponentProps<(arg1: ColumnStackLayoutProps) => any>>> = [];
  for (let i = 0; i < allExtensions.size(); i++) {
    const extension = allExtensions.at(i);
    const properties = project
      .getExtensionProperties()
      .getAllExtensionProperties(extension.getName(), project);
    if (properties.keys().size() === 0) continue;
    const propertiesSchema = propertiesMapToSchema(
      properties,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
      instance =>
        project
          .getExtensionProperties()
          .getAllExtensionProperties(extension.getName(), project),
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'propertyName' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
      (instance, propertyName, newValue) => {
        if (
          project
            .getExtensionProperties()
            .getAllExtensionProperties(extension.getName(), project)
            .get(propertyName)
            .getType() === 'boolean'
        ) {
          project
            .getExtensionProperties()
            .setValue(
              extension.getName(),
              propertyName,
              newValue === '1' ? 'true' : 'false'
            );
        } else {
          project
            .getExtensionProperties()
            .setValue(extension.getName(), propertyName, newValue);
        }
      }
    );

    propertyList.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ColumnStackLayout key={extension.getName()} noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="block-title">{extension.getFullName()}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PropertiesEditor
          schema={propertiesSchema}
          instances={[extension.getAllProperties()]}
        />
      </ColumnStackLayout>
    );
  }

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return propertyList.length ? <List>{propertyList}</List> : null;
}

export default ExtensionsProperties;
