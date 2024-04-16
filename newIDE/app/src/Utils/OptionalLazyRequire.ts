// @ts-expect-error - TS7016 - Could not find a declaration file for module './OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from './OptionalRequire';

/**
 * Return a function that will load, only when called, the specified module name.
 *
 * As `optionalRequire`, this allows to require a Node.js/npm module without having it bundled by webpack.
 * This means that this module will only be available when running on Electron or Node.js.
 * When running without Electron or Node.js, `null` will be returned.
 */
export default function optionalLazyRequire(moduleName: string) {
  let moduleLoaded = false;
// @ts-expect-error - TS7034 - Variable 'module' implicitly has type 'any' in some locations where its type cannot be determined.
  let module = undefined;
  return (): any | null | undefined => {
    if (moduleLoaded) {
// @ts-expect-error - TS7005 - Variable 'module' implicitly has an 'any' type.
      return module;
    }

    console.info(`Lazy loading ${moduleName}...`);
    module = optionalRequire(moduleName);
    moduleLoaded = true;
    return module;
  };
}
