import * as React from 'react';

// @ts-expect-error - TS6142 - Module './PublicProfileDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/PublicProfileDialog.tsx', but '--jsx' is not set.
import PublicProfileDialog from './PublicProfileDialog';
import PublicProfileContext, {
  PublicProfileState,
} from './PublicProfileContext';

type Props = {
  children: React.ReactNode
};

const PublicProfileProvider = ({
  children,
}: Props) => {
  const [
    visitedPublicProfileUserId,
    setVisitedPublicProfileUserId,
  ] = React.useState<string | null | undefined>(null);

  const openUserPublicProfile = React.useCallback(
    (userId: string): void => {
      setVisitedPublicProfileUserId(userId);
    },
    [setVisitedPublicProfileUserId]
  );

  const closeUserPublicProfile = React.useCallback(
    (): void => {
      setVisitedPublicProfileUserId(null);
    },
    [setVisitedPublicProfileUserId]
  );

  const publicProfileState: PublicProfileState = React.useMemo(
    () => ({
      openUserPublicProfile: openUserPublicProfile,
    }),
    [openUserPublicProfile]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PublicProfileContext.Provider value={publicProfileState}>
        {children}
      </PublicProfileContext.Provider>
      {visitedPublicProfileUserId && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PublicProfileDialog
          userId={visitedPublicProfileUserId}
          onClose={closeUserPublicProfile}
        />
      )}
    </React.Fragment>
  );
};

export default PublicProfileProvider;
