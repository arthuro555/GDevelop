import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../../UI/Chip';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { UserPublicProfile } from '../../Utils/GDevelopServices/User';
import PublicProfileContext from '../../Profile/PublicProfileContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/User'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/User.js' implicitly has an 'any' type.
import User from '../CustomSvgIcons/User';

const styles = {
  chip: {
    marginRight: 2,
    marginLeft: 2,
    marginBottom: 2,
  },
} as const;

type Props = {
  user: UserPublicProfile,
  isClickable?: boolean,
  variant?: 'default' | 'outlined'
};

export const UserPublicProfileChip = ({
  user,
  isClickable = false,
  variant,
}: Props) => {
  const { openUserPublicProfile } = React.useContext(PublicProfileContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Chip
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      icon={<User />}
      size="small"
      style={styles.chip}
      variant={variant}
      label={user.username}
      key={user.username}
      onClick={isClickable ? () => openUserPublicProfile(user.id) : null}
      disableAutoTranslate
    />
  );
};
