// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
import AuthenticatedUserContext from '../AuthenticatedUserContext';
import { changeUserSubscription } from '../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../UI/Layout';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/GDevelopGLogo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GDevelopGLogo.js' implicitly has an 'any' type.
import GDevelopGLogo from '../../UI/CustomSvgIcons/GDevelopGLogo';
// @ts-expect-error - TS6142 - Module '../../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../../UI/Form';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Star'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Star.js' implicitly has an 'any' type.
import StarIcon from '../../UI/CustomSvgIcons/Star';

type Props = {
  onClose: () => void,
  onCloseAfterSuccess: () => void
};

const CancelReasonDialog = ({
  onClose,
  onCloseAfterSuccess,
}: Props) => {
  const [isCancelingSubscription, setIsCancelingSubscription] = React.useState(
    false
  );
  const [hasCanceledSubscription, setHasCanceledSubscription] = React.useState(
    false
  );
  const [
    stoppedMakingGamesChecked,
    setStoppedMakingGamesChecked,
  ] = React.useState(false);
  const [strugglingChecked, setStrugglingChecked] = React.useState(false);
  const [
    preferFreeVersionChecked,
    setPreferFreeVersionChecked,
  ] = React.useState(false);
  const [missingFeatureChecked, setMissingFeatureChecked] = React.useState(
    false
  );
  const [qualityIssuesChecked, setQualityIssuesChecked] = React.useState(false);
  const [otherChecked, setOtherChecked] = React.useState(false);
  const [freeText, setFreeText] = React.useState('');
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const canSubmit =
    (stoppedMakingGamesChecked ||
      strugglingChecked ||
      preferFreeVersionChecked ||
      qualityIssuesChecked ||
      missingFeatureChecked ||
      otherChecked) &&
    ((!missingFeatureChecked && !otherChecked) || freeText.trim().length > 0);

  const cancelPlan = React.useCallback(
    async () => {
      if (isCancelingSubscription || !canSubmit) return;
      const {
        getAuthorizationHeader,
        subscription,
        profile,
      } = authenticatedUser;
      if (!profile || !subscription) return;
      setIsCancelingSubscription(true);
      try {
        await changeUserSubscription(
          getAuthorizationHeader,
          profile.id,
          {
            planId: null,
          },
          {
            cancelImmediately: false,
            cancelReasons: {
              'stopped-making-games': stoppedMakingGamesChecked,
              'struggling-with-gdevelop': strugglingChecked,
              'prefer-free-version': preferFreeVersionChecked,
              'missing-feature': missingFeatureChecked,
              'quality-issues': qualityIssuesChecked,
              other: otherChecked,
              freeText: freeText,
            },
          }
        );
        await authenticatedUser.onRefreshSubscription();
        setHasCanceledSubscription(true);
      } catch (rawError: any) {
        await authenticatedUser.onRefreshSubscription();
        console.error('Error while canceling subscription:', rawError);
        showAlert({
          title: t`Could not cancel your subscription`,
          message: t`There was an error while canceling your subscription. Verify your internet connection or try again later.`,
        });
      } finally {
        setIsCancelingSubscription(false);
      }
    },
    [
      authenticatedUser,
      showAlert,
      isCancelingSubscription,
      canSubmit,
      freeText,
      stoppedMakingGamesChecked,
      strugglingChecked,
      preferFreeVersionChecked,
      qualityIssuesChecked,
      missingFeatureChecked,
      otherChecked,
    ]
  );

  const isLoading =
    !authenticatedUser.subscription ||
    !authenticatedUser.profile ||
    isCancelingSubscription;

  const actions = hasCanceledSubscription
    ? [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          key="close"
          onClick={onCloseAfterSuccess}
          primary
        />,
      ]
    : [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Submit and cancel</Trans>}
          key="submit"
          onClick={cancelPlan}
          disabled={!canSubmit || isLoading}
          primary
        />,
      ];

  const secondaryActions = hasCanceledSubscription
    ? []
    : [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Back</Trans>}
          key="back"
          onClick={onClose}
          disabled={isLoading}
        />,
      ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
          title={null}
          actions={actions}
          secondaryActions={secondaryActions}
          open
          cannotBeDismissed
          onApply={cancelPlan}
          maxWidth="sm"
        >
          {hasCanceledSubscription ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ColumnStackLayout
              expand
              justifyContent="center"
              alignItems="center"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <GDevelopGLogo fontSize="large" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Your subscription has been canceled</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <StarIcon />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="sub-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Thank you for your feedback</Trans>
                </Text>
              </LineStackLayout>
            </ColumnStackLayout>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ColumnStackLayout
              expand
              justifyContent="center"
              alignItems="center"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <GDevelopGLogo fontSize="large" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Before you go...</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="body2" noMargin align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Your feedback is valuable to help us improve our premium
                  services. Why are you canceling your subscription?
                </Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Form
                onSubmit={cancelPlan}
                autoComplete="off"
                name="cancel"
                fullWidth
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>I've stopped using GDevelop</Trans>}
                    checked={stoppedMakingGamesChecked}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) =>
                      setStoppedMakingGamesChecked(checked)
                    }
                    disabled={isLoading}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>I'm struggling to create what I want</Trans>}
                    checked={strugglingChecked}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => setStrugglingChecked(checked)}
                    disabled={isLoading}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>The free version is enough for me</Trans>}
                    checked={preferFreeVersionChecked}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) =>
                      setPreferFreeVersionChecked(checked)
                    }
                    disabled={isLoading}
                  />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
                    label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>It's missing a feature (please specify)</Trans>
                    }
                    checked={missingFeatureChecked}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => setMissingFeatureChecked(checked)}
                    disabled={isLoading}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
                    label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        I have encountered bugs or performance problems
                      </Trans>
                    }
                    checked={qualityIssuesChecked}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => setQualityIssuesChecked(checked)}
                    disabled={isLoading}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Other reason (please specify)</Trans>}
                    checked={otherChecked}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => setOtherChecked(checked)}
                    disabled={isLoading}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TextField
                    autoFocus="desktop"
                    value={freeText}
                    multiline
                    translatableHintText={t`Please tell us more`}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>Details</Trans>}
                    floatingLabelFixed
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                    onChange={(e, value) => {
                      setFreeText(value);
                    }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                    onBlur={event => {
                      setFreeText(event.currentTarget.value.trim());
                    }}
                    fullWidth
                    disabled={isLoading}
                    rows={4}
                  />
                </ColumnStackLayout>
              </Form>
            </ColumnStackLayout>
          )}
        </Dialog>
      )}
    </I18n>
  );
};

export default CancelReasonDialog;
