import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/Slideshow/Slideshow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Slideshow/Slideshow.tsx', but '--jsx' is not set.
import Slideshow from '../../../UI/Slideshow/Slideshow';

export default {
  title: 'UI Building Blocks/Slideshow',
  component: Slideshow,
  decorators: [paperDecorator],
};

const items = [
  {
    id: '1',
    imageUrl:
      'https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Updated.png',
    mobileImageUrl:
      'https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Mobile.jpg',
    onClick: action('onClick'),
  },
  {
    id: '2',
    imageUrl:
      'https://resources.gdevelop.io/announcements/Premium_Featuring__Bubble_Dogs.png',
    mobileImageUrl:
      'https://resources.gdevelop.io/announcements/Premium_Featuring__Bubble_Dogs_Mobile.jpg',
    onClick: action('onClick'),
  },
  {
    id: '3',
    imageUrl:
      'https://resources.gdevelop.io/announcements/GDevelop_Produce_Farm_Bundle.png',
    mobileImageUrl:
      'https://resources.gdevelop.io/announcements/Produce_Farm_Bundle_Mobile.jpg',
    onClick: action('onClick'),
  },
];

export const Loading = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Slideshow
      items={null}
      itemDesktopRatio={5038 / 459}
      itemMobileRatio={18 / 7}
    />
  );
};

export const Loaded = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Slideshow
      items={items}
      itemDesktopRatio={5038 / 459}
      itemMobileRatio={18 / 7}
    />
  );
};

export const WithOnly1Item = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Slideshow
      items={[items[0]]}
      itemDesktopRatio={5038 / 459}
      itemMobileRatio={18 / 7}
    />
  );
};
