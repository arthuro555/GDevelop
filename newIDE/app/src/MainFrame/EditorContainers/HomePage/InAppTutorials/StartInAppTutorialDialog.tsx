// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
import {
  FLING_GAME_IN_APP_TUTORIAL_ID,
  PLINKO_MULTIPLIER_IN_APP_TUTORIAL_ID,
  TIMER_IN_APP_TUTORIAL_ID,
  CAMERA_PARALLAX_IN_APP_TUTORIAL_ID,
  HEALTH_BAR_IN_APP_TUTORIAL_ID,
  JOYSTICK_IN_APP_TUTORIAL_ID,
  OBJECT_3D_IN_APP_TUTORIAL_ID,
  isMiniTutorial,
} from '../../../../Utils/GDevelopServices/InAppTutorial';

const styles = {
  imgContainer: {
    marginBottom: 16,
  },
} as const;

const getGuidedLessonContent = ({
  learningKeys,
}: {
  learningKeys: React.ReactNode[]
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>You're about to start this guided lesson.</Trans>
    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>In this tutorial you will learn:</Trans>
    </Text>
    {learningKeys.map((learningKey, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Text displayAsListItem noMargin key={index}>
        {learningKey}
      </Text>
    ))}
  </>
);

const titleAndContentByKey = {
  [FLING_GAME_IN_APP_TUTORIAL_ID]: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Let's make a Fling Game</Trans>,
    content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            You're about to start the first chapter of this guided lesson.
          </Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            GDevelop will save your progress so you can take a break when you
            need it.
          </Trans>
        </Text>
      </>
    ),
  },
  [PLINKO_MULTIPLIER_IN_APP_TUTORIAL_ID]: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Let's improve a scoring system</Trans>,
    content: getGuidedLessonContent({
      learningKeys: [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Making objects disappear or appear when colliding</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Creating, modifying and accessing a scene variable</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Updating a score accordingly</Trans>,
      ],
    }),
  },
  [TIMER_IN_APP_TUTORIAL_ID]: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Let's use time to measure a score</Trans>,
    content: getGuidedLessonContent({
      learningKeys: [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Create and modify a text</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Start a timer</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Use the timer to display a score</Trans>,
      ],
    }),
  },
  [CAMERA_PARALLAX_IN_APP_TUTORIAL_ID]: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Let's improve the camera and the background</Trans>,
    content: getGuidedLessonContent({
      learningKeys: [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Add a background with parallax effect</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Add an extension</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Use basic camera movements to follow the player</Trans>,
      ],
    }),
  },
  [HEALTH_BAR_IN_APP_TUTORIAL_ID]: {
    title: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Let's communicate to the player the remaining health points</Trans>
    ),
    content: getGuidedLessonContent({
      learningKeys: [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Use a prefab for a health bar</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Update the health bar based on the player's health</Trans>,
      ],
    }),
  },
  [JOYSTICK_IN_APP_TUTORIAL_ID]: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Let's add mobile controls to our game</Trans>,
    content: getGuidedLessonContent({
      learningKeys: [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Add a joystick prefab</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Add a behavior</Trans>,
      ],
    }),
  },
  [OBJECT_3D_IN_APP_TUTORIAL_ID]: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Let's add a 3D object to our game</Trans>,
    content: getGuidedLessonContent({
      learningKeys: [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Add a 3D Box</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>Add a behavior</Trans>,
      ],
    }),
  },
} as const;

type Props = {
  open: boolean,
  tutorialId: string,
  onClose: () => void,
  tutorialCompletionStatus: 'notStarted' | 'started' | 'complete',
  isProjectOpened?: boolean,
  isProjectOpening: boolean,
  startTutorial: (scenario: 'resume' | 'startOver' | 'start') => Promise<void>
};

const StartInAppTutorialDialog = ({
  open,
  tutorialId,
  onClose,
  tutorialCompletionStatus,
  isProjectOpened,
  startTutorial,
  isProjectOpening,
}: Props) => {
  const resumeTutorial = () => startTutorial('resume');
  const startOverTutorial = () => startTutorial('startOver');
  const startTutorialForFirstTime = () => startTutorial('start');

  const dialogContentByCompletionStatus = {
    notStarted: {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly flingGame: { readonly title: Element; readonly content: Element; }; readonly plinkoMultiplier: { readonly title: Element; readonly content: Element; }; ... 4 more ...; readonly object3d: { ...; }; }'.
      title: titleAndContentByKey[tutorialId].title,
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly flingGame: { readonly title: Element; readonly content: Element; }; readonly plinkoMultiplier: { readonly title: Element; readonly content: Element; }; ... 4 more ...; readonly object3d: { ...; }; }'.
      content: titleAndContentByKey[tutorialId].content,
      primaryAction: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label: <Trans>Yes</Trans>,
        onClick: startTutorialForFirstTime,
      },
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      secondaryAction: { label: <Trans>No</Trans>, onClick: onClose },
      tertiaryAction: null,
    },
    started: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title: <Trans>Welcome back!</Trans>,
      content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Let's finish your Fling Game, shall we?</Trans>
        </Text>
      ),
      primaryAction: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label: <Trans>Let's go</Trans>,
        onClick: resumeTutorial,
      },
      secondaryAction: {
        label: isProjectOpened ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>No, close project</Trans>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>No</Trans>
        ),
        onClick: onClose,
      },
      tertiaryAction: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label: <Trans>Restart tutorial</Trans>,
        onClick: startOverTutorial,
      },
    },
    complete: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title: <Trans>Restart the Tutorial</Trans>,
      content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>You're about to restart this 3-chapter guided lesson.</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              GDevelop will save your progress, so you can take a break if you
              need.
            </Trans>
          </Text>
        </>
      ),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      primaryAction: { label: <Trans>Yes</Trans>, onClick: startOverTutorial },
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      secondaryAction: { label: <Trans>No</Trans>, onClick: onClose },
      tertiaryAction: null,
    },
  } as const;

  const dialogContent =
    dialogContentByCompletionStatus[
      // Always show the "not started" dialog for the mini tutorials.
      isMiniTutorial(tutorialId) ? 'notStarted' : tutorialCompletionStatus
    ];
  const {
    title,
    content,
    primaryAction,
    secondaryAction,
    tertiaryAction,
  } = dialogContent;

  const actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
      key="close"
      label={secondaryAction.label}
      onClick={secondaryAction.onClick}
      disabled={isProjectOpening}
    />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DialogPrimaryButton
      key="start"
      label={primaryAction.label}
      primary
      onClick={primaryAction.onClick}
      disabled={isProjectOpening}
    />,
  ];
  const secondaryActions = tertiaryAction
    ? [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="other"
          label={tertiaryAction.label}
          onClick={tertiaryAction.onClick}
          disabled={isProjectOpening}
        />,
      ]
    : undefined;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={title}
      actions={actions}
      secondaryActions={secondaryActions}
      open={open}
      onRequestClose={onClose}
      onApply={primaryAction.onClick}
      maxWidth="xs"
      cannotBeDismissed
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line alignItems="center" justifyContent="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div style={styles.imgContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <img alt="hero" src="res/hero.png" width={48} height={48} />
          </div>
        </Line>
        {content}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Are you ready?</Trans>
        </Text>
      </ColumnStackLayout>
    </Dialog>
  );
};

export default StartInAppTutorialDialog;
