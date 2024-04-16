// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
import ReactErrorBoundary from 'react-error-boundary';
import BugReport from '@material-ui/icons/BugReport';
// @ts-expect-error - TS6142 - Module './PlaceholderMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderMessage.tsx', but '--jsx' is not set.
import PlaceholderMessage from './PlaceholderMessage';
import Divider from '@material-ui/core/Divider';
import { sendErrorMessage } from '../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Spacer } from './Grid';
import { getIDEVersion, getIDEVersionWithHash } from '../Version';
import {
  getArch,
  getPlatformName,
  getSystemVersion,
  getUserAgent,
} from '../Utils/Platform';
// @ts-expect-error - TS6142 - Module './Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from './Layout';
// @ts-expect-error - TS6142 - Module './AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from './AlertMessage';
// @ts-expect-error - TS6142 - Module './BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from './BackgroundText';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'three/src/math/MathUtils'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/three/src/math/MathUtils.js' implicitly has an 'any' type.
import { generateUUID } from 'three/src/math/MathUtils';
// @ts-expect-error - TS6142 - Module './IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from './IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from './CustomSvgIcons/Cross';

const styles = {
  errorMessage: {
    maxWidth: 600,
    textAlign: 'left',
  },
} as const;

type ErrorBoundaryScope = 'app' | 'editor' | 'start-page' | 'start-page-get-started' | 'start-page-build' | 'start-page-shop' | 'start-page-learn' | 'start-page-play' | 'start-page-community' | 'start-page-team' | 'start-page-manage' | 'about' | 'preferences' | 'profile' | 'scene-editor' | 'scene-editor-instance-properties' | 'scene-editor-objects-list' | 'scene-editor-object-groups-list' | 'scene-editor-canvas' | 'scene-editor-layers-list' | 'scene-editor-instances-list' | 'scene-events' | 'scene-events-search' | 'scene-events-instruction-editor' | 'debugger' | 'resources' | 'extension-editor' | 'extensions-search-dialog' | 'external-events-editor' | 'external-layout-editor' | 'variables-list' | 'new-object-dialog' | 'object-details' | 'export-and-share' | 'project-manager' | 'project-properties' | 'project-icons' | 'box-search-result' | 'list-search-result';

export const getEditorErrorBoundaryProps = (editorKey: string): {
  componentTitle: React.ReactNode,
  scope: ErrorBoundaryScope
} => {
  if (editorKey.startsWith('debugger')) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle: <Trans>Debugger</Trans>,
      scope: 'debugger',
    };
  }
  if (editorKey.startsWith('start page')) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle: <Trans>Home page</Trans>,
      scope: 'start-page',
    };
  }
  if (editorKey.startsWith('resources')) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle: <Trans>Resources</Trans>,
      scope: 'resources',
    };
  }
  if (editorKey.startsWith('events functions extension')) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle: <Trans>Events functions extension</Trans>,
      scope: 'extension-editor',
    };
  }
  if (editorKey.startsWith('layout events')) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle: <Trans>Events</Trans>,
      scope: 'scene-events',
    };
  }
  if (editorKey.startsWith('layout')) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle: <Trans>Scene</Trans>,
      scope: 'scene-editor',
    };
  }
  if (editorKey.startsWith('external layout')) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle: <Trans>External layout</Trans>,
      scope: 'external-layout-editor',
    };
  }
  if (editorKey.startsWith('external events')) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle: <Trans>External events</Trans>,
      scope: 'external-events-editor',
    };
  }

  return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle: <Trans>Editor</Trans>,
    scope: 'editor',
  };
};

