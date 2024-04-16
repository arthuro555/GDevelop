// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';
import SubscriptionChecker, {
  SubscriptionCheckerInterface,
// @ts-expect-error - TS6142 - Module '../Profile/Subscription/SubscriptionChecker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionChecker.tsx', but '--jsx' is not set.
} from '../Profile/Subscription/SubscriptionChecker';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../UI/ColorField';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
import {
  hexNumberToRGBString,
  rgbStringToHexNumber,
} from '../Utils/ColorTransformer';
import useForceUpdate from '../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../ResourcesList/ResourceSelectorWithThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelectorWithThumbnail.tsx', but '--jsx' is not set.
import ResourceSelectorWithThumbnail from '../ResourcesList/ResourceSelectorWithThumbnail';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../Profile/Subscription/GetSubscriptionCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/GetSubscriptionCard.tsx', but '--jsx' is not set.
import GetSubscriptionCard from '../Profile/Subscription/GetSubscriptionCard';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import { hasValidSubscriptionPlan } from '../Utils/GDevelopServices/Usage';

type Props = {
  loadingScreen: gdLoadingScreen,
  watermark: gdWatermark,
  onLoadingScreenUpdated: () => void,
  onChangeSubscription: () => Promise<undefined> | undefined,
  // For resources:
  project: gdProject,
  resourceManagementProps: ResourceManagementProps
};

type TimeSettings = {
  minDuration: number,
  logoAndProgressFadeInDuration: number,
  logoAndProgressLogoFadeInDelay: number
};

const forcedLogo: TimeSettings = {
  minDuration: 2,
  logoAndProgressFadeInDuration: 0.2,
  logoAndProgressLogoFadeInDelay: 0,
};

const watermarkPlacementOptions = [
  { value: 'top', label: t`Top` },
  { value: 'top-left', label: t`Top left corner` },
  { value: 'top-right', label: t`Top right corner` },
  { value: 'bottom', label: t`Bottom` },
  { value: 'bottom-left', label: t`Bottom left corner` },
  { value: 'bottom-right', label: t`Bottom right corner` },
];

