// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdEventsFunction {
  static Action: 0;
  static Condition: 1;
  static Expression: 2;
  static StringExpression: 3;
  constructor(): void;
  clone(): gdEventsFunction;
  setDescription(description: string): gdEventsFunction;
  getDescription(): string;
  setName(name: string): gdEventsFunction;
  getName(): string;
  setFullName(fullName: string): gdEventsFunction;
  getFullName(): string;
  setSentence(sentence: string): gdEventsFunction;
  getSentence(): string;
  setGroup(group: string): gdEventsFunction;
  getGroup(): string;
  setPrivate(isPrivate: boolean): gdEventsFunction;
  isPrivate(): boolean;
  setFunctionType(type: EventsFunction_FunctionType): gdEventsFunction;
  getFunctionType(): EventsFunction_FunctionType;
  getEvents(): gdEventsList;
  getParameters(): gdVectorParameterMetadata;
  getObjectGroups(): gdObjectGroupsContainer;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(project: gdProject, element: gdSerializerElement): void;
  delete(): void;
  ptr: number;
};