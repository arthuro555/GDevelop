const gd: libGDevelop = global.gd;

export const getInstancesInLayoutForObject = (initialInstancesContainer: gdInitialInstancesContainer, objectName: string): Array<gdInitialInstance> => {
  if (initialInstancesContainer.getInstancesCount() === 0) return [];
  const objectInstances: Array<gdInitialInstance> = [];
  const instanceGetter = new gd.InitialInstanceJSFunctor();
  instanceGetter.invoke = instancePtr: any => {
    const instance: gdInitialInstance = gd.wrapPointer(
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

export const getInstancesInLayoutForLayer = (initialInstancesContainer: gdInitialInstancesContainer, layerName: string): Array<gdInitialInstance> => {
  if (initialInstancesContainer.getInstancesCount() === 0) return [];
  const objectInstances: Array<gdInitialInstance> = [];
  const instanceGetter = new gd.InitialInstanceJSFunctor();
  instanceGetter.invoke = instancePtr: any => {
    const instance: gdInitialInstance = gd.wrapPointer(
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

export const getInstanceCountInLayoutForObject = (initialInstancesContainer: gdInitialInstancesContainer, objectName: string): number => {
  return getInstancesInLayoutForObject(initialInstancesContainer, objectName)
    .length;
};
