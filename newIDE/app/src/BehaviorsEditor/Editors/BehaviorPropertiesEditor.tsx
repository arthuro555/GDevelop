// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../../PropertiesEditor/PropertiesMapToSchema';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { BehaviorEditorProps } from './BehaviorEditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Accordion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Accordion.tsx', but '--jsx' is not set.
import { Accordion, AccordionHeader, AccordionBody } from '../../UI/Accordion';
import { mapFor } from '../../Utils/MapFor';

const gd: libGDevelop = global.gd;

type Props = BehaviorEditorProps;

const areAdvancedPropertiesModified = (behavior: gdBehavior) => {
  const behaviorMetadata = gd.MetadataProvider.getBehaviorMetadata(
    gd.JsPlatform.get(),
    behavior.getTypeName()
  );
  const propertiesMetadata = behaviorMetadata.getProperties();
  const propertiesValues = behavior.getProperties();
  const propertyNames = propertiesMetadata.keys();
  let hasFoundModifiedAdvancedProperty = false;
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  mapFor(0, propertyNames.size(), i => {
    const name = propertyNames.at(i);
    const property = propertiesMetadata.get(name);
    const defaultValue = property.getValue();
    const currentValue = propertiesValues.get(name).getValue();

    // Some boolean properties can be set to an empty string to mean false.
    const hasDefaultValue =
      property.getType().toLowerCase() === 'boolean'
        ? (currentValue === 'true') === (defaultValue === 'true')
        : currentValue === defaultValue;
    if (property.isAdvanced() && !hasDefaultValue) {
      hasFoundModifiedAdvancedProperty = true;
    }
  });
  return hasFoundModifiedAdvancedProperty;
};

const BehaviorPropertiesEditor = ({
  project,
  behavior,
  object,
  onBehaviorUpdated,
  resourceManagementProps,
}: Props) => {
  const [
    shouldShowDeprecatedProperties,
    setShouldShowDeprecatedProperties,
  ] = React.useState<boolean>(false);

  const basicPropertiesSchema = React.useMemo(
    () =>
      propertiesMapToSchema(
        behavior.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type.
        behavior => behavior.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type. | TS7006 - Parameter 'name' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
        (behavior, name, value) => {
          behavior.updateProperty(name, value);
        },
        object,
        'Basic'
      ),
    [behavior, object]
  );

  const areAdvancedPropertiesExpandedByDefault = React.useMemo(
    () => areAdvancedPropertiesModified(behavior),
    [behavior]
  );

  const advancedPropertiesSchema = React.useMemo(
    () =>
      propertiesMapToSchema(
        behavior.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type.
        behavior => behavior.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type. | TS7006 - Parameter 'name' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
        (behavior, name, value) => {
          behavior.updateProperty(name, value);
        },
        object,
        'Advanced'
      ),
    [behavior, object]
  );

  const deprecatedPropertiesSchema = React.useMemo(
    () =>
      propertiesMapToSchema(
        behavior.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type.
        behavior => behavior.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type. | TS7006 - Parameter 'name' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
        (behavior, name, value) => {
          behavior.updateProperty(name, value);
        },
        object,
        'Deprecated'
      ),
    [behavior, object]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column expand>
      {basicPropertiesSchema.length > 0 ||
      advancedPropertiesSchema.length > 0 ||
      deprecatedPropertiesSchema.length > 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PropertiesEditor
            project={project}
            schema={basicPropertiesSchema}
            instances={[behavior]}
            onInstancesModified={onBehaviorUpdated}
            resourceManagementProps={resourceManagementProps}
          />
          {(advancedPropertiesSchema.length > 0 ||
            deprecatedPropertiesSchema.length > 0) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Accordion
              defaultExpanded={areAdvancedPropertiesExpandedByDefault}
              noMargin
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AccordionHeader noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Advanced properties</Trans>
                </Text>
              </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AccordionBody disableGutters>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <PropertiesEditor
                    project={project}
                    schema={advancedPropertiesSchema}
                    instances={[behavior]}
                    onInstancesModified={onBehaviorUpdated}
                    resourceManagementProps={resourceManagementProps}
                  />
                  {deprecatedPropertiesSchema.length > 0 &&
                    (shouldShowDeprecatedProperties ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <PropertiesEditor
                        project={project}
                        schema={deprecatedPropertiesSchema}
                        instances={[behavior]}
                        onInstancesModified={onBehaviorUpdated}
                        resourceManagementProps={resourceManagementProps}
                      />
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <FlatButton
                          key="show-deprecated"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          label={<Trans>Show deprecated options</Trans>}
                          onClick={() =>
                            setShouldShowDeprecatedProperties(true)
                          }
                        />
                      </Line>
                    ))}
                </Column>
              </AccordionBody>
            </Accordion>
          )}
        </ColumnStackLayout>
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
};

export default BehaviorPropertiesEditor;
