import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';

import ResourceSelectorWithThumbnail from '../ResourcesList/ResourceSelectorWithThumbnail';

import SelectOption from '../UI/SelectOption';
import { MenuItemTemplate } from '../UI/Menu/Menu';
import {
  ResourceKind,
  ResourceManagementProps,
} from '../ResourcesList/ResourceSource';
import {
  ResponsiveLineStackLayout,
  ColumnStackLayout,
  LineStackLayout,
} from '../UI/Layout';

import CompactSelectField from '../UI/CompactSelectField';

import CompactSemiControlledTextField from '../UI/CompactSemiControlledTextField';

import CompactSemiControlledNumberField from '../UI/CompactSemiControlledNumberField';

import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';

import { Column, Line, Spacer, marginsSize } from '../UI/Grid';

import Text from '../UI/Text';
import useForceUpdate from '../Utils/UseForceUpdate';

import Edit from '../UI/CustomSvgIcons/Edit';

import IconButton from '../UI/IconButton';

import FlatButton from '../UI/FlatButton';

import VerticallyCenterWithBar from '../UI/VerticallyCenterWithBar';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';

import { textEllipsisStyle } from '../UI/TextEllipsis';

import CompactPropertiesEditorRowField from './CompactPropertiesEditorRowField';

// An "instance" here is the objects for which properties are shown
export type Instance = any; // This could be improved using generics.
export type Instances = Array<Instance>;

// "Value" fields are fields displayed in the properties.
export type ValueFieldCommonProperties = {
  name: string;
  getLabel?: (arg1: Instance) => string;
  getDescription?: (arg1: Instance) => string;
  hideLabel?: boolean;
  getExtraDescription?: (arg1: Instance) => string;
  disabled?: (instances: Array<gd.InitialInstance>) => boolean;
  onEditButtonBuildMenuTemplate?: (i18n: I18nType) => Array<MenuItemTemplate>;
  onEditButtonClick?: () => void;
};

// "Primitive" value fields are "simple" fields.
export type PrimitiveValueField =
  | ({
      valueType: 'number';
      getValue: (arg1: Instance) => number;
      setValue: (instance: Instance, newValue: number) => void;
      // TODO: support this attribute.
      getEndAdornment?: (arg1: Instance) => {
        label: string;
        tooltipContent: React.ReactNode;
      };
      getEndAdornmentIcon?: () => React.ReactElement;
      onClickEndAdornment?: (arg1: Instance) => void;
      renderLeftIcon?: (className?: string) => React.ReactElement;
    } & ValueFieldCommonProperties)
  | ({
      valueType: 'string';
      getValue: (arg1: Instance) => string;
      setValue: (instance: Instance, newValue: string) => void;
      getChoices?: () =>
        | Array<{
            value: string;
            label: string;
            labelIsUserDefined?: boolean;
          }>
        | null
        | undefined;
      getEndAdornmentIcon?: () => React.ReactElement;
      onClickEndAdornment?: (arg1: Instance) => void;
      renderLeftIcon?: (className?: string) => React.ReactElement;
    } & ValueFieldCommonProperties)
  | ({
      valueType: 'boolean';
      getValue: (arg1: Instance) => boolean;
      setValue: (instance: Instance, newValue: boolean) => void;
    } & ValueFieldCommonProperties)
  | ({
      valueType: 'enumIcon';
      renderIcon: (value?: any) => React.ReactElement;
      getValue: (arg1: Instance) => any;
      isHighlighted: (value?: any) => boolean;
      setValue: (instance: Instance, newValue?: any) => void;
    } & ValueFieldCommonProperties)
  | ({
      valueType: 'color';
      getValue: (arg1: Instance) => string;
      setValue: (instance: Instance, newValue: string) => void;
    } & ValueFieldCommonProperties)
  | ({
      valueType: 'textarea';
      getValue: (arg1: Instance) => string;
      setValue: (instance: Instance, newValue: string) => void;
    } & ValueFieldCommonProperties);

