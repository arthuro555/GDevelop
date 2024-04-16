import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../Profile/UsersAutocomplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/UsersAutocomplete.tsx', but '--jsx' is not set.
import { UsersAutocomplete } from '../Profile/UsersAutocomplete';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledMultiAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledMultiAutoComplete.tsx', but '--jsx' is not set.
import SemiControlledMultiAutoComplete from '../UI/SemiControlledMultiAutoComplete';
import {
  getCategoryName,
  getGameCategories,
  GameCategory,
} from '../Utils/GDevelopServices/Game';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module './GameThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameThumbnail.tsx', but '--jsx' is not set.
import { GameThumbnail } from './GameThumbnail';

const GAME_SLUG_MAX_LENGTH = 30;
const GAME_SLUG_MIN_LENGTH = 6;

const isCyrillic = (text: string) =>
  /[БГДЖЗИЙЛПФЦЧШЩЫЭЮЯбвгджзийклмнптфцчшщыэюя]/.test(text);
const cyrillicToLatinMapping = require('./CyrillicToLatin.json');

export const cleanUpGameSlug = (gameSlug: string) => {
  let latinGameSlug = gameSlug;
  if (isCyrillic(gameSlug)) {
    latinGameSlug = gameSlug
      .split('')
      .map(function(char) {
        const latin = cyrillicToLatinMapping[char];
        return latin === undefined ? char : latin;
      })
      .join('');
  }
  let slug = latinGameSlug
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '-')
    .toLowerCase()
    .slice(0, GAME_SLUG_MAX_LENGTH);
  if (slug.length < GAME_SLUG_MIN_LENGTH) {
    slug = slug.concat(
      new Array(GAME_SLUG_MIN_LENGTH - slug.length).fill('-').join('')
    );
  }
  return slug;
};

type Props = {
  project: gdProject,
  disabled?: boolean,
  // Properties visible in the project properties and game dialogs.
  setName: (arg1: string) => void,
  name: string,
  setDescription: (arg1: string) => void,
  description: string | null | undefined,
  setAuthorIds: (arg1: string[]) => void,
  setAuthorUsernames: (arg1: string[]) => void,
  authorIds: string[],
  setOrientation: (arg1: string) => void,
  orientation: string,
  // Properties only visible in the game dialog.
  setCategories?: (arg1: string[]) => void,
  categories?: string[],
  setOwnerIds?: (arg1: string[]) => void,
  ownerIds?: string[],
  setPlayableWithKeyboard?: (arg1: boolean) => void,
  playWithKeyboard?: boolean,
  setPlayableWithGamepad?: (arg1: boolean) => void,
  playWithGamepad?: boolean,
  setPlayableWithMobile?: (arg1: boolean) => void,
  playWithMobile?: boolean,
  userSlug?: string,
  setUserSlug?: (arg1: string) => void,
  gameSlug?: string,
  setGameSlug?: (arg1: string) => void,
  setDiscoverable?: (arg1: boolean) => void,
  discoverable?: boolean,
  displayThumbnail?: boolean,
  thumbnailUrl?: string
};

