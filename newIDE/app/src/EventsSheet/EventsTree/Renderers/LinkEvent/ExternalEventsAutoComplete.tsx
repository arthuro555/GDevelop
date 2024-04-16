import * as React from 'react';
import {
  enumerateLayouts,
  enumerateExternalEvents,
} from '../../../../ProjectManager/EnumerateProjectItems';
import SemiControlledAutoComplete, {
  DataSource,
// @ts-expect-error - TS6142 - Module '../../../../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
} from '../../../../UI/SemiControlledAutoComplete';

const getList = (
  currentSceneName?: string | null,
  currentExternalEventName?: string | null,
  project?: gdProject | null,
): DataSource => {
  if (!project || !currentSceneName) {
    return [];
  }

  const externalEvents = enumerateExternalEvents(project)
    .filter(
      externalEvents => externalEvents.getName() !== currentExternalEventName
    )
    .map(externalEvents => ({
      text: externalEvents.getName(),
      value: externalEvents.getName(),
    }));

  const layouts = enumerateLayouts(project)
    .filter(layout => layout.getName() !== currentSceneName)
    .map(layout => ({
      text: layout.getName(),
      value: layout.getName(),
    }));

  return [...externalEvents, { type: 'separator' }, ...layouts];
};

type Props = {
  onChange: (arg1: string) => void,
  value: string,
  project?: gdProject,
  isInline?: boolean,
  onRequestClose?: () => void,
  onApply?: () => void,
  sceneName?: string,
  externalEventsName?: string
};

export default class ExternalEventsAutoComplete extends React.Component<Props, Record<any, any>> {
  _field: any | null | undefined;

  focus() {
    if (this._field) this._field.focus();
  }

  render() {
    const {
      value,
      onChange,
      onRequestClose,
      onApply,
      isInline,
      project,
      sceneName,
      externalEventsName,
    } = this.props;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SemiControlledAutoComplete
        margin={this.props.isInline ? 'none' : 'dense'}
        fullWidth
        id="external-events-field"
        value={value}
        onChange={onChange}
        onRequestClose={onRequestClose}
        onApply={onApply}
        dataSource={getList(sceneName, externalEventsName, project)}
        openOnFocus={!isInline}
// @ts-expect-error - TS7006 - Parameter 'field' implicitly has an 'any' type.
        ref={field => (this._field = field)}
      />
    );
  }
}
