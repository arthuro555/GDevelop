import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../AnnouncementsFeed' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/index.tsx', but '--jsx' is not set.
import { AnnouncementsFeed } from '../../../AnnouncementsFeed';
// @ts-expect-error - TS6142 - Module '../../../AnnouncementsFeed/AnnouncementsFeedContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/AnnouncementsFeedContext.tsx', but '--jsx' is not set.
import { AnnouncementsFeedContext } from '../../../AnnouncementsFeed/AnnouncementsFeedContext';
import {
  fakeAnnouncements,
  fakePromotions,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'AnnouncementsFeed',
  component: AnnouncementsFeed,
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
      <AnnouncementsFeed />
    </AnnouncementsFeedContext.Provider>
  );
};

export const WithClosableItems = () => {
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
      <AnnouncementsFeed canClose />
    </AnnouncementsFeedContext.Provider>
  );
};

export const ErrorLoadingAnnouncements = () => {
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
      <AnnouncementsFeed />
    </AnnouncementsFeedContext.Provider>
  );
};

export const LoadingAnnouncements = () => {
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
      <AnnouncementsFeed />
    </AnnouncementsFeedContext.Provider>
  );
};

export const DefaultWithMargins = () => {
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
      <AnnouncementsFeed addMargins />
    </AnnouncementsFeedContext.Provider>
  );
};

export const OnlyUrgent = () => {
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
      <AnnouncementsFeed level="urgent" />
    </AnnouncementsFeedContext.Provider>
  );
};
