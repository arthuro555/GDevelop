/*
 * This file provides an example of how the IDE can register type context, for typechecking and autocompletions.
 */

declare module 'gd-ide-context' {
  import type {
    ObjectDeclaration,
    BehaviorDeclaration,
    VariableDeclaration,
    AnyObjectDeclaration,
  } from 'gd-ide-context';

  interface AvailableObjects {
    Object: ObjectDeclaration<
      {
        Platformer: BehaviorDeclaration<''>;
        PathFindingObstacle: BehaviorDeclaration<''>;
      },
      {
        Angle: VariableDeclaration<'number'>;
        Position: VariableDeclaration<
          'structure',
          {
            X: VariableDeclaration<'number'>;
            Y: VariableDeclaration<'number'>;
          }
        >;
      },
      'Sprite'
    >;
  }

  interface FunctionArguments {
    Variable: gdjs.Variable;
    X: number;
    Y: number;
  }

}

const eventsFunctionContext = ({} as unknown) as EventsFunctionContext;
const runtimeScene = ({} as unknown) as gdjs.RuntimeScene;

const behaviorName = eventsFunctionContext.getBehaviorName(
  'PathFindingObstacle'
);
const object = eventsFunctionContext.getObjects('Object');
const otherObjects = runtimeScene.getInstancesOf('Object');
const otherOtherObjects = runtimeScene.getObjects('Object');
const nonExistant = runtimeScene.getObjects("unkown")

const b = object[0].getBehavior('PathFindingObstacle');
