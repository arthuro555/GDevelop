import {toKebabCase} from './StringHelpers';

export type HTMLDataset = {
  [key: string]: string | null | undefined
};

export const dataObjectToProps = (object?: HTMLDataset | null) =>
  object
    ? Object.entries(object).reduce<Record<string, any>>((acc, [key, value]: [any, any]) => {
        if (value) {
          acc[`data-${toKebabCase(key)}`] = value;
        }
        return acc;
      }, {})
    : undefined;
