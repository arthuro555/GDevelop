import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../ResourcesList/ResourceSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelector.tsx', but '--jsx' is not set.
import ResourceSelector from '../../ResourcesList/ResourceSelector';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS6142 - Module '../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/MeasurementUnitDocumentation' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/MeasurementUnitDocumentation.tsx', but '--jsx' is not set.
import MeasurementUnitDocumentation from '../../PropertiesEditor/MeasurementUnitDocumentation';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import { getMeasurementUnitShortLabel } from '../../PropertiesEditor/PropertiesMapToSchema';
import { ResourceManagementProps } from '../../ResourcesList/ResourceSource';
import ResourcesLoader from '../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';

const gd: libGDevelop = global.gd;

type PropertyFieldProps = {
  objectConfiguration: gdObjectConfiguration,
  propertyName: string,
  onChange?: () => void
};

export const PropertyField = ({
  objectConfiguration,
  propertyName,
  onChange,
}: PropertyFieldProps) => {
  const forceUpdate = useForceUpdate();
  const properties = objectConfiguration.getProperties();

  const updateProperty = React.useCallback(
    (value: string) => {
      const oldValue = objectConfiguration
        .getProperties()
        .get(propertyName)
        .getValue();
      objectConfiguration.updateProperty(propertyName, value);
      const newValue = objectConfiguration
        .getProperties()
        .get(propertyName)
        .getValue();
      if (onChange && newValue !== oldValue) {
        onChange();
      }
      forceUpdate();
    },
    [objectConfiguration, propertyName, onChange, forceUpdate]
  );

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
        floatingLabelFixed
        floatingLabelText={property.getLabel()}
        onChange={updateProperty}
        value={property.getValue()}
        endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Tooltip title={endAdornment.tooltipContent}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <InputAdornment position="end">{endAdornment.label}</InputAdornment>
          </Tooltip>
        }
      />
    </Column>
  );
};

export const PropertyCheckbox = ({
  objectConfiguration,
  propertyName,
}: PropertyFieldProps) => {
  const forceUpdate = useForceUpdate();
  const properties = objectConfiguration.getProperties();

  const onChangeProperty = React.useCallback(
    (property: string, value: string) => {
      objectConfiguration.updateProperty(property, value);
      forceUpdate();
    },
    [objectConfiguration, forceUpdate]
  );

  const property = properties.get(propertyName);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Checkbox
      checked={property.getValue() === 'true'}
      label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin>{property.getLabel()}</Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FormHelperText style={{ display: 'inline' }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MarkdownText source={property.getDescription()} />
          </FormHelperText>
        </React.Fragment>
      }
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
      onCheck={(_, value) => {
        onChangeProperty(propertyName, value ? '1' : '0');
      }}
    />
  );
};

type PropertyResourceSelectorProps = {
  objectConfiguration: gdObjectConfiguration,
  propertyName: string,
  project: gd.Project,
  resourceManagementProps: ResourceManagementProps,
  onChange: (value: string) => void
};

export const PropertyResourceSelector = ({
  objectConfiguration,
  propertyName,
  project,
  resourceManagementProps,
  onChange,
}: PropertyResourceSelectorProps) => {
  const forceUpdate = useForceUpdate();
  const { current: resourcesLoader } = React.useRef(ResourcesLoader);
  const properties = objectConfiguration.getProperties();

  const onChangeProperty = React.useCallback(
    (propertyName: string, newValue: string) => {
      objectConfiguration.updateProperty(propertyName, newValue);
      onChange(newValue);
      forceUpdate();
    },
    [objectConfiguration, onChange, forceUpdate]
  );

  // Note that property is a temporary - don't access it in callbacks.
  const property = properties.get(propertyName);
  const extraInfos = property.getExtraInfo();
  const value = property.getValue();
  const label = property.getLabel();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResourceSelector
      project={project}
      // $FlowExpectedError
      resourceKind={extraInfos.size() > 0 ? extraInfos.at(0) : ''}
      floatingLabelText={label}
      resourceManagementProps={resourceManagementProps}
      initialResourceName={value}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
      onChange={newValue => {
        if (newValue !== value) onChangeProperty(propertyName, newValue);
      }}
      resourcesLoader={resourcesLoader}
      fullWidth
    />
  );
};
