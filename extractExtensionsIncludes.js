/**
 * A utility to extract includes for extensions. 
 * See https://github.com/arthuro555/GDevelop/tree/gdmod-generate-includes-list 
 * for all the patches needed to run this.
 * @fileoverview
 */

const initializeGDevelopJs = require("./newIDE/app/public/libGD.js");
const { mapVector } = require("./newIDE/app/scripts/lib/MapFor");
const { readdirSync, existsSync, writeFileSync } = require("fs");

const loadExtension = (
  gd /*: any */,
  platform /*: gdJsPlatform*/,
  jsExtensionModule /*: JsExtensionModule*/
) /*: ExtensionLoadingResult*/ => {
  if (!jsExtensionModule.createExtension) {
    return {
      message:
        "Extension module found, but no createExtension method is exported",
      error: true,
    };
  }

  let extension = null;
  try {
    extension = jsExtensionModule.createExtension((_) => _, gd);
    if (!extension) {
      return {
        message: `createExtension did not return any extension. Did you forget to return the extension created?`,
        error: true,
      };
    }
  } catch (ex) {
    return {
      message: `🚨 Exception caught while running createExtension. 💣 Please fix this error as this will make GDevelop crash at some point.`,
      error: true,
      dangerous: true,
      rawError: ex,
    };
  }

  platform.addNewExtension(extension);
  extension.delete(); // Release the extension as it was copied inside gd.JsPlatform

  return {
    message: "✅ Successfully loaded the extension.",
    error: false,
  };
};

function loadExtensions(gd) /*: JsExtensionsLoader*/ {
  const extensionModulePaths = readdirSync("Extensions")
    .map((path) => "./Extensions/" + path + "/JsExtension.js")
    .filter((path) => existsSync(path));
  return Promise.all(
    extensionModulePaths.map((extensionModulePath) => {
      let extensionModule = null;
      try {
        extensionModule = require(extensionModulePath, {
          rethrowException: true,
        });
      } catch (ex) {
        return {
          extensionModulePath,
          result: {
            message:
              "Unable to import extension. Please check for any syntax error or error that would prevent it from being run.",
            error: true,
            rawError: ex,
          },
        };
      }

      return {
        extensionModulePath,
        result: loadExtension(gd, gd.JsPlatform.get(), extensionModule),
      };
    })
  );
}

const mapMap = (map, func) => {
  const result = [];
  for (let i of map.keys().toJSArray()) {
    result.push(func(map.get(i)));
  }
  return result;
};

initializeGDevelopJs().then((gd) => {
  loadExtensions(gd).then((loadingResults) => {
    const platformExtensions = gd.JsPlatform.get().getAllPlatformExtensions();

    const allIncludes = {};

    mapVector(platformExtensions, (extension, extensionIndex) => {
      const extIncludes = new Set();

      function getIncludes(instructionList) {
        mapMap(instructionList, (instruction) => {
          mapVector(
            instruction.getCodeExtraInformation().getIncludeFiles(),
            (include, _) => {
              extIncludes.add(include);
            }
          );
        });
      }

      // Get common Includes
      getIncludes(extension.getAllActions());
      getIncludes(extension.getAllConditions());
      getIncludes(extension.getAllExpressions());
      getIncludes(extension.getAllStrExpressions());

      // Get effects includes
      mapVector(extension.getExtensionEffectTypes(), (effectType) => {
        mapVector(
          extension.getEffectMetadata(effectType).getIncludeFiles(),
          (include, _) => {
            extIncludes.add(include);
          }
        );
      });

      // Get object includes
      mapVector(extension.getExtensionObjectsTypes(), (objectType) => {
        mapVector(
          extension.getObjectMetadata(objectType).getIncludeFiles(),
          (include, _) => {
            extIncludes.add(include);
          }
        );

        getIncludes(extension.getAllActionsForObject(objectType));
        getIncludes(extension.getAllConditionsForObject(objectType));
        getIncludes(extension.getAllExpressionsForObject(objectType));
        getIncludes(extension.getAllStrExpressionsForObject(objectType));
      });

      // Get behavior includes
      mapVector(extension.getBehaviorsTypes(), (behaviorType) => {
        mapVector(
          extension.getBehaviorMetadata(behaviorType).getIncludeFiles(),
          (include, _) => {
            extIncludes.add(include);
          }
        );

        getIncludes(extension.getAllActionsForBehavior(behaviorType));
        getIncludes(extension.getAllConditionsForBehavior(behaviorType));
        getIncludes(extension.getAllExpressionsForBehavior(behaviorType));
        getIncludes(extension.getAllStrExpressionsForBehavior(behaviorType));
      });

      allIncludes[extension.getName()] = [...extIncludes];
    });

    // Clean up list
    for (let i in allIncludes) {
      let includeList = allIncludes[i];
      for (let include in includeList) {
        includeName = includeList[include];
        if (
          includeName.indexOf("cocos") !== -1 ||
          includeName.indexOf(".js") === -1 ||
          includeName.indexOf("Extensions") === -1
        )
          includeList.splice(include, 1);
      }
      if (typeof includeList.length === "undefined" || includeList.length === 0)
        delete allIncludes[i];
    }

    writeFileSync("result.json", JSON.stringify(allIncludes, null, 2));
    console.log("✅ Wrote result in result.json");
  });
});
