// @ts-expect-error - TS6142 - Module './useDismissableTutorialMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Hints/useDismissableTutorialMessage.tsx', but '--jsx' is not set.
import useDismissableTutorialMessage from './useDismissableTutorialMessage';

type Props = {
  tutorialId: string
};

/**
 * Show a link to a tutorial that can be permanently hidden. Hidden tutorials
 * will be stored in preferences.
 * Use useDismissableTutorialMessage if you need to know if the tutorial can't be found
 * or was previously hidden before rendering.
 */
const DismissableTutorialMessage = ({
  tutorialId,
}: Props) => {
  const {
    DismissableTutorialMessage: ReturnedDismissableTutorialMessage,
  } = useDismissableTutorialMessage(tutorialId);
  return ReturnedDismissableTutorialMessage;
};

export default DismissableTutorialMessage;
