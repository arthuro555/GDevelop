import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
import {
  ColumnStackLayout,
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../../../UI/Layout';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
import { useOnlineStatus } from '../../../../Utils/OnlineStatus';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/TreeLeaves'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/TreeLeaves.js' implicitly has an 'any' type.
import TreeLeaves from '../../../../UI/CustomSvgIcons/TreeLeaves';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer from '../SectionContainer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/JewelPlatform'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/JewelPlatform.js' implicitly has an 'any' type.
import JewelPlatform from '../../../../UI/CustomSvgIcons/JewelPlatform';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
import useForceUpdate from '../../../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line } from '../../../../UI/Grid';
import { useResponsiveWindowSize } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../../../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../../../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../../../UI/BackgroundText';
import {
  UsernameAvailability,
  UserSurvey as UserSurveyType,
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../../../../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module './UserSurvey' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/UserSurvey.tsx', but '--jsx' is not set.
import UserSurvey from './UserSurvey';
import {
  clearUserSurveyPersistedState,
  hasStartedUserSurvey,
} from './UserSurveyStorage';
// @ts-expect-error - TS6142 - Module '../../../../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../../../../UI/LinearProgress';
// @ts-expect-error - TS6142 - Module '../../../../Profile/CreateAccountForm' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateAccountForm.tsx', but '--jsx' is not set.
import CreateAccountForm from '../../../../Profile/CreateAccountForm';
// @ts-expect-error - TS6142 - Module '../../../../Profile/LoginForm' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/LoginForm.tsx', but '--jsx' is not set.
import LoginForm from '../../../../Profile/LoginForm';
// @ts-expect-error - TS6142 - Module '../../../Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../../Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module './RecommendationList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/RecommendationList.tsx', but '--jsx' is not set.
import RecommendationList from './RecommendationList';
// @ts-expect-error - TS6142 - Module '../../../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../../../UI/ErrorBoundary';
import { delay } from '../../../../Utils/Delay';
import { AuthError } from '../../../../Utils/GDevelopServices/Authentication';
import { SubscriptionPlanWithPricingSystems } from '../../../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../../../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../../../UI/Checkbox';
import { getGetStartedSectionViewCount } from '../../../../Utils/Analytics/LocalStats';
import { sendUserSurveyCompleted } from '../../../../Utils/Analytics/EventSender';

const ONE_WEEK = 7 * 24 * 3600 * 1000;
const THRESHOLD_BEFORE_ALLOWING_TO_HIDE_GET_STARTED_SECTION = 15;

const shouldDisplayOptionToHideGetStartedSection = (
  {
    isAuthenticated,
  }: {
    isAuthenticated: boolean
  },
): boolean => {
  if (!isAuthenticated) return false;

  const getStartedSectionViewCount = getGetStartedSectionViewCount();
  return (
    getStartedSectionViewCount >
    THRESHOLD_BEFORE_ALLOWING_TO_HIDE_GET_STARTED_SECTION
  );
};

const styles = {
  icon: {
    width: 80,
    height: 80,
    margin: 20,
  },
  middlePageButtonContainer: {
    width: '100%',
    maxWidth: 300, // Make buttons larger but not too much.
    marginBottom: '15%', // Used to display the content of the section higher than at the center.
  },
  bottomPageButtonContainer: {
    width: '100%',
    maxWidth: 300, // Make buttons larger but not too much.
    marginBottom: 30, // Used to giver some space between the buttons and the screen bottom border.
  },
  linearProgress: { width: 200 },
  getFormContainerStyle: (isMobile: boolean) => ({
    marginTop: 20,
    // Take full width on mobile.
    width: isMobile ? '95%' : 300,
  }),
  questionnaireFinishedImage: { aspectRatio: '263 / 154' },
} as const;

const questionnaireFinishedImageSource = 'res/questionnaire/welcome-back.svg';

type Props = {
  onUserSurveyStarted: () => void,
  onUserSurveyHidden: () => void,
  selectInAppTutorial: (tutorialId: string) => void,
  subscriptionPlansWithPricingSystems: SubscriptionPlanWithPricingSystems[] | null | undefined
};

const GetStartedSection = ({
  selectInAppTutorial,
  onUserSurveyStarted,
  onUserSurveyHidden,
  subscriptionPlansWithPricingSystems,
}: Props) => {
  const isFillingOutSurvey = hasStartedUserSurvey();
  const isOnline = useOnlineStatus();
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const [
    isLoggingInUsingProvider,
    setIsLoggingInUsingProvider,
  ] = React.useState<boolean>(false);
  const {
    profile,
    onResetPassword,
    creatingOrLoggingInAccount,
    onLogin,
    onLoginWithProvider,
    onCancelLogin,
    onEditProfile,
    onCreateAccount,
    authenticationError,
    loginState,
  } = authenticatedUser;
  const {
    values: preferences,
    setShowGetStartedSectionByDefault,
  } = React.useContext(PreferencesContext);
  const recommendationsGettingDelayPromise = React.useRef<Promise<undefined> | null | undefined>(null);
  const [error, setError] = React.useState<AuthError | null | undefined>(null);
  const forceUpdate = useForceUpdate();
  const { isMobile } = useResponsiveWindowSize();
  const [step, setStep] = React.useState<'welcome' | 'login' | 'register' | 'survey' | 'surveyFinished' | 'recommendations'>(isFillingOutSurvey ? 'survey' : 'recommendations');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [errorSendingSurvey, setErrorSendingSurvey] = React.useState<boolean>(false);
  const [
    usernameAvailability,
    setUsernameAvailability,
  ] = React.useState<UsernameAvailability | null | undefined>(null);
  const [
    isValidatingUsername,
    setIsValidatingUsername,
  ] = React.useState<boolean>(false);
  const [getNewsletterEmail, setGetNewsletterEmail] = React.useState<boolean>(false);
  const [
    lastVisitedAuthenticationStep,
    setLastVisitedAuthenticationStep,
  ] = React.useState<'login' | 'register'>('login');

  const doLogin = () => {
    if (creatingOrLoggingInAccount) return;
    onLogin({
      email: email.trim(),
      password,
    });
  };

  const doCreateAccount = async () => {
    if (creatingOrLoggingInAccount) return;
    onCreateAccount(
      {
        email: email.trim(),
        password,
        getNewsletterEmail,
        username,
      },
      preferences
    );
  };

  const onSurveyFinished = async (survey: UserSurveyType) => {
    try {
      setStep('surveyFinished');
      // Artificial delay to build up expectations.
// @ts-expect-error - TS2322 - Type 'Promise<void>' is not assignable to type 'Promise<undefined>'.
      recommendationsGettingDelayPromise.current = delay(2500);
      await Promise.all([
        onEditProfile({ survey }, preferences, { throwError: true }),
        recommendationsGettingDelayPromise.current,
      ]);
      sendUserSurveyCompleted();
      clearUserSurveyPersistedState();
      setStep('recommendations');
    } catch (error: any) {
      console.error('An error occurred when sending survey:', error);
      setErrorSendingSurvey(true);
      setStep('welcome');
    } finally {
      recommendationsGettingDelayPromise.current = null;
    }
  };

  const loginWithProvider = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'provider' implicitly has an 'any' type.
    async provider => {
      try {
        setIsLoggingInUsingProvider(true);
        await onLoginWithProvider(provider);
      } finally {
        setIsLoggingInUsingProvider(false);
      }
    },
    [onLoginWithProvider]
  );

  // Logic to store the last visited authentication step.
  React.useEffect(
    () => {
      if (step === 'login') {
        setLastVisitedAuthenticationStep('login');
      } else if (step === 'register') {
        setLastVisitedAuthenticationStep('register');
      }
    },
    [step]
  );

  React.useEffect(
    () => {
      if (!authenticatedUser.authenticated) clearUserSurveyPersistedState();
    },
    [authenticatedUser.authenticated]
  );

  // Set the error when the authentication error changes.
  React.useEffect(
    () => {
      setError(authenticationError);
    },
    [authenticationError]
  );

  // Reset form when user changes authentication step.
  React.useEffect(
    () => {
      setError(null);
      setEmail('');
      setPassword('');
    },
    [lastVisitedAuthenticationStep]
  );

  if (
    (creatingOrLoggingInAccount || loginState === 'loggingIn') &&
    // Do not display loader if the user is already seeing the recommendations.
    // It can happen when the user profile is refreshed while the recommendations
    // are displayed. This way, the loader is not displayed unnecessarily.
    step !== 'recommendations' &&
    !recommendationsGettingDelayPromise.current
  ) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SectionContainer
        title={null} // Let the content handle the title.
        flexBody
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout
          noMargin
          expand
          justifyContent="center"
          alignItems="center"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout
            noMargin
            expand
            justifyContent="center"
            alignItems="center"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CircularProgress size={40} />
          </ColumnStackLayout>
          {isLoggingInUsingProvider && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={styles.bottomPageButtonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout
                  expand
                  justifyContent="center"
                  alignItems="center"
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
                    primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Cancel</Trans>}
                    onClick={onCancelLogin}
                  />
                </LineStackLayout>
              </Column>
            </div>
          )}
        </ColumnStackLayout>
      </SectionContainer>
    );
  }

  if (!isOnline || errorSendingSurvey) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SectionContainer
        title={null} // Let the content handle the title.
        flexBody
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout
          noMargin
          expand
          justifyContent="center"
          alignItems="center"
        >
          {errorSendingSurvey ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Error when sending survey.</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TreeLeaves style={styles.icon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="body2" noMargin align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Verify your internet connection and try again later.
                </Trans>
              </Text>
            </>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>You seem to be offline</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TreeLeaves style={styles.icon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="body2" noMargin align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Verify your internet connection to access your personalized
                  content.
                </Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div style={styles.middlePageButtonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <RaisedButton
                    primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Refresh</Trans>}
                    onClick={forceUpdate}
                    fullWidth
                  />
                </Line>
              </div>
            </>
          )}
        </ColumnStackLayout>
      </SectionContainer>
    );
  }

  if (step === 'login') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SectionContainer
        title={null} // Let the content handle the title.
        flexBody
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout
          noMargin
          expand
          justifyContent="center"
          alignItems="center"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout
            expand
            noMargin
            alignItems="center"
            justifyContent="center"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Log in to GDevelop</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                This will synchronise your selected content wherever you go.
              </Trans>
            </BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.getFormContainerStyle(isMobile)}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LoginForm
                email={email}
                onChangeEmail={setEmail}
                password={password}
                onChangePassword={setPassword}
                onLogin={doLogin}
                onLoginWithProvider={loginWithProvider}
                loginInProgress={creatingOrLoggingInAccount}
                onForgotPassword={onResetPassword}
                error={error}
              />
              {/* TODO: Add button to cancel login with providers */}
            </div>
          </ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div style={styles.bottomPageButtonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <FlatButton
                  primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Back</Trans>}
                  onClick={() => setStep('welcome')}
                  fullWidth
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Next</Trans>}
                  primary
                  onClick={doLogin}
                  fullWidth
                />
              </LineStackLayout>
            </Column>
          </div>
        </ColumnStackLayout>
      </SectionContainer>
    );
  }

  if (step === 'register') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SectionContainer
        title={null} // Let the content handle the title.
        flexBody
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout
          noMargin
          expand
          justifyContent="center"
          alignItems="center"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout
            expand
            noMargin
            alignItems="center"
            justifyContent="center"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Let's start by creating your GDevelop account</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                This will synchronise your selected content wherever you go.
              </Trans>
            </BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.getFormContainerStyle(isMobile)}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CreateAccountForm
                email={email}
                onChangeEmail={setEmail}
                onLoginWithProvider={loginWithProvider}
                password={password}
                onChangePassword={setPassword}
                username={username}
                onChangeUsername={setUsername}
                optInNewsletterEmail={getNewsletterEmail}
                onChangeOptInNewsletterEmail={setGetNewsletterEmail}
                isValidatingUsername={isValidatingUsername}
                onChangeIsValidatingUsername={setIsValidatingUsername}
                usernameAvailability={usernameAvailability}
                onChangeUsernameAvailability={setUsernameAvailability}
                onCreateAccount={doCreateAccount}
                createAccountInProgress={creatingOrLoggingInAccount}
                error={error}
              />
            </div>
          </ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div style={styles.bottomPageButtonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <FlatButton
                  primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Back</Trans>}
                  onClick={() => setStep('welcome')}
                  fullWidth
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Next</Trans>}
                  primary
                  onClick={doCreateAccount}
                  fullWidth
                />
              </LineStackLayout>
            </Column>
          </div>
        </ColumnStackLayout>
      </SectionContainer>
    );
  }

  if (step === 'welcome') {
    const isNewUser = profile && Date.now() - profile.createdAt < ONE_WEEK;
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SectionContainer
        title={null} // Let the content handle the title.
        flexBody
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout
          noMargin
          expand
          justifyContent="center"
          alignItems="center"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout
            noMargin
            expand
            justifyContent="center"
            alignItems="center"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="title" align="center">
              {!profile || isNewUser ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Welcome to GDevelop!</Trans>
              ) : profile && profile.username ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Good to see you {profile.username}!</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>We have something new for you!</Trans>
              )}
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <JewelPlatform style={styles.icon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="body2" noMargin align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                We've made a selection of GDevelop content to help you on your
                game development journey.
              </Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" align="center">
              {profile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Answer our questionnaire and get recommendations according to
                  your current objectives.
                </Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Let's start by creating your account.</Trans>
              )}
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.middlePageButtonContainer}>
              {profile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Let's go!</Trans>}
                    primary
                    onClick={() => setStep('survey')}
                    fullWidth
                  />
                </Column>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Let's go!</Trans>}
                    primary
                    onClick={() => setStep('register')}
                    fullWidth
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
                    primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>I already have an account</Trans>}
                    onClick={() => setStep('login')}
                    fullWidth
                  />
                </ColumnStackLayout>
              )}
            </div>
          </ColumnStackLayout>
          {shouldDisplayOptionToHideGetStartedSection({
            isAuthenticated: authenticatedUser.authenticated,
          }) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={styles.bottomPageButtonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Don't show this screen on next startup</Trans>}
                checked={!preferences.showGetStartedSectionByDefault}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                onCheck={(e, checked) => {
                  if (checked) onUserSurveyHidden();
                  setShowGetStartedSectionByDefault(!checked);
                }}
              />
            </div>
          )}
        </ColumnStackLayout>
      </SectionContainer>
    );
  }

  if (step === 'surveyFinished') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SectionContainer
        title={null} // Let the content handle the title.
        flexBody
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout
          noMargin
          expand
          justifyContent="center"
          alignItems="center"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Alright let's see what we have for you...</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <img
            src={questionnaireFinishedImageSource}
            alt="You as the red hero coming back to life"
            style={styles.questionnaireFinishedImage}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2" noMargin align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Just one second please...</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LinearProgress
              variant="indeterminate"
              style={styles.linearProgress}
            />
          </Line>
        </ColumnStackLayout>
      </SectionContainer>
    );
  }

  const renderSubtitle = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResponsiveLineStackLayout
      justifyContent="flex-end"
      alignItems="center"
      noColumnMargin
      noMargin
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Don't show this screen on next startup</Trans>}
        checked={!preferences.showGetStartedSectionByDefault}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
        onCheck={(e, checked) => setShowGetStartedSectionByDefault(!checked)}
      />
    </ResponsiveLineStackLayout>
  );

  if (step === 'recommendations') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionContainer
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Start making games</Trans>}
          renderSubtitle={renderSubtitle}
          flexBody
          showUrgentAnnouncements
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RecommendationList
            authenticatedUser={authenticatedUser}
            selectInAppTutorial={selectInAppTutorial}
            subscriptionPlansWithPricingSystems={
              subscriptionPlansWithPricingSystems
            }
            onStartSurvey={
              profile
                ? () => {
                    setStep('survey');
                  }
                : null
            }
            hasFilledSurveyAlready={profile ? !!profile.survey : false}
          />
        </SectionContainer>
      </>
    );
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <UserSurvey
      onCompleted={onSurveyFinished}
      onStarted={onUserSurveyStarted}
    />
  );
};

const GetStartedSectionWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Get started section</Trans>}
    scope="start-page-get-started"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GetStartedSection {...props} />
  </ErrorBoundary>
);

export default GetStartedSectionWithErrorBoundary;