const errorHandler = (
  error: Error,
  uniqueErrorId: string,
  componentStack: string,
  scope: ErrorBoundaryScope
) => {
  console.error(
    `Error ${uniqueErrorId} caught by Boundary:`,
    error,
    componentStack
  );
  sendErrorMessage(
    'Error caught by error boundary',
    // $FlowFixMe - Flow does not infer string type possibilities from interpolation.
// @ts-expect-error - TS2345 - Argument of type '"error-boundary_list-search-result" | "error-boundary_box-search-result" | "error-boundary_app" | "error-boundary_profile" | "error-boundary_resources" | "error-boundary_external-events-editor" | ... 32 more ... | "error-boundary_variables-list"' is not assignable to parameter of type '"error" | "error-boundary_mainframe" | "error-boundary_list-search-result" | "error-boundary_box-search-result" | "error-boundary_app"'.
    `error-boundary_${scope}`,
    {
      error,
      uniqueErrorId,
      errorMessage: error.message || '',
      errorStack: error.stack || '',
      errorName: error.name || '',
      IDEVersion: getIDEVersion(),
      IDEVersionWithHash: getIDEVersionWithHash(),
      arch: getArch(),
      platformName: getPlatformName(),
      systemVersion: getSystemVersion(),
      userAgent: getUserAgent(),
      componentStack,
    },
    'error-boundary-error'
  );
};

export const ErrorFallbackComponent = ({
  componentStack,
  error,
  componentTitle,
  uniqueErrorId,
  onClose,
  showOnTop,
}: {
  componentStack: string,
  error: Error,
  componentTitle: React.ReactNode,
  uniqueErrorId: string,
  onClose?: () => void,
  showOnTop?: boolean
}) => {
  const isCriticalError = error.stack && error.stack.includes('.wasm');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PlaceholderMessage showOnTop={showOnTop}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="space-between" alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <BugReport fontSize="large" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="block-title">
              {isCriticalError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  A critical error occurred in the {componentTitle}.
                </Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>An error occurred in the {componentTitle}.</Trans>
              )}
            </Text>
          </Line>
          {onClose && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <IconButton onClick={onClose} size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Cross />
            </IconButton>
          )}
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Divider />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <AlertMessage kind={isCriticalError ? 'error' : 'warning'}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                Please <b>backup your game file</b> and save your game to ensure
                that you don't lose anything. You can try to reload this panel
                or restart GDevelop.
              </Trans>
            </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <BackgroundText>Error ID: {uniqueErrorId}</BackgroundText>
            {error && error.stack && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <BackgroundText style={styles.errorMessage}>
                {error.stack.slice(0, 200)}...
              </BackgroundText>
            )}
            {componentStack && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <BackgroundText style={styles.errorMessage}>
                {componentStack.slice(0, 200)}...
              </BackgroundText>
            )}
          </ColumnStackLayout>
        </Line>
      </ColumnStackLayout>
    </PlaceholderMessage>
  );
};

type Props = {
  children: React.ReactNode,
  componentTitle: React.ReactNode,
  scope: ErrorBoundaryScope,
  onClose?: () => void,
  showOnTop?: boolean
};

const ErrorBoundary = (props: Props) => {
  const uniqueErrorIdRef = React.useRef(generateUUID());
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2769 - No overload matches this call.
    <ReactErrorBoundary
      FallbackComponent={fallbackComponentProps => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ componentTitle: ReactNode; uniqueErrorId: any; onClose: (() => void) | undefined; showOnTop: boolean | undefined; error?: Error | undefined; componentStack?: string | undefined; }' is not assignable to type '{ componentStack: string; error: Error; componentTitle: ReactNode; uniqueErrorId: string; onClose?: (() => void) | undefined; showOnTop?: boolean | undefined; }'.
        <ErrorFallbackComponent
          {...fallbackComponentProps}
          componentTitle={props.componentTitle}
          uniqueErrorId={uniqueErrorIdRef.current}
          onClose={props.onClose}
          showOnTop={props.showOnTop}
        />
      )}
      onError={(error, componentStack) => {
        // Generate a new unique error id which will be displayed by the
        // fallback component.
        uniqueErrorIdRef.current = generateUUID();
        errorHandler(
          error,
          uniqueErrorIdRef.current,
          componentStack,
          props.scope
        );
      }}
    >
      {props.children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
