import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem } from '../../../UI/List';
// @ts-expect-error - TS6142 - Module '../../../UI/ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from '../../../UI/ListIcon';
import { EnumeratedInstructionOrExpressionMetadata } from '../../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
import { getInstructionListItemValue, getInstructionListItemKey } from './Keys';
import { SearchMatch } from '../../../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS6142 - Module '../../../UI/Search/HighlightedText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/HighlightedText.tsx', but '--jsx' is not set.
import HighlightedText from '../../../UI/Search/HighlightedText';

type Props = {
  id?: string,
  instructionOrExpressionMetadata: EnumeratedInstructionOrExpressionMetadata,
  iconSize: number,
  onClick: () => void,
  selectedValue: string | null | undefined,
  matches?: SearchMatch[]
};

export const renderInstructionOrExpressionListItem = ({
  id,
  instructionOrExpressionMetadata,
  iconSize,
  onClick,
  selectedValue,
  matches,
}: Props) => {
  const getRenderedText = (field: 'displayedName' | 'fullGroupName') => {
    let text = instructionOrExpressionMetadata[field];
    if (matches && matches.length) {
      const matchesForGivenField = matches.filter(match => match.key === field);
      if (!!matchesForGivenField.length) {
// @ts-expect-error - TS2322 - Type 'Element' is not assignable to type 'string'.
        text = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <HighlightedText
            text={text}
            matchesCoordinates={matchesForGivenField[0].indices}
          />
        );
      }
    }
    return text;
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ListItem
      id={id}
      key={getInstructionListItemKey(instructionOrExpressionMetadata)}
      selected={
        selectedValue ===
        getInstructionListItemValue(instructionOrExpressionMetadata.type)
      }
      primaryText={getRenderedText('displayedName')}
      secondaryText={getRenderedText('fullGroupName')}
      leftIcon={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ListIcon
          iconSize={iconSize}
          src={instructionOrExpressionMetadata.iconFilename}
        />
      }
      onClick={onClick}
      disableAutoTranslate
    />
  );
};
