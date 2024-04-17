import * as React from 'react';
import { getReleases, Release } from '../../Utils/GDevelopServices/Release';

import ChangelogRenderer from './ChangelogRenderer';
import { getIDEVersion } from '../../Version';

type Props = {
  onUpdated?: () => void;
};

/**
 * Load information about latest releases and display them.
 */
const Changelog = ({ onUpdated }: Props) => {
  const [releases, setReleases] = React.useState<
    Array<Release> | null | undefined
  >(null);
  const [error, setError] = React.useState<Error | null | undefined>(null);

  React.useEffect(() => {
    getReleases()
      .then((releases) => {
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
  }, [onUpdated]);

  return (
    <ChangelogRenderer
      releases={releases}
      error={error}
      currentReleaseName={getIDEVersion()}
    />
  );
};

export default Changelog;
