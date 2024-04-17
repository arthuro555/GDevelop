/**
 * Tool function to save a serializable object to a JS object.
 * Most gd.* objects are "serializable", meaning they have a serializeTo
 * and unserializeFrom method.
 *
 * @param {*} serializable
 * @param {*} methodName The name of the serialization method. "unserializeFrom" by default
 */
export function serializeToJSObject(
  serializable: gd.Serializable,
  methodName: string = 'serializeTo'
) {
  const serializedElement = new gd.SerializerElement();
  serializable[methodName](serializedElement);

  // JSON.parse + toJSON is 30% faster than gd.Serializer.toJSObject.
  const object = JSON.parse(gd.Serializer.toJSON(serializedElement));
  serializedElement.delete();

  return object;
}

export function serializeToObjectAsset(
  project: gd.Project,
  object: gd.Object,
  objectFullName: string,
  usedResourceNames: Array<string>
) {
  const usedResourceNamesVector = new gd.VectorString();
  const serializedElement = new gd.SerializerElement();
  gd.ObjectAssetSerializer.serializeTo(
    project,
    object,
    objectFullName,
    serializedElement,
    usedResourceNamesVector
  );
  usedResourceNames.push.apply(
    usedResourceNames,
    usedResourceNamesVector.toJSArray()
  );
  usedResourceNamesVector.delete();

  // JSON.parse + toJSON is 30% faster than gd.Serializer.toJSObject.
  const objectAsset = JSON.parse(gd.Serializer.toJSON(serializedElement));
  serializedElement.delete();

  return objectAsset;
}

/**
 * Tool function to save a serializable object to a JSON.
 * Most gd.* objects are "serializable", meaning they have a serializeTo
 * and unserializeFrom method.
 *
 * @param {*} serializable
 * @param {*} methodName The name of the serialization method. "unserializeFrom" by default
 */
export function serializeToJSON(
  serializable: gd.Serializable,
  methodName: string = 'serializeTo'
): string {
  const serializedElement = new gd.SerializerElement();
  serializable[methodName](serializedElement);

  // toJSON is 20% faster than gd.Serializer.toJSObject + JSON.stringify.
  const json = gd.Serializer.toJSON(serializedElement);
  serializedElement.delete();

  return json;
}

/**
 * Tool function to restore a serializable object from a JS object.
 * Most gd.* objects are "serializable", meaning they have a serializeTo
 * and unserializeFrom method.
 * @param {*} serializable A gd.* object to restore
 * @param {*} object The JS object to be used to restore the serializable.
 * @param {*} methodName The name of the unserialization method. "unserializeFrom" by default
 * @param {*} optionalProject The project to pass as argument for unserialization
 */
export function unserializeFromJSObject(
  serializable: gd.Serializable,
  object: any,
  methodName: string = 'unserializeFrom',
  optionalProject: gd.Project | null = undefined
) {
  const serializedElement = gd.Serializer.fromJSObject(object);
  if (!optionalProject) {
    serializable[methodName](serializedElement);
  } else {
    // It's not uncommon for unserializeFrom methods of gd.* classes
    // to require the project to be passed as first argument.
    serializable[methodName](optionalProject, serializedElement);
  }
  serializedElement.delete();
}
