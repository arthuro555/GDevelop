import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import Container from '@material-ui/core/Container';
// @ts-expect-error - TS6142 - Module './Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from './Layout';
// @ts-expect-error - TS6142 - Module './Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from './Layout';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer } from './Grid';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module './TutorialButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TutorialButton/index.tsx', but '--jsx' is not set.
import TutorialButton from './TutorialButton';
// @ts-expect-error - TS6142 - Module './CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from './CircularProgress';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from './CustomSvgIcons/Add';

type Props = {
  title: React.ReactNode,
  description: React.ReactNode,
  helpPagePath?: string,
  helpPageAnchor?: string,
  tutorialId?: string,
  isLoading?: boolean,
  actionButtonId?: string,
  actionLabel: React.ReactNode,
  actionIcon?: React.ReactNode,
  onAction: () => void,
  secondaryActionLabel?: React.ReactNode,
  secondaryActionIcon?: React.ReactNode,
  onSecondaryAction?: () => void
};

const DefaultHelpButton = ({
  helpPagePath,
  helpPageAnchor,
}: {
  helpPagePath?: string,
  helpPageAnchor?: string
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <HelpButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label={<Trans>Read the doc</Trans>}
    helpPagePath={helpPagePath}
    anchor={helpPageAnchor}
  />
);

/**
 * A placeholder for when there is no content to display.
 * Also take a look at EmptyMessage for a less visible message.
 */
export const EmptyPlaceholder = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Column alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Container
      style={{
        maxWidth: '480px',
        whiteSpace: 'normal',
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="block-title" align="center">
          {props.title}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text align="center" noMargin>
          {props.description}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
            {props.secondaryActionLabel && props.onSecondaryAction && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
                label={props.secondaryActionLabel}
                primary
                onClick={props.onSecondaryAction}
                disabled={!!props.isLoading}
                leftIcon={props.secondaryActionIcon}
              />
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
              label={props.actionLabel}
              primary
              onClick={props.onAction}
              disabled={!!props.isLoading}
              icon={
                props.isLoading ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <CircularProgress size={24} />
                ) : props.actionIcon ? (
                  props.actionIcon
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Add />
                )
              }
              id={props.actionButtonId}
            />
          </ResponsiveLineStackLayout>
          {props.tutorialId ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TutorialButton
              tutorialId={props.tutorialId}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Watch tutorial</Trans>}
              renderIfNotFound={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <DefaultHelpButton
                  helpPagePath={props.helpPagePath}
                  helpPageAnchor={props.helpPageAnchor}
                />
              }
            />
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <DefaultHelpButton
              helpPagePath={props.helpPagePath}
              helpPageAnchor={props.helpPageAnchor}
            />
          )}
        </ColumnStackLayout>
      </Column>
    </Container>
  </Column>
);
