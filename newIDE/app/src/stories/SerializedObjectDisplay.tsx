// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import { serializeToJSObject } from '../Utils/Serializer';
import useForceUpdate from '../Utils/UseForceUpdate';

const SerializedObjectDisplay = ({
  children,
  object,
  methodName,
}: {
  children: React.ReactNode,
  object: any,
  methodName?: string
}) => {
  const forceUpdate = useForceUpdate();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div>
      {children}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper elevation={2} background="dark">
        Object serialized to JSON:{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton label={<Trans>Update</Trans>} onClick={forceUpdate} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <pre style={{ maxHeight: 400, overflow: 'scroll' }}>
          {JSON.stringify(
            serializeToJSObject(object, methodName || 'serializeTo'),
            null,
            4
          )}
        </pre>
      </Paper>
    </div>
  );
};

export default SerializedObjectDisplay;
