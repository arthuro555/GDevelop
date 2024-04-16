// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
import ReactJsonView from 'react-json-view';
// @ts-expect-error - TS6142 - Module '../GDJSInspectorDescriptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/GDJSInspectorDescriptions.tsx', but '--jsx' is not set.
import { GameData } from '../GDJSInspectorDescriptions';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';

type Props = {
  gameData: GameData,
  onEdit: (path: Array<string>, newValue?: any) => boolean
};

/**
 * A very simple inspector that display the raw information given by the gameData
 * object.
 */
const RawContentInspector = ({
  gameData,
  onEdit,
}: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>
        You are in raw mode. You can edit the fields, but be aware that this can
        lead to unexpected results or even crash the debugged game!
      </Trans>
    </EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ReactJsonView
      collapsed={1}
      name={false}
      src={gameData}
      onEdit={edit => {
// @ts-expect-error - TS2345 - Argument of type '(string | null)[]' is not assignable to parameter of type 'string[]'.
        return onEdit(edit.namespace.concat(edit.name), edit.new_value);
      }}
      groupArraysAfterLength={50}
      theme="monokai"
    />
  </React.Fragment>
);

export default RawContentInspector;
