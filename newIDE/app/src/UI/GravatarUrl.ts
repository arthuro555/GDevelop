// @ts-expect-error - TS7016 - Could not find a declaration file for module 'blueimp-md5'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/blueimp-md5/js/md5.js' implicitly has an 'any' type.
import md5 from 'blueimp-md5';

export const getGravatarUrl = (
  email: string,
  {
    size,
  }: {
    size: number
  } = { size: 40 },
): string => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=retro`;
};
