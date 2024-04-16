import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../../UI/EmptyPlaceholder';
// @ts-expect-error - TS6142 - Module '../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../FixedHeightFlexContainer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Clipboard'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Clipboard.js' implicitly has an 'any' type.
import PasteIcon from '../../UI/CustomSvgIcons/Clipboard';

export default {
  title: 'UI Building Blocks/EmptyPlaceholder',
  component: EmptyPlaceholder,
  decorators: [paperDecorator],
};
export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer
    height={500}
    justifyContent="center"
    alignItems="center"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EmptyPlaceholder
      title="Add your first event"
      description="You can use events to create cause and effect."
      actionLabel="Add something"
      helpPagePath="/objects/tiled_sprite"
      onAction={action('onAdd')}
    />
  </FixedHeightFlexContainer>
);

export const WithSecondaryAction = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer
    height={500}
    justifyContent="center"
    alignItems="center"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EmptyPlaceholder
      title="Add your first event"
      description="You can use events to create cause and effect."
      actionLabel="Add something"
      helpPagePath="/objects/tiled_sprite"
      onAction={action('onAdd')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      secondaryActionIcon={<PasteIcon />}
      secondaryActionLabel="Paste"
      onSecondaryAction={action('onAdd')}
    />
  </FixedHeightFlexContainer>
);
