// @ts-expect-error - TS7016 - Could not find a declaration file for module './OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from './OptionalRequire';
const os = optionalRequire('os');

export const getUID = () => {
  try {
    return os.userInfo().uid;
  } catch (e: any) {
    return '';
  }
};
