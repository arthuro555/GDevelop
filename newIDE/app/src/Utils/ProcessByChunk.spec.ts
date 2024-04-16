import {processByChunk} from './ProcessByChunk';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('ProcessByChunk', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('empty array', async () => {
    const processChunk = jest.fn().mockImplementation(async () => {});
    await processByChunk([], {
      transformItem: async item => item,
      isChunkTooBig: () => true,
      processChunk,
    });

    expect(processChunk).not.toHaveBeenCalled();
  });

// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('chunk never too big', async () => {
    let results: Array<any> | Array<string> = [];
    const processChunk = async chunk: Array<string> => {
// @ts-expect-error - TS2454 - Variable 'chunk' is used before being assigned.
      results = [...results, ...chunk];
    };
    await processByChunk(['fake-item'], {
      transformItem: async item => item,
      isChunkTooBig: () => false,
      processChunk,
    });

    expect(results).toEqual(['fake-item']);

    results = [];
    await processByChunk(['fake-item-1', 'fake-item-2', 'fake-item-3'], {
      transformItem: async item => item,
      isChunkTooBig: () => false,
      processChunk,
    });

    expect(results).toEqual(['fake-item-1', 'fake-item-2', 'fake-item-3']);
  });

// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('chunks of 2', async () => {
    let results: Array<any> | Array<string> = [];
    const processChunk = async chunk: Array<string> => {
// @ts-expect-error - TS2454 - Variable 'chunk' is used before being assigned.
      results = [...results, ...chunk];
    };
    await processByChunk(['fake-item'], {
      transformItem: async item => item,
      isChunkTooBig: chunk => chunk.length >= 2,
      processChunk,
    });

    expect(results).toEqual(['fake-item']);

    results = [];
    await processByChunk(['fake-item-1', 'fake-item-2', 'fake-item-3'], {
      transformItem: async item => item,
      isChunkTooBig: chunk => chunk.length >= 2,
      processChunk,
    });

    expect(results).toEqual(['fake-item-1', 'fake-item-2', 'fake-item-3']);
  });

// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('chunks of 2, transformed items', async () => {
    let results: Array<any> | Array<string> = [];
    const processChunk = async chunk: Array<string> => {
      expect(chunk.length <= 2).toBe(true);
// @ts-expect-error - TS2454 - Variable 'chunk' is used before being assigned.
      results = [...results, ...chunk];
    };
    await processByChunk(['fake-item'], {
      transformItem: async item => 'mapped-' + item,
      isChunkTooBig: chunk => chunk.length > 2,
      processChunk,
    });

    expect(results).toEqual(['mapped-fake-item']);

    results = [];
    await processByChunk(['fake-item-1', 'fake-item-2', 'fake-item-3'], {
      transformItem: async item => 'mapped-' + item,
      isChunkTooBig: chunk => chunk.length > 2,
      processChunk,
    });

    expect(results).toEqual([
      'mapped-fake-item-1',
      'mapped-fake-item-2',
      'mapped-fake-item-3',
    ]);
  });
});
