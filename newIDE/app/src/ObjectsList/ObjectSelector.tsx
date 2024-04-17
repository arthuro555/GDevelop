import * as React from 'react';

import { t, Trans } from '@lingui/macro';

import { I18n } from '@lingui/react';
import { enumerateObjectsAndGroups } from './EnumerateObjects';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';
import SemiControlledAutoComplete, {
  DataSource,
  SemiControlledAutoCompleteInterface,
} from '../UI/SemiControlledAutoComplete';

import ListIcon from '../UI/ListIcon';
import getObjectByName from '../Utils/GetObjectByName';
import ObjectsRenderingService from '../ObjectsRendering/ObjectsRenderingService';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import { useShouldAutofocusInput } from '../UI/Responsive/ScreenTypeMeasurer';

import SelectField from '../UI/SelectField';

import SelectOption from '../UI/SelectOption';

type Props = {
  project: gd.Project | null | undefined;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  /** If specified, only this object type should be allowed to be selected. */
  allowedObjectType?: string | null | undefined;
  /**
   * If specified, an object without these behaviors won't be selectable.
   * Note that groups with at least 1 incompatible object won't be shown.
   */
  requiredBehaviorTypes?: Array<string>;
  noGroups?: boolean;
  /** A list of object names to exclude from the autocomplete list (for example if they have already been selected). */
  excludedObjectOrGroupNames?: Array<string>;
  onChoose?: (arg1: string) => void;
  onChange: (arg1: string) => void;
  onRequestClose?: () => void;
  onApply?: () => void;
  value: string;
  errorTextIfInvalid?: React.ReactNode;
  fullWidth?: boolean;
  floatingLabelText?: React.ReactNode;
  helperMarkdownText?: string | null | undefined;
  hintText?: MessageDescriptor | string;
  openOnFocus?: boolean;
  margin?: 'none' | 'dense';
  id?: string | null | undefined;
};

const iconSize = 24;

const getObjectsAndGroupsDataSource = ({
  project,
  globalObjectsContainer,
  objectsContainer,
  noGroups,
  allowedObjectType,
  requiredBehaviorTypes,
  excludedObjectOrGroupNames,
}: {
  project: gd.Project | null | undefined;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  noGroups: boolean | null | undefined;
  allowedObjectType: string | null | undefined;
  requiredBehaviorTypes?: Array<string>;
  excludedObjectOrGroupNames: Array<string> | null | undefined;
}): DataSource => {
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

// @ts-expect-error - TS2322 - Type '({ text: any; value: any; } | { type: string; })[]' is not assignable to type 'DataSource'.
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
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  objectName: string;
  requiredBehaviorTypes?: Array<string>;
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
    (behaviorType) =>
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
  focus: FieldFocusFunction;
};

const ObjectSelector = React.forwardRef<ObjectSelectorInterface, Props>(
  (props, ref) => {
    const fieldRef = React.useRef<
      SemiControlledAutoCompleteInterface | null | undefined
    >(null);

    const focus: FieldFocusFunction = (options) => {
      if (fieldRef.current) fieldRef.current.focus(options);
    };
    const shouldAutofocusInput = useShouldAutofocusInput();

    React.useImperativeHandle(ref, () => ({ focus }));

    const {
      value,

      onChange,

      onChoose,

      project,

      globalObjectsContainer,

      objectsContainer,

      allowedObjectType,

      noGroups,

      errorTextIfInvalid,

      margin,

      onRequestClose,

      onApply,

      id,

      excludedObjectOrGroupNames,

      hintText,

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
        (choice) => choice.text !== undefined && value === choice.text
      ).length !== 0;

    const hasObjectWithRequiredCapability = checkHasRequiredCapability({
      globalObjectsContainer,
      objectsContainer,
      objectName: value,
      requiredBehaviorTypes,
    });
    const errorText = !hasObjectWithRequiredCapability ? (
      <Trans>This object exists, but can't be used here.</Trans>
    ) : !hasValidChoice ? (
      errorTextIfInvalid
    ) : undefined;

    return shouldAutofocusInput ? (
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
// @ts-expect-error - TS2322 - Type 'MutableRefObject<SemiControlledAutoCompleteInterface | null | undefined>' is not assignable to type 'Ref<SemiControlledAutoCompleteInterface> | undefined'.
        ref={fieldRef}
        id={id}
        {...otherProps}
      />
    ) : (
      <I18n>
        {({ i18n }) => (
          <SelectField
            margin={margin}
            value={value}
            onChange={(e, i, newValue) => {
              onChange(newValue);
              if (onChoose) onChoose(newValue);
              if (onApply) onApply();
            }}
            translatableHintText={hintText || t`Choose an object`}
            style={{ flex: otherProps.fullWidth ? 1 : undefined }}
            errorText={errorText}
// @ts-expect-error - TS2322 - Type 'string | null | undefined' is not assignable to type 'string | undefined'.
            helperMarkdownText={otherProps.helperMarkdownText}
            floatingLabelText={otherProps.floatingLabelText}
// @ts-expect-error - TS2322 - Type 'string | null | undefined' is not assignable to type 'string | undefined'.
            id={id}
          >
            {objectAndGroups.map((option, index) =>
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Option'.
              option.type === 'separator' ? (
                <optgroup key={`group-divider`} label={i18n._(t`Groups`)} />
              ) : (
                <SelectOption
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'.
                  key={option.value}
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'.
                  label={option.value}
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'.
                  value={option.value}
                  shouldNotTranslate
                />
              )
            )}
          </SelectField>
        )}
      </I18n>
    );
  }
);

export default ObjectSelector;
