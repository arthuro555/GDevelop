export const filterResourcesList = (
  list: Array<gd.Resource>,
  searchText: string
): Array<gd.Resource> => {
  if (!searchText) return list;

  const lowercaseSearchText = searchText.toLowerCase();

  return list.filter((resource: gd.Resource) => {
    return resource.getName().toLowerCase().indexOf(lowercaseSearchText) !== -1;
  });
};
