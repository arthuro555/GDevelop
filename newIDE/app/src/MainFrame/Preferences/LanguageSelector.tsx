// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React, { useContext } from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module './PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from './PreferencesContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../locales/LocalesMetadata'. '/home/arthuro555/code/GDevelop/newIDE/app/src/locales/LocalesMetadata.js' implicitly has an 'any' type.
import LocalesMetadata from '../../locales/LocalesMetadata';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';

type Props = {
  onLanguageChanged: (language: string) => void
};

const displayLocaleMetadata = localeMetadata: any => {
  if (localeMetadata.languageCode === 'en') return false;
  if (localeMetadata.languageCode === 'pseudo_LOCALE') return Window.isDev();

  return true;
};

const localesToDisplay = LocalesMetadata.filter(displayLocaleMetadata);
const goodProgressLocales = localesToDisplay.filter(
// @ts-expect-error - TS7006 - Parameter 'localeMetadata' implicitly has an 'any' type.
  localeMetadata => localeMetadata.translationRatio > 0.5
);
const startedLocales = localesToDisplay.filter(
// @ts-expect-error - TS7006 - Parameter 'localeMetadata' implicitly has an 'any' type.
  localeMetadata => localeMetadata.translationRatio < 0.5
);

const renderLanguageSelectOption = localeMetadata: any => {
  const translationRatio = localeMetadata.translationRatio || 0;
  const percent = (100 * localeMetadata.translationRatio).toFixed(0);
  const isStarted = translationRatio > 0;

  return (
    <SelectOption
      value={localeMetadata.languageCode}
      label={`${localeMetadata.languageNativeName} (${
        localeMetadata.languageName
      })${isStarted ? ` - ~${percent}%` : ''}`}
      disabled={!isStarted}
      key={localeMetadata.languageCode}
    />
  );
};

const LanguageSelector = ({
  onLanguageChanged,
}: Props) => {
  const { values, setLanguage } = useContext(PreferencesContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Choose GDevelop language</Trans>}
          value={values.language}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
          onChange={(e, i, value: string) => {
            setLanguage(value);
            onLanguageChanged(value);
          }}
          fullWidth
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption value="en" label="English (default)" />
{ /* @ts-expect-error - TS7006 - Parameter 'localeMetadata' implicitly has an 'any' type. */}
          {goodProgressLocales.map(localeMetadata =>
            renderLanguageSelectOption(localeMetadata)
          )}
{ /* @ts-expect-error - TS7006 - Parameter 'localeMetadata' implicitly has an 'any' type. */}
          {startedLocales.map(localeMetadata =>
            renderLanguageSelectOption(localeMetadata)
          )}
        </SelectField>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          You can{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Link
            href={'https://crowdin.com/project/gdevelop'}
            onClick={() =>
              Window.openExternalURL('https://crowdin.com/project/gdevelop')
            }
          >
            help to translate GDevelop in your language
          </Link>
          .
        </Trans>
      </Text>
    </Column>
  );
};

export default LanguageSelector;
