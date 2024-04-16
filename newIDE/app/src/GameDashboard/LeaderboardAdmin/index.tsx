import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../UI/CustomSvgIcons/Add';
import TextFormat from '@material-ui/icons/TextFormat';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Floppy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Floppy.js' implicitly has an 'any' type.
import Save from '../../UI/CustomSvgIcons/Floppy';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from '../../UI/CustomSvgIcons/Cross';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import Edit from '../../UI/CustomSvgIcons/Edit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/EditFile'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/EditFile.js' implicitly has an 'any' type.
import EditFile from '../../UI/CustomSvgIcons/EditFile';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Tag'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Tag.js' implicitly has an 'any' type.
import Tag from '../../UI/CustomSvgIcons/Tag';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/AtSign'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/AtSign.js' implicitly has an 'any' type.
import AtSign from '../../UI/CustomSvgIcons/AtSign';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Calendar'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Calendar.js' implicitly has an 'any' type.
import Calendar from '../../UI/CustomSvgIcons/Calendar';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Sort'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Sort.js' implicitly has an 'any' type.
import Sort from '../../UI/CustomSvgIcons/Sort';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Users'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Users.js' implicitly has an 'any' type.
import Users from '../../UI/CustomSvgIcons/Users';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Refresh'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Refresh.js' implicitly has an 'any' type.
import Refresh from '../../UI/CustomSvgIcons/Refresh';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Visibility'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Visibility.js' implicitly has an 'any' type.
import Visibility from '../../UI/CustomSvgIcons/Visibility';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/VisibilityOff'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/VisibilityOff.js' implicitly has an 'any' type.
import VisibilityOff from '../../UI/CustomSvgIcons/VisibilityOff';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Lock'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Lock.js' implicitly has an 'any' type.
import Lock from '../../UI/CustomSvgIcons/Lock';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/LockOpen'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/LockOpen.js' implicitly has an 'any' type.
import LockOpen from '../../UI/CustomSvgIcons/LockOpen';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Copy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Copy.js' implicitly has an 'any' type.
import Copy from '../../UI/CustomSvgIcons/Copy';

// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../../UI/EmptyPlaceholder';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField, { TextFieldInterface } from '../../UI/TextField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
import { useOnlineStatus } from '../../Utils/OnlineStatus';
import {
  Leaderboard,
  LeaderboardCustomizationSettings,
  LeaderboardUpdatePayload,
  LeaderboardEntry,
  shortenUuidForDisplay,
} from '../../Utils/GDevelopServices/Play';
import LeaderboardContext from '../../Leaderboard/LeaderboardContext';
// @ts-expect-error - TS6142 - Module '../../Leaderboard/LeaderboardProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Leaderboard/LeaderboardProvider.tsx', but '--jsx' is not set.
import LeaderboardProvider from '../../Leaderboard/LeaderboardProvider';
// @ts-expect-error - TS6142 - Module './LeaderboardEntriesTable' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/LeaderboardEntriesTable.tsx', but '--jsx' is not set.
import LeaderboardEntriesTable from './LeaderboardEntriesTable';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../../UI/TextEllipsis';
import { shouldValidate } from '../../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../GameRegistration' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameRegistration.tsx', but '--jsx' is not set.
import { GameRegistration } from '../GameRegistration';
// @ts-expect-error - TS6142 - Module './LeaderboardAppearanceDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/LeaderboardAppearanceDialog.tsx', but '--jsx' is not set.
import LeaderboardAppearanceDialog from './LeaderboardAppearanceDialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module './LeaderboardSortOptionsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/LeaderboardSortOptionsDialog.tsx', but '--jsx' is not set.
import LeaderboardSortOptionsDialog from './LeaderboardSortOptionsDialog';
import { LeaderboardSortOption } from '../../Utils/GDevelopServices/Play';
import { formatScore } from '../../Leaderboard/LeaderboardScoreFormatter';
// @ts-expect-error - TS6142 - Module '../../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../../UI/Toggle';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../Profile/Subscription/SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionContext } from '../../Profile/Subscription/SubscriptionSuggestionContext';
// @ts-expect-error - TS6142 - Module './MaxLeaderboardCountAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/MaxLeaderboardCountAlertMessage.tsx', but '--jsx' is not set.
import MaxLeaderboardCountAlertMessage from './MaxLeaderboardCountAlertMessage';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/SwitchHorizontal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/SwitchHorizontal.js' implicitly has an 'any' type.
import SwitchHorizontal from '../../UI/CustomSvgIcons/SwitchHorizontal';
import { extractGDevelopApiErrorStatusAndCode } from '../../Utils/GDevelopServices/Errors';

type Props = {
  onLoading: (arg1: boolean) => void,
  project?: gdProject,
  leaderboardIdToSelectAtOpening?: string
};

