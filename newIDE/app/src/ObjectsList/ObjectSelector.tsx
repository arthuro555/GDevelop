import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { enumerateObjectsAndGroups } from './EnumerateObjects';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';
import SemiControlledAutoComplete, {
  DataSource,
  SemiControlledAutoCompleteInterface,
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
} from '../UI/SemiControlledAutoComplete';
// @ts-expect-error - TS6142 - Module '../UI/ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from '../UI/ListIcon';
import getObjectByName from '../Utils/GetObjectByName';
import ObjectsRenderingService from '../ObjectsRendering/ObjectsRenderingService';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import { useShouldAutofocusInput } from '../UI/Responsive/ScreenTypeMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';

const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject | null | undefined,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  /** If specified, only this object type should be allowed to be selected. */
  allowedObjectType?: string | null | undefined,
  /**
   * If specified, an object without these behaviors won't be selectable.
   * Note that groups with at least 1 incompatible object won't be shown.
   */
  requiredBehaviorTypes?: Array<string>,
  noGroups?: boolean,
  /** A list of object names to exclude from the autocomplete list (for example if they have already been selected). */
  excludedObjectOrGroupNames?: Array<string>,
  onChoose?: (arg1: string) => void,
  onChange: (arg1: string) => void,
  onRequestClose?: () => void,
  onApply?: () => void,
  value: string,
  errorTextIfInvalid?: React.ReactNode,
  fullWidth?: boolean,
  floatingLabelText?: React.ReactNode,
  helperMarkdownText?: string | null | undefined,
  hintText?: MessageDescriptor | string,
  openOnFocus?: boolean,
  margin?: 'none' | 'dense',
  id?: string | null | undefined
};

const iconSize = 24;

const getObjectsAndGroupsDataSource = (
  {
    project,
    globalObjectsContainer,
    objectsContainer,
    noGroups,
    allowedObjectType,
    requiredBehaviorTypes,
    excludedObjectOrGroupNames,
  }: {
    project: gdProject | null | undefined,
    globalObjectsContainer: gdObjectsContainer,
    objectsContainer: gdObjectsContainer,
    noGroups: boolean | null | undefined,
    allowedObjectType: string | null | undefined,
    requiredBehaviorTypes?: Array<string>,
    excludedObjectOrGroupNames: Array<string> | null | undefined
  },
): DataSource => {
  const { allObjectsList, allGroupsList } = enumerateObjectsAndGroups(
    globalObjectsContainer,
    objectsContainer,
    allowedObjectType || undefined,
    requiredBehaviorTypes || []
  );
  const objects = allObjectsList.map(({ object }) => {
    return {
      text: object.getName(),
      value: object.getName(),
      renderIcon: project
        ? () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ListIcon
              iconSize={iconSize}
              src={ObjectsRenderingService.getThumbnail(
                project,
                object.getConfiguration()
              )}
            />
          )
        : undefined,
    };
  });
  const groups = noGroups
    ? []
    : allGroupsList.map(({ group }) => {
        return {
          text: group.getName(),
          value: group.getName(),
        };
      });

  const fullList =
    groups.length === 0
      ? objects
      : [...objects, { type: 'separator' }, ...groups];

  return excludedObjectOrGroupNames
    ? fullList.filter(
        //$FlowFixMe
// @ts-expect-error - TS2339 - Property 'value' does not exist on type '{ text: any; value: any; } | { type: string; }'.
        ({ value }) => !excludedObjectOrGroupNames.includes(value)
      )
    : fullList;
};

export const checkHasRequiredCapability = ({
  globalObjectsContainer,
  objectsContainer,
  requiredBehaviorTypes,
  objectName,
}: {
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  objectName: string,
  requiredBehaviorTypes?: Array<string>
}) => {
  if (!requiredBehaviorTypes || requiredBehaviorTypes.length === 0) return true;

  const object = getObjectByName(
    globalObjectsContainer,
    objectsContainer,
    objectName
  );
  if (!object) {
    // Either the object does not exist or it's a group - not a problem because:
    // - if the object does not exist, we can't know its capabilities, we assume it has all.
    // - a group is assumed to have all the capabilities.
    return true;
  }

  return requiredBehaviorTypes.every(
    behaviorType =>
      gd
        .getBehaviorNamesInObjectOrGroup(
          globalObjectsContainer,
          objectsContainer,
          objectName,
          behaviorType,
          false
        )
        .size() > 0
  );
};

export type ObjectSelectorInterface = {
  focus: FieldFocusFunction
};

