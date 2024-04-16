// @ts-expect-error - TS7034 - Variable 'isWebGLAvailable' implicitly has type 'any' in some locations where its type cannot be determined.
let isWebGLAvailable = null;

export const isWebGLSupported = (): boolean => {
// @ts-expect-error - TS7005 - Variable 'isWebGLAvailable' implicitly has an 'any' type. | TS7005 - Variable 'isWebGLAvailable' implicitly has an 'any' type.
  if (isWebGLAvailable !== null) return isWebGLAvailable;
  try {
    const canvas = document.createElement('canvas');
    isWebGLAvailable =
      !!window.WebGLRenderingContext &&
      !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));

    return isWebGLAvailable;
  } catch (e: any) {
    isWebGLAvailable = false;
    return false;
  }
};
