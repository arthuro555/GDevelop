import { mapFor } from '../Utils/MapFor';

export type ObjectFolderOrObjectWithContext = {
  objectFolderOrObject: gd.ObjectFolderOrObject;
  global: boolean;
};

export const getObjectFolderOrObjectUnifiedName = (
  objectFolderOrObject: gd.ObjectFolderOrObject
) =>
  objectFolderOrObject.isFolder()
    ? objectFolderOrObject.getFolderName()
    : objectFolderOrObject.getObject().getName();

const recursivelyEnumerateFoldersInFolder = (
  folder: gd.ObjectFolderOrObject,
  prefix: string,
  result: {
    path: string;
    folder: gd.ObjectFolderOrObject;
  }[]
) => {
  mapFor(0, folder.getChildrenCount(), (i) => {
    const child = folder.getChildAt(i);
    if (child.isFolder()) {
      const newPrefix = prefix
        ? prefix + ' > ' + child.getFolderName()
        : child.getFolderName();
      result.push({
        path: newPrefix,
        folder: child,
      });
      recursivelyEnumerateFoldersInFolder(child, newPrefix, result);
    }
  });
};

const recursivelyEnumerateObjectsInFolder = (
  folder: gd.ObjectFolderOrObject,
  result: gd.Object[]
) => {
  mapFor(0, folder.getChildrenCount(), (i) => {
    const child = folder.getChildAt(i);
    if (!child.isFolder()) {
      result.push(child.getObject());
    } else {
      recursivelyEnumerateObjectsInFolder(child, result);
    }
  });
};

export const enumerateObjectsInFolder = (
  folder: gd.ObjectFolderOrObject
): gd.Object[] => {
  if (!folder.isFolder()) return [];
  const result: Array<gd.Object> = [];
  recursivelyEnumerateObjectsInFolder(folder, result);
  return result;
};

export const enumerateFoldersInFolder = (
  folder: gd.ObjectFolderOrObject
): {
  path: string;
  folder: gd.ObjectFolderOrObject;
}[] => {
  if (!folder.isFolder()) return [];
  const result: Array<{
    folder: gd.ObjectFolderOrObject;
    path: string;
  }> = [];
  recursivelyEnumerateFoldersInFolder(folder, '', result);
  return result;
};

export const enumerateFoldersInContainer = (
  container: gd.ObjectsContainer
): {
  path: string;
  folder: gd.ObjectFolderOrObject;
}[] => {
  const rootFolder = container.getRootFolder();
  const result: Array<{
    folder: gd.ObjectFolderOrObject;
    path: string;
  }> = [];
  recursivelyEnumerateFoldersInFolder(rootFolder, '', result);
  return result;
};

export const getObjectsInFolder = (
  objectFolderOrObject: gd.ObjectFolderOrObject
): gd.Object[] => {
  if (!objectFolderOrObject.isFolder()) return [];

  return mapFor(0, objectFolderOrObject.getChildrenCount(), (i) => {
    const child = objectFolderOrObject.getChildAt(i);
    if (child.isFolder()) {
      return null;
    }
    return child.getObject();
  }).filter(Boolean);
};

export const getFoldersAscendanceWithoutRootFolder = (
  objectFolderOrObject: gd.ObjectFolderOrObject
): gd.ObjectFolderOrObject[] => {
  if (objectFolderOrObject.isRootFolder()) return [];
  const parent = objectFolderOrObject.getParent();
  if (parent.isRootFolder()) return [];
  return [parent, ...getFoldersAscendanceWithoutRootFolder(parent)];
};