// "Resource" fields are showing a resource selector.
type ResourceField = {
  valueType: 'resource';
  resourceKind: ResourceKind;
  fallbackResourceKind?: ResourceKind;
  getValue: (arg1: Instance) => string;
  setValue: (instance: Instance, newValue: string) => void;
  renderLeftIcon?: (className?: string) => React.ReactElement;
} & ValueFieldCommonProperties;

type Title = {
  name: string;
  title: string;
  renderLeftIcon: (className?: string) => React.ReactElement;
  getValue?: (arg1: Instance) => string;
  nonFieldType: 'title';
  defaultValue?: string;
};

export type SectionTitle = {
  name: string;
  title: string;
  nonFieldType: 'sectionTitle';
  getValue: typeof undefined;
};

type VerticalCenterWithBar = {
  name: string;
  nonFieldType: 'verticalCenterWithBar';
  child: PrimitiveValueField;
};

type ActionButton = {
  label: string;
  disabled: 'onValuesDifferent';
  getValue: (arg1: Instance) => string;
  nonFieldType: 'button';
  getIcon?: (arg1: { fontSize: string }) => React.ReactElement;
  onClick: (instance: Instance) => void;
};

// A value field is a primitive or a resource.
export type ValueField = PrimitiveValueField | ResourceField;

// A field can be a primitive, a resource or a list of fields
export type Field =
  | PrimitiveValueField
  | ResourceField
  | SectionTitle
  | Title
  | ActionButton
  | VerticalCenterWithBar
  | {
      name: string;
      type: 'row' | 'column';
      preventWrap?: boolean;
      removeSpacers?: boolean;
      title?: string | null | undefined;
      children: Array<Field>;
    };

// The schema is the tree of all fields.
export type Schema = Array<Field>;

type Props = {
  onInstancesModified?: (arg1: Instances) => void;
  instances: Instances;
  schema: Schema;
  mode?: 'column' | 'row';
  preventWrap?: boolean;
  removeSpacers?: boolean;
  // If set, render the "extra" description content from fields
  // (see getExtraDescription).
  renderExtraDescriptionText?: (extraDescription: string) => string;
  unsavedChanges?: UnsavedChanges | null | undefined;
  // Optional context:
  project?: gd.Project | null | undefined;
  resourceManagementProps?: ResourceManagementProps | null | undefined;
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
  container: { flex: 1, minWidth: 0 },
  separator: {
    marginRight: -marginsSize,
    marginLeft: -marginsSize,
    marginTop: marginsSize,
    borderTop: '1px solid black', // Border color is changed in the component.
  },
} as const;

export const Separator = () => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  return (
    <div
      style={{
        ...styles.separator,
        borderColor: gdevelopTheme.listItem.separatorColor,
      }}
    />
  );
};

const getDisabled = ({
  instances,
  field,
}: {
  instances: Instances;
  field: ValueField;
}): boolean => (field.disabled ? field.disabled(instances) : false);

/**
 * Get the value for the given field across all instances.
 * If one of the instances doesn't share the same value, returns the default value.
 * If there is no instances, returns the default value.
 * If the field does not have a `getValue` method, returns `null`.
 */
