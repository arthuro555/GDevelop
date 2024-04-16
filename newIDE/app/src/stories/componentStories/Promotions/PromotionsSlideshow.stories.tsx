import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../Promotions/PromotionsSlideshow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Promotions/PromotionsSlideshow.tsx', but '--jsx' is not set.
import PromotionsSlideshow from '../../../Promotions/PromotionsSlideshow';
// @ts-expect-error - TS6142 - Module '../../../AnnouncementsFeed/AnnouncementsFeedContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/AnnouncementsFeedContext.tsx', but '--jsx' is not set.
import { AnnouncementsFeedContext } from '../../../AnnouncementsFeed/AnnouncementsFeedContext';
import {
  fakeAnnouncements,
  fakePromotions,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'PromotionsSlideshow',
  component: PromotionsSlideshow,
  decorators: [paperDecorator],
};

export const Default = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AnnouncementsFeedContext.Provider
      value={{
        announcements: fakeAnnouncements,
        promotions: fakePromotions,
        error: null,
        fetchAnnouncementsAndPromotions: action(
          'fetchAnnouncementsAndPromotions'
        ),
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PromotionsSlideshow />
    </AnnouncementsFeedContext.Provider>
  );
};

export const ErrorLoadingPromotions = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AnnouncementsFeedContext.Provider
      value={{
        announcements: null,
        promotions: null,
        error: new Error('Fake error'),
        fetchAnnouncementsAndPromotions: action(
          'fetchAnnouncementsAndPromotions'
        ),
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PromotionsSlideshow />
    </AnnouncementsFeedContext.Provider>
  );
};

export const LoadingPromotions = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AnnouncementsFeedContext.Provider
      value={{
        announcements: null,
        promotions: null,
        error: null,
        fetchAnnouncementsAndPromotions: action(
          'fetchAnnouncementsAndPromotions'
        ),
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PromotionsSlideshow />
    </AnnouncementsFeedContext.Provider>
  );
};

export const OnlyGame = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AnnouncementsFeedContext.Provider
      value={{
        announcements: fakeAnnouncements,
        promotions: fakePromotions,
        error: null,
        fetchAnnouncementsAndPromotions: action(
          'fetchAnnouncementsAndPromotions'
        ),
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PromotionsSlideshow type="game" />
    </AnnouncementsFeedContext.Provider>
  );
};

export const OnlyAssetPack = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AnnouncementsFeedContext.Provider
      value={{
        announcements: fakeAnnouncements,
        promotions: fakePromotions,
        error: null,
        fetchAnnouncementsAndPromotions: action(
          'fetchAnnouncementsAndPromotions'
        ),
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PromotionsSlideshow type="asset-pack" />
    </AnnouncementsFeedContext.Provider>
  );
};
