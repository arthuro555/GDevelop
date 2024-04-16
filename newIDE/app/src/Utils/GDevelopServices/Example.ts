import axios from 'axios';
import { GDevelopAssetApi } from './ApiConfigs';
import { Filters } from './Filters';
// @ts-expect-error - TS6142 - Module './User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { UserPublicProfile } from './User';

export type ExampleShortHeader = {
  id: string,
  slug: string,
  name: string,
  shortDescription: string,
  license: string,
  tags: Array<string>,
  authors?: Array<UserPublicProfile>,
  authorIds?: Array<string>,
  previewImageUrls: Array<string>,
  gdevelopVersion: string,
  codeSizeLevel: string,
  difficultyLevel?: string
};

export type Example = (ExampleShortHeader) & {
  description: string,
  projectFileUrl: string,
  authors: Array<string>
};

export type AllExamples = {
  exampleShortHeaders: Array<ExampleShortHeader>,
  filters: Filters
};

export const listAllExamples = async (): Promise<AllExamples> => {
  const response = await axios.get(
    `${GDevelopAssetApi.baseUrl}/example-short-header-and-filter`
  );

  const examples = response.data;
  if (!examples) throw new Error('Unexpected response from examples endpoint.');

  return response.data;
};

export const getExample = async (exampleShortHeader: ExampleShortHeader): Promise<Example> => {
  const response = await axios.get(
    `${GDevelopAssetApi.baseUrl}/example-v2/${exampleShortHeader.id}`
  );

  return response.data;
};

export const getUserExampleShortHeaders = async (authorId: string): Promise<Array<ExampleShortHeader>> => {
  const response = await axios.get(
    `${GDevelopAssetApi.baseUrl}/example-short-header`,
    {
      params: {
        authorId,
      },
    }
  );

  return response.data;
};
