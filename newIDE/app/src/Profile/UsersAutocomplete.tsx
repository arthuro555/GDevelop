import * as React from 'react';
import { useState } from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import { useDebounce } from '../Utils/UseDebounce';
import SemiControlledMultiAutoComplete, {
  SemiControlledMultiAutoCompleteInterface,
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledMultiAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledMultiAutoComplete.tsx', but '--jsx' is not set.
} from '../UI/SemiControlledMultiAutoComplete';
import {
  searchCreatorPublicProfilesByUsername,
  UserPublicProfile,
  getUserPublicProfilesByIds,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledMultiAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledMultiAutoComplete.tsx', but '--jsx' is not set.
import { AutocompleteOption } from '../UI/SemiControlledMultiAutoComplete';

import useForceUpdate from '../Utils/UseForceUpdate';
import AuthenticatedUserContext from './AuthenticatedUserContext';

type Props = {
  userIds: Array<string>,
  onChange: (
    arg1: Array<{
      userId: string,
      username: string
    }>,
  ) => void,
  floatingLabelText?: React.ReactNode,
  helperText: React.ReactNode,
  disabled?: boolean
};

const getErrorMessage = (error?: Error | null) => {
  if (error) return 'Error while loading users';
};

export const UsersAutocomplete = ({
  userIds,
  onChange,
  floatingLabelText,
  helperText,
  disabled,
}: Props) => {
  const forceUpdate = useForceUpdate();
  const [users, setUsers] = React.useState<Array<AutocompleteOption>>([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { profile } = React.useContext(AuthenticatedUserContext);
  const completionOwnUserProfile = !!profile
    ? [
        {
          text: profile.username || 'Yourself (no username)',
          value: profile.id,
        },
      ]
    : [];
  const [
    completionUserPublicProfiles,
    setCompletionUserPublicProfiles,
  ] = React.useState<Array<UserPublicProfile>>([]);
  const [error, setError] = React.useState<any>(null);
  const autocompleteRef = React.useRef<SemiControlledMultiAutoCompleteInterface | null | undefined>(null);

  // Recalculate if the userInput has changed.
  const searchUserPublicProfiles = useDebounce(async () => {
    setError(null);
    if (!userInput) {
      setCompletionUserPublicProfiles([]);
      return;
    }
    try {
      setLoading(true);
      const userPublicProfiles = await searchCreatorPublicProfilesByUsername(
        userInput
      );
      const filteredPublicProfiles = profile
// @ts-expect-error - TS7031 - Binding element 'id' implicitly has an 'any' type.
        ? userPublicProfiles.filter(({ id }) => id !== profile.id)
        : userPublicProfiles;
      setCompletionUserPublicProfiles(filteredPublicProfiles);
    } catch (err: any) {
      setError(err);
      console.error('Could not load the users: ', err);
    } finally {
      setLoading(false);
      focusInput();
    }
  }, 500);

  // Call every time the userInput changes.
  React.useEffect(
    () => {
      searchUserPublicProfiles();
    },
    [searchUserPublicProfiles, userInput]
  );

  // Do only once, the first time it is loaded.
  const getUserPublicProfilesForAutocomplete = React.useCallback(
    async () => {
      setError(null);
      if (!userIds.length) {
        setUsers([]);
        return;
      }
      try {
        setLoading(true);
        const userPublicProfilesByIds = await getUserPublicProfilesByIds(
          userIds
        );
        setUsers(
          userIds
            .map(userId => {
              const userPublicProfile: UserPublicProfile =
                userPublicProfilesByIds[userId];
              return userPublicProfile
                ? {
                    text:
                      userPublicProfile.username ||
                      `${
                        !!profile && userPublicProfile.id === profile.id
                          ? `Yourself`
                          : `Unknown`
                      } (no username)`,
                    value: userPublicProfile.id,
                  }
                : null;
            })
            .filter(Boolean)
        );
      } catch (err: any) {
        setError(err);
        console.error('Could not load the users: ', err);
      } finally {
        setLoading(false);
      }
    },
    [userIds, profile]
  );

  const focusInput = React.useCallback(() => {
    if (autocompleteRef.current) autocompleteRef.current.focusInput();
  }, []);

  // Do only once.
  React.useEffect(
    () => {
      getUserPublicProfilesForAutocomplete();
    },
    [getUserPublicProfilesForAutocomplete]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SemiControlledMultiAutoComplete
      hintText={t`Start typing a username`}
      floatingLabelText={floatingLabelText}
      helperText={helperText}
      value={users}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'values' implicitly has an 'any' type.
      onChange={(event, values) => {
        if (!values) return;
        // change users in state
        setUsers(values);
        // call top onChange on user ids
        onChange(
// @ts-expect-error - TS7006 - Parameter 'option' implicitly has an 'any' type.
          values.map(option => ({
            username: option.text,
            userId: option.value,
          }))
        );
        forceUpdate();
      }}
      inputValue={userInput}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
      onInputChange={(event, value) => {
        setUserInput(value);
      }}
      ref={autocompleteRef}
      dataSource={completionOwnUserProfile.concat(
        completionUserPublicProfiles
          .map((userPublicProfile: UserPublicProfile) => {
            if (userPublicProfile.username && userPublicProfile.id) {
              return {
                text: userPublicProfile.username,
                value: userPublicProfile.id,
              };
            }

            return null;
          })
          .filter(Boolean)
      )}
      loading={loading || disabled}
      fullWidth
      error={getErrorMessage(error)}
      disableAutoTranslate
    />
  );
};
