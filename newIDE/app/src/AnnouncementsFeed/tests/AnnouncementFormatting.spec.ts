// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
import { getAnnouncementContent } from '../AnnouncementFormatting';
import { Announcement } from '../../Utils/GDevelopServices/Announcement';

const makeFakeI18n = (): I18nType => ({
// @ts-expect-error - TS7006 - Parameter 'message' implicitly has an 'any' type.
  _: message => message.id,
  language: 'en',
});

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('getAnnouncementContent', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should return an object with title and message when announcement has a title', () => {
    const announcement: Announcement = {
      id: 'fantasy-dreamland-mega-pack',
      level: 'normal',
      titleByLocale: {
        en: 'Announcement title',
      },
      markdownMessageByLocale: {
        en: 'This is the announcement message.',
      },
    };
    const result = getAnnouncementContent(makeFakeI18n(), announcement);
    expect(result).toEqual({
      title: 'Announcement title',
      desktopMessage: 'This is the announcement message.',
      mobileMessage: 'This is the announcement message.',
      isClickableContent: false,
    });
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should return an object with message only when announcement has no title and no link', () => {
    const imageMessage = '![Big Game Jam 4](https://example.com/image.png)';
    const announcement: Announcement = {
      id: 'big-game-jam-4',
      level: 'urgent',
      titleByLocale: {
        en: '',
      },
      markdownMessageByLocale: {
        en: imageMessage,
      },
    };
    const result = getAnnouncementContent(makeFakeI18n(), announcement);
    expect(result).toEqual({
      title: '',
      desktopMessage: imageMessage,
      mobileMessage: imageMessage,
      isClickableContent: false,
    });
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should return an object with message only when announcement has no title and an external link', () => {
    const imageWithLinkMessage =
      '[![Big Game Jam 4](https://resources.gdevelop.io/announcements/Big_Game_Jam_4.png)](https://itch.io/jam/gdevelop-game-jam-4)';
    const announcement: Announcement = {
      id: 'big-game-jam-4',
      level: 'urgent',
      titleByLocale: {
        en: '',
      },
      markdownMessageByLocale: {
        en: imageWithLinkMessage,
      },
    };
    const result = getAnnouncementContent(makeFakeI18n(), announcement);
    expect(result).toEqual({
      title: '',
      desktopMessage: imageWithLinkMessage,
      mobileMessage: imageWithLinkMessage,
      isClickableContent: true,
    });
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should return an object with message only and routeNavigationParams when announcement has no title and an internal link', () => {
    const imageMarkdown =
      '![GDevelop Mega Pack on GDevelop asset store](https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Updated.png)';
    const imageWithInternalLinkMessage = `[${imageMarkdown}](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=gdevelop-mega-bundle-43994a30-c54b-4f5d-baf5-6e1f99b13824)`;
    const announcement: Announcement = {
      id: 'gdevelop-mega-pack',
      level: 'urgent',
      titleByLocale: {
        en: '',
      },
      markdownMessageByLocale: {
        en: imageWithInternalLinkMessage,
      },
    };
    const result = getAnnouncementContent(makeFakeI18n(), announcement);
    expect(result).toEqual({
      title: '',
      desktopMessage: imageMarkdown, // The link is removed from the message.
      desktopRouteNavigationParams: {
        route: 'asset-store',
        params: {
          'asset-pack':
            'gdevelop-mega-bundle-43994a30-c54b-4f5d-baf5-6e1f99b13824',
        },
      },
      mobileMessage: imageMarkdown,
      mobileRouteNavigationParams: {
        route: 'asset-store',
        params: {
          'asset-pack':
            'gdevelop-mega-bundle-43994a30-c54b-4f5d-baf5-6e1f99b13824',
        },
      },
      isClickableContent: true,
    });
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should return mobile and desktop messages and navigation params', () => {
    const imageMarkdown =
      '![GDevelop Mega Pack on GDevelop asset store](https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Updated.png)';
    const imageWithInternalLinkMessage = `[${imageMarkdown}](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=gdevelop-mega-bundle-43994a30-c54b-4f5d-baf5-6e1f99b13824)`;
    const mobileImageMarkdown =
      '![GDevelop Mega Pack on GDevelop asset store](https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Updated_Mobile.png)';
    const mobileImageWithInternalLinkMessage = `[${mobileImageMarkdown}](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=gdevelop-mega-bundle-43994a30-c54b-4f5d-baf5-6e1f99b13824)`;
    const announcement: Announcement = {
      id: 'gdevelop-mega-pack',
      level: 'urgent',
      titleByLocale: {
        en: '',
      },
      markdownMessageByLocale: {
        en: imageWithInternalLinkMessage,
      },
      mobileMarkdownMessageByLocale: {
        en: mobileImageWithInternalLinkMessage,
      },
    };
    const result = getAnnouncementContent(makeFakeI18n(), announcement);
    expect(result).toEqual({
      title: '',
      desktopMessage: imageMarkdown, // The link is removed from the message.
      desktopRouteNavigationParams: {
        route: 'asset-store',
        params: {
          'asset-pack':
            'gdevelop-mega-bundle-43994a30-c54b-4f5d-baf5-6e1f99b13824',
        },
      },
      mobileMessage: mobileImageMarkdown, // The link is removed from the message.
      mobileRouteNavigationParams: {
        route: 'asset-store',
        params: {
          'asset-pack':
            'gdevelop-mega-bundle-43994a30-c54b-4f5d-baf5-6e1f99b13824',
        },
      },
      isClickableContent: true,
    });
  });
});
