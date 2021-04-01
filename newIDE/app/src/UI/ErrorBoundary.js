// @flow
import { Trans } from '@lingui/macro';

import * as React from 'react';
import ReactErrorBoundary from 'react-error-boundary';
import BugReport from '@material-ui/icons/BugReport';
import PlaceholderMessage from './PlaceholderMessage';
import Divider from '@material-ui/core/Divider';
import RaisedButton from './RaisedButton';
import { sendErrorMessage } from '../Utils/Analytics/EventSender';
import Window from '../Utils/Window';
import Text from './Text';
import { Line, Spacer } from './Grid';

const errorHandler = (error: Error, componentStack: string) => {
  console.error('Error catched by Boundary:', error, componentStack);
  sendErrorMessage(
    'Error catched by error boundary',
    'error-boundary',
    {
      error,
      componentStack,
    },
    'error-boundary-error'
  );
};

export const ErrorFallbackComponent = ({
  componentStack,
  error,
}: {
  componentStack: string,
  error: Error,
}) => (
  <PlaceholderMessage>
    <Line>
      <BugReport fontSize="large" />
      <Spacer />
      <Text size="title">OOPSIE.</Text>
    </Line>
    <Divider />
    <Text>
      Oh oh! a whoopsie doosie has been done V_V
      <br />
      Ur project is ded I'm a fraid lol UwU
    </Text>
    <RaisedButton
      label={<Trans>Go cry</Trans>}
      onClick={() => {
        Window.openExternalURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
      }}
    />
  </PlaceholderMessage>
);

type Props = {|
  children: React.Node,
|};

const ErrorBoundary = (props: Props) => (
  <ReactErrorBoundary
    FallbackComponent={ErrorFallbackComponent}
    onError={errorHandler}
  >
    {props.children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;
