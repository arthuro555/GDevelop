export default function getObjectByName(
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer | null | undefined,
  objectName: string,
): gdObject | null | undefined {
  if (objectsContainer && objectsContainer.hasObjectNamed(objectName))
    return objectsContainer.getObject(objectName);
  else if (globalObjectsContainer.hasObjectNamed(objectName))
    return globalObjectsContainer.getObject(objectName);

  return null;
}
