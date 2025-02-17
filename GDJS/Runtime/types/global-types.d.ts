/*
 * GDevelop JS Platform
 * Copyright 2013-present Florian Rival (Florian.Rival@gmail.com). All rights reserved.
 * This project is released under the MIT License.
 */

/** An integer. Use this instead of `number` to ease future optimizations. */
declare type integer = number;

/** A floating point number. Use this instead of `number` to ease future optimizations. */
declare type float = number;

/** A point in cartesian space. */
declare type FloatPoint = [number, number];

/** A Hastable with the picked objects lists. */
declare type ObjectsLists = Hashtable<gdjs.RuntimeObject[]>;

/**
 * A neat utility type that ransforms a complex generic type into its concrete shape.
 * Useful for debugging type issues.
 *
 * Usage:
 * ```
 * // Hover the `test` variable with your cursor in VsCode to visualize the concrete type.
 * type test = Prettify<MyComplexGenericType>;
 * ```
 */
declare type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

declare module 'gd-ide-context' {
  /**
   * Extensions should extend this interface to register object types.
   */
  export interface ObjectTypes<T extends AnyObjectDeclaration> {}
  /**
   * Extensions should extend this interface to register behavior types.
   */
  export interface BehaviorTypes {}

  /**
   * Extend this interface to register objects available in the current scope.
   */
  export interface AvailableObjects {}
  /**
   * Extend this interface to register layers available in the current scope.
   */
  export interface AvailableLayers {
    // The base ('') layer is always available.
    '': true;
  }

  /**
   * Extend this interface to register arguments available to the current function.
   */
  export interface FunctionArguments {}
  /**
   * Extend this interface to set the property `returnType` to the function's return type.
   */
  export interface FunctionReturnType {}

  // IDE Context declarations
  export type VariableDeclaration<
    Type extends VariableType,
    Children extends Type extends 'structure'
      ? Record<string, VariableDeclaration<any, any>>
      : Type extends 'array'
      ? VariableDeclaration<any, any>[]
      : never = Type extends 'structure'
      ? {}
      : Type extends 'array'
      ? []
      : never
  > = {
    type: Type;
    children: Children;
  };
  export type BehaviorDeclaration<RuntimeType extends keyof BehaviorTypes> = {
    runtimeType: RuntimeType;
  };
  export type ObjectDeclaration<
    Behaviors extends Record<string, BehaviorDeclaration<any>>,
    Variables extends Record<string, VariableDeclaration<any, any>>,
    RuntimeType extends keyof ObjectTypes
  > = {
    behaviors: Behaviors;
    variables: Variables;
    runtimeType: RuntimeType;
  };

  export type AnyVariableDeclaration = VariableDeclaration<
    VariableType,
    unknown
  >;
  export type AnyBehaviorDeclaration = BehaviorDeclaration<keyof BehaviorTypes>;
  export type AnyObjectDeclaration = ObjectDeclaration<
    Record<string, AnyBehaviorDeclaration>,
    Record<string, AnyVariableDeclaration>,
    keyof ObjectTypes
  >;

  // Utility type to get autocomplete while allowing any string
  type LooseAutocomplete<T extends string> = T | Omit<string, T>;

  // Objects in-scope
  export type GetObjectNamesInScope = LooseAutocomplete<
    Extract<keyof AvailableObjects, string>
  >;
  export type GetObjectInScope<
    Name extends GetObjectNamesInScope
  > = Name extends keyof AvailableObjects
    ? AvailableObjects[Name] extends AnyObjectDeclaration
      ? AvailableObjects[Name]
      : unknown
    : unknown;

  // Layers in-scope
  export type GetLayerNamesInScope = LooseAutocomplete<
    Extract<keyof AvailableLayers, string>
  >;

  // Behavior of objects
  export type GetBehaviorNamesOf<
    Object extends AnyObjectDeclaration
  > = LooseAutocomplete<Extract<keyof Object['behaviors'], string>>;
  export type GetBehaviorOf<
    Object extends AnyObjectDeclaration,
    BehaviorName extends GetBehaviorNamesOf<Object>
  > = Object['behaviors'][BehaviorName] extends AnyBehaviorDeclaration
    ? Object['behaviors'][BehaviorName]
    : unknown;

  // Extract runtime types
  type GetRuntimeTypeOfObject<
    ObjectDeclaration extends AnyObjectDeclaration
  > = ObjectDeclaration extends AnyObjectDeclaration
    ? ObjectTypes<ObjectDeclaration>[ObjectDeclaration['runtimeType']]
    : // Fallback if unknown name has been given
      gdjs.RuntimeObject;
  type GetRuntimeTypeOfBehavior<
    BehaviorDeclaration extends AnyObjectDeclaration
  > = BehaviorDeclaration extends AnyBehaviorDeclaration
    ? BehaviorTypes[HasRuntimeType['runtimeType']]
    : // Fallback if unknown name has been given
      gdjs.RuntimeBehavior;

