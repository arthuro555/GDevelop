const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const {
  getLocales,
  getLocalePath,
  getLocaleSourceCatalogFiles,
  getLocaleCatalogPath,
  getLocaleCompiledCatalogPath,
  getLocaleMetadataPath,
  getLocaleName,
  getLocaleNativeName,
} = require('./lib/Locales');
const isWin = /^win/.test(process.platform);

const newIdeAppPath = path.join(__dirname, '..');

const readUtf8File = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function(err, content) {
      if (err) {
        reject(err);
        return;
      }

      resolve(content);
    });
  });

const writeUtf8File = (path, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf8', function(err) {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });

// Identify where msgcat is on the system
let msgcat = '';
if (isWin) {
  shell.echo(`ℹ️ Skipping translations compilation on Windows.`);
  shell.echo(
    `ℹ️ Pull Requests are welcome to add support for "msgcat" on Windows!`
  );
  shell.exit(0);
} else {
  msgcat = shell.exec('which msgcat 2>/dev/null', { silent: true }).stdout;
  if (!msgcat) {
    msgcat = shell.exec('find /usr -name "msgcat" -print -quit 2>/dev/null', {
      silent: true,
    }).stdout;
  }
}

msgcat = msgcat.trim();
if (!msgcat) {
  shell.echo(
    `ℹ️ msgcat not found not found on your computer - skipping translations compilation.`
  );
  shell.echo(
    `ℹ️ Install "gettext" with "brew install gettext" (macOS) or your Linux package manager.`
  );
  shell.exit(0);
}

const computeTranslationRatio = compiledCatalog => {
  const allMessages = Object.keys(compiledCatalog.messages);
  const sameAsKeyCount = allMessages.filter(
    key => compiledCatalog.messages[key] === key
  ).length;

  return 1 - sameAsKeyCount / allMessages.length;
};

const writeLocaleMetadata = object => {
  return new Promise((resolve, reject) => {
    const content = [
      `// This file is generated by compile-translations.js script`,
      `// prettier-ignore`,
      `module.exports = ${JSON.stringify(object, null, 2)};`,
      ``,
    ].join('\n');
    fs.writeFile(getLocaleMetadataPath(), content, err => {
      if (err) return reject(err);

      resolve();
    });
  });
};

const sanitizeMessagePo = path => {
  return readUtf8File(path).then(content => {
    let forbiddenStringsFound = [];
    let forbiddenStrings = [
      {
        str: 'n\\\\',
        regex: /n\\\\/g,
      },
      {
        str: '\\\\',
        regex: /\\\\/g,
      },
      {
        str: '\\ n',
        regex: /\\ n/g,
      },
      {
        str: '\\ t',
        regex: /\\ t/g,
      },
      {
        str: '\\ ',
        regex: /\\ /g,
      },
    ];
    let sanitizedContent = content;
    forbiddenStrings.forEach(forbiddenString => {
      if (sanitizedContent.search(forbiddenString.regex) !== -1) {
        forbiddenStringsFound.push(forbiddenString);
        sanitizedContent = sanitizedContent.replace(forbiddenString.regex, ' ');
      }
    });

    return writeUtf8File(path, sanitizedContent).then(() => {
      return {
        forbiddenStringsFound,
      };
    });
  });
};

const lintMessagePo = (locale, path) => {
  return readUtf8File(path).then(content => {
    const errors = [];
    if (locale === 'pseudo_LOCALE' || locale === 'en') {
      return { errors };
    }

    const operatorWithBracketsCount = (content.match(/<operator>/g) || [])
      .length;
    const valueWithBracketsCount = (content.match(/<value>/g) || []).length;
    const subjectWithBracketsCount = (content.match(/<subject>/g) || []).length;

    if (operatorWithBracketsCount !== 4 && operatorWithBracketsCount !== 8) {
      errors.push({
        str:
          'Unexpected number of <operator>: verify the <operator> translations',
      });
    }
    if (valueWithBracketsCount !== 4 && valueWithBracketsCount !== 8) {
      errors.push({
        str: 'Unexpected number of <value>: verify the <value> translations',
      });
    }
    if (subjectWithBracketsCount !== 7 && subjectWithBracketsCount !== 11 && subjectWithBracketsCount !== 14) {
      // 7 is for no translations at all for <subject>, 14 is for all translated and
      // 11 is for only the ones before GDeveloppe 5.0 beta 106 translated.
      errors.push({
        str:
          'Unexpected number of <subject>: verify the <subject> translations',
      });
    }
    if (
      content.indexOf(`msgid "<subject> <operator> <value>"
msgstr "<subject> <operator> <value>"`) === -1 &&
      content.indexOf(`msgid "<subject> <operator> <value>"
msgstr ""`) === -1
    ) {
      errors.push({
        str:
          "Can't find an untranslated <subject> <operator> <value>: Double check these translations, they are surely wrongly done!",
      });
    }

    return {
      errors,
    };
  });
};

getLocales()
  .then(
    locales =>
      Promise.all(
        locales.map(locale => {
          return new Promise(resolve => {
            // Concatenate all message catalogs into a single one for lingui-js.
            const files = getLocaleSourceCatalogFiles(locale);

            if (files.length === 1) {
              // For languages with a single source ("en", "pseudo_LOCALE"),
              // don't concatenate anything.
              const cpResult = shell.cp(
                path.join(getLocalePath(locale), files[0]),
                path.join(getLocalePath(locale), 'messages.po')
              );

              return resolve({
                locale,
                shellOutput: {
                  code: cpResult.code,
                  stdout: cpResult.stdout,
                  stderr: cpResult.stderr,
                },
              });
            }

            // Run msgcat. Use --no-wrap to allow to sanitize the catalog with
            // regex/string replace.
            // Use --use-first to avoid merging multiple translations for the same
            // string.
            shell.exec(
              msgcat +
                ` --no-wrap --use-first ${files.join(' ')} -o messages.po`,
              {
                cwd: getLocalePath(locale),
                silent: true,
              },
              (code, stdout, stderr) =>
                resolve({
                  locale,
                  shellOutput: {
                    code,
                    stdout,
                    stderr,
                  },
                })
            );
          });
        })
      ),
    error => {
      shell.echo(
        `❌ Error(s) occurred while listing locales folders: ` + error
      );
      shell.exit(1);
      return;
    }
  )
  .then(results => {
    //Display success and errors while concatenating translation catalogs for each locale.
    const successes = results.filter(
      ({ shellOutput }) => shellOutput.code === 0
    );
    const failures = results.filter(
      ({ shellOutput }) => shellOutput.code !== 0
    );

    const successesLocales = successes.map(({ locale }) => locale).join(',');
    if (successesLocales) {
      shell.echo(`ℹ️ Concatened translations for ${successesLocales}.`);
    }
    if (failures.length) {
      failures.forEach(({ locale, shellOutput }) => {
        shell.echo(
          `❌ Error(s) occurred while concatening translations for ${locale}: ` +
            shellOutput.stderr
        );
      });
    }

    return successes.map(({ locale }) => locale);
  })
  .then(locales => {
    // "Sanitize" all catalogs by removing and warning about bad characters
    // in translations that would break js-lingui (incorrect ICU message format).
    return Promise.all(
      locales.map(locale =>
        sanitizeMessagePo(getLocaleCatalogPath(locale)).then(results => {
          if (results.forbiddenStringsFound.length) {
            shell.echo(
              `⚠️ Found forbidden strings for locale ${locale} (replaced by spaces):`
            );
            results.forbiddenStringsFound.forEach(({ str }) => {
              shell.echo(`  * Found ${str}`);
            });
          }
        })
      )
    ).then(() => locales);
  })
  .then(locales => {
    // "Lint" all catalogs to find common errors.
    return Promise.all(
      locales.map(locale =>
        lintMessagePo(locale, getLocaleCatalogPath(locale)).then(results => {
          if (results.errors.length) {
            shell.echo(`🚩 Found errors for locale ${locale}:`);
            results.errors.forEach(({ str }) => {
              shell.echo(`  * ${str}`);
            });
          }
        })
      )
    ).then(() => locales);
  })
  .then(locales => {
    // Launch "lingui compile" for transforming .PO files into
    // js files ready to be used with @lingui/react newIDE translations
    shell.exec('node node_modules/.bin/lingui compile', {
      cwd: newIdeAppPath,
    });

    return locales;
  })
  .then(locales => {
    // Compute some stats about the languages...
    return Promise.all(
      locales.map(locale => {
        const compiledCatalog = require(getLocaleCompiledCatalogPath(locale));

        return {
          languageCode: locale,
          languageName: getLocaleName(locale),
          languageNativeName: getLocaleNativeName(locale),
          translationRatio: computeTranslationRatio(compiledCatalog),
        };
      })
    );
  })
  .then(
    // ... and store the stats in LocaleMetadata.js, to be displayed/used
    // in the editor.
    localesMetadata => writeLocaleMetadata(localesMetadata),
    error => {
      shell.echo(
        `❌ Error(s) occurred while computing ${getLocaleMetadataPath()}: ` +
          error
      );
      shell.exit(1);
      return;
    }
  )
  .then(
    () => {
      shell.echo(
        `✅ Translations compiled and metadata written in ${getLocaleMetadataPath()}`
      );
      shell.exit(0);
      return;
    },
    error => {
      shell.echo(
        `❌ Error(s) occurred while writing ${getLocaleMetadataPath()}: ` +
          error
      );
      shell.exit(1);
      return;
    }
  );