const getFieldValue = ({
  instances,
  field,
  defaultValue,
}: {
  instances: Instances;
  field: ValueField | ActionButton | SectionTitle | Title;
  defaultValue?: any;
}): any => {
  if (!instances[0]) {
    console.warn(
      'getFieldValue was called with an empty list of instances (or containing undefined). This is a bug that should be fixed.'
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

const getFieldLabel = ({
  instances,
  field,
}: {
  instances: Instances;
  field: ValueField;
}): any => {
  if (!instances[0]) {
    console.warn(
      'getFieldLabel was called with an empty list of instances (or containing undefined). This is a bug that should be fixed.'
    );
    return field.name;
  }

  if (field.getLabel) return field.getLabel(instances[0]);

  return field.name;
};

const CompactPropertiesEditor = ({
  onInstancesModified,
  instances,
  schema,
  mode,
  renderExtraDescriptionText,
  unsavedChanges,
  project,
  resourceManagementProps,
  preventWrap,
  removeSpacers,
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
        console.warn(
          'getFieldDescription was called with an empty list of instances (or containing undefined). This is a bug that should be fixed.'
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
        return 'TODO';
        // const { setValue } = field;
        // const description = getFieldDescription(field);
        // return (
        //   <InlineCheckbox
        //     label={
        //       !description ? (
        //         getFieldLabel({ instances, field })
        //       ) : (
        //         <React.Fragment>
        //           <Line noMargin>{getFieldLabel({ instances, field })}</Line>
        //           <FormHelperText style={{ display: 'inline' }}>
        //             <MarkdownText source={description} />
        //           </FormHelperText>
        //         </React.Fragment>
        //       )
        //     }
        //     key={field.name}
        //     id={field.name}
        //     checked={getFieldValue({ instances, field })}
        //     onCheck={(event, newValue) => {
        //       instances.forEach(i => setValue(i, !!newValue));
        //       _onInstancesModified(instances);
        //     }}
        //     disabled={getDisabled({ instances, field })}
        //   />
        // );
      } else if (field.valueType === 'number') {
        const { setValue, onClickEndAdornment } = field;
        // TODO: Support end adornment
        // const endAdornment = getEndAdornment && getEndAdornment(instances[0]);

        const commonProps = {
          key: field.name,
          id: field.name,
          value: getFieldValue({
            instances,
            field,
          }),
          // @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          onChange: (newValue) => {
            // If the value is not a number, the user is probably still typing, adding a dot or a comma.
            // So don't update the value, it will be reverted if they leave the field.
            if (isNaN(newValue)) return;
            instances.forEach((i) => setValue(i, newValue));
            _onInstancesModified(instances);
          },
          disabled: getDisabled({ instances, field }),
          renderEndAdornmentOnHover: field.getEndAdornmentIcon || undefined,
          onClickEndAdornment: () => {
            if (!onClickEndAdornment) return;
            instances.forEach((i) => onClickEndAdornment(i));
            _onInstancesModified(instances);
          },
        } as const;
        if (field.renderLeftIcon || field.hideLabel) {
          return (
            <CompactSemiControlledNumberField
              {...commonProps}
              useLeftIconAsNumberControl
              renderLeftIcon={field.renderLeftIcon}
              leftIconTooltip={getFieldLabel({ instances, field })}
              // endAdornment={
              //   endAdornment && (
              //     <Tooltip title={endAdornment.tooltipContent}>
              //       <InputAdornment position="end">
              //         {endAdornment.label}
              //       </InputAdornment>
              //     </Tooltip>
              //   )
              // }
            />
          );
        } else {
          const { key, ...otherCommonProps } = commonProps;
          return (
            <CompactPropertiesEditorRowField
              key={key}
              label={getFieldLabel({ instances, field })}
              markdownDescription={getFieldDescription(field)}
              field={
                <CompactSemiControlledNumberField
                  {...otherCommonProps}
                  // endAdornment={
                  //   endAdornment && (
                  //     <Tooltip title={endAdornment.tooltipContent}>
                  //       <InputAdornment position="end">
                  //         {endAdornment.label}
                  //       </InputAdornment>
                  //     </Tooltip>
                  //   )
                  // }
                />
              }
            />
          );
        }
      } else if (field.valueType === 'color') {
        return 'TODO';
        // const { setValue } = field;
        // return (
        //   <Column key={field.name} expand noMargin>
        //     <ColorField
        //       id={field.name}
        //       floatingLabelText={getFieldLabel({ instances, field })}
        //       helperMarkdownText={getFieldDescription(field)}
        //       disableAlpha
        //       fullWidth
        //       color={getFieldValue({ instances, field })}
        //       onChange={color => {
        //         const rgbString =
        //           color.length === 0 ? '' : rgbOrHexToRGBString(color);
        //         instances.forEach(i => setValue(i, rgbString));
        //         _onInstancesModified(instances);
        //       }}
        //     />
        //   </Column>
        // );
      } else if (field.valueType === 'enumIcon') {
        const value = getFieldValue({ instances, field });
        return (
          <IconButton
            key={field.name}
            id={field.name}
            size="small"
            tooltip={getFieldLabel({ instances, field })}
            selected={field.isHighlighted(value)}
            // @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onClick={(event) => {
              instances.forEach((i) => field.setValue(i, !value));
              _onInstancesModified(instances);
            }}
          >
            {field.renderIcon(value)}
          </IconButton>
        );
      } else if (field.valueType === 'textarea') {
        return 'TODO';
        // const { setValue } = field;
        // return (
        //   <SemiControlledTextField
        //     key={field.name}
        //     id={field.name}
        //     onChange={text => {
        //       instances.forEach(i => setValue(i, text || ''));
        //       _onInstancesModified(instances);
        //     }}
        //     value={getFieldValue({ instances, field })}
        //     floatingLabelText={getFieldLabel({ instances, field })}
        //     floatingLabelFixed
        //     helperMarkdownText={getFieldDescription(field)}
        //     multiline
        //     style={styles.field}
        //   />
        // );
      } else if (field.valueType === 'resource') {
        return 'TODO';
      } else {
        const {
          // TODO: Still support onEditButtonClick & onEditButtonBuildMenuTemplate ?
          // onEditButtonBuildMenuTemplate,
          // onEditButtonClick,
          setValue,
          onClickEndAdornment,
        } = field;
        const commonProps = {
          key: field.name,
          id: field.name,
          value: getFieldValue({
            instances,
            field,
            defaultValue: '(Multiple values)',
          }),
          // @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          onChange: (newValue) => {
            instances.forEach((i) => setValue(i, newValue || ''));
            _onInstancesModified(instances);
          },
          disabled: getDisabled({ instances, field }),
          renderEndAdornmentOnHover: field.getEndAdornmentIcon || undefined,
          onClickEndAdornment: () => {
            if (!onClickEndAdornment) return;
            instances.forEach((i) => onClickEndAdornment(i));
            _onInstancesModified(instances);
          },
        } as const;
        if (field.renderLeftIcon || field.hideLabel) {
          return (
            <CompactSemiControlledTextField
              {...commonProps}
              renderLeftIcon={field.renderLeftIcon}
              leftIconTooltip={getFieldLabel({ instances, field })}
            />
          );
        } else {
          const { key, ...otherCommonProps } = commonProps;

          return (
            <CompactPropertiesEditorRowField
              key={key}
              label={getFieldLabel({ instances, field })}
              markdownDescription={getFieldDescription(field)}
              field={<CompactSemiControlledTextField {...otherCommonProps} />}
            />
          );
        }
      }
    },
    [instances, _onInstancesModified, getFieldDescription]
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
          <CompactSelectField
            value={getFieldValue({ instances, field })}
            key={field.name}
            id={field.name}
            // floatingLabelText={getFieldLabel({ instances, field })}
            // helperMarkdownText={getFieldDescription(field)}
            onChange={(newValue: string) => {
              instances.forEach((i) => setValue(i, parseFloat(newValue) || 0));
              _onInstancesModified(instances);
            }}
