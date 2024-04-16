export const delay = (ms: number): Promise<void> => new Promise(res: (result: Promise<undefined> | undefined) => void => setTimeout(res, ms));
