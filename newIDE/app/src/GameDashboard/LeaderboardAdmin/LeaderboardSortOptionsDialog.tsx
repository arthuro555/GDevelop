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
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';

import { LeaderboardSortOption } from '../../Utils/GDevelopServices/Play';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
import { FormHelperText } from '@material-ui/core';
// @ts-expect-error - TS6142 - Module '../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../UI/MarkdownText';

type SortOptions = {
  sort: LeaderboardSortOption,
  extremeAllowedScore: number | null | undefined
};

type Props = {
  open: boolean,
  sort: LeaderboardSortOption,
  extremeAllowedScore?: number,
  onSave: (arg1: SortOptions) => Promise<void>,
  onClose: () => void
};

const extremeAllowedScoreMax = Number.MAX_SAFE_INTEGER;
const extremeAllowedScoreMin = Number.MIN_SAFE_INTEGER;

function LeaderboardSortOptionsDialog({
  open,
  onClose,
  onSave,
  sort,
  extremeAllowedScore,
}: Props) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [
    extremeAllowedScoreError,
    setExtremeAllowedScoreError,
  ] = React.useState<string | null | undefined>(null);
  const [
    displayExtremeAllowedScoreInput,
    setDisplayExtremeAllowedScoreInput,
  ] = React.useState<boolean>(extremeAllowedScore !== undefined);
  const [
    extremeAllowedScoreValue,
    setExtremeAllowedScoreValue,
  ] = React.useState<number>(extremeAllowedScore || 0);

  const [sortOrder, setSortOrder] = React.useState<LeaderboardSortOption>(sort || 'ASC');

  const onSaveSettings = async (i18n: I18nType) => {
    if (displayExtremeAllowedScoreInput) {
      if (extremeAllowedScoreValue > extremeAllowedScoreMax) {
        setExtremeAllowedScoreError(
          i18n._(t`Extreme score must be lower than ${extremeAllowedScoreMax}.`)
        );
        return;
      }
      if (extremeAllowedScoreValue < extremeAllowedScoreMin) {
        setExtremeAllowedScoreError(
          i18n._(
            t`Extreme score must be equal or higher than ${extremeAllowedScoreMin}.`
          )
        );
        return;
      }
    }
    if (isNaN(extremeAllowedScoreValue)) {
      setExtremeAllowedScoreError(
        i18n._(
          t`Limit cannot be empty, uncheck or fill a value between ${extremeAllowedScoreMin} and ${extremeAllowedScoreMax}.`
        )
      );
      return;
    }
    setIsLoading(true);
    const sortOrderSettings = {
      sort: sortOrder,
      extremeAllowedScore: displayExtremeAllowedScoreInput
        ? extremeAllowedScoreValue
        : null,
    } as const;
    await onSave(sortOrderSettings);
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Leaderboard options</Trans>}
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
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Sort order</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectField
              fullWidth
              value={sortOrder}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Scores sort order</Trans>}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={(e, i, newValue) => {
                setSortOrder(newValue);
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectOption
                key={'ASC'}
                value={'ASC'}
                label={t`Lower is better`}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectOption
                key={'DESC'}
                value={'DESC'}
                label={t`Higher is better`}
              />
            </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Checkbox
              label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Limit scores</Trans>
                  </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FormHelperText style={{ display: 'inline' }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <MarkdownText
                      source={i18n._(
                        sortOrder === 'ASC'
                          ? t`Any submitted score that is lower than the set value will not be saved in the leaderboard.`
                          : t`Any submitted score that is higher than the set value will not be saved in the leaderboard.`
                      )}
                    />
                  </FormHelperText>
                </>
              }
              checked={displayExtremeAllowedScoreInput}
              onCheck={() =>
                setDisplayExtremeAllowedScoreInput(
                  !displayExtremeAllowedScoreInput
                )
              }
            />
          </ColumnStackLayout>
          {displayExtremeAllowedScoreInput && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TextField
                  fullWidth
                  type="number"
                  floatingLabelText={
                    sortOrder === 'ASC' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Minimum score</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Maximum score</Trans>
                    )
                  }
                  value={extremeAllowedScoreValue}
                  errorText={extremeAllowedScoreError}
                  min={extremeAllowedScoreMin}
                  max={extremeAllowedScoreMax}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
                  onChange={(e, newValue: string) => {
                    if (!!extremeAllowedScoreError) {
                      setExtremeAllowedScoreError(null);
                    }

                    setExtremeAllowedScoreValue(parseFloat(newValue));
                  }}
                />
              </Line>
            </Column>
          )}
        </Dialog>
      )}
    </I18n>
  );
}

export default LeaderboardSortOptionsDialog;