type ContainerProps = (Props) & {
  gameId: string
};

type ApiError = {
  action: 'entriesFetching' | 'entryDeletion' | 'leaderboardsFetching' | 'leaderboardNameUpdate' | 'leaderboardSortUpdate' | 'leaderboardVisibilityUpdate' | 'leaderboardAutoPlayerNamePrefixUpdate' | 'leaderboardIgnoreCustomPlayerNamesUpdate' | 'leaderboardPrimaryUpdate' | 'leaderboardAppearanceUpdate' | 'leaderboardPlayerUnicityDisplayChoiceUpdate' | 'leaderboardCreation' | 'leaderboardReset' | 'leaderboardDeletion',
  message: React.ReactNode,
  itemId?: string
};

const CenteredError = ({
  children,
}: {
  children: React.ReactNode
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Column expand justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line>{children}</Line>
  </Column>
);

const styles = {
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingRight: 5,
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
  },
  leaderboardConfigurationPaper: { padding: 5, margin: 5 },
  leaderboardNameText: { ...textEllipsisStyle, width: 150 },
  leaderboardNameTextField: { width: 125, fontSize: 14 },
} as const;

const getApiError = (payload: LeaderboardUpdatePayload): ApiError => ({
  action: payload.name
    ? 'leaderboardNameUpdate'
    : payload.sort
    ? 'leaderboardSortUpdate'
    : payload.visibility
    ? 'leaderboardVisibilityUpdate'
    : payload.ignoreCustomPlayerNames !== undefined
    ? 'leaderboardIgnoreCustomPlayerNamesUpdate'
    : payload.autoPlayerNamePrefix !== undefined
    ? 'leaderboardAutoPlayerNamePrefixUpdate'
    : payload.primary
    ? 'leaderboardPrimaryUpdate'
    : payload.customizationSettings
    ? 'leaderboardAppearanceUpdate'
    : 'leaderboardPlayerUnicityDisplayChoiceUpdate',
  message: payload.name ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      An error occurred when updating the name of the leaderboard, please close
      the dialog, come back and try again.
    </Trans>
  ) : payload.sort ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      An error occurred when updating the sort direction of the leaderboard,
      please close the dialog, come back and try again.
    </Trans>
  ) : payload.visibility ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      An error occurred when updating the visibility of the leaderboard, please
      close the dialog, come back and try again.
    </Trans>
  ) : payload.ignoreCustomPlayerNames !== undefined ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      An error occurred when updating the handling of player names of the
      leaderboard, please close the dialog, come back and try again.
    </Trans>
  ) : payload.autoPlayerNamePrefix !== undefined ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      An error occurred when updating the handling of player names of the
      leaderboard, please close the dialog, come back and try again.
    </Trans>
  ) : payload.primary ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      An error occurred when setting the leaderboard as default, please close
      the dialog, come back and try again.
    </Trans>
  ) : payload.customizationSettings ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      An error occurred when updating the appearance of the leaderboard, please
      close the dialog, come back and try again.
    </Trans>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      An error occurred when updating the display choice of the leaderboard,
      please close the dialog, come back and try again.
    </Trans>
  ),
});

const getSortOrderText = (currentLeaderboard: Leaderboard) => {
  if (currentLeaderboard.extremeAllowedScore !== undefined) {
    const formattedScore = currentLeaderboard.customizationSettings
      ? formatScore(
          currentLeaderboard.extremeAllowedScore,
          currentLeaderboard.customizationSettings.scoreFormatting
        )
      : currentLeaderboard.extremeAllowedScore;
    if (currentLeaderboard.sort === 'ASC') {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>Lower is better (min: {formattedScore})</Trans>;
    }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>Higher is better (max: {formattedScore})</Trans>;
  }

  if (currentLeaderboard.sort === 'ASC') {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>Lower is better</Trans>;
  }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <Trans>Higher is better</Trans>;
};