const ObjectSelector = React.forwardRef<Props, ObjectSelectorInterface>((props, ref) => {
  const fieldRef = React.useRef<SemiControlledAutoCompleteInterface | null | undefined>(null);

  const focus: FieldFocusFunction = options => {
    if (fieldRef.current) fieldRef.current.focus(options);
  };
  const shouldAutofocusInput = useShouldAutofocusInput();

// @ts-expect-error - TS2739 - Type '{ focus: FieldFocusFunction; }' is missing the following properties from type 'Props': project, globalObjectsContainer, objectsContainer, onChange, value
  React.useImperativeHandle(ref, () => ({ focus }));

  const {
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ObjectSelectorInterface'.
    value,
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'ObjectSelectorInterface'.
    onChange,
// @ts-expect-error - TS2339 - Property 'onChoose' does not exist on type 'ObjectSelectorInterface'.
    onChoose,
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'ObjectSelectorInterface'.
    project,
// @ts-expect-error - TS2339 - Property 'globalObjectsContainer' does not exist on type 'ObjectSelectorInterface'.
    globalObjectsContainer,
// @ts-expect-error - TS2339 - Property 'objectsContainer' does not exist on type 'ObjectSelectorInterface'.
    objectsContainer,
// @ts-expect-error - TS2339 - Property 'allowedObjectType' does not exist on type 'ObjectSelectorInterface'.
    allowedObjectType,
// @ts-expect-error - TS2339 - Property 'noGroups' does not exist on type 'ObjectSelectorInterface'.
    noGroups,
// @ts-expect-error - TS2339 - Property 'errorTextIfInvalid' does not exist on type 'ObjectSelectorInterface'.
    errorTextIfInvalid,
// @ts-expect-error - TS2339 - Property 'margin' does not exist on type 'ObjectSelectorInterface'.
    margin,
// @ts-expect-error - TS2339 - Property 'onRequestClose' does not exist on type 'ObjectSelectorInterface'.
    onRequestClose,
// @ts-expect-error - TS2339 - Property 'onApply' does not exist on type 'ObjectSelectorInterface'.
    onApply,
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'ObjectSelectorInterface'.
    id,
// @ts-expect-error - TS2339 - Property 'excludedObjectOrGroupNames' does not exist on type 'ObjectSelectorInterface'.
    excludedObjectOrGroupNames,
// @ts-expect-error - TS2339 - Property 'hintText' does not exist on type 'ObjectSelectorInterface'.
    hintText,
// @ts-expect-error - TS2339 - Property 'requiredBehaviorTypes' does not exist on type 'ObjectSelectorInterface'.
    requiredBehaviorTypes,
    ...otherProps
  } = props;

  const objectAndGroups = getObjectsAndGroupsDataSource({
    project,
    globalObjectsContainer,
    objectsContainer,
    noGroups,
    allowedObjectType,
    requiredBehaviorTypes,
    excludedObjectOrGroupNames,
  });

  const hasValidChoice =
    objectAndGroups.filter(
// @ts-expect-error - TS7006 - Parameter 'choice' implicitly has an 'any' type.
      choice => choice.text !== undefined && value === choice.text
    ).length !== 0;

  const hasObjectWithRequiredCapability = checkHasRequiredCapability({
    globalObjectsContainer,
    objectsContainer,
    objectName: value,
    requiredBehaviorTypes,
  });
  const errorText = !hasObjectWithRequiredCapability ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>This object exists, but can't be used here.</Trans>
  ) : !hasValidChoice ? (
    errorTextIfInvalid
  ) : (
    undefined
  );

  return shouldAutofocusInput ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SemiControlledAutoComplete
      margin={margin}
      hintText={hintText || t`Choose an object`}
      value={value}
      onChange={onChange}
      onChoose={onChoose}
      onRequestClose={onRequestClose}
      onApply={onApply}
      dataSource={objectAndGroups}
      errorText={errorText}
      ref={fieldRef}
      id={id}
      {...otherProps}
    />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SelectField
          margin={margin}
          value={value}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          onChange={(e, i, newValue) => {
            onChange(newValue);
            if (onChoose) onChoose(newValue);
            if (onApply) onApply();
          }}
          translatableHintText={hintText || t`Choose an object`}
// @ts-expect-error - TS2339 - Property 'fullWidth' does not exist on type '{ focus: FieldFocusFunction; }'.
          style={{ flex: otherProps.fullWidth ? 1 : undefined }}
          errorText={errorText}
// @ts-expect-error - TS2339 - Property 'helperMarkdownText' does not exist on type '{ focus: FieldFocusFunction; }'.
          helperMarkdownText={otherProps.helperMarkdownText}
// @ts-expect-error - TS2339 - Property 'floatingLabelText' does not exist on type '{ focus: FieldFocusFunction; }'.
          floatingLabelText={otherProps.floatingLabelText}
          id={id}
        >
{ /* @ts-expect-error - TS7006 - Parameter 'option' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type. */}
          {objectAndGroups.map((option, index) =>
            option.type === 'separator' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <optgroup key={`group-divider`} label={i18n._(t`Groups`)} />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectOption
                key={option.value}
                label={option.value}
                value={option.value}
                shouldNotTranslate
              />
            )
          )}
        </SelectField>
      )}
    </I18n>
  );
});

export default ObjectSelector;