// @ts-expect-error - TS2322 - Type '((instances: gd.InitialInstance[]) => boolean) | undefined' is not assignable to type 'boolean | undefined'.
            disabled={field.disabled}
          >
            {children}
          </CompactSelectField>
        );
      } else if (field.valueType === 'string') {
        const { setValue } = field;
        return (
          <CompactSelectField
            value={getFieldValue({
              instances,
              field,
              defaultValue: '(Multiple values)',
            })}
            key={field.name}
            id={field.name}
            // floatingLabelText={getFieldLabel({ instances, field })}
            // helperMarkdownText={getFieldDescription(field)}
            onChange={(newValue: string) => {
              instances.forEach((i) => setValue(i, newValue || ''));
              _onInstancesModified(instances);
            }}
            disabled={getDisabled({ instances, field })}
            renderLeftIcon={field.renderLeftIcon}
            leftIconTooltip={getFieldLabel({ instances, field })}
          >
            {children}
          </CompactSelectField>
        );
      }
    },
    [instances, _onInstancesModified]
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
        <React.Fragment key={`button-${field.label}`}>
          <FlatButton
            fullWidth
            primary
            leftIcon={
              field.getIcon ? (
                field.getIcon({ fontSize: 'small' })
              ) : (
                <Edit fontSize="small" />
              )
            }
            disabled={disabled}
            label={field.label}
            onClick={() => {
              if (!instances[0]) return;
              field.onClick(instances[0]);
            }}
          />
          <Spacer />
        </React.Fragment>
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
      <ResourceSelectorWithThumbnail
        key={field.name}
        project={project}
        resourceManagementProps={resourceManagementProps}
        resourceKind={field.resourceKind}
        fallbackResourceKind={field.fallbackResourceKind}
        resourceName={getFieldValue({
          instances,
          field,
          defaultValue: '(Multiple values)',
        })}
        onChange={(newValue) => {
          instances.forEach((i) => setValue(i, newValue));
          _onInstancesModified(instances);
        }}
        floatingLabelText={getFieldLabel({ instances, field })}
        helperMarkdownText={getFieldDescription(field)}
      />
    );
  };

  const renderVerticalCenterWithBar = (field: Field) =>
    // @ts-expect-error - TS2339 - Property 'child' does not exist on type 'Field'. | TS2339 - Property 'child' does not exist on type 'Field'.
    field.child && field.child.getValue ? (
      // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'.
      <VerticallyCenterWithBar key={field.name}>
        {/* @ts-expect-error - TS2339 - Property 'child' does not exist on type 'Field'. */}
        {renderInputField(field.child)}
      </VerticallyCenterWithBar>
    ) : (
      'TODO'
    );

  const renderContainer =
    mode === 'row'
      ? (fields: React.ReactNode) =>
          preventWrap ? (
            removeSpacers ? (
              <Line noMargin alignItems="center" expand>
                {fields}
              </Line>
            ) : (
              <LineStackLayout noMargin alignItems="center" expand>
                {fields}
              </LineStackLayout>
            )
          ) : (
            <ResponsiveLineStackLayout noMargin alignItems="center" expand>
              {fields}
            </ResponsiveLineStackLayout>
          )
      : (fields: React.ReactNode) =>
          removeSpacers ? (
            <Column noMargin expand>
              {fields}
            </Column>
          ) : (
            <ColumnStackLayout noMargin expand>
              {fields}
            </ColumnStackLayout>
          );

  const renderTitle = React.useCallback(
    (field: Title) => {
      const { getValue, renderLeftIcon } = field;

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
          <LineStackLayout
            alignItems="center"
            key={`section-title-${field.name}`}
            expand
            noMargin
          >
            {renderLeftIcon()}
            <Text displayInlineAsSpan noMargin>
              {field.title}
            </Text>
            <Text displayInlineAsSpan noMargin>
              -
            </Text>
            <Text
              allowSelection
              displayInlineAsSpan
              noMargin
// @ts-expect-error - TS2322 - Type '{ overflow: string; whiteSpace: string; textOverflow: string; }' is not assignable to type '{ marginLeft?: number | undefined; marginRight?: number | undefined; overflow?: "hidden" | undefined; overflowWrap?: "anywhere" | "break-word" | undefined; whiteSpace?: "nowrap" | "pre-wrap" | undefined; ... 6 more ...; maxHeight?: number | undefined; }'.
              style={textEllipsisStyle}
            >
              {additionalText}
            </Text>
          </LineStackLayout>
        );
      }

      return (
        <LineStackLayout
          key={`title-${field.name}`}
          expand
          noMargin
          alignItems="center"
        >
          {renderLeftIcon()}
          <Text displayInlineAsSpan size="sub-title" noMargin>
            {field.title}
          </Text>
        </LineStackLayout>
      );
    },
    [instances]
  );
  const renderSectionTitle = React.useCallback((field: SectionTitle) => {
    return [
      <Separator key={field.name + '-separator'} />,

      <Line key={`section-title-${field.name}`} noMargin>
        <Text displayInlineAsSpan size="sub-title" noMargin>
          {field.title}
        </Text>
      </Line>,
    ];
  }, []);

  return renderContainer(
    schema.map((field) => {
      // @ts-expect-error - TS2339 - Property 'nonFieldType' does not exist on type 'Field'.
      if (!!field.nonFieldType) {
        // @ts-expect-error - TS2339 - Property 'nonFieldType' does not exist on type 'Field'.
        if (field.nonFieldType === 'title') {
          // @ts-expect-error - TS2345 - Argument of type 'Field' is not assignable to parameter of type 'Title'.
          return renderTitle(field);
          // @ts-expect-error - TS2339 - Property 'nonFieldType' does not exist on type 'Field'.
        } else if (field.nonFieldType === 'sectionTitle') {
          // @ts-expect-error - TS2345 - Argument of type 'Field' is not assignable to parameter of type 'SectionTitle'.
          return renderSectionTitle(field);
          // @ts-expect-error - TS2339 - Property 'nonFieldType' does not exist on type 'Field'.
        } else if (field.nonFieldType === 'button') {
          // @ts-expect-error - TS2345 - Argument of type 'Field' is not assignable to parameter of type 'ActionButton'.
          return renderButton(field);
          // @ts-expect-error - TS2339 - Property 'nonFieldType' does not exist on type 'Field'.
        } else if (field.nonFieldType === 'verticalCenterWithBar') {
          return renderVerticalCenterWithBar(field);
        }
        return null;
        // @ts-expect-error - TS2339 - Property 'children' does not exist on type 'Field'.
      } else if (field.children) {
        // @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Field'.
        if (field.type === 'row') {
          const contentView = (
            // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'.
            <React.Fragment key={field.name}>
              <CompactPropertiesEditor
                project={project}
                resourceManagementProps={resourceManagementProps}
                // @ts-expect-error - TS2339 - Property 'children' does not exist on type 'Field'.
                schema={field.children}
                instances={instances}
                mode="row"
                unsavedChanges={unsavedChanges}
                onInstancesModified={onInstancesModified}
                // @ts-expect-error - TS2339 - Property 'preventWrap' does not exist on type 'Field'.
                preventWrap={field.preventWrap}
                // @ts-expect-error - TS2339 - Property 'removeSpacers' does not exist on type 'Field'.
                removeSpacers={field.removeSpacers}
              />
            </React.Fragment>
          );
          // @ts-expect-error - TS2339 - Property 'title' does not exist on type 'Field'.
          if (field.title) {
            return [
              // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'.
              <Separator key={field.name + '-separator'} />,
              // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'.
              <Text key={field.name + '-title'} size="sub-title" noMargin>
                {/* @ts-expect-error - TS2339 - Property 'title' does not exist on type 'Field'. */}
                {field.title}
              </Text>,
              contentView,
            ];
          }
          return contentView;
        }

        return (
          // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'.
          <div key={field.name} style={styles.container}>
            {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'name' does not exist on type 'Field'. */}
            <React.Fragment key={field.name}>
              <CompactPropertiesEditor
                project={project}
                resourceManagementProps={resourceManagementProps}
                // @ts-expect-error - TS2339 - Property 'children' does not exist on type 'Field'.
                schema={field.children}
                instances={instances}
                mode="column"
                unsavedChanges={unsavedChanges}
                onInstancesModified={onInstancesModified}
                // @ts-expect-error - TS2339 - Property 'preventWrap' does not exist on type 'Field'.
                preventWrap={field.preventWrap}
                // @ts-expect-error - TS2339 - Property 'removeSpacers' does not exist on type 'Field'.
                removeSpacers={field.removeSpacers}
              />
            </React.Fragment>
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

export default CompactPropertiesEditor;
