import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';

import { StorageProvider } from '.';
import { makeStyles } from '@material-ui/styles';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

type Props = {
  storageProvider: StorageProvider,
  onChooseProvider: (storageProvider: StorageProvider) => void
};

const useListItemStyles = makeStyles(theme => {
  return {
    root: {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 8,
    },
  };
});

const StorageProviderListItem = ({
  storageProvider,
  onChooseProvider,
}: Props) => {
  const authenticatedUser = React.useContext(AuthenticatedUserContext);

  const classesForListItem = useListItemStyles();

  const shouldDisplayAuthenticationButtons =
    storageProvider.needUserAuthentication && !authenticatedUser.authenticated;

  const isLineClickable =
    !storageProvider.disabled &&
    (!storageProvider.needUserAuthentication ||
      !shouldDisplayAuthenticationButtons);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ListItem
          classes={classesForListItem}
          key={storageProvider.internalName}
          disabled={storageProvider.disabled}
// @ts-expect-error - TS2769 - No overload matches this call.
          onClick={
            isLineClickable ? () => onChooseProvider(storageProvider) : null
          }
// @ts-expect-error - TS2769 - No overload matches this call.
          button={isLineClickable}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ListItemIcon>
            {storageProvider.renderIcon
              ? storageProvider.renderIcon({})
              : undefined}
          </ListItemIcon>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ListItemText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin>{i18n._(storageProvider.name)}</Text>
              {shouldDisplayAuthenticationButtons && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
                    label={i18n._(t`Create an Account`)}
                    onClick={() =>
                      authenticatedUser.onOpenCreateAccountDialog()
                    }
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <RaisedButton
                    primary
                    label={i18n._(t`Login with GDevelop`)}
                    onClick={() => authenticatedUser.onOpenLoginDialog()}
                  />
                </Line>
              )}
            </Line>
          </ListItemText>
        </ListItem>
      )}
    </I18n>
  );
};

export default StorageProviderListItem;
