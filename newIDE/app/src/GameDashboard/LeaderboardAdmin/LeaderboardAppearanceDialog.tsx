import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';

import {
  canUserCustomizeLeaderboardTheme,
  getRGBLeaderboardTheme,
  LeaderboardCustomizationSettings,
  LeaderboardScoreFormattingTimeUnit,
} from '../../Utils/GDevelopServices/Play';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
import {
  formatScore,
  orderedTimeUnits,
  unitToNextSeparator,
} from '../../Leaderboard/LeaderboardScoreFormatter';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../../UI/ColorField';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../Profile/Subscription/GetSubscriptionCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/GetSubscriptionCard.tsx', but '--jsx' is not set.
import GetSubscriptionCard from '../../Profile/Subscription/GetSubscriptionCard';
// @ts-expect-error - TS6142 - Module './LeaderboardPlaygroundCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/LeaderboardPlaygroundCard.tsx', but '--jsx' is not set.
import LeaderboardPlaygroundCard from './LeaderboardPlaygroundCard';
import { rgbStringToHexString } from '../../Utils/ColorTransformer';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';

const unitToAbbreviation = {
  hour: 'HH',
  minute: 'MM',
  second: 'SS',
  millisecond: 'ms',
} as const;

const isWholeNumber = (value: any): boolean => !isNaN(value) && Number.isInteger(value);

const getIdentifierFromUnits = (
  units: {
    smallestUnit: LeaderboardScoreFormattingTimeUnit,
    biggestUnit: LeaderboardScoreFormattingTimeUnit
  },
): string => {
  const biggestUnitIndex = orderedTimeUnits.indexOf(units.biggestUnit);
  const smallestUnitIndex = orderedTimeUnits.indexOf(units.smallestUnit);
  let identifier = '';
  for (let index = biggestUnitIndex; index <= smallestUnitIndex; index++) {
    const unit = orderedTimeUnits[index];
    identifier += `${unitToAbbreviation[unit]}${
      index === smallestUnitIndex ? '' : unitToNextSeparator[unit]
    }`;
  }
  return identifier;
};

const unitSelectOptions = orderedTimeUnits.reduce<Record<string, any>>((acc, currentUnit, currentUnitIndex) => {
  for (
    let otherUnitIndex = currentUnitIndex;
    otherUnitIndex < orderedTimeUnits.length;
    otherUnitIndex++
  ) {
    const selectedUnits = {
      biggestUnit: orderedTimeUnits[currentUnitIndex],
      smallestUnit: orderedTimeUnits[otherUnitIndex],
    } as const;
    acc[getIdentifierFromUnits(selectedUnits)] = selectedUnits;
  }
  return acc;
}, {});

type Props = {
  open: boolean,
  leaderboardCustomizationSettings: LeaderboardCustomizationSettings | null | undefined,
  onSave: (arg1: LeaderboardCustomizationSettings) => Promise<void>,
  onClose: () => void
};

const scorePreviewMaxValue = 999999999;
const precisionMinValue = -3;
const precisionMaxValue = 3;
const displayedEntriesMinNumber = 1;
const displayedEntriesMaxNumber = 50;

