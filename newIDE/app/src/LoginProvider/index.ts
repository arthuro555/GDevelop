import type {Auth} from 'firebase/auth';
import type { IdentityProvider } from '../Utils/GDevelopServices/Authentication';

export interface LoginProvider {
  loginWithEmailAndPassword(
    arg1: {
      email: string,
      password: string
    },
  ): Promise<void>;
  loginOrSignupWithProvider(
    arg1: {
      provider: IdentityProvider,
      signal?: AbortSignal
    },
  ): Promise<void>;
}

export interface FirebaseBasedLoginProvider {
  auth: Auth;
}
