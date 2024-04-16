import * as React from 'react';
// @ts-expect-error - TS6142 - Module './ChangelogDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Changelog/ChangelogDialog.tsx', but '--jsx' is not set.
import ChangelogDialog from './ChangelogDialog';
// @ts-expect-error - TS6142 - Module '../Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../Preferences/PreferencesContext';

type InnerContainerProps = {
  defaultOpen: boolean
};

const ChangelogDialogInnerContainer = ({
  defaultOpen,
}: InnerContainerProps) => {
  const [open, setOpen] = React.useState(defaultOpen);

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <ChangelogDialog open={open} onClose={() => setOpen(false)} />;
};

/**
 * The container showing the ChangelogDialog only if a a new version
 * of GDevelop is detected.
 */
const ChangelogDialogContainer = (props: Record<any, any>) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PreferencesContext.Consumer>
{ /* @ts-expect-error - TS7031 - Binding element 'values' implicitly has an 'any' type. | TS7031 - Binding element 'verifyIfIsNewVersion' implicitly has an 'any' type. */}
    {({ values, verifyIfIsNewVersion }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ChangelogDialogInnerContainer
        defaultOpen={verifyIfIsNewVersion() && values.autoDisplayChangelog}
      />
    )}
  </PreferencesContext.Consumer>
);

export default ChangelogDialogContainer;
