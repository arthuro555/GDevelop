// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../UI/InlineCheckbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/InlineCheckbox.tsx', but '--jsx' is not set.
import InlineCheckbox from '../UI/InlineCheckbox';
// @ts-expect-error - TS6142 - Module '../ResourcesList/ResourceSelectorWithThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelectorWithThumbnail.tsx', but '--jsx' is not set.
import ResourceSelectorWithThumbnail from '../ResourcesList/ResourceSelectorWithThumbnail';
// @ts-expect-error - TS6142 - Module '../UI/Subheader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Subheader.tsx', but '--jsx' is not set.
import Subheader from '../UI/Subheader';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../UI/ColorField';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
import { rgbOrHexToRGBString } from '../Utils/ColorTransformer';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MenuItemTemplate } from '../UI/Menu/Menu.flow';
import {
  ResourceKind,
  ResourceManagementProps,
} from '../ResourcesList/ResourceSource';
import {
  TextFieldWithButtonLayout,
  ResponsiveLineStackLayout,
  ColumnStackLayout,
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import UnsavedChangesContext, {
  UnsavedChanges,
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
} from '../MainFrame/UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import useForceUpdate from '../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButtonWithSplitMenu.tsx', but '--jsx' is not set.
import RaisedButtonWithSplitMenu from '../UI/RaisedButtonWithSplitMenu';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import Edit from '../UI/CustomSvgIcons/Edit';

// An "instance" here is the objects for which properties are shown
export type Instance = any; // This could be improved using generics.
export type Instances = Array<Instance>;

// "Value" fields are fields displayed in the properties.
export type ValueFieldCommonProperties = {
  name: string,
  getLabel?: (arg1: Instance) => string,
  getDescription?: (arg1: Instance) => string,
  getExtraDescription?: (arg1: Instance) => string,
  disabled?: boolean | ((instances: Array<gdInitialInstance>) => boolean),
  onEditButtonBuildMenuTemplate?: (i18n: I18nType) => Array<MenuItemTemplate>,
  onEditButtonClick?: () => void
};

// "Primitive" value fields are "simple" fields.
export type PrimitiveValueField = {
  valueType: 'number',
  getValue: (arg1: Instance) => number,
  setValue: (instance: Instance, newValue: number) => void,
  getEndAdornment?: (arg1: Instance) => {
    label: string,
    tooltipContent: React.ReactNode
  }
} & (ValueFieldCommonProperties) | {
  valueType: 'string',
  getValue: (arg1: Instance) => string,
  setValue: (instance: Instance, newValue: string) => void,
  getChoices?: () => Array<{
    value: string,
    label: string,
    labelIsUserDefined?: boolean
  }> | null | undefined
} & (ValueFieldCommonProperties) | {
  valueType: 'boolean',
  getValue: (arg1: Instance) => boolean,
  setValue: (instance: Instance, newValue: boolean) => void
} & (ValueFieldCommonProperties) | {
  valueType: 'color',
  getValue: (arg1: Instance) => string,
  setValue: (instance: Instance, newValue: string) => void
} & (ValueFieldCommonProperties) | {
  valueType: 'textarea',
  getValue: (arg1: Instance) => string,
  setValue: (instance: Instance, newValue: string) => void
} & (ValueFieldCommonProperties);

// "Resource" fields are showing a resource selector.
type ResourceField = {
  valueType: 'resource',
  resourceKind: ResourceKind,
  fallbackResourceKind?: ResourceKind,
  getValue: (arg1: Instance) => string,
  setValue: (instance: Instance, newValue: string) => void
} & (ValueFieldCommonProperties);

type SectionTitle = {
  name: string,
  getValue?: (arg1: Instance) => string,
  nonFieldType: 'sectionTitle',
  defaultValue?: string
};

type ActionButton = {
  label: string,
  disabled: 'onValuesDifferent',
  getValue: (arg1: Instance) => string,
  nonFieldType: 'button',
  onClick: (instance: Instance) => void
};

// A value field is a primitive or a resource.
export type ValueField = PrimitiveValueField | ResourceField;

// A field can be a primitive, a resource or a list of fields
export type Field = PrimitiveValueField | ResourceField | SectionTitle | ActionButton | {
  name: string,
  type: 'row' | 'column',
  title?: string | null | undefined,
  children: Array<Field>
};

// The schema is the tree of all fields.
export type Schema = Array<Field>;

type Props = {
  onInstancesModified?: (arg1: Instances) => void,
  instances: Instances,
  schema: Schema,
  mode?: 'column' | 'row',
  // If set, render the "extra" description content from fields
  // (see getExtraDescription).
  renderExtraDescriptionText?: (extraDescription: string) => string,
  unsavedChanges?: UnsavedChanges | null | undefined,
  // Optional context:
  project?: gdProject | null | undefined,
  resourceManagementProps?: ResourceManagementProps | null | undefined
};

const styles = {
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  field: {
    flex: 1,
    width: 'auto',
  },
  subHeader: {
    paddingLeft: 0,
  },
} as const;

const getDisabled = (
  {
    instances,
    field,
  }: {
    instances: Instances,
    field: ValueField
  },
): boolean => {
  return typeof field.disabled === 'boolean'
    ? field.disabled
    : typeof field.disabled === 'function'
    ? field.disabled(instances)
    : false;
};

/**
 * Get the value for the given field across all instances.
 * If one of the instances doesn't share the same value, returns the default value.
 * If there is no instances, returns the default value.
 * If the field does not have a `getValue` method, returns `null`.
 */
const getFieldValue = (
  {
    instances,
    field,
    defaultValue,
  }: {
    instances: Instances,
    field: ValueField | ActionButton | SectionTitle,
    defaultValue?: any
  },
): any => {
  if (!instances[0]) {
    console.log(
      'getFieldValue was called with an empty list of instances (or containing undefined). This is a bug that should be fixed'
    );
    return defaultValue;
  }

  const { getValue } = field;
  if (!getValue) return null;

  let value = getValue(instances[0]);
  for (var i = 1; i < instances.length; ++i) {
    if (value !== getValue(instances[i])) {
      if (typeof defaultValue !== 'undefined') value = defaultValue;
      break;
    }
  }

  return value;
};

const getFieldLabel = (
  {
    instances,
    field,
  }: {
    instances: Instances,
    field: ValueField
  },
): any => {
  if (!instances[0]) {
    console.log(
      'PropertiesEditor._getFieldLabel was called with an empty list of instances (or containing undefined). This is a bug that should be fixed'
    );
    return field.name;
  }

  if (field.getLabel) return field.getLabel(instances[0]);

  return field.name;
};

const PropertiesEditor = ({
  onInstancesModified,
  instances,
  schema,
  mode,
  renderExtraDescriptionText,
  unsavedChanges,
  project,
  resourceManagementProps,
}: Props) => {
  const forceUpdate = useForceUpdate();

  const _onInstancesModified = React.useCallback(
    (instances: Instances) => {
      // This properties editor is dealing with fields that are
      // responsible to update their state (see field.setValue).

      if (unsavedChanges) unsavedChanges.triggerUnsavedChanges();
      if (onInstancesModified) onInstancesModified(instances);
      forceUpdate();
    },
    [unsavedChanges, onInstancesModified, forceUpdate]
  );

  const getFieldDescription = React.useCallback(
    (field: ValueField): string | null | undefined => {
      if (!instances[0]) {
        console.log(
          'PropertiesEditor._getFieldDescription was called with an empty list of instances (or containing undefined). This is a bug that should be fixed'
        );
        return undefined;
      }

      const descriptions: Array<string> = [];
      if (field.getDescription)
        descriptions.push(field.getDescription(instances[0]));
      if (renderExtraDescriptionText && field.getExtraDescription)
        descriptions.push(
          renderExtraDescriptionText(field.getExtraDescription(instances[0]))
        );

      return descriptions.join('\n') || undefined;
    },
    [instances, renderExtraDescriptionText]
  );

  const renderInputField = React.useCallback(
    (field: ValueField) => {
      if (field.name === 'PLEASE_ALSO_SHOW_EDIT_BUTTON_THANKS') return null; // This special property was used in GDevelop 4 IDE to ask for a Edit button to be shown, ignore it.

      if (field.valueType === 'boolean') {
        const { setValue } = field;
        const description = getFieldDescription(field);

        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <InlineCheckbox
            label={
              !description ? (
                getFieldLabel({ instances, field })
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin>{getFieldLabel({ instances, field })}</Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FormHelperText style={{ display: 'inline' }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <MarkdownText source={description} />
                  </FormHelperText>
                </React.Fragment>
              )
            }
            key={field.name}
            id={field.name}
            checked={getFieldValue({ instances, field })}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
            onCheck={(event, newValue) => {
              instances.forEach(i => setValue(i, !!newValue));
              _onInstancesModified(instances);
            }}
            disabled={getDisabled({ instances, field })}
          />
        );
      } else if (field.valueType === 'number') {
        const { setValue, getEndAdornment } = field;
        const endAdornment = getEndAdornment && getEndAdornment(instances[0]);
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SemiControlledTextField
            value={getFieldValue({ instances, field })}
            key={field.name}
            id={field.name}
            floatingLabelText={getFieldLabel({ instances, field })}
            floatingLabelFixed
            helperMarkdownText={getFieldDescription(field)}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
            onChange={newValue => {
              const newNumberValue = parseFloat(newValue);
              // If the value is not a number, the user is probably still typing, adding a dot or a comma.
              // So don't update the value, it will be reverted if they leave the field.
              if (isNaN(newNumberValue)) return;
              instances.forEach(i => setValue(i, newNumberValue));
              _onInstancesModified(instances);
            }}
            type="number"
            style={styles.field}
            disabled={getDisabled({ instances, field })}
            endAdornment={
              endAdornment && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'ReactNode' is not assignable to type 'string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal'.
                <Tooltip title={endAdornment.tooltipContent}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <InputAdornment position="end">
                    {endAdornment.label}
                  </InputAdornment>
                </Tooltip>
              )
            }
          />
        );
      } else if (field.valueType === 'color') {
        const { setValue } = field;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column key={field.name} expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColorField
              id={field.name}
              floatingLabelText={getFieldLabel({ instances, field })}
              helperMarkdownText={getFieldDescription(field)}
              disableAlpha
              fullWidth
              color={getFieldValue({ instances, field })}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
              onChange={color => {
                const rgbString =
                  color.length === 0 ? '' : rgbOrHexToRGBString(color);
                instances.forEach(i => setValue(i, rgbString));
                _onInstancesModified(instances);
              }}
            />
          </Column>
        );
      } else if (field.valueType === 'textarea') {
        const { setValue } = field;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SemiControlledTextField
            key={field.name}
            id={field.name}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={text => {
              instances.forEach(i => setValue(i, text || ''));
              _onInstancesModified(instances);
            }}
            value={getFieldValue({ instances, field })}
            floatingLabelText={getFieldLabel({ instances, field })}
            floatingLabelFixed
            helperMarkdownText={getFieldDescription(field)}
            multiline
            style={styles.field}
          />
        );
      } else {
        const {
          onEditButtonBuildMenuTemplate,
          onEditButtonClick,
          setValue,
        } = field;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <TextFieldWithButtonLayout
            key={field.name}
            renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SemiControlledTextField
                value={getFieldValue({
                  instances,
                  field,
                  defaultValue: '(Multiple values)',
                })}
                id={field.name}
                floatingLabelText={getFieldLabel({ instances, field })}
                floatingLabelFixed
                helperMarkdownText={getFieldDescription(field)}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                onChange={newValue => {
                  instances.forEach(i => setValue(i, newValue || ''));
                  _onInstancesModified(instances);
                }}
                style={styles.field}
                disabled={getDisabled({ instances, field })}
              />
            )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
            renderButton={style =>
              onEditButtonClick && !onEditButtonBuildMenuTemplate ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <RaisedButton
                  style={style}
                  primary
                  disabled={instances.length !== 1}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  icon={<Edit />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Edit</Trans>}
                  onClick={onEditButtonClick}
                />
              ) : onEditButtonBuildMenuTemplate ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <RaisedButtonWithSplitMenu
                  style={style}
                  primary
                  disabled={instances.length !== 1}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  icon={<Edit />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Edit</Trans>}
                  onClick={onEditButtonClick}
                  buildMenuTemplate={onEditButtonBuildMenuTemplate}
                />
              ) : null
            }
          />
        );
      }
    },
    [instances, getFieldDescription, _onInstancesModified]
  );

  const renderSelectField = React.useCallback(
    (field: ValueField) => {
// @ts-expect-error - TS2339 - Property 'getChoices' does not exist on type 'ValueField'.
      if (!field.getChoices || !field.getValue) return;

      const children = field
// @ts-expect-error - TS2339 - Property 'getChoices' does not exist on type 'ValueField'.
        .getChoices()
// @ts-expect-error - TS7031 - Binding element 'value' implicitly has an 'any' type. | TS7031 - Binding element 'label' implicitly has an 'any' type. | TS7031 - Binding element 'labelIsUserDefined' implicitly has an 'any' type.
        .map(({ value, label, labelIsUserDefined }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectOption
            key={value}
            value={value}
            label={label}
            shouldNotTranslate={labelIsUserDefined}
          />
        ));

      if (field.valueType === 'number') {
        const { setValue } = field;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectField
            value={getFieldValue({ instances, field })}
            key={field.name}
            id={field.name}
            floatingLabelText={getFieldLabel({ instances, field })}
            helperMarkdownText={getFieldDescription(field)}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
            onChange={(event, index, newValue: string) => {
              instances.forEach(i => setValue(i, parseFloat(newValue) || 0));
              _onInstancesModified(instances);
            }}
            style={styles.field}
            disabled={field.disabled}
          >
            {children}
          </SelectField>
        );
      } else if (field.valueType === 'string') {
        const { setValue } = field;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectField
            value={getFieldValue({
              instances,
              field,
              defaultValue: '(Multiple values)',
            })}
            key={field.name}
            id={field.name}
            floatingLabelText={getFieldLabel({ instances, field })}
            helperMarkdownText={getFieldDescription(field)}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
            onChange={(event, index, newValue: string) => {
              instances.forEach(i => setValue(i, newValue || ''));
              _onInstancesModified(instances);
            }}
            style={styles.field}
            disabled={getDisabled({ instances, field })}
          >
            {children}
          </SelectField>
        );
      }
    },
    [instances, _onInstancesModified, getFieldDescription]
  );

  const renderButton = React.useCallback(
    (field: ActionButton) => {
      let disabled = false;
      if (field.disabled === 'onValuesDifferent') {
        const DIFFERENT_VALUES = 'DIFFERENT_VALUES';
        disabled =
          getFieldValue({
            instances,
            field,
            defaultValue: DIFFERENT_VALUES,
          }) === DIFFERENT_VALUES;
      }
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton
          key={`button-${field.label}`}
          fullWidth
          primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Edit />}
          disabled={disabled}
          label={field.label}
          onClick={() => {
            field.onClick(instances[0]);
          }}
        />
      );
    },
    [instances]
  );

  const renderResourceField = (field: ResourceField) => {
    if (!project || !resourceManagementProps) {
      console.error(
        'You tried to display a resource field in a PropertiesEditor that does not support display resources. If you need to display resources, pass additional props (project, resourceManagementProps).'
      );
      return null;
    }

    const { setValue } = field;
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ResourceSelectorWithThumbnail
        key={field.name}
        project={project}
        resourceManagementProps={resourceManagementProps}
        resourceKind={field.resourceKind}
        fallbackResourceKind={field.fallbackResourceKind}
        resourceName={getFieldValue({
          instances,
          field,
          defaultValue: '(Multiple values)', //TODO
        })}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
        onChange={newValue => {
          instances.forEach(i => setValue(i, newValue));
          _onInstancesModified(instances);
        }}
        floatingLabelText={getFieldLabel({ instances, field })}
        helperMarkdownText={getFieldDescription(field)}
      />
    );
  };

  const renderContainer =
    mode === 'row'
      ? (fields: React.ReactNode) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResponsiveLineStackLayout noMargin>
            {fields}
          </ResponsiveLineStackLayout>
        )
      : (fields: React.ReactNode) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ColumnStackLayout noMargin>{fields}</ColumnStackLayout>
        );

  const renderSectionTitle = React.useCallback(
    (field: SectionTitle) => {
      const { getValue } = field;

      let additionalText = null;

      if (getValue) {
        let selectedInstancesValue = getFieldValue({
          instances,
          field,
          defaultValue: field.defaultValue || 'Multiple Values',
        });
        if (!!selectedInstancesValue) additionalText = selectedInstancesValue;
      }

      if (!!additionalText) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line alignItems="baseline" key={`section-title-${field.name}`}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text displayInlineAsSpan>{field.name}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text
              allowSelection
              displayInlineAsSpan
              size="body2"
            >{`- ${additionalText}`}</Text>
          </Line>
        );
      }

      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line key={`section-title-${field.name}`}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text displayInlineAsSpan>{field.name}</Text>
        </Line>
      );
    },
    [instances]
  );

  return renderContainer(
    schema.map(field => {
// @ts-expect-error - TS2339 - Property 'nonFieldType' does not exist on type 'Field'.
      if (!!field.nonFieldType) {
// @ts-expect-error - TS2339 - Property 'nonFieldType' does not exist on type 'Field'.
        if (field.nonFieldType === 'sectionTitle') {
// @ts-expect-error - TS2345 - Argument of type 'Field' is not assignable to parameter of type 'SectionTitle'.
          return renderSectionTitle(field);
// @ts-expect-error - TS2339 - Property 'nonFieldType' does not exist on type 'Field'.
        } else if (field.nonFieldType === 'button') {
// @ts-expect-error - TS2345 - Argument of type 'Field' is not assignable to parameter of type 'ActionButton'.
          return renderButton(field);
        }
        return null;
// @ts-expect-error - TS2339 - Property 'children' does not exist on type 'Field'.
      } else if (field.children) {
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Field'.
        if (field.type === 'row') {
          const contentView = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'.
            <UnsavedChangesContext.Consumer key={field.name}>
{ /* @ts-expect-error - TS7006 - Parameter 'unsavedChanges' implicitly has an 'any' type. */}
              {unsavedChanges => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <PropertiesEditor
                  project={project}
                  resourceManagementProps={resourceManagementProps}
// @ts-expect-error - TS2339 - Property 'children' does not exist on type 'Field'.
                  schema={field.children}
                  instances={instances}
                  mode="row"
                  unsavedChanges={unsavedChanges}
                  onInstancesModified={onInstancesModified}
                />
              )}
            </UnsavedChangesContext.Consumer>
          );
// @ts-expect-error - TS2339 - Property 'title' does not exist on type 'Field'.
          if (field.title) {
            return [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'.
              <Text key={field.name + '-title'} size="block-title">
{ /* @ts-expect-error - TS2339 - Property 'title' does not exist on type 'Field'. */}
                {field.title}
              </Text>,
              contentView,
            ];
          }
          return contentView;
        }

        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'.
          <div key={field.name}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'. */}
            <Subheader>{field.name}</Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'. */}
            <UnsavedChangesContext.Consumer key={field.name}>
{ /* @ts-expect-error - TS7006 - Parameter 'unsavedChanges' implicitly has an 'any' type. */}
              {unsavedChanges => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <PropertiesEditor
                  project={project}
                  resourceManagementProps={resourceManagementProps}
// @ts-expect-error - TS2339 - Property 'children' does not exist on type 'Field'.
                  schema={field.children}
                  instances={instances}
                  mode="column"
                  unsavedChanges={unsavedChanges}
                  onInstancesModified={onInstancesModified}
                />
              )}
            </UnsavedChangesContext.Consumer>
          </div>
        );
// @ts-expect-error - TS2339 - Property 'valueType' does not exist on type 'Field'.
      } else if (field.valueType === 'resource') {
// @ts-expect-error - TS2345 - Argument of type 'Field' is not assignable to parameter of type 'ResourceField'.
        return renderResourceField(field);
      } else {
// @ts-expect-error - TS2339 - Property 'getChoices' does not exist on type 'Field'. | TS2339 - Property 'getValue' does not exist on type 'Field'. | TS2345 - Argument of type 'Field' is not assignable to parameter of type 'ValueField'.
        if (field.getChoices && field.getValue) return renderSelectField(field);
// @ts-expect-error - TS2339 - Property 'getValue' does not exist on type 'Field'. | TS2345 - Argument of type 'Field' is not assignable to parameter of type 'ValueField'.
        if (field.getValue) return renderInputField(field);
      }
      return null;
    })
  );
};

export default PropertiesEditor;
