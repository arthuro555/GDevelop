import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import Avatar from '@material-ui/core/Avatar';
import { getGravatarUrl } from '../GravatarUrl';
// @ts-expect-error - TS6142 - Module '../RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../RaisedButton';
import { shortenString } from '../../Utils/StringHelpers';
// @ts-expect-error - TS6142 - Module '../TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../TextButton';
// @ts-expect-error - TS6142 - Module '../Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../Layout';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../CircularProgress';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/User'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/User.js' implicitly has an 'any' type.
import User from '../CustomSvgIcons/User';

const styles = {
  avatar: {
    width: 20,
    height: 20,
  },
  buttonContainer: { flexShrink: 0 },
} as const;

type Props = {
  onOpenProfile: () => void
};

const UserChip = ({
  onOpenProfile,
}: Props) => {
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const { profile, onOpenCreateAccountDialog, loginState } = authenticatedUser;

  return !profile && loginState === 'loggingIn' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <CircularProgress size={25} />
  ) : profile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextButton
      label={shortenString(profile.username || profile.email, 20)}
      onClick={onOpenProfile}
      allowBrowserAutoTranslate={false}
      icon={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Avatar
          src={getGravatarUrl(profile.email || '', { size: 50 })}
          style={styles.avatar}
        />
      }
    />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={styles.buttonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
          label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Create account</Trans>
            </span>
          }
          onClick={onOpenCreateAccountDialog}
          primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<User fontSize="small" />}
        />
      </LineStackLayout>
    </div>
  );
};

export default UserChip;
