// See https://gist.github.com/jed/982883
// @ts-expect-error - TS7006 - Parameter 'a' implicitly has an 'any' type.
const generateUUID = (a): string => {
  return a
    ? // eslint-disable-next-line
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : // $FlowFixMe
// @ts-expect-error - TS2365 - Operator '+' cannot be applied to types 'number[]' and 'number'.
      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
};

const localStorageKey = 'gd-user-uuid';
let currentUserUuid: string | null | undefined = null;

export const resetUserUUID = (): string => {
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
  const newUserUUID = generateUUID();
  try {
    localStorage.setItem(localStorageKey, newUserUUID);
  } catch (e: any) {
    console.warn('Unable to save a new user UUID', e);
  }
  currentUserUuid = newUserUUID;
  return currentUserUuid;
};

export const getUserUUID = (): string => {
  if (currentUserUuid) return currentUserUuid;

  try {
    const storedUserUUID = localStorage.getItem(localStorageKey);
    if (storedUserUUID) {
      currentUserUuid = storedUserUUID;
      return storedUserUUID;
    }
  } catch (e: any) {
    console.warn('Unable to load stored user UUID', e);
  }

  return resetUserUUID();
};
