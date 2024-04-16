// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
import {
  getUsernameAvailability,
  UsernameAvailability,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/User';
import { useDebounce } from '../Utils/UseDebounce';

const styles = {
  circularProgress: {
    height: 20,
    width: 20,
  },
} as const;

export const isUsernameValid = (
  username: string,
  options?: {
    allowEmpty: boolean
  },
): boolean => {
  if (options && options.allowEmpty && username === '') return true;
  return !!username && /^[\w|-]+$/.test(username) && username.length < 31;
};

export const usernameFormatErrorMessage = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>
    Please pick a short username with only alphanumeric characters as well as _
    and -
  </Trans>
);

export const usernameAvailabilityErrorMessage = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>This username is already used, please pick another one.</Trans>
);

type Props = {
  initialUsername?: string | null | undefined,
  value: string,
  onChange: (
    event: {
      target: {
        value: string
      }
    },
    value: string,
  ) => void,
  isValidatingUsername: boolean,
  onAvailabilityCheckLoading: (arg1: boolean) => void,
  onAvailabilityChecked: (arg1?: UsernameAvailability | null | undefined) => void,
  errorText?: React.ReactNode | null | undefined,
  allowEmpty?: boolean,
  disabled?: boolean
};

export const UsernameField = ({
  initialUsername,
  value,
  onChange,
  errorText,
  allowEmpty,
  onAvailabilityChecked,
  onAvailabilityCheckLoading,
  isValidatingUsername,
  disabled,
}: Props) => {
  const usernameFormattingError = isUsernameValid(value, {
    allowEmpty: !!allowEmpty,
  })
    ? undefined
    : usernameFormatErrorMessage;

  const [
    usernameAvailabilityError,
    setUsernameAvailabilityError,
  ] = React.useState<React.ReactNode | null | undefined>(null);

  const updateUsernameAvailability = ({
    usernameAvailability,
    error,
  }: {
    usernameAvailability: UsernameAvailability | null | undefined,
    error: React.ReactNode | null | undefined
  }) => {
    onAvailabilityChecked(usernameAvailability);
    setUsernameAvailabilityError(error);
    onAvailabilityCheckLoading(false);
  };

  const checkUsernameAvailability = useDebounce(async (username: string) => {
    // If just casing change, the username is always available.
    if (
      initialUsername &&
      initialUsername.toLowerCase() === username.toLowerCase()
    ) {
      updateUsernameAvailability({
        usernameAvailability: { username, isAvailable: true },
        error: null,
      });
      return;
    }
    // no username or invalid, no need to check availability.
    if (!username || !isUsernameValid(username, { allowEmpty: !!allowEmpty })) {
      updateUsernameAvailability({
        usernameAvailability: null,
        error: null,
      });
      return;
    }

    try {
      onAvailabilityCheckLoading(true);

      const usernameAvailability = await getUsernameAvailability(username);

      if (!usernameAvailability) {
        throw new Error('Could not get username availability.');
      } else {
        updateUsernameAvailability({
          usernameAvailability,
          error: usernameAvailability.isAvailable
            ? null
            : usernameAvailabilityErrorMessage,
        });
      }
    } catch (error: any) {
      console.error('Unable to check username availability.', error);
      // Do not block user creation.
      updateUsernameAvailability({
        usernameAvailability: null,
        error: null,
      });
    } finally {
      onAvailabilityCheckLoading(false);
    }
  }, 500);

  React.useEffect(
    () => {
      checkUsernameAvailability(value);
    },
    [value, checkUsernameAvailability]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextField
      autoFocus="desktop"
      value={value}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      floatingLabelText={<Trans>Username</Trans>}
      fullWidth
      onChange={onChange}
      errorText={
        usernameFormattingError || usernameAvailabilityError || errorText
      }
      endAdornment={
        isValidatingUsername && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <CircularProgress style={styles.circularProgress} />
        )
      }
      disabled={disabled}
      maxLength={50}
    />
  );
};
