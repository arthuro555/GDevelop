// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../../PropertiesEditor/PropertiesMapToSchema';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
import { EditorProps } from './EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
import { getExtraObjectsInformation } from '../../Hints';
import { getObjectTutorialIds } from '../../Utils/GDevelopServices/Tutorial';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
import DismissableTutorialMessage from '../../Hints/DismissableTutorialMessage';

const gd: libGDevelop = global.gd;

type Props = EditorProps;

const ObjectPropertiesEditor = (props: Props) => {
  const {
    objectConfiguration,
    project,
    resourceManagementProps,
    unsavedChanges,
    renderObjectNameField,
  } = props;

  // TODO: Workaround a bad design of ObjectJsImplementation. When getProperties
  // and associated methods are redefined in JS, they have different arguments (
  // see ObjectJsImplementation C++ implementation). If called directly here from JS,
  // the arguments will be mismatched. To workaround this, always cast the object to
  // a base gdObject to ensure C++ methods are called.
  const objectConfigurationAsGd = gd.castObject(
    objectConfiguration,
    gd.ObjectConfiguration
  );
  const properties = objectConfigurationAsGd.getProperties();

  const propertiesSchema = propertiesMapToSchema(
    properties,
// @ts-expect-error - TS7006 - Parameter 'object' implicitly has an 'any' type.
    object => object.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'object' implicitly has an 'any' type. | TS7006 - Parameter 'name' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
    (object, name, value) => object.updateProperty(name, value)
  );

  const extraInformation = getExtraObjectsInformation()[
    objectConfigurationAsGd.getType()
  ];

  const tutorialIds = getObjectTutorialIds(objectConfigurationAsGd.getType());

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
          {renderObjectNameField && renderObjectNameField()}
          {tutorialIds.map(tutorialId => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <DismissableTutorialMessage
              key={tutorialId}
              tutorialId={tutorialId}
            />
          ))}
          {propertiesSchema.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
              {extraInformation ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ColumnStackLayout noMargin>
                    {extraInformation.map(({ kind, message }, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <AlertMessage kind={kind} key={index}>
                        {i18n._(message)}
                      </AlertMessage>
                    ))}
                  </ColumnStackLayout>
                </Line>
              ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <PropertiesEditor
                unsavedChanges={unsavedChanges}
                schema={propertiesSchema}
                instances={[objectConfigurationAsGd]}
                project={project}
                resourceManagementProps={resourceManagementProps}
              />
            </React.Fragment>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                There is nothing to configure for this object. You can still use
                events to interact with the object.
              </Trans>
            </EmptyMessage>
          )}
        </ColumnStackLayout>
      )}
    </I18n>
  );
};

export default ObjectPropertiesEditor;
