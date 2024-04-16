// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../../../UI/SelectOption';

// @ts-expect-error - TS6142 - Module '../../../../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../../../../UI/Toggle';
import { mapFor } from '../../../../Utils/MapFor';
import { getCurrentElements } from './SpriteObjectHelper';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../../../UI/Layout';

type Props = {
  animations: gdSpriteAnimationList,
  animationIndex: number,
  directionIndex: number,
  spriteIndex: number,
  chooseAnimation: (arg1: number) => void,
  chooseDirection: (arg1: number) => void,
  chooseSprite: (arg1: number) => void,
  sameForAllAnimations: boolean,
  sameForAllSprites: boolean,
  setSameForAllAnimations: (arg1: boolean) => Promise<void>,
  setSameForAllSprites: (arg1: boolean) => Promise<void>,
  setSameForAllAnimationsLabel: React.ReactNode,
  setSameForAllSpritesLabel: React.ReactNode,
  hideControlsForSprite?: (sprite: gdSprite) => boolean
};

/**
 * A component that displays selector to browse the animations/directions/sprite
 * of a Sprite object. Also have toggles so that the user can choose if the edited property
 * (typically, the points or the collision masks of the sprite) should be shared between
 * all sprites of an animation, or between all sprites of all animations of the object.
 */
const SpriteSelector = ({
  animations,
  animationIndex,
  directionIndex,
  spriteIndex,
  sameForAllAnimations,
  sameForAllSprites,
  chooseAnimation,
  chooseDirection,
  chooseSprite,
  setSameForAllAnimations,
  setSameForAllSprites,
  setSameForAllAnimationsLabel,
  setSameForAllSpritesLabel,
  hideControlsForSprite,
}: Props) => {
  const { animation, direction, sprite } = getCurrentElements(
    animations,
    animationIndex,
    directionIndex,
    spriteIndex
  );

  const shouldHideControls =
    !direction ||
    !direction.getSpritesCount() ||
    !sprite ||
    (hideControlsForSprite && hideControlsForSprite(sprite));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout noColumnMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
          fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Animation</Trans>}
          value={animationIndex}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
          onChange={(e, i, value: string) =>
            chooseAnimation(parseInt(value, 10) || 0)
          }
        >
{ /* @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type. */}
          {mapFor(0, animations.getAnimationsCount(), i => {
            const animation = animations.getAnimation(i);
            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectOption
                key={i}
                value={i}
                label={t`Animation #${i} ${animation.getName()}`}
              />
            );
          })}
        </SelectField>
        {animation && animation.getDirectionsCount() > 1 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectField
            fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Direction</Trans>}
            value={directionIndex}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
            onChange={(e, i, value: string) =>
              chooseDirection(parseInt(value, 10) || 0)
            }
          >
{ /* @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type. */}
            {mapFor(0, animation.getDirectionsCount(), i => {
              return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SelectOption value={i} key={i} label={t`Direction #${i}`} />
              );
            })}
          </SelectField>
        )}
        {direction && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectField
            fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Frame</Trans>}
            value={spriteIndex}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
            onChange={(e, i, value: string) =>
              chooseSprite(parseInt(value, 10) || 0)
            }
          >
{ /* @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type. */}
            {mapFor(0, direction.getSpritesCount(), i => {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              return <SelectOption value={i} key={i} label={t`Frame #${i}`} />;
            })}
          </SelectField>
        )}
      </ResponsiveLineStackLayout>
      {!shouldHideControls && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
            label={setSameForAllAnimationsLabel}
            labelPosition="right"
            toggled={sameForAllAnimations}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
            onToggle={(e, checked) => setSameForAllAnimations(checked)}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
            label={setSameForAllSpritesLabel}
            labelPosition="right"
            toggled={sameForAllSprites}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
            onToggle={(e, checked) => setSameForAllSprites(checked)}
          />
        </>
      )}
    </React.Fragment>
  );
};

export default SpriteSelector;
