import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';

// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
// @ts-expect-error - TS6142 - Module './CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from './CircularProgress';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Spacer } from './Grid';

const loaderSize = 50;
const dialogWithMessageWidth = 250;

const styles = {
  dialogContent: {
    padding: 10,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
} as const;

type Props = {
  show: boolean,
  message?: MessageDescriptor | null | undefined,
  progress?: number | null | undefined
};

const transitionDuration = { enter: 0, exit: 150 } as const;

const LoaderModal = ({
  progress,
  message,
  show,
}: Props) => {
  const isInfinite = progress === null || progress === undefined;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog open={show} transitionDuration={transitionDuration}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DialogContent style={styles.dialogContent}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
              style={{
                width: message ? dialogWithMessageWidth : undefined,
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CircularProgress
                  size={loaderSize}
                  disableShrink={isInfinite}
                  value={isInfinite ? undefined : progress}
                  variant={isInfinite ? 'indeterminate' : 'determinate'}
                />
                {message && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text noMargin align="center">
                      {i18n._(message)}
                    </Text>
                  </>
                )}
              </Column>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </I18n>
  );
};

export default LoaderModal;
