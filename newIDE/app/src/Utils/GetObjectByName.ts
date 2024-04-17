export default function getObjectByName(
  globalObjectsContainer: gd.ObjectsContainer,
  objectsContainer: gd.ObjectsContainer | null | undefined,
  objectName: string
): gd.Object | null | undefined {
  if (objectsContainer && objectsContainer.hasObjectNamed(objectName))
    return objectsContainer.getObject(objectName);
  else if (globalObjectsContainer.hasObjectNamed(objectName))
    return globalObjectsContainer.getObject(objectName);

  return null;
}
