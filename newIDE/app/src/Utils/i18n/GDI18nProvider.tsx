import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18nProvider } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { setupI18n } from '@lingui/core';
import { getTranslationFunction } from './getTranslationFunction';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

type Catalog = any;
type Catalogs = {
  [key: string]: Catalog
};

type Props = {
  language: string,
  children: React.ReactNode
};

type State = {
  language: string,
  i18n: I18nType | null | undefined,
  catalogs: Catalogs
};

export default class GDI18nProvider extends React.Component<Props, State> {
  state = {
    language: 'en',
    catalogs: {},
    i18n: null,
  };

  componentDidMount() {
    this._loadLanguage(this.props.language);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.language !== this.props.language) {
      this._loadLanguage(this.props.language);
    }
  }

  _loadCatalog = (language: string): Promise<Catalogs> => {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
    if (this.state.catalogs[language]) {
      return Promise.resolve(this.state.catalogs);
    }

    return import(/* webpackMode: "lazy", webpackChunkName: "locales-[request]" */
    `../../locales/${language.replace('-', '_')}/messages`).then(
      catalog => {
        return { ...this.state.catalogs, [language]: catalog };
      },
      (error: Error) => {
        console.error('Error while loading language=' + language, error);
        return this.state.catalogs;
      }
    );
  };

  _loadLanguage(language: string) {
    this._loadCatalog(language).then(catalogs => {
      this.setState(
        {
          language,
          catalogs,
          i18n: setupI18n({
            language: language,
            catalogs,
          }),
        },
        () => {
          const { i18n } = this.state;
          gd.getTranslation = getTranslationFunction(i18n);
          console.info(`Loaded "${language}" language`);
        }
      );
    });
  }

  render() {
    // Use language from the state, as it is synchronized with the catalogs,
    // while the language from props is the "target language", and sometime
    // can be a language for which the catalog is not loaded yet (which would
    // create warning and a "flash" effect when changing language).
    const { i18n, catalogs, language } = this.state;
    const { children } = this.props;

    if (!i18n) return null; // Skip rendering when catalog isn't loaded.

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <I18nProvider i18n={i18n} language={language} catalogs={catalogs}>
        {children}
      </I18nProvider>
    );
  }
}
