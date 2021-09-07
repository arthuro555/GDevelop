// @flow
const isDev = process.env.NODE_ENV === 'development';

export const GDeveloppeGamePreviews = {
  baseUrl: `https://game-previews.gdevelop-app.com/`,
};

export const GDeveloppeBuildApi = {
  baseUrl: isDev
    ? 'https://69p4m07edd.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/build',
};

export const GDeveloppeFirebaseConfig = {
  apiKey: 'AIzaSyAnX9QMacrIl3yo4zkVFEVhDppGVDDewBc',
  authDomain: 'GDeveloppe-services.firebaseapp.com',
  databaseURL: 'https://GDeveloppe-services.firebaseio.com',
  projectId: 'GDeveloppe-services',
  storageBucket: 'GDeveloppe-services.appspot.com',
  messagingSenderId: '44882707384',
};

export const GDeveloppeUsageApi = {
  baseUrl: isDev
    ? 'https://dwjjhr5k76.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/usage',
};

export const GDeveloppeReleaseApi = {
  baseUrl: isDev
    ? 'https://c8cldf4iqh.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/release',
};

export const GDeveloppeAssetApi = {
  baseUrl: isDev
    ? 'https://57l4cj31aj.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/asset',
};

export const GDeveloppeAnalyticsApi = {
  baseUrl: isDev
    ? 'https://fixpe96o0h.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/analytics',
};

export const GDeveloppeGameApi = {
  baseUrl: isDev
    ? 'https://we7eqjifc2.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/game',
};