export const LeaderboardAdmin = ({
  onLoading,
  project,
  leaderboardIdToSelectAtOpening,
}: Props) => {
  const isOnline = useOnlineStatus();
  const { isMobile } = useResponsiveWindowSize();
  const [isEditingAppearance, setIsEditingAppearance] = React.useState<boolean>(false);
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'. | TS2339 - Property 'showDeleteConfirmation' does not exist on type 'void'.
  const { showConfirmation, showDeleteConfirmation } = useAlertDialog();
  const [
    displayMaxLeaderboardCountReachedWarning,
    setDisplayMaxLeaderboardCountReachedWarning,
  ] = React.useState<boolean>(false);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const { limits } = authenticatedUser;

  const [
    isEditingSortOptions,
    setIsEditingSortOptions,
  ] = React.useState<boolean>(false);
  const [isEditingName, setIsEditingName] = React.useState<boolean>(false);
  const [
    isEditingAutoPlayerNamePrefix,
    setIsEditingAutoPlayerNamePrefix,
  ] = React.useState<boolean>(false);
  const [isRequestPending, setIsRequestPending] = React.useState<boolean>(false);
  const [newName, setNewName] = React.useState<string>('');
  const [newNameError, setNewNameError] = React.useState<string | null | undefined>(null);
  const [
    newAutoPlayerNamePrefix,
    setNewAutoPlayerNamePrefix,
  ] = React.useState<string>('');
  const newNameTextFieldRef = React.useRef<TextFieldInterface | null | undefined>(null);
  const newAutoPlayerNamePrefixTextFieldRef = React.useRef<TextFieldInterface | null | undefined>(null);
  const [apiError, setApiError] = React.useState<ApiError | null | undefined>(null);
  const [
    displayGameRegistration,
    setDisplayGameRegistration,
  ] = React.useState<boolean>(false);

  const {
    leaderboards,
    listLeaderboards,
    currentLeaderboard,
    createLeaderboard,
    selectLeaderboard,
    updateLeaderboard,
    resetLeaderboard,
    deleteLeaderboard,
    deleteLeaderboardEntry,
    displayOnlyBestEntry,
    setDisplayOnlyBestEntry,
    fetchLeaderboardEntries,
    browsing: { entries, goToNextPage, goToPreviousPage, goToFirstPage },
  } = React.useContext(LeaderboardContext);
  const { openSubscriptionDialog } = React.useContext(
    SubscriptionSuggestionContext
  );

  const setIsLoading = React.useCallback(
    (yesOrNo: boolean) => {
      setIsRequestPending(yesOrNo);
      onLoading(yesOrNo);
    },
    [onLoading]
  );

  const onUpdateLeaderboard = async (
    i18n: I18nType,
    payload: LeaderboardUpdatePayload
  ) => {
    setNewNameError(null);
    if (payload.name !== undefined && payload.name.length === 0) {
      setNewNameError(
        i18n._(
          t`Please enter a name that is at least one character long and 50 at most.`
        )
      );
      return;
    }
    setIsLoading(true);
    setApiError(null);
    try {
      await updateLeaderboard(payload);
      if (payload.name) setIsEditingName(false);
      if (payload.autoPlayerNamePrefix !== undefined)
        setIsEditingAutoPlayerNamePrefix(false);
    } catch (err: any) {
      console.error('An error occurred when updating leaderboard', err);
      setApiError(getApiError(payload));
    } finally {
      setIsLoading(false);
    }
  };

  const onListLeaderboards = React.useCallback(
    () => {
      const fetchAndHandleError = async () => {
        setIsRequestPending(true); // We only set the local loading state here to avoid blocking the dialog buttons on first load.
        setApiError(null);
        try {
          await listLeaderboards();
        } catch (error: any) {
          const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
            error
          );
          if (extractedStatusAndCode && extractedStatusAndCode.status === 404) {
            setDisplayGameRegistration(true);
            return;
          }
          console.error('An error occurred when fetching leaderboards', error);
          setApiError({
            action: 'leaderboardsFetching',
            message: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                An error occurred when fetching the leaderboards, please close
                the dialog and reopen it.
              </Trans>
            ),
          });
        } finally {
          setIsRequestPending(false);
        }
      };
      fetchAndHandleError();
    },
    [listLeaderboards]
  );

  const onFetchLeaderboardEntries = async () => {
    setIsLoading(true);
    setApiError(null);
    try {
      await fetchLeaderboardEntries();
    } catch (err: any) {
      console.error('An error occurred when fetching leaderboard entries', err);
      setApiError({
        action: 'entriesFetching',
        message: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            An error occurred when fetching the entries of the leaderboard,
            please try again.
          </Trans>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onCreateLeaderboard = async () => {
    setIsLoading(true);
    setApiError(null);
    try {
      if (limits && leaderboards) {
        const leaderboardLimits = limits.capabilities.leaderboards;
        if (
          leaderboardLimits &&
          leaderboardLimits.maximumCountPerGame > 0 &&
          leaderboards.length >= leaderboardLimits.maximumCountPerGame
        ) {
          setDisplayMaxLeaderboardCountReachedWarning(true);
          return;
        }
      }

      await createLeaderboard({
        name: 'New leaderboard',
        sort: 'ASC',
      });
    } catch (err: any) {
      console.error('An error occurred when creating leaderboard', err);
      setApiError({
        action: 'leaderboardCreation',
        message: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            An error occurred when creating a new leaderboard, please close the
            dialog, come back and try again.
          </Trans>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onResetLeaderboard = async (i18n: I18nType) => {
    if (!currentLeaderboard) return;
    const answer = await showConfirmation({
      title: t`Reset leaderboard ${currentLeaderboard.name}`,
      message: t`All current entries will be deleted, are you sure you want to reset this leaderboard? This can't be undone.`,
      confirmButtonLabel: t`Reset leaderboard`,
    });
    if (!answer) return;

    setIsLoading(true);
    setApiError(null);
    try {
      await resetLeaderboard();
    } catch (error: any) {
      console.error('An error occurred when resetting leaderboard', error);
      const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
        error
      );
      setApiError({
        action: 'leaderboardReset',
        message:
          extractedStatusAndCode && extractedStatusAndCode.status === 409 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              This leaderboard is already resetting, please wait a bit, close
              the dialog, come back and try again.
            </Trans>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              An error occurred when resetting the leaderboard, please close the
              dialog, come back and try again.
            </Trans>
          ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteLeaderboard = async (i18n: I18nType) => {
    if (!currentLeaderboard) return;
    // Extract word translation to ensure it is not wrongly translated in the sentence.
    const translatedConfirmText = i18n._(t`delete`);

    const deleteAnswer = await showDeleteConfirmation({
      title: t`Do you really want to permanently delete the leaderboard ${
        currentLeaderboard.name
      }?`,
      message: t`You’re about to permanently delete this leaderboard and all of its entries. This can't be undone.`,
      fieldMessage: t`To confirm, type "${translatedConfirmText}"`,
      confirmText: translatedConfirmText,
      confirmButtonLabel: t`Delete Leaderboard`,
    });
    if (!deleteAnswer) return;

    setIsLoading(true);
    setApiError(null);
    try {
      await deleteLeaderboard();
    } catch (err: any) {
      console.error('An error occurred when deleting leaderboard', err);
      setApiError({
        action: 'leaderboardDeletion',
        message: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            An error occurred when deleting the leaderboard, please close the
            dialog, come back and try again.
          </Trans>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteEntry = async (i18n: I18nType, entry: LeaderboardEntry) => {
    if (!currentLeaderboard) return;
    const answer = await showConfirmation({
      title: t`Delete score ${entry.score} from ${entry.playerName}`,
      message: t`Are you sure you want to delete this entry? This can't be undone.`,
      confirmButtonLabel: t`Delete Entry`,
    });
    if (!answer) return;

    setIsLoading(true);
    setApiError(null);
    try {
      await deleteLeaderboardEntry(entry.id);
    } catch (err: any) {
      console.error('An error occurred when deleting entry', err);
      setApiError({
        action: 'entryDeletion',
        message: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            An error occurred when deleting the entry, please try again.
          </Trans>
        ),
        itemId: entry.id,
      });
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(
    () => {
      if (isEditingName && newNameTextFieldRef.current) {
        newNameTextFieldRef.current.focus();
      }
    },
    [isEditingName]
  );

  React.useEffect(
    () => {
      if (leaderboards === null) {
        onListLeaderboards();
      }
    },
    [leaderboards, onListLeaderboards]
  );

  React.useEffect(() => {
    if (currentLeaderboard) onFetchLeaderboardEntries();
    // This has to be executed on component mount to refresh entries on each admin opening
    // eslint-disable-next-line
  }, []);

  React.useEffect(
    () => {
      if (!!leaderboardIdToSelectAtOpening)
        selectLeaderboard(leaderboardIdToSelectAtOpening);
    },
    [leaderboardIdToSelectAtOpening, selectLeaderboard]
  );

  const onCopy = React.useCallback(
    () => {
      if (!currentLeaderboard) return;
      // TODO: use Clipboard.js, after it's been reworked to use this API and handle text.
      navigator.clipboard.writeText(currentLeaderboard.id);
    },
    [currentLeaderboard]
  );
  if (!isOnline) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <CenteredError>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PlaceholderError>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            An internet connection is required to administrate your game's
            leaderboards.
          </Trans>
        </PlaceholderError>
      </CenteredError>
    );
  }
  if (!!displayGameRegistration) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <CenteredError>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <GameRegistration
          project={project}
          onGameRegistered={() => {
            setDisplayGameRegistration(false);
            onListLeaderboards();
          }}
        />
      </CenteredError>
    );
  }
  if (apiError && apiError.action === 'leaderboardCreation') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <CenteredError>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AlertMessage kind="error">{apiError.message}</AlertMessage>
      </CenteredError>
    );
  }
  if (apiError && apiError.action === 'leaderboardsFetching') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <CenteredError>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PlaceholderError onRetry={onListLeaderboards}>
          {apiError.message}
        </PlaceholderError>
      </CenteredError>
    );
  }
  if (leaderboards === null) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    if (isRequestPending) return <PlaceholderLoader />;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <CenteredError>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PlaceholderError onRetry={onListLeaderboards}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            An error occurred when retrieving leaderboards, please try again
            later.
          </Trans>
        </PlaceholderError>
      </CenteredError>
    );
  }

  if (!!leaderboards && leaderboards.length === 0)
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Line noMargin expand justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <EmptyPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Create your game's first leaderboard</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          description={<Trans>Leaderboards help retain your players</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          actionLabel={<Trans>Create a leaderboard</Trans>}
          onAction={() => {
            onCreateLeaderboard();
          }}
          actionButtonId="add-new-leaderboard-button"
          isLoading={isRequestPending}
        />
      </Line>
    );

  const getLeaderboardDescription = (
    i18n: I18nType,
    currentLeaderboard: Leaderboard
  ) => [
    {
      key: 'name',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      avatar: <Tag />,
      text: isEditingName ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line alignItems="center" expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
            id="edit-name-field"
            ref={newNameTextFieldRef}
            margin="none"
            style={styles.leaderboardNameTextField}
            maxLength={50}
            value={newName}
            errorText={newNameError}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={(e, text) => setNewName(text)}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onKeyPress={event => {
              if (shouldValidate(event) && !isRequestPending) {
                onUpdateLeaderboard(i18n, { name: newName });
              }
            }}
            disabled={isRequestPending}
          />
          {!isRequestPending && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton
                tooltip={t`Cancel`}
                style={{ padding: 0 }}
                onClick={() => {
                  setIsEditingName(false);
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Cross />
              </IconButton>
            </>
          )}
        </Line>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip title={currentLeaderboard.name}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2" style={styles.leaderboardNameText}>
            {currentLeaderboard.name}
          </Text>
        </Tooltip>
      ),
      secondaryText:
        apiError && apiError.action === 'leaderboardNameUpdate' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text color="error" size="body2">
            {apiError.message}
          </Text>
        ) : null,
      secondaryAction: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton
          onClick={() => {
            if (isEditingName) {
              onUpdateLeaderboard(i18n, { name: newName });
            } else {
              setNewName(currentLeaderboard.name);
              setIsEditingName(true);
            }
          }}
          tooltip={isEditingName ? t`Save` : t`Rename`}
          disabled={isRequestPending}
          edge="end"
          id={isEditingName ? 'save-name-button' : 'edit-name-button'}
        >
          {isEditingName ? (
            isRequestPending ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <CircularProgress size={20} />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Save />
            )
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Edit />
          )}
        </IconButton>
      ),
    },
    {
      key: 'id',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      avatar: <AtSign />,
      text: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip title={currentLeaderboard.id}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2">
            {shortenUuidForDisplay(currentLeaderboard.id)}
          </Text>
        </Tooltip>
      ),
      secondaryText: null,
      secondaryAction: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton onClick={onCopy} tooltip={t`Copy`} edge="end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Copy />
        </IconButton>
      ),
    },
    {
      key: 'startDatetime',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      avatar: <Calendar />,
      text: currentLeaderboard.resetLaunchedAt ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Text size="body2">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Reset requested the{' '}
            {i18n.date(currentLeaderboard.resetLaunchedAt, {
              dateStyle: 'short',
              timeStyle: 'short',
            })}
            . Please wait a few minutes...
          </Trans>
        </Text>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip
          title={i18n._(
            t`Date from which entries are taken into account: ${i18n.date(
              currentLeaderboard.startDatetime,
              {
                dateStyle: 'short',
                timeStyle: 'short',
              }
            )}`
          )}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2">
            {i18n.date(currentLeaderboard.startDatetime)}
          </Text>
        </Tooltip>
      ),
      secondaryText:
        apiError && apiError.action === 'leaderboardReset' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text color="error" size="body2">
            {apiError.message}
          </Text>
        ) : null,
      secondaryAction: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton
          onClick={() => onResetLeaderboard(i18n)}
          tooltip={t`Reset leaderboard`}
          edge="end"
          disabled={
            isRequestPending ||
            isEditingName ||
            !!currentLeaderboard.resetLaunchedAt
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Refresh />
        </IconButton>
      ),
    },
    {
      key: 'sort',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      avatar: <Sort />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      text: <Text size="body2">{getSortOrderText(currentLeaderboard)}</Text>,
      secondaryText:
        apiError && apiError.action === 'leaderboardSortUpdate' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text color="error" size="body2">
            {apiError.message}
          </Text>
        ) : null,
      secondaryAction: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton
          onClick={() => setIsEditingSortOptions(true)}
          tooltip={t`Edit`}
          edge="end"
          disabled={isRequestPending || isEditingName}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Edit />
        </IconButton>
      ),
    },
    {
      key: 'visibility',
      avatar:
        currentLeaderboard.visibility === 'HIDDEN' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <VisibilityOff />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Visibility />
        ),
      text: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip
          title={i18n._(
            currentLeaderboard.visibility === 'HIDDEN'
              ? t`Anyone with the link can see it, but it is not listed in your game's leaderboards.`
              : t`Anyone can access it.`
          )}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2">
            {currentLeaderboard.visibility === 'HIDDEN' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Not visible</Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Public</Trans>
            )}
          </Text>
        </Tooltip>
      ),
      secondaryText:
        apiError && apiError.action === 'leaderboardVisibilityUpdate' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text color="error" size="body2">
            {apiError.message}
          </Text>
        ) : null,
      secondaryAction: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton
          onClick={async () => {
            await onUpdateLeaderboard(i18n, {
              visibility:
                currentLeaderboard.visibility === 'HIDDEN'
                  ? 'PUBLIC'
                  : 'HIDDEN',
            });
          }}
          tooltip={
            currentLeaderboard.visibility === 'HIDDEN'
              ? t`Make the leaderboard public`
              : t`Hide the leaderboard`
          }
          edge="end"
          disabled={isRequestPending || isEditingName}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SwitchHorizontal />
        </IconButton>
      ),
    },
    {
      key: 'ignoreCustomPlayerNames',
      avatar: currentLeaderboard.ignoreCustomPlayerNames ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Lock />
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LockOpen />
      ),
      text: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip
          title={i18n._(
            currentLeaderboard.ignoreCustomPlayerNames
              ? t`Even if the action is used to send a score with a custom player username, this name will be ignored by the leaderboard.`
              : t`The player name sent in the action to send a score will be used.`
          )}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2">
            {currentLeaderboard.ignoreCustomPlayerNames ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Ignore unauthenticated player usernames</Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Allow unauthenticated player usernames</Trans>
            )}
          </Text>
        </Tooltip>
      ),
      secondaryText:
        apiError &&
        apiError.action === 'leaderboardIgnoreCustomPlayerNamesUpdate' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text color="error" size="body2">
            {apiError.message}
          </Text>
        ) : null,
      secondaryAction: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton
          onClick={async () => {
            await onUpdateLeaderboard(i18n, {
              ignoreCustomPlayerNames: !currentLeaderboard.ignoreCustomPlayerNames,
            });
          }}
          tooltip={
            currentLeaderboard.ignoreCustomPlayerNames
              ? t`Change to allow custom player usernames`
              : t`Change to ignore custom player usernames`
          }
          edge="end"
          disabled={isRequestPending || isEditingName}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SwitchHorizontal />
        </IconButton>
      ),
    },
    {
      key: 'autoPlayerNamePrefix',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      avatar: <Tag />,
      text: isEditingAutoPlayerNamePrefix ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line alignItems="center" expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
            id="edit-autoPlayerNamePrefix-field"
            ref={newAutoPlayerNamePrefixTextFieldRef}
            margin="none"
            style={styles.leaderboardNameTextField}
            maxLength={40}
            value={newAutoPlayerNamePrefix}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={(e, text) => setNewAutoPlayerNamePrefix(text)}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onKeyPress={event => {
              if (shouldValidate(event) && !isRequestPending) {
                onUpdateLeaderboard(i18n, {
                  autoPlayerNamePrefix: newAutoPlayerNamePrefix,
                });
              }
            }}
            disabled={isRequestPending}
          />
          {!isRequestPending && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton
                tooltip={t`Cancel`}
                style={{ padding: 0 }}
                onClick={() => {
                  setIsEditingAutoPlayerNamePrefix(false);
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Cross />
              </IconButton>
            </>
          )}
        </Line>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip
          title={
            currentLeaderboard.autoPlayerNamePrefix ||
            i18n._('No custom prefix for auto-generated player names')
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2" style={styles.leaderboardNameText}>
            {currentLeaderboard.autoPlayerNamePrefix ||
              i18n._('No custom prefix for auto-generated player names')}
          </Text>
        </Tooltip>
      ),
      secondaryText:
        apiError &&
        apiError.action === 'leaderboardAutoPlayerNamePrefixUpdate' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text color="error" size="body2">
            {apiError.message}
          </Text>
        ) : null,
      secondaryAction: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton
          onClick={() => {
            if (isEditingAutoPlayerNamePrefix) {
              onUpdateLeaderboard(i18n, {
                autoPlayerNamePrefix: newAutoPlayerNamePrefix,
              });
            } else {
              setNewAutoPlayerNamePrefix(
                currentLeaderboard.autoPlayerNamePrefix || ''
              );
              setIsEditingAutoPlayerNamePrefix(true);
            }
          }}
          tooltip={
            isEditingAutoPlayerNamePrefix
              ? t`Save`
              : t`Change the default prefix for player names`
          }
          disabled={isRequestPending}
          edge="end"
          id={
            isEditingAutoPlayerNamePrefix
              ? 'save-autoPlayerNamePrefix-button'
              : 'edit-autoPlayerNamePrefix-button'
          }
        >
          {isEditingAutoPlayerNamePrefix ? (
            isRequestPending ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <CircularProgress size={20} />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Save />
            )
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Edit />
          )}
        </IconButton>
      ),
    },
    {
      key: 'appearance',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      avatar: <TextFormat />,
      text: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Text size="body2">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Leaderboard appearance</Trans>
        </Text>
      ),
      secondaryText:
        apiError && apiError.action === 'leaderboardAppearanceUpdate' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text color="error" size="body2">
            {apiError.message}
          </Text>
        ) : null,
      secondaryAction: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton
          onClick={() => setIsEditingAppearance(true)}
          tooltip={t`Edit`}
          edge="end"
          disabled={isRequestPending || isEditingName}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EditFile />
        </IconButton>
      ),
    },
    {
      key: 'playerUnicityDisplayChoice',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      avatar: <Users />,
      text: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SelectField
          fullWidth
          margin="none"
          value={currentLeaderboard.playerUnicityDisplayChoice}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onChange={(e, i, value) => {
            onUpdateLeaderboard(i18n, {
              // $FlowFixMe
              playerUnicityDisplayChoice: value,
            });
          }}
          disabled={isRequestPending || isEditingName}
          inputStyle={{ fontSize: 14 }}
          helperMarkdownText={
            currentLeaderboard.playerUnicityDisplayChoice === 'FREE'
              ? i18n._(
                  t`Users can chose to see only players' best entries or not.`
                )
              : currentLeaderboard.playerUnicityDisplayChoice ===
                'PREFER_UNIQUE'
              ? i18n._(t`Only player's best entries are displayed.`)
              : i18n._(t`All entries are displayed.`)
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption
            key={'free'}
            value={'FREE'}
            label={t`Let the user select`}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption
            key={'prefer-unique'}
            value={'PREFER_UNIQUE'}
            label={t`Only best entry`}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption
            key={'prefer-non-unique'}
            value={'PREFER_NON_UNIQUE'}
            label={t`All entries`}
          />
        </SelectField>
      ),
      secondaryText:
        apiError &&
        apiError.action === 'leaderboardPlayerUnicityDisplayChoiceUpdate' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text color="error" size="body2">
            {apiError.message}
          </Text>
        ) : null,
      secondaryAction: null,
    },
  ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
            {displayMaxLeaderboardCountReachedWarning && limits && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <MaxLeaderboardCountAlertMessage
                onUpgrade={() =>
                  openSubscriptionDialog({
                    analyticsMetadata: {
                      reason: 'Leaderboard count per game limit reached',
                    },
                  })
                }
                onClose={() =>
                  setDisplayMaxLeaderboardCountReachedWarning(false)
                }
                limits={limits}
              />
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout
              noMargin
              expand
              noColumnMargin
              id="leaderboard-administration-panel"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div style={styles.leftColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Paper
                  elevation={3}
                  style={styles.leaderboardConfigurationPaper}
                  background="light"
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line noMargin>
                      {currentLeaderboard && leaderboards ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <SelectField
                          fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          floatingLabelText={<Trans>Leaderboard name</Trans>}
                          value={currentLeaderboard.id}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'leaderboardId' implicitly has an 'any' type.
                          onChange={(e, i, leaderboardId) => {
                            selectLeaderboard(leaderboardId);
                          }}
                        >
                          {leaderboards.map(leaderboard => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <SelectOption
                              key={leaderboard.id}
                              value={leaderboard.id}
                              label={
                                leaderboard.primary
                                  ? t`${leaderboard.name} (default)`
                                  : leaderboard.name
                              }
                              shouldNotTranslate={!leaderboard.primary}
                            />
                          ))}
                        </SelectField>
                      ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <IconButton
                        onClick={onCreateLeaderboard}
                        disabled={isEditingName || isRequestPending}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Add />
                      </IconButton>
                    </Line>
                    {currentLeaderboard ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <List>
                          {getLeaderboardDescription(
                            i18n,
                            currentLeaderboard
                          ).map((item, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <React.Fragment key={`fragment-${item.key}`}>
                              {index > 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Divider
                                  key={`divider-${item.key}`}
                                  component="li"
                                />
                              ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <ListItem key={item.key} disableGutters>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <ListItemAvatar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <Avatar>{item.avatar}</Avatar>
                                </ListItemAvatar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <ListItemText
                                  disableTypography
                                  secondary={item.secondaryText}
                                >
                                  {item.text}
                                </ListItemText>
                                {item.secondaryAction ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <ListItemSecondaryAction>
                                    {item.secondaryAction}
                                  </ListItemSecondaryAction>
                                ) : null}
                              </ListItem>
                            </React.Fragment>
                          ))}
                        </List>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Line justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            leftIcon={<Trash />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            label={<Trans>Delete</Trans>}
                            disabled={isRequestPending || isEditingName}
                            onClick={() => onDeleteLeaderboard(i18n)}
                          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <RaisedButton
                            label={
                              currentLeaderboard.primary ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Trans>Default</Trans>
                              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Trans>Set as default</Trans>
                              )
                            }
                            disabled={
                              isRequestPending ||
                              isEditingName ||
                              currentLeaderboard.primary
                            }
                            onClick={() =>
                              onUpdateLeaderboard(i18n, { primary: true })
                            }
                          />
                        </Line>
                        {apiError &&
                        (apiError.action === 'leaderboardDeletion' ||
                          apiError.action === 'leaderboardPrimaryUpdate') ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <PlaceholderError>
                            {apiError.message}
                          </PlaceholderError>
                        ) : null}
                      </>
                    ) : null}
                  </Column>
                </Paper>
              </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                style={{
                  ...styles.rightColumn,
                  paddingLeft: isMobile ? 0 : 20,
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line alignItems="center" justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Toggle
                    labelPosition="left"
                    toggled={displayOnlyBestEntry}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                    onToggle={(e, newValue) =>
                      setDisplayOnlyBestEntry(newValue)
                    }
                    label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Tooltip
                        title={i18n._(
                          t`When checked, will only display the best score of each player (only for the display below).`
                        )}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text size="body2">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Trans>Player best entry</Trans>
                        </Text>
                      </Tooltip>
                    }
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Divider orientation="vertical" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <IconButton
                    onClick={onFetchLeaderboardEntries}
                    disabled={isRequestPending || isEditingName}
                    tooltip={t`Refresh`}
                    size="small"
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Refresh />
                  </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
                </Line>
                {apiError && apiError.action === 'entriesFetching' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <CenteredError>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <PlaceholderError onRetry={onFetchLeaderboardEntries}>
                      {apiError.message}
                    </PlaceholderError>
                  </CenteredError>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <LeaderboardEntriesTable
                    entries={entries}
                    customizationSettings={
                      currentLeaderboard
                        ? currentLeaderboard.customizationSettings
                        : null
                    }
// @ts-expect-error - TS7006 - Parameter 'entry' implicitly has an 'any' type.
                    onDeleteEntry={entry => onDeleteEntry(i18n, entry)}
                    isLoading={isRequestPending || isEditingName}
                    navigation={{
                      goToNextPage,
                      goToPreviousPage,
                      goToFirstPage,
                    }}
                    erroredEntry={
                      apiError &&
                      apiError.action === 'entryDeletion' &&
                      apiError.itemId
                        ? {
                            entryId: apiError.itemId,
                            message: apiError.message,
                          }
                        : undefined
                    }
                  />
                )}
              </div>
            </ResponsiveLineStackLayout>
          </Column>
          {isEditingAppearance ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <LeaderboardAppearanceDialog
              open
              leaderboardCustomizationSettings={
                currentLeaderboard
                  ? currentLeaderboard.customizationSettings
                  : undefined
              }
              onClose={() => setIsEditingAppearance(false)}
              onSave={async (
                customizationSettings: LeaderboardCustomizationSettings
              ) => {
                try {
                  await onUpdateLeaderboard(i18n, {
                    customizationSettings,
                  });
                } finally {
                  setIsEditingAppearance(false);
                }
              }}
            />
          ) : null}
          {isEditingSortOptions && currentLeaderboard ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <LeaderboardSortOptionsDialog
              open
              onClose={() => setIsEditingSortOptions(false)}
              onSave={async (sortOptions: {
                sort: LeaderboardSortOption,
                extremeAllowedScore: number | null | undefined
              }) => {
                try {
                  await onUpdateLeaderboard(i18n, {
                    ...sortOptions,
                  });
                } finally {
                  setIsEditingSortOptions(false);
                }
              }}
              sort={currentLeaderboard.sort}
              extremeAllowedScore={currentLeaderboard.extremeAllowedScore}
            />
          ) : null}
        </>
      )}
    </I18n>
  );
};

const LeaderboardAdminContainer = ({
  gameId,
  ...otherProps
}: ContainerProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LeaderboardProvider gameId={gameId}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LeaderboardAdmin {...otherProps} />
  </LeaderboardProvider>
);

export default LeaderboardAdminContainer;
