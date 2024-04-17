import optionalRequire from './OptionalRequire';
const os = optionalRequire('os') as typeof import('os');

export const getUID = () => {
  try {
    return os.userInfo().uid;
  } catch (e) {
    return '';
  }
};
