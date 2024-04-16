import React from 'react';
import {
  AssetShortHeader,
  Asset,
  Environment,
} from '../../Utils/GDevelopServices/Asset';
import {
  InstallAssetOutput,
  InstallAssetArgs,
} from '../InstallAsset';

export type PrivateAssetsState = {
  authorizationToken: string | null | undefined,
  updateAuthorizationToken: () => Promise<void>,
  fetchPrivateAsset: (
    assetShortHeader: AssetShortHeader,
    options: {
      environment: Environment
    },
  ) => Promise<Asset | null | undefined>,
  installPrivateAsset: (options: InstallAssetArgs) => Promise<InstallAssetOutput | null | undefined>,
  getPrivateAssetPackAudioArchiveUrl: (privateAssetPackId: string) => Promise<string | null>
};

const initialPrivateAssetsState = {
  authorizationToken: null,
  updateAuthorizationToken: async () => {},
// @ts-expect-error - TS7006 - Parameter 'assetShortHeader' implicitly has an 'any' type. | TS7006 - Parameter 'options' implicitly has an 'any' type.
  fetchPrivateAsset: async (assetShortHeader, options) => null,
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type.
  installPrivateAsset: async options => null,
// @ts-expect-error - TS7006 - Parameter 'id' implicitly has an 'any' type.
  getPrivateAssetPackAudioArchiveUrl: async id => null,
} as const;

const PrivateAssetsAuthorizationContext = React.createContext<PrivateAssetsState>(initialPrivateAssetsState);

export default PrivateAssetsAuthorizationContext;
