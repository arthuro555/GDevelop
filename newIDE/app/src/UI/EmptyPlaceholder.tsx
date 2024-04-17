import * as React from 'react';

import { Trans } from '@lingui/macro';
import Container from '@material-ui/core/Container';

import { ColumnStackLayout } from './Layout';

import { ResponsiveLineStackLayout } from './Layout';

import RaisedButton from '../UI/RaisedButton';

import FlatButton from '../UI/FlatButton';

import { Column, LargeSpacer } from './Grid';

import HelpButton from '../UI/HelpButton';

import Text from '../UI/Text';

import TutorialButton from './TutorialButton';

import CircularProgress from './CircularProgress';

import Add from './CustomSvgIcons/Add';

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  helpPagePath?: string;
  helpPageAnchor?: string;
  tutorialId?: string;
  isLoading?: boolean;
  actionButtonId?: string;
  actionLabel: React.ReactNode;
  actionIcon?: React.ReactNode;
  onAction: () => void;
  secondaryActionLabel?: React.ReactNode;
  secondaryActionIcon?: React.ReactNode;
  onSecondaryAction?: () => void;
};

const DefaultHelpButton = ({
  helpPagePath,
  helpPageAnchor,
}: {
  helpPagePath?: string;
  helpPageAnchor?: string;
}) => (
  <HelpButton
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
  <Column alignItems="center">
    <Container
      style={{
        maxWidth: '480px',
        whiteSpace: 'normal',
      }}
    >
      <Column>
        <Text size="block-title" align="center">
          {props.title}
        </Text>
        <Text align="center" noMargin>
          {props.description}
        </Text>
        <LargeSpacer />
        <ColumnStackLayout alignItems="center" noMargin>
          <ResponsiveLineStackLayout noMargin>
            {props.secondaryActionLabel && props.onSecondaryAction && (
              <FlatButton
                label={props.secondaryActionLabel}
                primary
                onClick={props.onSecondaryAction}
                disabled={!!props.isLoading}
                leftIcon={props.secondaryActionIcon}
              />
            )}
            <RaisedButton
              label={props.actionLabel}
              primary
              onClick={props.onAction}
              disabled={!!props.isLoading}
              icon={
                props.isLoading ? (
                  <CircularProgress size={24} />
                ) : props.actionIcon ? (
                  props.actionIcon
                ) : (
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
              label={<Trans>Watch tutorial</Trans>}
              renderIfNotFound={
                <DefaultHelpButton
                  helpPagePath={props.helpPagePath}
                  helpPageAnchor={props.helpPageAnchor}
                />
              }
            />
          ) : (
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
