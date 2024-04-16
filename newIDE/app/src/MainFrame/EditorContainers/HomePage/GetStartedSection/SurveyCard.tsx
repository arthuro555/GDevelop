import * as React from 'react';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Spacer } from '../../../../UI/Grid';
import {
  ColumnStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';

const styles = {
  subscriptionContainer: {
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
    padding: 16,
  },
  surveyIcon: {
    width: 200,
    height: 105,
  },
} as const;

type Props = {
  onStartSurvey: () => void,
  hasFilledSurveyAlready: boolean
};

export const SurveyCard = ({
  onStartSurvey,
  hasFilledSurveyAlready,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  const subscriptionContainerStyle = {
    ...styles.subscriptionContainer,
    border: `1px solid ${gdevelopTheme.palette.secondary}`,
  } as const;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={subscriptionContainerStyle}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <img
          src="res/start-survey.svg"
          style={styles.surveyIcon}
          alt="Survey"
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout alignItems="flex-start" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text noMargin size="block-title">
              {hasFilledSurveyAlready ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Have you changed your usage of GDevelop?</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Personalize your suggested content</Trans>
              )}
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text noMargin size="body">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Answer a 1-minute survey to personalize your “Get started”
                content.
              </Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
              label={
                hasFilledSurveyAlready ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Redo the survey</Trans>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Start the survey!</Trans>
                )
              }
              primary
              onClick={onStartSurvey}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
          </ColumnStackLayout>
        </Line>
      </ResponsiveLineStackLayout>
    </div>
  );
};
