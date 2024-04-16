// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
import { DebuggerId } from '../ExportAndShare/PreviewLauncher.flow';

type Props = {
  selectedId: DebuggerId,
  debuggerIds: Array<DebuggerId>,
  onChooseDebugger: (arg1: DebuggerId) => void
};

export default class DebuggerSelector extends React.Component<Props, undefined> {
  render() {
    const hasDebuggers = !!this.props.debuggerIds.length;
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectField
        fullWidth
        value={hasDebuggers ? this.props.selectedId : 0}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
        onChange={(e, i, value) =>
          this.props.onChooseDebugger(parseInt(value, 10) || 0)
        }
        disabled={!hasDebuggers}
      >
        {this.props.debuggerIds.map(id => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectOption value={id} key={id} label={t`Game preview #${id}`} />
        ))}
        {!hasDebuggers && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectOption
            value={0}
            label={t`No preview running. Run a preview and you will be able to inspect it with the debugger`}
          />
        )}
      </SelectField>
    );
  }
}
