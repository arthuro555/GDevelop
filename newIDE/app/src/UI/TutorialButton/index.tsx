import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../TextButton';
import Window from '../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialContext } from '../../Tutorial/TutorialContext';
import { Tutorial } from '../../Utils/GDevelopServices/Tutorial';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Video'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Video.js' implicitly has an 'any' type.
import Video from '../CustomSvgIcons/Video';

type PropsType = {
  tutorialId: string | null | undefined,
  label: React.ReactNode,
  renderIfNotFound?: React.ReactNode
};

/**
 * The button that can be used in any dialog to open a Youtube tutorial.
 */
const TutorialButton = (props: PropsType) => {
  const { tutorials } = React.useContext(TutorialContext);
  if (!tutorials || !props.tutorialId) return props.renderIfNotFound || null; // Loading or errored, do not display the tutorial.
  const tutorial: Tutorial | null | undefined = tutorials.find(
// @ts-expect-error - TS7006 - Parameter 'tutorial' implicitly has an 'any' type.
    tutorial => tutorial.id === props.tutorialId
  );
  if (!tutorial) {
    console.warn(`Tutorial with id ${props.tutorialId || ''} not found`);
    return props.renderIfNotFound || null;
  }
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextButton
      onClick={() => {
        if (tutorial.link) {
          Window.openExternalURL(tutorial.link);
        }
      }}
      target="_blank"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={props.label || <Trans>Tutorial</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      icon={<Video />}
    />
  );
};

export default TutorialButton;
