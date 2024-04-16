import * as React from 'react';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';

const highlightText = (
  text: string,
  matchCoordinates: number[],
  start: number,
  end: number | null | undefined,
  styleToApply: {
    backgroundColor?: string,
    color?: string
  },
): React.ReactNode[] => {
  const highlightTextStart = matchCoordinates[0];
  const highlightTextEnd = matchCoordinates[1] + 1;

  // The part before matched text
  const beforeText = text.slice(start, highlightTextStart);

  // Matched text
  const highlightedText = text.slice(highlightTextStart, highlightTextEnd);

  // Part after matched text
  // Till the end of text, or till next matched text
  const afterText = text.slice(highlightTextEnd, end || text.length);

  return [
    beforeText,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <span key={`${highlightedText}${highlightTextStart}`} style={styleToApply}>
      {highlightedText}
    </span>,
    afterText,
  ];
};

const HighlightedText = (
  {
    text,
    matchesCoordinates,
  }: {
    text: string,
    matchesCoordinates: number[][]
  },
): React.ReactNode[] => {
  const theme = React.useContext(GDevelopThemeContext);

  if (matchesCoordinates.length === 0) return [text];

  const returnText: Array<Array<Node>> = [];

  for (let i = 0; i < matchesCoordinates.length; i++) {
    const startIndexOfNextMatch = matchesCoordinates[i + 1]
      ? matchesCoordinates[i + 1][0]
      : undefined;
    const startIndex = i === 0 ? 0 : matchesCoordinates[i][0];
    returnText.push(
// @ts-expect-error - TS2345 - Argument of type 'ReactNode[]' is not assignable to parameter of type 'Node[]'.
      highlightText(
        text,
        matchesCoordinates[i],
        startIndex,
        startIndexOfNextMatch,
        theme.text.highlighted
      )
    );
  }

  return returnText.map((text, i) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'Node[]' is not assignable to type 'ReactNode'.
    <React.Fragment key={i}>{text}</React.Fragment>
  ));
};

export default HighlightedText;
