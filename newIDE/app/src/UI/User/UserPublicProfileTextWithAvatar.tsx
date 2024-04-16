import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { UserPublicProfile } from '../../Utils/GDevelopServices/User';
import PublicProfileContext from '../../Profile/PublicProfileContext';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
// @ts-expect-error - TS6142 - Module '../Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../Text';
// @ts-expect-error - TS6142 - Module '../Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import Skeleton from '@material-ui/lab/Skeleton';

type Props = {
  user: UserPublicProfile | null,
  avatarSize: number,
  expand?: boolean
};

export const UserPublicProfileTextWithAvatar = ({
  user,
  avatarSize,
  expand,
}: Props) => {
  const { openUserPublicProfile } = React.useContext(PublicProfileContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase
      onClick={user ? () => openUserPublicProfile(user.id) : undefined}
      style={{ width: expand ? '100%' : undefined }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout
        alignItems="center"
        justifyContent="flex-start"
        expand
        noMargin
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Avatar
          src={user ? user.iconUrl : undefined}
          style={{
            width: avatarSize,
            height: avatarSize,
          }}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="body">
          {user ? (
            user.username || (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <i>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Anonymous</Trans>
              </i>
            )
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Skeleton variant="rect" height={20} width={100} />
          )}
        </Text>
      </LineStackLayout>
    </ButtonBase>
  );
};
