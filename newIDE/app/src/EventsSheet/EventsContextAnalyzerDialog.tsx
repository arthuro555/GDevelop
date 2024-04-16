// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';

export type EventsContextResult = {
  objectsNames: Array<string>,
  objectOrGroupNames: Array<string>,
  objectOrGroupBehaviorNames: {
    [key: string]: Array<string>
  }
};

// Store in a EventsContextResult the content of a gd.EventsContext.
// In theory not necessary, but easier than storing,
// passing around, and properly delete a gd.EventsContext.
export const toEventsContextResult = (eventsContext: gdEventsContext): EventsContextResult => {
  const objectsNames = eventsContext
    .getObjectNames()
    .toNewVectorString()
    .toJSArray();
  const objectOrGroupNames = eventsContext
    .getReferencedObjectOrGroupNames()
    .toNewVectorString()
    .toJSArray();

  const objectOrGroupBehaviorNames: Record<string, any> = {};
// @ts-expect-error - TS7006 - Parameter 'objectOrGroupName' implicitly has an 'any' type.
  objectOrGroupNames.forEach(objectOrGroupName => {
    const behaviorNames = eventsContext
      .getBehaviorNamesOfObjectOrGroup(objectOrGroupName)
      .toNewVectorString()
      .toJSArray();

    if (behaviorNames.length) {
      objectOrGroupBehaviorNames[objectOrGroupName] = behaviorNames;
    }
  });

  return {
    objectsNames,
    objectOrGroupNames,
    objectOrGroupBehaviorNames,
  };
};

type Props = {
  onClose: () => void,
  eventsContextResult: EventsContextResult
};

export default class EventsContextAnalyzerDialog extends React.Component<Props, Record<any, any>> {
  render() {
    const { onClose, eventsContextResult } = this.props;
    const actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <FlatButton
        key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Close</Trans>}
        primary={true}
        onClick={this.props.onClose}
      />,
    ];

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Events analysis</Trans>}
        actions={actions}
        open
        onRequestClose={onClose}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Objects or groups being directly referenced in the events:{' '}
            {eventsContextResult.objectOrGroupNames.join(', ')}
          </Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            All objects potentially used in events:{' '}
            {eventsContextResult.objectsNames.join(', ')}
          </Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>All behaviors being directly referenced in the events:</Trans>{' '}
          {Object.keys(eventsContextResult.objectOrGroupBehaviorNames).map(
            objectOrGroupName => {
              return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans key={objectOrGroupName}>
                  Behaviors of {objectOrGroupName}:{' '}
                  {eventsContextResult.objectOrGroupBehaviorNames[
                    objectOrGroupName
                  ].join(', ')}
                  ;{' '}
                </Trans>
              );
            }
          )}
        </Text>
      </Dialog>
    );
  }
}
