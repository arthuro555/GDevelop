import React, { Component } from 'react';

import { I18n as I18nType } from '@lingui/core';

import InstructionOrExpressionSelector from './index';
import {
  createTree,
  InstructionTreeNode,
} from '../../../InstructionOrExpression/CreateTree';
import { enumerateAllInstructions } from '../../../InstructionOrExpression/EnumerateInstructions';
import {
  EnumeratedInstructionMetadata,
  filterEnumeratedInstructionOrExpressionMetadataByScope,
} from '../../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
import { EventsScope } from '../../../InstructionOrExpression/EventsScope.flow';

type Props = {
  isCondition: boolean;
  focusOnMount?: boolean;
  selectedType: string;
  onChoose: (type: string, arg2: EnumeratedInstructionMetadata) => void;
  scope: EventsScope;
  i18n: I18nType;
};

const style = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
} as const;

export default class InstructionSelector extends Component<
  Props,
  Record<any, any>
> {
  instructionsInfo: Array<EnumeratedInstructionMetadata> =
    filterEnumeratedInstructionOrExpressionMetadataByScope(
      enumerateAllInstructions(this.props.isCondition, this.props.i18n),
      this.props.scope
    );
  instructionsInfoTree: InstructionTreeNode = createTree(this.instructionsInfo);

  render() {
    const { isCondition, scope, i18n, ...otherProps } = this.props;
    return (
      <InstructionOrExpressionSelector
        style={style}
        instructionsInfo={this.instructionsInfo}
        instructionsInfoTree={this.instructionsInfoTree}
        iconSize={24}
        useSubheaders
        {...otherProps}
      />
    );
  }
}
