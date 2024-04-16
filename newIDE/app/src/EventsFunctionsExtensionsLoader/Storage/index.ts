export type EventsFunctionsExtensionOpener = {
  chooseEventsFunctionExtensionFile: () => Promise<any | null | undefined>,
  readEventsFunctionExtensionFile: (filepath?: any) => Promise<any>
};

export type EventsFunctionsExtensionWriter = {
  chooseEventsFunctionExtensionFile: (extensionName?: string) => Promise<string | null | undefined>,
  writeEventsFunctionsExtension: (extension: gdEventsFunctionsExtension, filepath: string) => Promise<void>
};
