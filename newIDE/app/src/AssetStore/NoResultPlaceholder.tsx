import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../UI/EmptyPlaceholder';
import RestoreIcon from '@material-ui/icons/SettingsBackupRestore';

type Props = {
  onClear: () => void,
  message?: React.ReactNode
};

export const NoResultPlaceholder = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Column noMargin expand justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EmptyPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>No result</Trans>}
      description={
        props.message || (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            Try something else, browse the packs or create your object from
            scratch!
          </Trans>
        )
      }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      actionLabel={<Trans>Clear all filters</Trans>}
      actionButtonId="clear-filters-button"
      onAction={props.onClear}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      actionIcon={<RestoreIcon />}
    />
  </Column>
);