function LeaderboardAppearanceDialog({
  open,
  onClose,
  onSave,
  leaderboardCustomizationSettings,
}: Props) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const { canUseTheme, canUseCustomCss } = canUserCustomizeLeaderboardTheme(
    authenticatedUser
  );
  const rgbLeaderboardTheme = getRGBLeaderboardTheme(
    leaderboardCustomizationSettings
  );
  const [scoreTitleError, setScoreTitleError] = React.useState<string | null | undefined>(null);
  const [
    defaultDisplayedEntriesNumber,
    setDefaultDisplayedEntriesNumber,
  ] = React.useState<number>((leaderboardCustomizationSettings &&
    leaderboardCustomizationSettings.defaultDisplayedEntriesNumber) ||
    20);
  const [backgroundColor, setBackgroundColor] = React.useState<string>(rgbLeaderboardTheme.backgroundColor);
  const [textColor, setTextColor] = React.useState<string>(rgbLeaderboardTheme.textColor);
  const [
    highlightBackgroundColor,
    setHighlightBackgroundColor,
  ] = React.useState<string>(rgbLeaderboardTheme.highlightBackgroundColor);
  const [highlightTextColor, setHighlightTextColor] = React.useState<string>(rgbLeaderboardTheme.highlightTextColor);
  const [
    defaultDisplayedEntriesNumberError,
    setDefaultDisplayedEntriesNumberError,
  ] = React.useState<string | null | undefined>(null);
  const [customCss, setCustomCss] = React.useState<string>((leaderboardCustomizationSettings &&
    leaderboardCustomizationSettings.customCss) ||
    '');
  const [useCustomCss, setUseCustomCss] = React.useState<boolean>(!!(
    leaderboardCustomizationSettings &&
    leaderboardCustomizationSettings.useCustomCss
  ));
  const [scoreTitle, setScoreTitle] = React.useState<string>(leaderboardCustomizationSettings
    ? leaderboardCustomizationSettings.scoreTitle
    : 'Score');
  const [scoreType, setScoreType] = React.useState<'custom' | 'time'>(leaderboardCustomizationSettings
    ? leaderboardCustomizationSettings.scoreFormatting.type
    : 'custom');
  const [prefix, setPrefix] = React.useState<string>(leaderboardCustomizationSettings &&
    leaderboardCustomizationSettings.scoreFormatting.type === 'custom'
    ? leaderboardCustomizationSettings.scoreFormatting.prefix
    : '');
  const [suffix, setSuffix] = React.useState<string>(leaderboardCustomizationSettings &&
    leaderboardCustomizationSettings.scoreFormatting.type === 'custom'
    ? leaderboardCustomizationSettings.scoreFormatting.suffix
    : '');
  const [precision, setPrecision] = React.useState<number>(leaderboardCustomizationSettings &&
    leaderboardCustomizationSettings.scoreFormatting.type === 'custom'
    ? leaderboardCustomizationSettings.scoreFormatting.precision
    : 0);
  const [precisionError, setPrecisionError] = React.useState<string | null | undefined>(null);
  const [timeUnits, setTimeUnits] = React.useState<string>(leaderboardCustomizationSettings &&
    leaderboardCustomizationSettings.scoreFormatting.type === 'time'
    ? getIdentifierFromUnits({
        smallestUnit:
          leaderboardCustomizationSettings.scoreFormatting.smallestUnit,
        biggestUnit:
          leaderboardCustomizationSettings.scoreFormatting.biggestUnit,
      })
    : getIdentifierFromUnits({
        biggestUnit: 'second',
        smallestUnit: 'millisecond',
      }));
  const [scorePreview, setScorePreview] = React.useState<number>(15.2659);

  const onSaveSettings = async (i18n: I18nType) => {
    if (!scoreTitle) {
      setScoreTitleError(i18n._(t`Title cannot be empty.`));
      return;
    }
    if (!isWholeNumber(defaultDisplayedEntriesNumber)) {
      setDefaultDisplayedEntriesNumberError(
        i18n._(
          t`The number of displayed entries must be a whole value between ${displayedEntriesMinNumber} and ${displayedEntriesMaxNumber}`
        )
      );
      return;
    }
    if (!isWholeNumber(precision)) {
      setPrecisionError(
        i18n._(
          t`The number of decimal places must be a whole value between ${precisionMinValue} and ${precisionMaxValue}`
        )
      );
      return;
    }
    setIsLoading(true);
    const customizationSettings: LeaderboardCustomizationSettings = {
      defaultDisplayedEntriesNumber,
      scoreTitle,
      scoreFormatting:
        scoreType === 'custom'
          ? {
              type: scoreType,
              prefix,
              suffix,
              precision,
            }
          : { type: scoreType, ...unitSelectOptions[timeUnits] },
      theme: canUseTheme
        ? {
            backgroundColor: rgbStringToHexString(backgroundColor),
            textColor: rgbStringToHexString(textColor),
            highlightBackgroundColor: rgbStringToHexString(
              highlightBackgroundColor
            ),
            highlightTextColor: rgbStringToHexString(highlightTextColor),
          }
        : undefined,
      useCustomCss,
      customCss,
    };
    await onSave(customizationSettings);
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Leaderboard appearance</Trans>}
          open={open}
          maxWidth="sm"
          secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <HelpButton
              key="help"
              helpPagePath="/interface/games-dashboard/leaderboard-administration"
              anchor="change_the_appearance_of_a_leaderboard"
            />,
          ]}
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Cancel</Trans>}
              disabled={isLoading}
              onClick={onClose}
              key={'cancel'}
            />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <DialogPrimaryButton
              primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Save</Trans>}
              disabled={isLoading}
              onClick={() => onSaveSettings(i18n)}
              key={'save'}
            />,
          ]}
          cannotBeDismissed={isLoading}
          onRequestClose={onClose}
          onApply={() => {
            onSaveSettings(i18n);
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Table settings</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextField
              fullWidth
              type="number"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Number of entries to display</Trans>}
              value={
                isNaN(defaultDisplayedEntriesNumber)
                  ? ''
                  : defaultDisplayedEntriesNumber
              }
              errorText={defaultDisplayedEntriesNumberError}
              min={displayedEntriesMinNumber}
              max={displayedEntriesMaxNumber}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={(e, newValue) => {
                if (!!defaultDisplayedEntriesNumberError && !!newValue) {
                  setDefaultDisplayedEntriesNumberError(null);
                }

                setDefaultDisplayedEntriesNumber(
                  Math.max(
                    displayedEntriesMinNumber,
                    Math.min(displayedEntriesMaxNumber, parseFloat(newValue))
                  )
                );
              }}
              disabled={isLoading}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Visual appearance</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Background color</Trans>}
                disableAlpha
                fullWidth
                color={backgroundColor}
                onChange={setBackgroundColor}
                disabled={!canUseTheme || isLoading}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Text color</Trans>}
                disableAlpha
                fullWidth
                color={textColor}
                onChange={setTextColor}
                disabled={!canUseTheme || isLoading}
              />
            </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Highlight background color</Trans>}
                disableAlpha
                fullWidth
                color={highlightBackgroundColor}
                onChange={setHighlightBackgroundColor}
                disabled={!canUseTheme || isLoading}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Highlight text color</Trans>}
                disableAlpha
                fullWidth
                color={highlightTextColor}
                onChange={setHighlightTextColor}
                disabled={!canUseTheme || isLoading}
              />
            </ResponsiveLineStackLayout>
            {!canUseTheme ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GetSubscriptionCard subscriptionDialogOpeningReason="Leaderboard customization">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
                        Get a silver or gold subscription to unlock color
                        customization.
                      </Trans>
                    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Link
                      href="https://gd.games/playground/test-leaderboard"
                      onClick={() =>
                        Window.openExternalURL(
                          'https://gd.games/playground/test-leaderboard'
                        )
                      }
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text noMargin color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>Test it out!</Trans>
                      </Text>
                    </Link>
                  </Column>
                </Line>
              </GetSubscriptionCard>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LeaderboardPlaygroundCard />
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Visual appearance (advanced)</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Use custom CSS for the leaderboard</Trans>}
              disabled={
                // Disable the checkbox if it's loading,
                // or if custom css is not allowed - unless it's already checked,
                // in which case we allow to uncheck it.
                (!canUseCustomCss && !useCustomCss) || isLoading
              }
              checked={useCustomCss}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
              onCheck={(e, checked) => setUseCustomCss(checked)}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Custom CSS</Trans>}
              multiline
              rows={4}
              rowsMax={15}
              value={customCss}
              onChange={setCustomCss}
              disabled={!useCustomCss || isLoading}
            />
            {!canUseCustomCss ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GetSubscriptionCard subscriptionDialogOpeningReason="Leaderboard customization">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
                        Get a pro subscription to unlock custom CSS.
                      </Trans>
                    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Link
                      href="https://gd.games/playground/test-leaderboard"
                      onClick={() =>
                        Window.openExternalURL(
                          'https://gd.games/playground/test-leaderboard'
                        )
                      }
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text noMargin color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>Test it out!</Trans>
                      </Text>
                    </Link>
                  </Column>
                </Line>
              </GetSubscriptionCard>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LeaderboardPlaygroundCard />
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Score column settings</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextField
              fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Column title</Trans>}
              maxLength={20}
              errorText={scoreTitleError}
              value={scoreTitle}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'newTitle' implicitly has an 'any' type.
              onChange={(e, newTitle) => {
                if (!!scoreTitleError && !!newTitle) setScoreTitleError(null);
                setScoreTitle(newTitle);
              }}
              disabled={isLoading}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectField
              fullWidth
              value={scoreType}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Score display</Trans>}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={(e, i, newValue) =>
                // $FlowIgnore
                setScoreType(newValue)
              }
              disabled={isLoading}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectOption
                key={'custom'}
                value={'custom'}
                label={t`Custom display`}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectOption
                key={'time'}
                value={'time'}
                label={t`Display as time`}
              />
            </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Settings</Trans>
            </Text>
            {scoreType === 'custom' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TextField
                    fullWidth
                    floatingLabelFixed
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>Prefix</Trans>}
                    maxLength={10}
                    value={prefix}
                    translatableHintText={t`Ex: $`}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                    onChange={(e, newValue) => {
                      setPrefix(newValue);
                    }}
                    disabled={isLoading}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TextField
                    fullWidth
                    floatingLabelFixed
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>Suffix</Trans>}
                    maxLength={10}
                    value={suffix}
                    translatableHintText={t`Ex: coins`}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                    onChange={(e, newValue) => {
                      setSuffix(newValue);
                    }}
                    disabled={isLoading}
                  />
                </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TextField
                  fullWidth
                  type="number"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>Round to X decimal point</Trans>}
                  errorText={precisionError}
                  value={isNaN(precision) ? '' : precision}
                  min={precisionMinValue}
                  max={precisionMaxValue}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                  onChange={(e, newValue) => {
                    if (!!precisionError && !!newValue) {
                      setPrecisionError(null);
                    }
                    setPrecision(
                      Math.max(
                        precisionMinValue,
                        Math.min(precisionMaxValue, parseFloat(newValue))
                      )
                    );
                  }}
                  disabled={isLoading}
                />
              </ColumnStackLayout>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  fullWidth
                  value={timeUnits}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>Time format</Trans>}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                  onChange={(e, i, newValue) => setTimeUnits(newValue)}
                  disabled={isLoading}
                >
                  {Object.keys(unitSelectOptions).map(option => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <SelectOption key={option} value={option} label={option} />
                  ))}
                </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    To use this formatting, you must send a score expressed in
                    seconds
                  </Trans>
                </AlertMessage>
              </ColumnStackLayout>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Preview</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextField
                fullWidth
                floatingLabelText={
                  scoreType === 'custom' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Test value</Trans>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Test value (in second)</Trans>
                  )
                }
                max={scorePreviewMaxValue}
                min={0}
                type="number"
                value={isNaN(scorePreview) ? '' : scorePreview}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(e, value) =>
                  setScorePreview(
                    Math.max(
                      0,
                      Math.min(scorePreviewMaxValue, parseFloat(value))
                    )
                  )
                }
                disabled={isLoading}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextField
                disabled
                fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Displayed score</Trans>}
                value={formatScore(
                  scorePreview || 0,
                  scoreType === 'time'
                    ? {
                        type: scoreType,
                        ...unitSelectOptions[timeUnits],
                      }
                    : {
                        type: scoreType,
                        prefix,
                        suffix,
                        precision: precision || 0,
                      }
                )}
              />
            </ResponsiveLineStackLayout>
          </ColumnStackLayout>
        </Dialog>
      )}
    </I18n>
  );
}

export default LeaderboardAppearanceDialog;
