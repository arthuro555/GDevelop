// @flow
import axios from 'axios';
import { GDeveloppeReleaseApi } from './ApiConfigs';

export type Release = {
  name: ?string,
  publishedAt: ?string,
  description: ?string,
};

export const getReleases = (): Promise<Array<Release>> => {
  return axios
    .get(`${GDeveloppeReleaseApi.baseUrl}/release`, {
      params: {
        last: 4,
      },
    })
    .then(response => response.data);
};

export const hasBreakingChange = (release: Release): boolean => {
  return (
    (release.description || '').toLowerCase().indexOf('breaking change') !== -1
  );
};

export const findRelease = (
  releases: Array<Release>,
  name: string
): ?Release => {
  return releases.find(release => release.name === name);
};
