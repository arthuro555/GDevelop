// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
// @ts-expect-error - TS6142 - Module '../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
} from '../UI/Table';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../UI/LinearProgress';

export type GenericRetryableProcessWithProgressResults = {
  erroredResources: Array<{
    resourceName: string,
    error: Error
  }>
};

type GenericRetryableProcessWithProgressProps = {
  progress: number,
  result: GenericRetryableProcessWithProgressResults | null | undefined,
  onAbandon: () => void | null | undefined,
  onRetry: () => void | null | undefined,
  genericError: Error | null | undefined
};

const styles = {
  tableCell: {
    // Avoid long filenames breaking the design.
    wordBreak: 'break-word',
  },
} as const;

export const GenericRetryableProcessWithProgressDialog = ({
  progress,
  result,
  onAbandon,
  onRetry,
  genericError,
}: GenericRetryableProcessWithProgressProps) => {
  const hasErrors =
    (result && result.erroredResources.length > 0) || !!genericError;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Importing project resources</Trans>}
      actions={[
        onAbandon ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Ignore</Trans>}
            disabled={!onAbandon}
            onClick={onAbandon}
            key="close"
          />
        ) : null,
        onRetry ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Retry</Trans>}
            primary
            onClick={onRetry}
            key="retry"
          />
        ) : null,
      ]}
      cannotBeDismissed={!hasErrors}
      noMobileFullScreen={!hasErrors}
      open
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
          {hasErrors ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              There were errors when importing resources for the project. You
              can retry (recommended) or continue despite the errors. In this
              case, the project will be missing some resources.
            </Trans>
          ) : null}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LinearProgress
            variant={progress > 0 ? 'determinate' : 'indeterminate'}
            value={progress}
          />
        </Line>
        {hasErrors ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Resource name</Trans>
                </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Error</Trans>
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableBody>
              {result
                ? result.erroredResources.map(({ resourceName, error }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <TableRow key={resourceName}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <TableRowColumn style={styles.tableCell}>
                        {resourceName}
                      </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <TableRowColumn style={styles.tableCell}>
                        {error.toString()}
                      </TableRowColumn>
                    </TableRow>
                  ))
                : null}
              {genericError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableRowColumn style={styles.tableCell}>-</TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableRowColumn style={styles.tableCell}>
                    {genericError.toString()}
                  </TableRowColumn>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        ) : null}
      </ColumnStackLayout>
    </Dialog>
  );
};

type UseGenericRetryableProcessWithProgressOutput<DoProcessOptions> = {
  /**
   * Launch the process.
   */
  ensureProcessIsDone: (options: DoProcessOptions) => Promise<void>,
  /**
   * Render, if needed, the dialog that will show the progress of the process.
   */
  renderProcessDialog: () => React.ReactElement
};

type RetryOrAbandonCallback = () => void;

/**
 * Hook allowing to launch a process, displaying its progress, and allowing to retry
 * if errors happened.
 */
export const useGenericRetryableProcessWithProgress = <DoProcessOptions extends unknown>(
  {
    onDoProcess,
  }: {
    onDoProcess: (
      options: DoProcessOptions,
      onProgress: (count: number, total: number) => void,
    ) => Promise<GenericRetryableProcessWithProgressResults>
  },
// @ts-expect-error - TS2355 - A function whose declared type is neither 'void' nor 'any' must return a value.
): UseGenericRetryableProcessWithProgressOutput<DoProcessOptions> => {
  const [progress, setProgress] = React.useState(0);
  const [genericError, setGenericError] = React.useState<any>(null);
  const [isFetching, setIsFetching] = React.useState(false);
  const [
    result,
    setResult,
  ] = React.useState<GenericRetryableProcessWithProgressResults | null | undefined>(null);
  const [onRetry, setOnRetry] = React.useState<RetryOrAbandonCallback | null | undefined>(null);
  const [onAbandon, setOnAbandon] = React.useState<RetryOrAbandonCallback | null | undefined>(null);

  const ensureProcessIsDone = React.useCallback(
    async (options: DoProcessOptions) => {
      setProgress(0);
      setOnRetry(null);
      setOnAbandon(null);
      setResult(null);
      setGenericError(null);

      // This will display the dialog:
      setIsFetching(true);

      let newResult = null;
      try {
        newResult = await onDoProcess(options, (count, total) => {
          setProgress((count / total) * 100);
        });

        setProgress(100);
        if (newResult.erroredResources.length === 0) {
          // No error happened: finish normally, closing the dialog.
          setIsFetching(false);
          setGenericError(null);
          setResult(null);
          return;
        }
      } catch (genericError: any) {
        setGenericError(genericError);
      }

      // An error happened. Store the errors and offer a way to
      // retry.
      return new Promise(resolve: (result: Promise<undefined> | undefined) => void => {
        setOnRetry(
          (): RetryOrAbandonCallback => () => {
            // Launch the fetch again, and solve the promise once
            // this new fetch resolve itself.
            resolve(ensureProcessIsDone(options));
          }
        );
        setOnAbandon(
          (): RetryOrAbandonCallback => () => {
            // Abandon: resolve immediately, closing the dialog
            setIsFetching(false);
            setGenericError(null);
            setResult(null);
            resolve();
          }
        );

        // Display the errors to the user:
        setResult(newResult);
        setIsFetching(false);
// @ts-expect-error - TS1128 - Declaration or statement expected.
      });
// @ts-expect-error - TS1128 - Declaration or statement expected. | TS1128 - Declaration or statement expected.
    },
    [onDoProcess]
// @ts-expect-error - TS1128 - Declaration or statement expected.
  );

  const renderProcessDialog = React.useCallback(
    () => {
      const hasErrors =
        (result && result.erroredResources.length >= 0) || !!genericError;
      if (!isFetching && !hasErrors) return null;

      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GenericRetryableProcessWithProgressDialog
          progress={progress}
          result={result}
          genericError={genericError}
          onAbandon={onAbandon}
          onRetry={onRetry}
        />
      );
    },
    [isFetching, progress, result, onAbandon, onRetry, genericError]
  );

  return React.useMemo(
    () => ({
      ensureProcessIsDone,
      renderProcessDialog,
    }),
    [ensureProcessIsDone, renderProcessDialog]
  );
// @ts-expect-error - TS1128 - Declaration or statement expected.
};
