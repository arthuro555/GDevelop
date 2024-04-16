import {fakeAssetShortHeader1} from '../fixtures/GDevelopServicesTestData';
const { getFolderTagsFromAssetShortHeaders } = require('./TagsHelper');

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('getFolderTagsFromAssetShortHeaders', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should return an empty array if no assets', () => {
    const selectedFolders = ['pack-tag'];
    const assetShortHeaders: Array<AssetShortHeader> = [];
    const result = getFolderTagsFromAssetShortHeaders({
      selectedFolders,
      assetShortHeaders,
    });
    expect(result).toEqual([]);
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should return the top level tags of assets in a pack', () => {
    const selectedFolders = ['pack-tag'];
    const assetShortHeader1 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag2'],
    } as const;
    const assetShortHeader2 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag4', 'tag5'],
    } as const;
    const assetShortHeader3 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag4'],
    } as const;
    const assetShortHeader4 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag4', 'tag6'],
    } as const;
    const assetShortHeaders = [
      assetShortHeader1,
      assetShortHeader2,
      assetShortHeader3,
      assetShortHeader4,
    ];

    const result = getFolderTagsFromAssetShortHeaders({
      selectedFolders,
      assetShortHeaders,
    });
    expect(result).toEqual(['tag2', 'tag4']); // no pack-tag, as it's the pack, no tag1 as it matches all assets.
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should return the top level tags after navigating inside a folder', () => {
    const selectedFolders = ['pack-tag', 'tag4']; // navigate inside tag4
    const assetShortHeader1 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag2'],
    } as const;
    const assetShortHeader2 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag4', 'tag5'],
    } as const;
    const assetShortHeader3 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag4'],
    } as const;
    const assetShortHeader4 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag4', 'tag6'],
    } as const;
    const assetShortHeaders = [
      assetShortHeader1,
      assetShortHeader2,
      assetShortHeader3,
      assetShortHeader4,
    ];

    const result = getFolderTagsFromAssetShortHeaders({
      selectedFolders,
      assetShortHeaders,
    });
    expect(result).toEqual(['tag5', 'tag6']); // no pack-tag, as it's the pack, no tag1 as it matches all assets.
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('works if a tag is duplicated', () => {
    const selectedFolders = ['pack-tag']; // root of pack.
    const assetShortHeader1 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag1'], // tag1 is duplicated because inside a folder of the same name.
    } as const;
    const assetShortHeader2 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag1', 'tag2'],
    } as const;
    const assetShortHeader3 = {
      ...fakeAssetShortHeader1,
      tags: ['pack-tag', 'tag3'],
    } as const;
    const assetShortHeaders = [
      assetShortHeader1,
      assetShortHeader2,
      assetShortHeader3,
    ];

    const result = getFolderTagsFromAssetShortHeaders({
      selectedFolders,
      assetShortHeaders,
    });
    expect(result).toEqual(['tag1', 'tag3']); // tag1 is a folder at the root of pack.

    const result2 = getFolderTagsFromAssetShortHeaders({
      selectedFolders: ['pack-tag', 'tag1'], // inside tag1 folder
      assetShortHeaders,
    });
    expect(result2).toEqual(['tag1', 'tag2']); // tag1 is a folder inside tag1 folder.
  });
});
