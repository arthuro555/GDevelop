// @flow

export const isRelativePathToDocumentationRoot = (path: string) => {
  return path.startsWith('/');
};

export const isDocumentationAbsoluteUrl = (path: string) => {
  return path.startsWith('http://') || path.startsWith('https://');
};

export const getHelpLink = (path: string): string => {
  if (isRelativePathToDocumentationRoot(path))
    return `http://wiki.compilgames.net/doku.php/GDeveloppe5${path}?utm_source=GDeveloppe&utm_medium=help-link`;

  if (isDocumentationAbsoluteUrl(path)) return path;

  return '';
};
