// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';

export default function EmptyEditor({
  renderObjectNameField,
}: {
  renderObjectNameField?: () => React.ReactElement
}) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
      {renderObjectNameField && renderObjectNameField()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            This object does not have any specific configuration. Add it on the
            scene and use events to interact with it.
          </Trans>
        </EmptyMessage>
      </Line>
    </Column>
  );
}