  export type GetObjectType<
    Name extends GetObjectNamesInScope
  > = GetRuntimeTypeOfObject<GetObjectInScope<Name>>;
  export type GetBehaviorType<
    Object extends AnyObjectDeclaration,
    Name extends GetBehaviorNamesOf<Object>
  > = GetRuntimeTypeOfBehavior<GetBehaviorOf<Object, Name>>;

  // Registered object kinds
  export type GetRegisteredObjectTypes = Extract<keyof ObjectTypes, string>;
  type ObjectCtor<T> = (new (
    runtimeScene: RuntimeInstanceContainer,
    objectData: any
  ) => T) &
    typeof gdjs.RuntimeObject;
  export type GetRegisteredObjectCtor<
    Type extends keyof ObjectTypes
  > = ObjectCtor<ObjectTypes[Type]>;

  // Registered behavior kinds
  export type GetRegisteredBehaviorTypes = Extract<keyof BehaviorTypes, string>;
  type BehaviorCtor<T> = new (
    runtimeScene: RuntimeInstanceContainer,
    behaviorData: BehaviorData & any,
    parent: gdjs.RuntimeObject & any
  ) => T;
  export type GetRegisteredBehaviorCtor<
    Type extends keyof BehaviorTypes
  > = BehaviorCtor<BehaviorTypes[Type]>;

  // Events functions
  export type GetEventFunctionBehaviorNames = GetBehaviorNamesOf<
    GetObjectInScope<'Object'>
  >;
  export type GetEventFunctionArgumentNames = Extract<
    keyof FunctionArguments,
    string
  >;
  export type GetEventFunctionArgumentType<
    Name extends string
  > = Name extends keyof FunctionArguments ? FunctionArguments[Name] : never;
  export type GetEventFunctionReturnValue = 'returnType' extends keyof FunctionReturnType
    ? FunctionReturnType['returnType']
    : boolean | number | string;
}

/**
 * Represents the context of the events function (or the behavior method),
 * if any. If the JavaScript code is running in a scene, this will be undefined (so you can't use this in a scene).
 */
declare type EventsFunctionContext = {
  /**
   * If the action in which the JavaScript runs is asynchronous, this will be non-null and
   * allows to mark the action as finished by calling `task.resolve()`.
   */
  task?: gdjs.ManuallyResolvableTask;

  /**  Get the list of instances of the specified object. */
  getObjects: <
    ObjectName extends import('gd-ide-context').GetObjectNamesInScope
  >(
    objectName: ObjectName
  ) => Array<import('gd-ide-context').GetObjectType<ObjectName>>;

  /**
   * Get the Hashtable containing the lists of instances of the specified object.
   * You can alter the list and this will alter the objects picked for the next conditions/actions/events.
   * If you don't need this, prefer using `getObjects`.
   */
  getObjectsLists: (
    objectName: import('gd-ide-context').GetObjectNamesInScope
  ) => ObjectsLists | null;

  /**  Get the "real" behavior name, that can be used with `getBehavior`. For example: `object.getBehavior(eventsFunctionContext.getBehaviorName("MyBehavior"))` */
  getBehaviorName: (
    behaviorName: import('gd-ide-context').GetEventFunctionBehaviorNames
  ) => string;

  /**  Create a new object from its name. The object is added to the instances living on the scene. */
  createObject: <
    ObjectName extends import('gd-ide-context').GetObjectNamesInScope
  >(
    objectName: ObjectName
  ) => import('gd-ide-context').GetObjectType<ObjectName>;

  /** Return the number of instances of the specified object on the scene. */
  getInstancesCountOnScene: (
    objectName: import('gd-ide-context').GetObjectNamesInScope
  ) => integer;

  /**  Get the value (string, number, boolean or a `gdjs.Variable`) of an argument that was passed to the events function. To get **objects**, use `getObjects` instead. */
  getArgument: <
    Name extends import('gd-ide-context').GetEventFunctionArgumentNames
  >(
    argumentName: Name
  ) => import('gd-ide-context').GetEventFunctionArgumentType<Name>;

  /**
   * Set the return value that should be returned by the expression or the condition.
   * For example:
   *
   * ```js
   * // When the condition is true:
   * eventsFunctionContext.returnValue = true;
   * ```
   *
   * ```js
   * // To return a string for an expression:
   * eventsFunctionContext.returnValue = "Hello World";
   * ```
   */
  returnValue: import('gd-ide-context').GetEventFunctionReturnValue;

  /**  Do not use this. Use `runtimeScene.getLayer` instead. */
  getLayer: (
    layerName: import('gd-ide-context').GetLayerNamesInScope
  ) => gdjs.Layer;
};

declare namespace gdjs {
  var projectData: ProjectData;
  var runtimeGameOptions: gdjs.RuntimeGameOptions;
}
