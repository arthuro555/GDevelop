// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
import {
  EnumeratedBehaviorMetadata,
  enumerateBehaviorsMetadata,
} from '../BehaviorsEditor/EnumerateBehaviorsMetadata';

type Props = {
  project: gdProject,
  objectType: string,
  value: string,
  onChange: (arg1: string) => void,
  disabled?: boolean,
  eventsFunctionsExtension?: gdEventsFunctionsExtension
};
type State = {
  behaviorMetadata: Array<EnumeratedBehaviorMetadata>
};

export default class BehaviorTypeSelector extends React.Component<Props, State> {
  state = {
    behaviorMetadata: enumerateBehaviorsMetadata(
      this.props.project.getCurrentPlatform(),
      this.props.project,
      this.props.eventsFunctionsExtension
    ),
  };

  render() {
    const { disabled, objectType, value, onChange } = this.props;
    const { behaviorMetadata } = this.state;

    // If the behavior type is not in the list, we'll still
    // add a menu item for it so that the value is displayed
    // on screen.
    const valueIsListed = !!behaviorMetadata.find(({ type }) => type === value);

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={<Trans>Behavior type</Trans>}
        value={value}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
        onChange={(e, i, value: string) => {
          onChange(value);
        }}
        disabled={disabled}
        fullWidth
      >
        {behaviorMetadata.map((metadata: EnumeratedBehaviorMetadata) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectOption
            key={metadata.type}
            value={metadata.type}
            label={metadata.fullName}
            disabled={
              metadata.objectType !== '' && metadata.objectType !== objectType
            }
          />
        ))}
        {!valueIsListed && value && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectOption value={value} label={value} />
        )}
      </SelectField>
    );
  }
}
