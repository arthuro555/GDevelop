import React, {Component} from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import { enumerateAllExpressions } from '../../../InstructionOrExpression/EnumerateExpressions';
// @ts-expect-error - TS6142 - Module './index' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionOrExpressionSelector/index.tsx', but '--jsx' is not set.
import InstructionOrExpressionSelector from './index';
import {
  createTree,
  ExpressionTreeNode,
} from '../../../InstructionOrExpression/CreateTree';
import {
  EnumeratedExpressionMetadata,
  filterEnumeratedInstructionOrExpressionMetadataByScope,
} from '../../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
import { EventsScope } from '../../../InstructionOrExpression/EventsScope.flow';

type Props = {
  expressionType: string,
  focusOnMount?: boolean,
  selectedType: string,
  onChoose: (type: string, arg2: EnumeratedExpressionMetadata) => void,
  scope: EventsScope,
  i18n: I18nType
};

const style = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
} as const;

export default class ExpressionSelector extends Component<Props, Record<any, any>> {
  instructionsInfo: Array<EnumeratedExpressionMetadata> = filterEnumeratedInstructionOrExpressionMetadataByScope(
    enumerateAllExpressions(this.props.expressionType, this.props.i18n),
    this.props.scope
  );
  instructionsInfoTree: ExpressionTreeNode = createTree(this.instructionsInfo);

  render() {
    const { expressionType, scope, i18n, ...otherProps } = this.props;
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <InstructionOrExpressionSelector
        id="expression-selector"
        style={style}
        instructionsInfo={this.instructionsInfo}
        instructionsInfoTree={this.instructionsInfoTree}
        iconSize={16}
        useSubheaders
        helpPagePath="/all-features/expressions-reference"
        {...otherProps}
      />
    );
  }
}
