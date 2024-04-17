import { mapVector } from '../Utils/MapFor';
import { ObjectFolderOrObjectWithContext } from '../ObjectsList/EnumerateObjectFolderOrObject';

export const cleanNonExistingObjectFolderOrObjectWithContexts = (
  globalObjectsContainer: gd.ObjectsContainer,
  objectsContainer: gd.ObjectsContainer,
  objectFolderOrObjectWithContexts: Array<ObjectFolderOrObjectWithContext>
): Array<ObjectFolderOrObjectWithContext> => {
  const allObjectFolderOrObjectPtrs = new Set<number>();
  mapVector(
    objectsContainer.getAllObjectFolderOrObjects(),

    (objectFolderOrObject) => {
      allObjectFolderOrObjectPtrs.add(gd.getPointer(objectFolderOrObject));
    }
  );
  mapVector(
    globalObjectsContainer.getAllObjectFolderOrObjects(),

    (objectFolderOrObject) => {
      allObjectFolderOrObjectPtrs.add(gd.getPointer(objectFolderOrObject));
    }
  );

  return objectFolderOrObjectWithContexts.filter(
    (objectFolderOrObjectWithContext) =>
      allObjectFolderOrObjectPtrs.has(
        gd.getPointer(objectFolderOrObjectWithContext.objectFolderOrObject)
      )
  );
};
