import * as React from 'react';
import {
  Profile,
  LoginForm,
  RegisterForm,
  PatchUserPayload,
  ForgotPasswordForm,
  AuthError,
  IdentityProvider,
} from '../Utils/GDevelopServices/Authentication';

import { PreferencesValues } from '../MainFrame/Preferences/PreferencesContext';
import { CloudProjectWithUserAccessInfo } from '../Utils/GDevelopServices/Project';
import { User as FirebaseUser } from 'firebase/auth';
import { Badge } from '../Utils/GDevelopServices/Badge';

import { Recommendation } from '../Utils/GDevelopServices/User';
import { Notification } from '../Utils/GDevelopServices/Notification';
import { Limits, Usages, Subscription } from '../Utils/GDevelopServices/Usage';
import {
  AssetShortHeader,
  PrivateAssetPack,
  PrivateGameTemplate,
} from '../Utils/GDevelopServices/Asset';

import { Purchase } from '../Utils/GDevelopServices/Shop';

export type AuthenticatedUser = {
  authenticated: boolean;
  firebaseUser: FirebaseUser | null | undefined;
  profile: Profile | null | undefined;
  loginState: null | 'loggingIn' | 'done';
  creatingOrLoggingInAccount: boolean;
  badges: Array<Badge> | null | undefined;
  cloudProjects: Array<CloudProjectWithUserAccessInfo> | null | undefined;
  cloudProjectsFetchingErrorLabel: React.ReactNode | null | undefined;
  receivedAssetPacks: Array<PrivateAssetPack> | null | undefined;
  receivedAssetShortHeaders: Array<AssetShortHeader> | null | undefined;
  receivedGameTemplates: Array<PrivateGameTemplate> | null | undefined;
  gameTemplatePurchases: Array<Purchase> | null | undefined;
  assetPackPurchases: Array<Purchase> | null | undefined;
  recommendations: Array<Recommendation> | null | undefined;
  notifications: Array<Notification> | null | undefined;
  limits: Limits | null | undefined;
  authenticationError: AuthError | null | undefined;
  usages: Usages | null | undefined;
  subscription: Subscription | null | undefined;
  onLogin: (form: LoginForm) => Promise<void>;
  onLoginWithProvider: (provider: IdentityProvider) => Promise<void>;
  onCancelLogin: () => void;
  onLogout: () => Promise<void>;
  onCreateAccount: (
    form: RegisterForm,
    preferences: PreferencesValues
  ) => Promise<void>;
  onEditProfile: (
    payload: PatchUserPayload,
    preferences: PreferencesValues,
    options: {
      throwError: boolean;
    }
  ) => Promise<void>;
  onResetPassword: (arg1: ForgotPasswordForm) => Promise<void>;
  onOpenLoginDialog: () => void;
  onOpenEditProfileDialog: () => void;
  onOpenChangeEmailDialog: () => void;
  onOpenCreateAccountDialog: () => void;
  onBadgesChanged: () => Promise<void>;
  onCloudProjectsChanged: () => Promise<void>;
  onRefreshUserProfile: () => Promise<void>;
  onRefreshFirebaseProfile: () => Promise<void>;
  onRefreshSubscription: () => Promise<void>;
  onRefreshLimits: () => Promise<void>;
  onRefreshGameTemplatePurchases: () => Promise<void>;
  onRefreshAssetPackPurchases: () => Promise<void>;
  onRefreshNotifications: () => Promise<void>;
  onPurchaseSuccessful: () => Promise<void>;
  onSendEmailVerification: () => Promise<void>;
  onOpenEmailVerificationDialog: (arg1: {
    sendEmailAutomatically: boolean;
    showSendEmailButton: boolean;
  }) => void;
  onAcceptGameStatsEmail: (value: boolean) => Promise<void>;
  getAuthorizationHeader: () => Promise<string>;
};

export const initialAuthenticatedUser = {
  authenticated: false,
  firebaseUser: null,
  profile: null,
  loginState: null,
  creatingOrLoggingInAccount: false,
  badges: null,
  cloudProjects: null,
  cloudProjectsFetchingErrorLabel: null,
  receivedAssetPacks: null,
  receivedAssetShortHeaders: null,
  receivedGameTemplates: null,
  gameTemplatePurchases: null,
  assetPackPurchases: null,
  recommendations: null,
  notifications: null,
  subscription: null,
  usages: null,
  limits: null,
  authenticationError: null,
  onLogin: async () => {},
  onLoginWithProvider: async () => {},
  onCancelLogin: () => {},
  onLogout: async () => {},
  onCreateAccount: async () => {},
  onEditProfile: async () => {},
  onResetPassword: async () => {},
  onOpenLoginDialog: () => {},
  onOpenEditProfileDialog: () => {},
  onOpenChangeEmailDialog: () => {},
  onOpenCreateAccountDialog: () => {},
  onBadgesChanged: async () => {},
  onCloudProjectsChanged: async () => {},
  onRefreshUserProfile: async () => {},
  onRefreshFirebaseProfile: async () => {},
  onRefreshSubscription: async () => {},
  onRefreshLimits: async () => {},
  onRefreshGameTemplatePurchases: async () => {},
  onRefreshAssetPackPurchases: async () => {},
  onRefreshNotifications: async () => {},
  onPurchaseSuccessful: async () => {},
  onSendEmailVerification: async () => {},
  onOpenEmailVerificationDialog: () => {},
  onAcceptGameStatsEmail: async () => {},
  getAuthorizationHeader: () => Promise.reject(new Error('Unimplemented')),
} as const;

export const authenticatedUserLoggedOutAttributes = {
  authenticated: false,
  firebaseUser: null,
  profile: null,
  // A logged out user is not the same a user being loaded (which can be the case at startup).
  // Use this loginState to make sure this is understood by the app as a user logged out, and not loading.
  loginState: 'done',
  badges: null,
  cloudProjects: [], // Initialize to empty array to indicate that the loading is done.
  cloudProjectsFetchingErrorLabel: null,
  receivedAssetPacks: [], // Initialize to empty array to indicate that the loading is done.
  receivedAssetShortHeaders: [], // Initialize to empty array to indicate that the loading is done.
  receivedGameTemplates: [], // Initialize to empty array to indicate that the loading is done.
  subscription: null,
  usages: null,
  limits: null,
} as const;

const AuthenticatedUserContext = React.createContext<AuthenticatedUser>(
  initialAuthenticatedUser
);

export default AuthenticatedUserContext;
