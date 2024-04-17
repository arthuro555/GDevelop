import { mapFor } from '../Utils/MapFor';

export const enumerateLayouts = (project: gd.Project): Array<gd.Layout> =>
  mapFor(0, project.getLayoutsCount(), (i) => project.getLayoutAt(i));

export const enumerateExternalEvents = (
  project: gd.Project
): Array<gd.ExternalEvents> =>
  mapFor(0, project.getExternalEventsCount(), (i) =>
    project.getExternalEventsAt(i)
  );

export const enumerateExternalLayouts = (
  project: gd.Project
): Array<gd.ExternalLayout> =>
  mapFor(0, project.getExternalLayoutsCount(), (i) =>
    project.getExternalLayoutAt(i)
  );

export const enumerateEventsFunctionsExtensions = (
  project: gd.Project
): Array<gd.EventsFunctionsExtension> =>
  mapFor(0, project.getEventsFunctionsExtensionsCount(), (i) =>
    project.getEventsFunctionsExtensionAt(i)
  );

export const filterProjectItemsList = <T>(
  list: Array<T>,
  searchText: string
): Array<T> => {
  if (!searchText) return list;

  const lowercaseSearchText = searchText.toLowerCase();

  return list.filter(
    (item: any) =>
      item.getName().toLowerCase().indexOf(lowercaseSearchText) !== -1
  );
};
