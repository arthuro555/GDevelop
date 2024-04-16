import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import { EditorProps } from './EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../ResourcesList/ResourceSelectorWithThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelectorWithThumbnail.tsx', but '--jsx' is not set.
import ResourceSelectorWithThumbnail from '../../ResourcesList/ResourceSelectorWithThumbnail';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS6142 - Module '../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/MeasurementUnitDocumentation' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/MeasurementUnitDocumentation.tsx', but '--jsx' is not set.
import MeasurementUnitDocumentation from '../../PropertiesEditor/MeasurementUnitDocumentation';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import { getMeasurementUnitShortLabel } from '../../PropertiesEditor/PropertiesMapToSchema';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module './Model3DEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/Model3DEditor.tsx', but '--jsx' is not set.
import { hasLight } from './Model3DEditor';

const facesProperties = [
  {
    id: 'frontFace',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    blockName: <Trans>Front face</Trans>,
    visibilityProperty: 'frontFaceVisible',
    resourceRepeatProperty: 'frontFaceResourceRepeat',
    resourceNameProperty: 'frontFaceResourceName',
    newResourceNameSuffix: 'Front',
  },
  {
    id: 'backFace',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    blockName: <Trans>Back face</Trans>,
    visibilityProperty: 'backFaceVisible',
    resourceRepeatProperty: 'backFaceResourceRepeat',
    resourceNameProperty: 'backFaceResourceName',
    newResourceNameSuffix: 'Back',
  },
  {
    id: 'leftFace',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    blockName: <Trans>Left face</Trans>,
    visibilityProperty: 'leftFaceVisible',
    resourceRepeatProperty: 'leftFaceResourceRepeat',
    resourceNameProperty: 'leftFaceResourceName',
    newResourceNameSuffix: 'Left',
  },
  {
    id: 'rightFace',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    blockName: <Trans>Right face</Trans>,
    visibilityProperty: 'rightFaceVisible',
    resourceRepeatProperty: 'rightFaceResourceRepeat',
    resourceNameProperty: 'rightFaceResourceName',
    newResourceNameSuffix: 'Right',
  },
  {
    id: 'topFace',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    blockName: <Trans>Top face</Trans>,
    visibilityProperty: 'topFaceVisible',
    resourceRepeatProperty: 'topFaceResourceRepeat',
    resourceNameProperty: 'topFaceResourceName',
    newResourceNameSuffix: 'Top',
  },
  {
    id: 'bottomFace',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    blockName: <Trans>Bottom face</Trans>,
    visibilityProperty: 'bottomFaceVisible',
    resourceRepeatProperty: 'bottomFaceResourceRepeat',
    resourceNameProperty: 'bottomFaceResourceName',
    newResourceNameSuffix: 'Bottom',
  },
];

