// Note: this file does not use export/imports and use Flow comments to allow its usage from Node.js

// @ts-expect-error - TS2451 - Cannot redeclare block-scoped variable 'loadExtension'.
const { loadExtension } = require('.');
// @ts-expect-error - TS2451 - Cannot redeclare block-scoped variable 'optionalRequire'.
const optionalRequire = require('../Utils/OptionalRequire');
const { findJsExtensionModules } = require('./LocalJsExtensionsFinder');

/*flow-include
import type {JsExtensionsLoader, TranslationFunction} from '.';
import ObjectsEditorService from '../ObjectEditor/ObjectsEditorService';
import ObjectsRenderingService from '../ObjectsRendering/ObjectsRenderingService';

type MakeExtensionsLoaderArguments = {|
  gd: any,
  objectsEditorService: typeof ObjectsEditorService,
  objectsRenderingService: typeof ObjectsRenderingService,
  filterExamples: boolean,
  onFindGDJS?: ?() => Promise<{gdjsRoot: string}>
|};
*/

/**
 * Loader that will find all JS extensions declared in GDJS/Runtime/Extensions/xxx/JsExtension.js.
 * If you add a new extension and also want it to be available for the web-app version, add it in
 * BrowserJsExtensionsLoader.js
 */
module.exports = function makeExtensionsLoader(
  {
// @ts-expect-error - TS7031 - Binding element 'gd' implicitly has an 'any' type.
    gd,
// @ts-expect-error - TS7031 - Binding element 'objectsEditorService' implicitly has an 'any' type.
    objectsEditorService,
// @ts-expect-error - TS7031 - Binding element 'objectsRenderingService' implicitly has an 'any' type.
    objectsRenderingService,
// @ts-expect-error - TS7031 - Binding element 'filterExamples' implicitly has an 'any' type.
    filterExamples,
// @ts-expect-error - TS7031 - Binding element 'onFindGDJS' implicitly has an 'any' type.
    onFindGDJS,
  } /*: MakeExtensionsLoaderArguments*/
) /*: JsExtensionsLoader*/ {
  return {
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type.
    loadAllExtensions: (_ /*: TranslationFunction */) => {
      return findJsExtensionModules({ filterExamples, onFindGDJS }).then(
// @ts-expect-error - TS7006 - Parameter 'extensionModulePaths' implicitly has an 'any' type.
        extensionModulePaths => {
          return Promise.all(
// @ts-expect-error - TS7006 - Parameter 'extensionModulePath' implicitly has an 'any' type.
            extensionModulePaths.map(extensionModulePath => {
              let extensionModule = null;
              try {
                extensionModule = optionalRequire(extensionModulePath, {
                  rethrowException: true,
                });
              } catch (ex: any) {
                return {
                  extensionModulePath,
                  result: {
                    message:
                      'Unable to import extension. Please check for any syntax error or error that would prevent it from being run.',
                    error: true,
                    rawError: ex,
                  },
                };
              }

              if (!extensionModule) {
                return {
                  extensionModulePath,
                  result: {
                    error: true,
                    message:
                      'Unknown error. Please check for any syntax error or error that would prevent it from being run.',
                  },
                };
              }

              if (
                objectsEditorService &&
                extensionModule.registerEditorConfigurations
              ) {
                extensionModule.registerEditorConfigurations(
                  objectsEditorService
                );
              }

              if (objectsRenderingService) {
                if (extensionModule.registerInstanceRenderers) {
                  extensionModule.registerInstanceRenderers(
                    objectsRenderingService
                  );
                }
                if (extensionModule.registerClearCache) {
                  extensionModule.registerClearCache(objectsRenderingService);
                }
              }

              return {
                extensionModulePath,
                result: loadExtension(
                  _,
                  gd,
                  gd.JsPlatform.get(),
                  extensionModule
                ),
              };
            })
          );
        },
// @ts-expect-error - TS7006 - Parameter 'err' implicitly has an 'any' type.
        err => {
          console.error(`Unable to find JS extensions modules`);
          throw err;
        }
      );
    },
  };
};
