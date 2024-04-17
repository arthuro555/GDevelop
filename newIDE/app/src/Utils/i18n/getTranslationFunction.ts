import { I18n } from '@lingui/core';

type TranslationFunction = ((arg1: string) => string) | null;
type NotNullTranslationFunction = (arg1: string) => string;

/**
 * Given the i18n object, return the function that can be used
 * to translate strings. Useful for wiring i18n to extensions
 * and libGD.js, where translations is done with a simple string
 * to string function.
 */
export const getTranslationFunction = (
  i18n?: I18n | null
): TranslationFunction => {
  const i18nModule = i18n; // Make flow happy, ensure i18nModule is const.
  if (i18nModule) {
    return (str: string) => i18nModule._(str);
  }

  return null;
};

/**
 * Given the i18n object, return the function that can be used
 * to translate strings. Useful for wiring i18n to extensions
 * and libGD.js, where translations is done with a simple string
 * to string function.
 */
export const getNotNullTranslationFunction = (
  i18n?: I18n | null
): NotNullTranslationFunction => {
  const i18nModule = i18n; // Make flow happy, ensure i18nModule is const.
  if (i18nModule) {
    return (str: string) => i18nModule._(str);
  }

  return (str: string) => str;
};
