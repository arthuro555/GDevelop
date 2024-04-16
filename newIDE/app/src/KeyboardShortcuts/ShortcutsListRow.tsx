import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// @ts-expect-error - TS6142 - Module '../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../UI/Chip';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
import commandsList, { CommandName } from '../CommandPalette/CommandsList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Warning'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Warning.js' implicitly has an 'any' type.
import Warning from '../UI/CustomSvgIcons/Warning';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Undo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Undo.js' implicitly has an 'any' type.
import Undo from '../UI/CustomSvgIcons/Undo';
import { Tooltip } from '@material-ui/core';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';

const styles = {
  shortcutChip: {
    borderRadius: 3,
  },
} as const;

type Props = {
  i18n: I18n,
  commandName: CommandName,
  isDefault: boolean,
  shortcutString: string,
  isClashing: boolean,
  onEditShortcut: () => void,
  onResetShortcut: () => void
};

const ShortcutsListRow = (props: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ListItem>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ListItemText
// @ts-expect-error - TS2532 - Object is possibly 'undefined'.
        primary={props.i18n._(commandsList[props.commandName].displayText)}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LineStackLayout alignItems="center">
          {props.isClashing && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Tooltip
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              title={<Trans>This shortcut clashes with another action.</Trans>}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Warning />
            </Tooltip>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Chip
            style={styles.shortcutChip}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={props.shortcutString || <Trans>No shortcut</Trans>}
            onClick={props.onEditShortcut}
            color={props.shortcutString ? 'secondary' : 'default'}
          />
          {!props.isDefault && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <IconButton
              onClick={props.onResetShortcut}
              tooltip={t`Reset to default`}
              size="small"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Undo />
            </IconButton>
          )}
        </LineStackLayout>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ShortcutsListRow;
