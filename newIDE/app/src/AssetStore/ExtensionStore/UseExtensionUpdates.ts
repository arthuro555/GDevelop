// @ts-expect-error - TS2616 - 'diff' can only be imported by using 'import diff = require("semver/functions/diff")' or a default import. | TS2497 - This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export.
import { diff } from 'semver/functions/diff';
import { useMemo } from 'react';
import type {
  ExtensionShortHeader,
  BehaviorShortHeader,
} from '../../Utils/GDevelopServices/Extension';

type UpdateType = 'patch' | 'minor' | 'major';
type UpdateMetadata = {
  type: UpdateType;
  currentVersion: string;
  newestVersion: string;
};

const getUpdateMetadataFromVersions = (
  currentVersion: string,
  newestVersion: string
): UpdateMetadata | null => {
  try {
    const versionDiff: UpdateType = diff(currentVersion, newestVersion);
    if (['patch', 'minor', 'major'].includes(versionDiff)) {
      return {
        type: versionDiff,
        currentVersion,
        newestVersion,
      };
    }
  } catch {
    // An error will be thrown here only if the version is not in semver.
    // Simply compare the strings for such extensions.
    // Note that this is an edge case, the extension repository enforces semver, so this
    // is only for local extensions that do not respect the best practices.
    if (currentVersion !== newestVersion) {
      return {
        // Use minor as it is the most neutral option
        type: 'minor',
        currentVersion,
        newestVersion,
      };
    }
  }

  return null;
};

export const useExtensionUpdate = (
  project: gd.Project,
  extension: ExtensionShortHeader | BehaviorShortHeader
): UpdateMetadata | null => {
  return useMemo<UpdateMetadata | null>(() => {
    // @ts-expect-error - TS2339 - Property 'extensionName' does not exist on type 'ExtensionShortHeader | BehaviorShortHeader'.
    const extensionName = extension.extensionName || extension.name;
    return project.hasEventsFunctionsExtensionNamed(extensionName)
      ? getUpdateMetadataFromVersions(
          project.getEventsFunctionsExtension(extensionName).getVersion(),
          extension.version
        )
      : null;
  }, [project, extension]);
};
