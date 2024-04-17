import * as React from 'react';
import algoliasearch from 'algoliasearch/lite';

const algoliaClient = algoliasearch(
  'RC2XAJAUNE',
  '7853cc8136c930e6c7b8f68238eea179'
);

let firstLoad = true;

/**
 * Wrapped algolia search client.
 * This is useful to prevent an empty search request made by the client at its
 * initialization (https://github.com/algolia/react-instantsearch/issues/1111).
 */
export const searchClient = {
  async search(requests: any) {
    if (firstLoad === true) {
      firstLoad = false;
      return Promise.resolve({
        results: [{ hits: [] }],
      });
    }
    return algoliaClient.search(requests);
  },
} as const;

export const indexName = 'gdevelop';

type AlgoliaSearchHitHierarchy = {
  lvl0: string;
  lvl1?: string;
  lvl2?: string;
  lvl3?: string;
  lvl4?: string;
  lvl5?: string;
  lvl6?: string;
};

export type AlgoliaSearchHit = {
  content: string | React.ReactNode | null;
  url: string;
  hierarchy: AlgoliaSearchHitHierarchy;
  objectID: string;
};

export const getHierarchyAsArray = (
  hierarchy: AlgoliaSearchHitHierarchy
): Array<string> =>
  Object.entries(hierarchy)
    .reduce<Array<any>>((acc, [level, content]: [any, any]) => {
      if (content) {
        acc.push([Number(level.replace('lvl', '')), content]);
      }
      return acc;
    }, [])
    .sort((a, b) => a[0] - b[0])
    // $FlowFixMe[incompatible-return] - Object.entries does not keep values types.
    .map((item) => item[1]);

export const getHitLastHierarchyLevel = (hit: AlgoliaSearchHit) => {
  const hierarchyArray = getHierarchyAsArray(hit.hierarchy);
  return hierarchyArray[hierarchyArray.length - 1];
};
