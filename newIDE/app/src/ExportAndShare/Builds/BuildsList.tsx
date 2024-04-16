// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';

// @ts-expect-error - TS6142 - Module './BuildCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildCard.tsx', but '--jsx' is not set.
import { BuildCard } from './BuildCard';

import { Build } from '../../Utils/GDevelopServices/Build';
import { Game } from '../../Utils/GDevelopServices/Game';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import { BuildType } from '../../Utils/GDevelopServices/Build';

const styles = {
  emptyMessageStyle: { textAlign: 'left' },
} as const;
type Props = {
  builds: Array<Build> | null | undefined,
  authenticatedUser: AuthenticatedUser,
  error: Error | null | undefined,
  loadBuilds: () => void,
  game: Game,
  onGameUpdated?: () => Promise<void>,
  onBuildUpdated: (arg1: Build) => void,
  onBuildDeleted: (arg1: Build) => void
};

type BuildFilter = BuildType | 'all-build';

const buildFilterOptions: Array<{
  key: BuildFilter,
  value: BuildFilter,
  label: React.ReactNode
}> = [
  {
    key: 'all-build',
    value: 'all-build',
    label: t`All builds`,
  },

  {
    key: 'web-build',
    value: 'web-build',
    label: t`Web builds`,
  },

  {
    key: 'cordova-build',
    value: 'cordova-build',
    label: t`Android builds`,
  },

  {
    key: 'cordova-ios-build',
    value: 'cordova-ios-build',
    label: t`iOS builds`,
  },

  {
    key: 'electron-build',
    value: 'electron-build',
    label: t`Desktop builds`,
  },
];

const filterBuilds = (builds: Array<Build> | null | undefined, buildFilter: BuildFilter) => {
  if (!builds) return;
  switch (buildFilter) {
    case 'web-build':
      return builds.filter(build => build.type === 'web-build');
    case 'cordova-build':
      return builds.filter(build => build.type === 'cordova-build');
    case 'cordova-ios-build':
      return builds.filter(build => build.type === 'cordova-ios-build');
    case 'electron-build':
      return builds.filter(build => build.type === 'electron-build');
    default:
      return builds;
  }
};

const emptyBuildMessage = {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  'web-build': <Trans>You don't have any web builds for this game.</Trans>,
  'cordova-build': (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>You don't have any Android builds for this game.</Trans>
  ),
  'cordova-ios-build': (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>You don't have any iOS builds for this game.</Trans>
  ),
  'electron-build': (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>You don't have any desktop builds for this game.</Trans>
  ),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  'all-build': <Trans>You don't have any builds for this game.</Trans>,
} as const;

const BuildsList = ({
  builds,
  authenticatedUser,
  error,
  loadBuilds,
  game,
  onGameUpdated,
  onBuildUpdated,
  onBuildDeleted,
}: Props) => {
  const [gameUpdating, setGameUpdating] = React.useState(false);
  const [buildFilter, setBuildFilter] = React.useState<BuildFilter>('all-build');
  const displayedBuilds = filterBuilds(builds, buildFilter);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EmptyMessage messageStyle={styles.emptyMessageStyle}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              This is the list of builds that you've done for this game. <br />
              Note that builds for mobile and desktop are available for 7 days,
              after which they are removed.
            </Trans>
          </EmptyMessage>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Show</Trans>}
            value={buildFilter}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, i, value) => {
              setBuildFilter(value);
            }}
          >
            {buildFilterOptions.map(({ key, value, label }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectOption key={key} value={value} label={label} />
            ))}
          </SelectField>
        </Column>
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
        {!authenticatedUser.authenticated && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>You need to login first to see your builds.</Trans>
          </EmptyMessage>
        )}
        {authenticatedUser.authenticated && !displayedBuilds && !error && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderLoader />
        )}
        {authenticatedUser.authenticated && error && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderError onRetry={loadBuilds}>
            {error.message}
          </PlaceholderError>
        )}
        {authenticatedUser.authenticated &&
          displayedBuilds &&
          displayedBuilds.length === 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <EmptyMessage>{emptyBuildMessage[buildFilter]}</EmptyMessage>
          )}
        {authenticatedUser.authenticated &&
          displayedBuilds &&
          displayedBuilds.length !== 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ColumnStackLayout expand noMargin>
              {displayedBuilds.map((build: Build) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <BuildCard
                  build={build}
                  key={build.id}
                  game={game}
                  onGameUpdated={onGameUpdated}
                  gameUpdating={gameUpdating}
                  setGameUpdating={setGameUpdating}
                  onBuildUpdated={onBuildUpdated}
                  onBuildDeleted={onBuildDeleted}
                  authenticatedUser={authenticatedUser}
                />
              ))}
            </ColumnStackLayout>
          )}
      </Line>
    </Column>
  );
};

export default BuildsList;
