import * as React from 'react';
import {
  getReleases,
  Release,
} from '../../Utils/GDevelopServices/Release';
// @ts-expect-error - TS6142 - Module './ChangelogRenderer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Changelog/ChangelogRenderer.tsx', but '--jsx' is not set.
import ChangelogRenderer from './ChangelogRenderer';
import { getIDEVersion } from '../../Version';

type Props = {
  onUpdated?: () => void
};

/**
 * Load information about latest releases and display them.
 */
const Changelog = ({
  onUpdated,
}: Props) => {
  const [releases, setReleases] = React.useState<Array<Release> | null | undefined>(null);
  const [error, setError] = React.useState<Error | null | undefined>(null);

  React.useEffect(
    () => {
      getReleases()
        .then(releases => {
          setError(null);
          setReleases(releases);
          if (onUpdated) {
            onUpdated();
          }
        })
        .catch((error?: Error | null) => {
          setError(error);
          if (onUpdated) {
            onUpdated();
          }
        });
    },
    [onUpdated]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ChangelogRenderer
      releases={releases}
      error={error}
      currentReleaseName={getIDEVersion()}
    />
  );
};

export default Changelog;
