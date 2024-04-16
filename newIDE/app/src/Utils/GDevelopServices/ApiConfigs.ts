import Window from '../Window';

const isDev = Window.isDev();

export const GDevelopGamePreviews = {
  baseUrl: `https://game-previews.gdevelop.io/`,
} as const;

export const GDevelopGamesPlatform = {
  getInstantBuildUrl: (buildId: string) =>
    isDev
      ? `https://gd.games/instant-builds/${buildId}?dev=true`
      : `https://gd.games/instant-builds/${buildId}`,
  getGameUrl: (gameId: string) =>
    isDev
      ? `https://gd.games/games/${gameId}?dev=true`
      : `https://gd.games/games/${gameId}`,
  getGameUrlWithSlug: (userSlug: string, gameSlug: string) =>
    isDev
      ? `https://gd.games/${userSlug.toLowerCase()}/${gameSlug.toLowerCase()}?dev=true`
      : `https://gd.games/${userSlug.toLowerCase()}/${gameSlug.toLowerCase()}`,
  getUserPublicProfileUrl: (userId: string, username?: string | null) =>
    username
      ? `https://gd.games/${username}${isDev ? '?dev=true' : ''}`
      : `https://gd.games/user/${userId}${isDev ? '?dev=true' : ''}`,
} as const;

export const GDevelopFirebaseConfig = {
  apiKey: 'AIzaSyAnX9QMacrIl3yo4zkVFEVhDppGVDDewBc',
  authDomain: 'gdevelop-services.firebaseapp.com',
  databaseURL: 'https://gdevelop-services.firebaseio.com',
  projectId: 'gdevelop-services',
  storageBucket: 'gdevelop-services.appspot.com',
  messagingSenderId: '44882707384',
} as const;

export const GDevelopAuthorizationWebSocketApi = {
  baseUrl: isDev
    ? 'wss://api-ws-dev.gdevelop.io/authorization'
    : 'wss://api-ws.gdevelop.io/authorization',
} as const;

export const GDevelopBuildApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/build'
    : 'https://api.gdevelop.io/build',
} as const;

export const GDevelopUsageApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/usage'
    : 'https://api.gdevelop.io/usage',
} as const;

export const GDevelopReleaseApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/release'
    : 'https://api.gdevelop.io/release',
} as const;

export const GDevelopAssetApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/asset'
    : 'https://api.gdevelop.io/asset',
} as const;

export const GDevelopAnalyticsApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/analytics'
    : 'https://api.gdevelop.io/analytics',
} as const;

export const GDevelopGameApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/game'
    : 'https://api.gdevelop.io/game',
} as const;

export const GDevelopUserApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/user'
    : 'https://api.gdevelop.io/user',
} as const;

export const GDevelopPlayApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/play'
    : 'https://api.gdevelop.io/play',
} as const;

export const GDevelopShopApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/shop'
    : 'https://api.gdevelop.io/shop',
} as const;

export const GDevelopProjectApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/project'
    : 'https://api.gdevelop.io/project',
} as const;

export const GDevelopGenerationApi = {
  baseUrl: isDev
    ? 'https://api-dev.gdevelop.io/generation'
    : 'https://api.gdevelop.io/generation',
} as const;

export const GDevelopProjectResourcesStorage = {
  baseUrl: isDev
    ? 'https://project-resources-dev.gdevelop.io'
    : 'https://project-resources.gdevelop.io',
} as const;

export const GDevelopPrivateAssetsStorage = {
  baseUrl: isDev
    ? 'https://private-assets-dev.gdevelop.io'
    : 'https://private-assets.gdevelop.io',
} as const;

export const GDevelopPrivateGameTemplatesStorage = {
  baseUrl: isDev
    ? 'https://private-game-templates-dev.gdevelop.io'
    : 'https://private-game-templates.gdevelop.io',
} as const;

export const GDevelopPublicAssetResourcesStorageBaseUrl =
  'https://asset-resources.gdevelop.io';
export const GDevelopPublicAssetResourcesStorageStagingBaseUrl =
  'https://asset-resources.gdevelop.io/staging';