export const LoadingScreenEditor = ({
  loadingScreen,
  watermark,
  onLoadingScreenUpdated,
  onChangeSubscription,
  project,
  resourceManagementProps,
}: Props) => {
  const subscriptionChecker = React.useRef<SubscriptionCheckerInterface | null | undefined>(null);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const forceUpdate = useForceUpdate();
  const shouldDisplayGetSubscriptionCard = !hasValidSubscriptionPlan(
    authenticatedUser.subscription
  );

  const onUpdate = () => {
    forceUpdate();
    onLoadingScreenUpdated();
  };

  /** Remember the settings chosen by users when they are forced to a value */
  const timeSettings = React.useRef<TimeSettings>({
    minDuration: loadingScreen.getMinDuration(),
    logoAndProgressFadeInDuration: loadingScreen.getLogoAndProgressFadeInDuration(),
    logoAndProgressLogoFadeInDelay: loadingScreen.getLogoAndProgressLogoFadeInDelay(),
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="section-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Branding</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Display GDevelop logo at startup (in exported game)
                    </Trans>
                  }
                  checked={loadingScreen.isGDevelopLogoShownDuringLoadingScreen()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => {
                    if (
                      !checked &&
                      !watermark.isGDevelopWatermarkShown() &&
                      subscriptionChecker.current &&
                      !subscriptionChecker.current.checkUserHasSubscription()
                    ) {
                      // If user wants to deactivate GDevelop splash screen although
                      // watermark is hidden, we don't allow it if they have no subscription.
                      return;
                    }
                    loadingScreen.showGDevelopLogoDuringLoadingScreen(checked);
                    onUpdate();
                  }}
                />
              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>GDevelop logo style</Trans>}
                  value={loadingScreen.getGDevelopLogoStyle()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                  onChange={(e, i, newGdevelopLogoStyle: string) => {
                    const currentGDevelopLogoStyle = loadingScreen.getGDevelopLogoStyle();
                    if (currentGDevelopLogoStyle === newGdevelopLogoStyle)
                      return;
                    loadingScreen.setGDevelopLogoStyle(newGdevelopLogoStyle);
                    onUpdate();
                  }}
                  disabled={
                    !loadingScreen.isGDevelopLogoShownDuringLoadingScreen()
                  }
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption value="light" label={t`Light (plain)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value="light-colored"
                    label={t`Light (colored)`}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption value="dark" label={t`Dark (plain)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption
                    value="dark-colored"
                    label={t`Dark (colored)`}
                  />
                </SelectField>
              </Column>
            </ResponsiveLineStackLayout>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Display GDevelop watermark after the game is loaded (in
                      exported game)
                    </Trans>
                  }
                  checked={watermark.isGDevelopWatermarkShown()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => {
                    if (
                      !checked &&
                      !loadingScreen.isGDevelopLogoShownDuringLoadingScreen() &&
                      subscriptionChecker.current &&
                      !subscriptionChecker.current.checkUserHasSubscription()
                    ) {
                      // If user wants to deactivate watermark although GDevelop splash
                      // screen is hidden, we don't allow it if they have no subscription.
                      return;
                    }
                    watermark.showGDevelopWatermark(checked);
                    if (checked) {
                      loadingScreen.setMinDuration(
                        timeSettings.current.minDuration
                      );
                      loadingScreen.setLogoAndProgressFadeInDuration(
                        timeSettings.current.logoAndProgressFadeInDuration
                      );
                      loadingScreen.setLogoAndProgressLogoFadeInDelay(
                        timeSettings.current.logoAndProgressLogoFadeInDelay
                      );
                    } else if (
                      subscriptionChecker.current &&
                      !subscriptionChecker.current.hasUserSubscription()
                    ) {
                      if (
                        loadingScreen.getMinDuration() < forcedLogo.minDuration
                      ) {
                        loadingScreen.setMinDuration(forcedLogo.minDuration);
                      }
                      if (
                        loadingScreen.getLogoAndProgressFadeInDuration() >
                        forcedLogo.logoAndProgressFadeInDuration
                      ) {
                        loadingScreen.setLogoAndProgressFadeInDuration(
                          forcedLogo.logoAndProgressFadeInDuration
                        );
                      }
                      if (
                        loadingScreen.getLogoAndProgressLogoFadeInDelay() >
                        forcedLogo.logoAndProgressLogoFadeInDelay
                      ) {
                        loadingScreen.setLogoAndProgressLogoFadeInDelay(
                          forcedLogo.logoAndProgressLogoFadeInDelay
                        );
                      }
                    }
                    onUpdate();
                  }}
                />
              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  fullWidth
                  floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>GDevelop watermark placement</Trans>
                  }
                  value={watermark.getPlacement()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                  onChange={(e, i, newPlacement: string) => {
                    const currentGDevelopLogoStyle = loadingScreen.getGDevelopLogoStyle();
                    if (currentGDevelopLogoStyle === newPlacement) return;
                    watermark.setPlacement(newPlacement);
                    onUpdate();
                  }}
                  disabled={!watermark.isGDevelopWatermarkShown()}
                >
                  {watermarkPlacementOptions.map(option => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <SelectOption
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </SelectField>
              </Column>
            </ResponsiveLineStackLayout>
            {shouldDisplayGetSubscriptionCard && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GetSubscriptionCard subscriptionDialogOpeningReason="Disable GDevelop splash at startup">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Get a silver or gold subscription to disable GDevelop
                    branding.
                  </Trans>
                </Text>
              </GetSubscriptionCard>
            )}
          </ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="section-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Loading screen</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Background</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResourceSelectorWithThumbnail
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Background image</Trans>}
              project={project}
              resourceManagementProps={resourceManagementProps}
              resourceKind="image"
              resourceName={loadingScreen.getBackgroundImageResourceName()}
              defaultNewResourceName={'LoadingScreenBackground'}
// @ts-expect-error - TS7006 - Parameter 'newResourceName' implicitly has an 'any' type.
              onChange={newResourceName => {
                const currentResourceName = loadingScreen.getBackgroundImageResourceName();
                if (currentResourceName === newResourceName) return;
                loadingScreen.setBackgroundImageResourceName(newResourceName);
                onUpdate();
              }}
            />
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColorField
              fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Background color</Trans>}
              disableAlpha
              color={hexNumberToRGBString(loadingScreen.getBackgroundColor())}
// @ts-expect-error - TS7006 - Parameter 'newColor' implicitly has an 'any' type.
              onChange={newColor => {
                const currentBackgroundColor = loadingScreen.getBackgroundColor();
                const newBackgroundColor = rgbStringToHexNumber(newColor);
                if (currentBackgroundColor === newBackgroundColor) return;
                loadingScreen.setBackgroundColor(newBackgroundColor);
                onUpdate();
              }}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Background fade in duration (in seconds)</Trans>
              }
              step={0.1}
              fullWidth
              type="number"
              value={'' + loadingScreen.getBackgroundFadeInDuration()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={newValue => {
                const currentBackgroundFadeInDuration = loadingScreen.getBackgroundFadeInDuration();
                const newBackgroundFadeInDuration = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (
                  currentBackgroundFadeInDuration ===
                  newBackgroundFadeInDuration
                )
                  return;
                loadingScreen.setBackgroundFadeInDuration(
                  newBackgroundFadeInDuration
                );
                onUpdate();
              }}
            />
          </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Progress bar</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Show progress bar</Trans>}
            checked={loadingScreen.getShowProgressBar()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
            onCheck={(e, checked) => {
              loadingScreen.setShowProgressBar(checked);
              onUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Progress bar minimum width</Trans>}
              fullWidth
              type="number"
              value={'' + loadingScreen.getProgressBarMinWidth()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={newValue => {
                const currentProgressBarMinWidth = loadingScreen.getProgressBarMinWidth();
                const newProgressBarMinWidth = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (currentProgressBarMinWidth === newProgressBarMinWidth) {
                  return;
                }
                loadingScreen.setProgressBarMinWidth(newProgressBarMinWidth);
                onUpdate();
              }}
              helperMarkdownText={i18n._(t`In pixels. 0 to ignore.`)}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Progress bar width</Trans>}
              fullWidth
              type="number"
              value={'' + loadingScreen.getProgressBarWidthPercent()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={newValue => {
                const currentProgressBarWidthPercent = loadingScreen.getProgressBarWidthPercent();
                const newProgressBarWidthPercent = Math.min(
                  100,
                  Math.max(1, parseFloat(newValue))
                );
                if (
                  currentProgressBarWidthPercent === newProgressBarWidthPercent
                ) {
                  return;
                }

                loadingScreen.setProgressBarWidthPercent(
                  newProgressBarWidthPercent
                );
                onUpdate();
              }}
              helperMarkdownText={i18n._(t`As a percent of the game width.`)}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Progress bar maximum width</Trans>}
              fullWidth
              type="number"
              value={'' + loadingScreen.getProgressBarMaxWidth()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={newValue => {
                const currentProgressBarMaxWidth = loadingScreen.getProgressBarMaxWidth();
                const newProgressBarMaxWidth = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (currentProgressBarMaxWidth === newProgressBarMaxWidth) {
                  return;
                }
                loadingScreen.setProgressBarMaxWidth(newProgressBarMaxWidth);
                onUpdate();
              }}
              helperMarkdownText={i18n._(t`In pixels. 0 to ignore.`)}
            />
          </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Progress bar height</Trans>}
              fullWidth
              type="number"
              value={'' + loadingScreen.getProgressBarHeight()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={newValue => {
                const currentProgressBarHeight = loadingScreen.getProgressBarHeight();
                const newProgressBarHeight = Math.max(1, parseFloat(newValue));
                if (currentProgressBarHeight === newProgressBarHeight) {
                  return;
                }
                loadingScreen.setProgressBarHeight(newProgressBarHeight);
                onUpdate();
              }}
              helperMarkdownText={i18n._(t`In pixels.`)}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColorField
              fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Progress bar color</Trans>}
              disableAlpha
              color={hexNumberToRGBString(loadingScreen.getProgressBarColor())}
// @ts-expect-error - TS7006 - Parameter 'newColor' implicitly has an 'any' type.
              onChange={newColor => {
                const currentProgressBarColor = loadingScreen.getProgressBarColor();
                const newProgressBarColor = rgbStringToHexNumber(newColor);
                if (currentProgressBarColor === newProgressBarColor) {
                  return;
                }
                loadingScreen.setProgressBarColor(newProgressBarColor);
                onUpdate();
              }}
            />
          </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Duration</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Minimum duration of the screen (in seconds)</Trans>
            }
            step={0.1}
            fullWidth
            type="number"
            value={'' + loadingScreen.getMinDuration()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
            onChange={newValue => {
              const newMinDuration = Math.max(0, parseFloat(newValue));
              if (
                newMinDuration < forcedLogo.minDuration &&
                !watermark.isGDevelopWatermarkShown() &&
                subscriptionChecker.current &&
                !subscriptionChecker.current.checkUserHasSubscription()
              ) {
                // If users want to reduce GDevelop splash screen although
                // watermark is hidden, we don't allow it if they have no subscription.
                return;
              }
              const currentMinDuration = loadingScreen.getMinDuration();
              if (currentMinDuration === newMinDuration) {
                return;
              }
              loadingScreen.setMinDuration(newMinDuration);
              timeSettings.current.minDuration = newMinDuration;
              onUpdate();
            }}
            helperMarkdownText={i18n._(
              t`When previewing the game in the editor, this duration is ignored (the game preview starts as soon as possible).`
            )}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              floatingLabelText={
                loadingScreen.isGDevelopLogoShownDuringLoadingScreen() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Logo and progress fade in delay (in seconds)</Trans>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Progress fade in delay (in seconds)</Trans>
                )
              }
              step={0.1}
              fullWidth
              type="number"
              value={'' + loadingScreen.getLogoAndProgressLogoFadeInDelay()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={newValue => {
                const newLogoAndProgressLogoFadeInDelay = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (
                  newLogoAndProgressLogoFadeInDelay >
                    forcedLogo.logoAndProgressLogoFadeInDelay &&
                  !watermark.isGDevelopWatermarkShown() &&
                  subscriptionChecker.current &&
                  !subscriptionChecker.current.checkUserHasSubscription()
                ) {
                  // If users want to reduce GDevelop splash screen although
                  // watermark is hidden, we don't allow it if they have no subscription.
                  return;
                }
                const currentLogoAndProgressLogoFadeInDelay = loadingScreen.getLogoAndProgressLogoFadeInDelay();
                if (
                  currentLogoAndProgressLogoFadeInDelay ===
                  newLogoAndProgressLogoFadeInDelay
                )
                  return;
                loadingScreen.setLogoAndProgressLogoFadeInDelay(
                  newLogoAndProgressLogoFadeInDelay
                );
                timeSettings.current.logoAndProgressLogoFadeInDelay = newLogoAndProgressLogoFadeInDelay;
                onUpdate();
              }}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              floatingLabelText={
                loadingScreen.isGDevelopLogoShownDuringLoadingScreen() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Logo and progress fade in duration (in seconds)</Trans>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Progress fade in duration (in seconds)</Trans>
                )
              }
              step={0.1}
              fullWidth
              type="number"
              value={'' + loadingScreen.getLogoAndProgressFadeInDuration()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={newValue => {
                const newLogoAndProgressFadeInDuration = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (
                  newLogoAndProgressFadeInDuration >
                    forcedLogo.logoAndProgressFadeInDuration &&
                  !watermark.isGDevelopWatermarkShown() &&
                  subscriptionChecker.current &&
                  !subscriptionChecker.current.checkUserHasSubscription()
                ) {
                  // If users want to reduce GDevelop splash screen although
                  // watermark is hidden, we don't allow it if they have no subscription.
                  return;
                }
                const currentLogoAndProgressFadeInDuration = loadingScreen.getLogoAndProgressFadeInDuration();
                if (
                  currentLogoAndProgressFadeInDuration ===
                  newLogoAndProgressFadeInDuration
                )
                  return;
                loadingScreen.setLogoAndProgressFadeInDuration(
                  newLogoAndProgressFadeInDuration
                );
                timeSettings.current.logoAndProgressFadeInDuration = newLogoAndProgressFadeInDuration;
                onUpdate();
              }}
            />
          </ResponsiveLineStackLayout>
          {loadingScreen.isGDevelopLogoShownDuringLoadingScreen() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Progress bar fade in delay and duration will be applied to
                GDevelop logo.
              </Trans>
            </AlertMessage>
          ) : null}

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionChecker
            ref={subscriptionChecker}
            onChangeSubscription={onChangeSubscription}
            mode="mandatory"
            id="Disable GDevelop splash at startup"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            title={<Trans>Disable GDevelop splash at startup</Trans>}
          />
        </ColumnStackLayout>
      )}
    </I18n>
  );
};
