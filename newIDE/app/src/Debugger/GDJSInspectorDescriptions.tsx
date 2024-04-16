import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Inspectors/RuntimeObjectInspector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Inspectors/RuntimeObjectInspector.tsx', but '--jsx' is not set.
import RuntimeObjectInspector from './Inspectors/RuntimeObjectInspector';
// @ts-expect-error - TS6142 - Module './Inspectors/VariablesContainerInspector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Inspectors/VariablesContainerInspector.tsx', but '--jsx' is not set.
import VariablesContainerInspector from './Inspectors/VariablesContainerInspector';
// @ts-expect-error - TS6142 - Module './Inspectors/RuntimeSceneInspector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Inspectors/RuntimeSceneInspector.tsx', but '--jsx' is not set.
import RuntimeSceneInspector from './Inspectors/RuntimeSceneInspector';

export type GameData = any;
export type EditFunction = (path: Array<string>, newValue?: any) => boolean;
export type CallFunction = (path: Array<string>, args: Array<any>) => boolean;

export type InspectorDescriptionsGetter = (gameData: GameData) => Array<InspectorDescription>; //eslint-disable-line

export type InspectorDescription = {
  label: string,
  key: string | Array<string>,
  renderInspector: (
    gameData: GameData,
    arg2: {
      onCall: CallFunction,
      onEdit: EditFunction
    },
  ) => React.ReactElement,
  getSubInspectors?: InspectorDescriptionsGetter,
  initiallyOpen?: boolean
};

/**
 * Returns the list of inspectors, given the data coming from a GDJS RuntimeGame.
 * @param {*} gdjsRuntimeGame
 */
export const getInspectorDescriptions = (gdjsRuntimeGame: GameData): Array<InspectorDescription> => {
  return [
    {
      label: 'Global variables',
      key: '_variables',
      renderInspector: (gameData, { onCall, onEdit }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <VariablesContainerInspector
          variablesContainer={gameData}
          onCall={onCall}
          onEdit={onEdit}
        />
      ),
    },
    {
      label: 'Scenes',
      key: ['_sceneStack', '_stack'],
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      renderInspector: () => null,
      initiallyOpen: true,
      getSubInspectors: gdjsStack => {
        if (!gdjsStack) return [];

// @ts-expect-error - TS7006 - Parameter 'runtimeScene' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
        return gdjsStack.map((runtimeScene, index) => ({
          label: runtimeScene._name,
          key: index,
// @ts-expect-error - TS7006 - Parameter 'gameData' implicitly has an 'any' type. | TS7031 - Binding element 'onCall' implicitly has an 'any' type. | TS7031 - Binding element 'onEdit' implicitly has an 'any' type.
          renderInspector: (gameData, { onCall, onEdit }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RuntimeSceneInspector
              runtimeScene={gameData}
              onCall={onCall}
              onEdit={onEdit}
            />
          ),
          initiallyOpen: true,
// @ts-expect-error - TS7006 - Parameter 'runtimeScene' implicitly has an 'any' type.
          getSubInspectors: runtimeScene => [
            {
              label: 'Scene variables',
              key: `_variables`,
// @ts-expect-error - TS7006 - Parameter 'gameData' implicitly has an 'any' type. | TS7031 - Binding element 'onCall' implicitly has an 'any' type. | TS7031 - Binding element 'onEdit' implicitly has an 'any' type.
              renderInspector: (gameData, { onCall, onEdit }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <VariablesContainerInspector
                  variablesContainer={gameData}
                  onCall={onCall}
                  onEdit={onEdit}
                />
              ),
            },
            {
              label: 'Instances',
              key: `_instances`,
              renderInspector: () => null,
              initiallyOpen: true,
// @ts-expect-error - TS7006 - Parameter 'instances' implicitly has an 'any' type.
              getSubInspectors: instances => {
                if (!instances || !instances.items) return [];

                return Object.keys(instances.items).map(objectName => {
                  if (
                    !instances.items[objectName] ||
                    typeof instances.items[objectName].length === 'undefined'
                  )
                    return null;

                  return {
                    label: `${objectName} (${
                      instances.items[objectName].length
                    })`,
                    key: ['items', objectName],
                    renderInspector: () => null,
// @ts-expect-error - TS7006 - Parameter 'instancesList' implicitly has an 'any' type.
                    getSubInspectors: instancesList =>
                      instancesList
                        ? instancesList
// @ts-expect-error - TS7006 - Parameter 'runtimeObject' implicitly has an 'any' type.
                            .filter(runtimeObject => !!runtimeObject)
// @ts-expect-error - TS7006 - Parameter 'runtimeObject' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
                            .map((runtimeObject, index) => {
                              return {
                                label: `#${runtimeObject.id}`,
                                key: index,
                                renderInspector: (
// @ts-expect-error - TS7006 - Parameter 'gameData' implicitly has an 'any' type.
                                  gameData,
// @ts-expect-error - TS7031 - Binding element 'onCall' implicitly has an 'any' type. | TS7031 - Binding element 'onEdit' implicitly has an 'any' type.
                                  { onCall, onEdit }
                                ) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <RuntimeObjectInspector
                                    runtimeObject={gameData}
                                    onCall={onCall}
                                    onEdit={onEdit}
                                  />
                                ),
                              };
                            })
                        : [],
                  };
                });
              },
            },
          ],
        }));
      },
    },
  ];
};
