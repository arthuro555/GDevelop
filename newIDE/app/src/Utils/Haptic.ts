import { isNativeMobileApp } from './Platform';

// @ts-expect-error - TS2322 - Type '(({ durationInMs }: { durationInMs: number; }) => void) | null' is not assignable to type '(arg1: { durationInMs: number; }) => void | null | undefined'.
export const hapticFeedback: (arg1: {
  durationInMs: number;
}) => void | null | undefined = !isNativeMobileApp()
  ? ({ durationInMs }) => {
      try {
        if (window.navigator && window.navigator.vibrate) {
          window.navigator.vibrate(durationInMs);
        }
      } catch (error) {
        console.warn('Vibration API not supported:', error);
      }
    }
  : null;
