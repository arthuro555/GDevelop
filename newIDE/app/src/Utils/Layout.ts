
export const getInstancesInLayoutForObject = (initialInstancesContainer: gd.InitialInstancesContainer, objectName: string): Array<gd.InitialInstance> => {
  if (initialInstancesContainer.getInstancesCount() === 0) return [];
  const objectInstances: Array<gd.InitialInstance> = [];
  const instanceGetter = new gd.InitialInstanceJSFunctor();
  instanceGetter.invoke = instancePtr: any => {
    const instance: gd.InitialInstance = gd.wrapPointer(
      instancePtr,
      gd.InitialInstance
    );
    if (instance.getObjectName() === objectName) {
      objectInstances.push(instance);
    }
  };
  initialInstancesContainer.iterateOverInstances(instanceGetter);
  instanceGetter.delete();
  return objectInstances;
};

export const getInstancesInLayoutForLayer = (initialInstancesContainer: gd.InitialInstancesContainer, layerName: string): Array<gd.InitialInstance> => {
  if (initialInstancesContainer.getInstancesCount() === 0) return [];
  const objectInstances: Array<gd.InitialInstance> = [];
  const instanceGetter = new gd.InitialInstanceJSFunctor();
  instanceGetter.invoke = instancePtr: any => {
    const instance: gd.InitialInstance = gd.wrapPointer(
      instancePtr,
      gd.InitialInstance
    );
    if (instance.getLayer() === layerName) {
      objectInstances.push(instance);
    }
  };
  initialInstancesContainer.iterateOverInstances(instanceGetter);
  instanceGetter.delete();
  return objectInstances;
};

export const getInstanceCountInLayoutForObject = (initialInstancesContainer: gd.InitialInstancesContainer, objectName: string): number => {
  return getInstancesInLayoutForObject(initialInstancesContainer, objectName)
    .length;
};
