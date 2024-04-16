import * as React from 'react';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';
import WindowUtils from '../Utils/Window';

type GDevelopJsInitializerProps = {
  children: () => React.ReactElement
};

const BrowserDropDownMenuDisabler = ({
  children,
}: GDevelopJsInitializerProps) => {
  React.useEffect(() => {
    WindowUtils.setUpContextMenu();
  }, []);

  return children();
};

const BrowserDropDownMenuDisablerDecorator: StoryDecorator = (
// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type.
  Story,
// @ts-expect-error - TS7006 - Parameter 'context' implicitly has an 'any' type.
  context
) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BrowserDropDownMenuDisabler>{() => <Story />}</BrowserDropDownMenuDisabler>
);

export default BrowserDropDownMenuDisablerDecorator;
