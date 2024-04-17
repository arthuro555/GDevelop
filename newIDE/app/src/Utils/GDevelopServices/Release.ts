import axios from 'axios';
import { GDevelopReleaseApi } from './ApiConfigs';

export type Release = {
  name: string | null | undefined;
  publishedAt: string | null | undefined;
  description: string | null | undefined;
};

export const getReleases = async (): Promise<Array<Release>> => {
  const response = await axios.get(`${GDevelopReleaseApi.baseUrl}/release`, {
    params: {
      last: 4,
    },
  });
  const releases = response.data;
  if (!Array.isArray(releases)) {
    throw new Error('Invalid releases');
  }

  return releases;
};

export const hasBreakingChange = (release: Release): boolean => {
  return (
    (release.description || '').toLowerCase().indexOf('breaking change') !== -1
  );
};

export const findRelease = (
  releases: Array<Release>,
  name: string
): Release | null | undefined => {
  return releases.find((release) => release.name === name);
};