const Cube3DEditor = ({
  objectConfiguration,
  project,
  layout,
  resourceManagementProps,
  objectName,
  renderObjectNameField,
}: EditorProps) => {
  const forceUpdate = useForceUpdate();
  const properties = objectConfiguration.getProperties();

  const onChangeProperty = React.useCallback(
    (property: string, value: string) => {
      objectConfiguration.updateProperty(property, value);
      forceUpdate();
    },
    [objectConfiguration, forceUpdate]
  );

  const facesOrientationChoices = properties
    .get('facesOrientation')
    .getExtraInfo()
    .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
    .map(value => ({ value, label: value }));
  const backFaceUpThroughWhichAxisRotationChoices = properties
    .get('backFaceUpThroughWhichAxisRotation')
    .getExtraInfo()
    .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
    .map(value => ({ value, label: value }));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {renderObjectNameField && renderObjectNameField()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="block-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Default size</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout expand noColumnMargin>
        {['width', 'height', 'depth'].map(propertyName => {
          const property = properties.get(propertyName);
          const measurementUnit = property.getMeasurementUnit();
          const endAdornment = {
            label: getMeasurementUnitShortLabel(measurementUnit),
            tooltipContent: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <MeasurementUnitDocumentation
                label={measurementUnit.getLabel()}
                description={measurementUnit.getDescription()}
                elementsWithWords={measurementUnit.getElementsWithWords()}
              />
            ),
          } as const;
          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column noMargin expand key={propertyName}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledTextField
                commitOnBlur
                floatingLabelFixed
                floatingLabelText={property.getLabel()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={value => onChangeProperty(propertyName, value)}
                value={property.getValue()}
                endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Tooltip title={endAdornment.tooltipContent}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <InputAdornment position="end">
                      {endAdornment.label}
                    </InputAdornment>
                  </Tooltip>
                }
                id={`cube3d-object-${propertyName}`}
              />
            </Column>
          );
        })}
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="block-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Settings</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          checked={
            properties.get('enableTextureTransparency').getValue() === 'true'
          }
          label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin>
                {properties.get('enableTextureTransparency').getLabel()}
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FormHelperText style={{ display: 'inline' }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <MarkdownText
                  source={properties
                    .get('enableTextureTransparency')
                    .getDescription()}
                />
              </FormHelperText>
            </React.Fragment>
          }
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(_, value) => {
            onChangeProperty('enableTextureTransparency', value ? '1' : '0');
          }}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
          value={properties.get('facesOrientation').getValue()}
          floatingLabelText={properties.get('facesOrientation').getLabel()}
          helperMarkdownText={properties
            .get('facesOrientation')
            .getDescription()}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          onChange={(event, index, newValue) => {
            onChangeProperty('facesOrientation', newValue);
          }}
        >
{ /* @ts-expect-error - TS7006 - Parameter 'choice' implicitly has an 'any' type. */}
          {facesOrientationChoices.map(choice => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectOption
              label={choice.label}
              value={choice.value}
              key={choice.value}
            />
          ))}
        </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
          value={properties
            .get('backFaceUpThroughWhichAxisRotation')
            .getValue()}
          floatingLabelText={properties
            .get('backFaceUpThroughWhichAxisRotation')
            .getLabel()}
          helperMarkdownText={properties
            .get('backFaceUpThroughWhichAxisRotation')
            .getDescription()}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          onChange={(event, index, newValue) => {
            onChangeProperty('backFaceUpThroughWhichAxisRotation', newValue);
          }}
        >
{ /* @ts-expect-error - TS7006 - Parameter 'choice' implicitly has an 'any' type. */}
          {backFaceUpThroughWhichAxisRotationChoices.map(choice => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectOption
              label={choice.label}
              value={choice.value}
              key={choice.value}
            />
          ))}
        </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
          value={properties.get('materialType').getValue()}
          floatingLabelText={properties.get('materialType').getLabel()}
          helperMarkdownText={properties.get('materialType').getDescription()}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          onChange={(event, index, newValue) => {
            onChangeProperty('materialType', newValue);
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption
            label={t`No lighting effect`}
            value="Basic"
            key="Basic"
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption
            label={t`React to lights`}
            value="StandardWithoutMetalness"
            key="StandardWithoutMetalness"
          />
        </SelectField>
        {properties.get('materialType').getValue() !== 'Basic' &&
          !hasLight(layout) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Make sure to set up a light in the effects of the layer or chose
                "No lighting effect" - otherwise the object will appear black.
              </Trans>
            </AlertMessage>
          )}
      </ColumnStackLayout>
      {facesProperties.map(faceProperty => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment key={faceProperty.id}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">{faceProperty.blockName}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Checkbox
                checked={
                  properties.get(faceProperty.visibilityProperty).getValue() ===
                  'true'
                }
                label={properties
                  .get(faceProperty.visibilityProperty)
                  .getLabel()}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onCheck={(_, value) => {
                  onChangeProperty(
                    faceProperty.visibilityProperty,
                    value ? '1' : '0'
                  );
                }}
                id={`cube3d-object-${faceProperty.visibilityProperty}`}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Checkbox
                checked={
                  properties
                    .get(faceProperty.resourceRepeatProperty)
                    .getValue() === 'true'
                }
                label={properties
                  .get(faceProperty.resourceRepeatProperty)
                  .getLabel()}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onCheck={(_, value) => {
                  onChangeProperty(
                    faceProperty.resourceRepeatProperty,
                    value ? '1' : '0'
                  );
                }}
                id={`cube3d-object-${faceProperty.resourceRepeatProperty}`}
              />
            </ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResourceSelectorWithThumbnail
              project={project}
              resourceKind="image"
              floatingLabelText={properties
                .get(faceProperty.resourceNameProperty)
                .getLabel()}
              resourceManagementProps={resourceManagementProps}
              resourceName={properties
                .get(faceProperty.resourceNameProperty)
                .getValue()}
              defaultNewResourceName={
                objectName + '_' + faceProperty.newResourceNameSuffix
              }
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value =>
                onChangeProperty(faceProperty.resourceNameProperty, value)
              }
              id={`cube3d-object-${faceProperty.resourceNameProperty}`}
            />
          </ColumnStackLayout>
        </React.Fragment>
      ))}
    </ColumnStackLayout>
  );
};

export default Cube3DEditor;
