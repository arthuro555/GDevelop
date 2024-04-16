import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Spacer } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../Hints/useDismissableTutorialMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Hints/useDismissableTutorialMessage.tsx', but '--jsx' is not set.
import useDismissableTutorialMessage from '../../../Hints/useDismissableTutorialMessage';

/**
 * TODO: Use context directly in SpriteEditor
 * when switching SpriteEditor class component to functional component.
 */
const SpacedDismissableTutorialMessage = () => {
  const { DismissableTutorialMessage } = useDismissableTutorialMessage(
    'intermediate-changing-animations'
  );
  return DismissableTutorialMessage ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
      {DismissableTutorialMessage}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Spacer />
    </Column>
  ) : null;
};

export default SpacedDismissableTutorialMessage;