export function PublicGameProperties({
  project,
  disabled,
  setName,
  name,
  categories,
  setCategories,
  setDescription,
  description,
  setAuthorIds,
  setAuthorUsernames,
  authorIds,
  setOwnerIds,
  ownerIds,
  setPlayableWithKeyboard,
  playWithKeyboard,
  setPlayableWithGamepad,
  playWithGamepad,
  setPlayableWithMobile,
  playWithMobile,
  setOrientation,
  orientation,
  userSlug,
  setUserSlug,
  gameSlug,
  setGameSlug,
  setDiscoverable,
  discoverable,
  displayThumbnail,
  thumbnailUrl,
}: Props) {
  const [categoryInput, setCategoryInput] = React.useState('');
  const { profile } = React.useContext(AuthenticatedUserContext);

  const hasGameSlug =
    userSlug && !!userSlug.length && profile && profile.username;

  const hasValidGameSlug =
    hasGameSlug && (profile && userSlug !== profile.username);

  const [allGameCategories, setAllGameCategories] = React.useState<GameCategory[]>([]);

  const fetchGameCategories = React.useCallback(async () => {
    try {
      const categories = await getGameCategories();
      setAllGameCategories(categories);
    } catch (error: any) {
      console.error('An error occurred while fetching game categories.', error);
    }
  }, []);

  React.useEffect(
    () => {
      fetchGameCategories();
    },
    [fetchGameCategories]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
            {displayThumbnail && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <GameThumbnail
                    gameName={project.getName()}
                    thumbnailUrl={thumbnailUrl}
                  />
                </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Spacer />
              </>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Game name</Trans>}
                fullWidth
                type="text"
                value={name}
                onChange={setName}
                autoFocus="desktop"
                disabled={disabled}
              />
              {setCategories && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SemiControlledMultiAutoComplete
                  hintText={t`Select a genre`}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>Genres</Trans>}
                  helperText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Select up to 3 genres for the game to be visible on
                      gd.games's categories pages!
                    </Trans>
                  }
                  value={
                    categories
                      ? categories.map(category => ({
                          value: category,
                          text: getCategoryName(category, i18n),
                        }))
                      : []
                  }
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'values' implicitly has an 'any' type.
                  onChange={(event, values) => {
                    setCategories(
// @ts-expect-error - TS7006 - Parameter 'category' implicitly has an 'any' type.
                      values ? values.map(category => category.value) : []
                    );
                    setCategoryInput('');
                  }}
                  inputValue={categoryInput}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type. | TS7006 - Parameter 'reason' implicitly has an 'any' type.
                  onInputChange={(event, value, reason) => {
                    // It seems that the input is triggered with a "reset" reason,
                    // after each input change. (https://github.com/mui/material-ui/issues/20939)
                    // We handle this manually to avoid the input to be reseted.
                    if (reason === 'input') {
                      setCategoryInput(value);
                    }
                  }}
                  dataSource={allGameCategories.map(category => ({
                    value: category.name,
                    text: getCategoryName(category.name, i18n),
                    disabled: category.type === 'admin-only',
                  }))}
                  fullWidth
                  optionsLimit={3}
                  disabled={disabled}
                  loading={allGameCategories.length === 0}
                />
              )}
              {setDiscoverable && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Make your game discoverable on gd.games</Trans>}
                  checked={!!discoverable}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => setDiscoverable(checked)}
                  disabled={disabled}
                />
              )}
            </ColumnStackLayout>
          </ResponsiveLineStackLayout>
          {displayThumbnail && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                                  To update your thumbnail, go into your Game Settings {'>'} Icons
                                  and thumbnail, then create and publish a new build.
                                </Trans>
              </BackgroundText>
            </Line>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Game description</Trans>}
            fullWidth
            type="text"
            value={description || ''}
            onChange={setDescription}
            multiline
            rows={5}
            disabled={disabled}
          />
          {setUserSlug && setGameSlug && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>User name in the game URL</Trans>}
                  value={userSlug || ''}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                  onChange={(e, i, value: string) => setUserSlug(value)}
                  // It's disabled if one of the condition of SelectOption is false.
                  disabled={!hasValidGameSlug || disabled}
                >
                  {profile && profile.username && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <SelectOption
                      value={profile.username}
                      label={profile.username}
                      shouldNotTranslate
                    />
                  )}
                  {userSlug && (!profile || userSlug !== profile.username) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <SelectOption
                      value={userSlug}
                      label={userSlug}
                      shouldNotTranslate
                    />
                  )}
                </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SemiControlledTextField
                  disabled={!hasGameSlug || disabled}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>Game name in the game URL</Trans>}
                  fullWidth
                  maxLength={GAME_SLUG_MAX_LENGTH}
                  type="text"
                  value={hasGameSlug ? gameSlug || '' : ''}
// @ts-expect-error - TS7006 - Parameter 'gameSlug' implicitly has an 'any' type.
                  onChange={gameSlug => setGameSlug(cleanUpGameSlug(gameSlug))}
                />
              </Line>
              {!hasGameSlug && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Usernames are required to choose a custom game URL.
                  </Trans>
                </AlertMessage>
              )}
            </>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <UsersAutocomplete
            userIds={authorIds}
// @ts-expect-error - TS7006 - Parameter 'userIdAndUsernames' implicitly has an 'any' type.
            onChange={userIdAndUsernames => {
              setAuthorIds(
                userIdAndUsernames.map(
// @ts-expect-error - TS7006 - Parameter 'userIdAndUsername' implicitly has an 'any' type.
                  userIdAndUsername => userIdAndUsername.userId
                )
              );
              setAuthorUsernames(
                userIdAndUsernames.map(
// @ts-expect-error - TS7006 - Parameter 'userIdAndUsername' implicitly has an 'any' type.
                  userIdAndUsername => userIdAndUsername.username
                )
              );
            }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Authors</Trans>}
            helperText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Select the usernames of the authors of this project. They will
                be displayed in the selected order, if you publish this game as
                an example or in the community.
              </Trans>
            }
            disabled={disabled}
          />
          {setOwnerIds && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <UsersAutocomplete
              userIds={ownerIds || []}
// @ts-expect-error - TS7006 - Parameter 'userData' implicitly has an 'any' type.
              onChange={userData =>
// @ts-expect-error - TS7006 - Parameter 'data' implicitly has an 'any' type.
                setOwnerIds(userData.map(data => data.userId))
              }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Owners</Trans>}
              helperText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Select the usernames of the owners of this project to let them
                  manage this game builds. Be aware that owners can revoke your
                  ownership.
                </Trans>
              }
              disabled={disabled}
            />
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectField
            fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Device orientation (for mobile)</Trans>}
            value={orientation}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
            onChange={(e, i, value: string) => setOrientation(value)}
            disabled={disabled}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption value="default" label={t`Platform default`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption value="landscape" label={t`Landscape`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption value="portrait" label={t`Portrait`} />
          </SelectField>
          {setPlayableWithKeyboard &&
            setPlayableWithGamepad &&
            setPlayableWithMobile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Playable with a keyboard</Trans>}
                  checked={!!playWithKeyboard}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => setPlayableWithKeyboard(checked)}
                  disabled={disabled}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Playable with a gamepad</Trans>}
                  checked={!!playWithGamepad}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => setPlayableWithGamepad(checked)}
                  disabled={disabled}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Playable on mobile</Trans>}
                  checked={!!playWithMobile}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => setPlayableWithMobile(checked)}
                  disabled={disabled}
                />
              </React.Fragment>
            )}
        </ColumnStackLayout>
      )}
    </I18n>
  );
}

export default PublicGameProperties;
