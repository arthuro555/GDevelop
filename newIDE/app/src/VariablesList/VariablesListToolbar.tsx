import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
import { IconButton } from '@material-ui/core';

// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Undo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Undo.js' implicitly has an 'any' type.
import Undo from '../UI/CustomSvgIcons/Undo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Redo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Redo.js' implicitly has an 'any' type.
import Redo from '../UI/CustomSvgIcons/Redo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Copy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Copy.js' implicitly has an 'any' type.
import Copy from '../UI/CustomSvgIcons/Copy';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Clipboard'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Clipboard.js' implicitly has an 'any' type.
import Clipboard from '../UI/CustomSvgIcons/Clipboard';

// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../UI/SearchBar';

type Props = {
  isNarrow: boolean,
  onCopy: () => void,
  onPaste: () => void,
  onDelete: () => void,
  canCopy: boolean,
  canPaste: boolean,
  canDelete: boolean,
  hideHistoryChangeButtons: boolean,
  onUndo?: () => void,
  onRedo?: () => void,
  canUndo?: boolean,
  canRedo?: boolean,
  onAdd: () => void,
  searchText: string,
  onChangeSearchText: (arg1: string) => void,
  iconStyle?: any
};

const VariablesListToolbar = React.memo<Props>((props: Props) => {
  const buttons = [
    {
      key: 'copy',
      Icon: Copy,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label: <Trans>Copy</Trans>,
      tooltip: t`Copy`,
      onClick: props.onCopy,
      disabled: !props.canCopy,
      display: true,
    },
    {
      key: 'paste',
      Icon: Clipboard,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label: <Trans>Paste</Trans>,
      tooltip: t`Paste`,
      onClick: props.onPaste,
      disabled: !props.canPaste,
      display: true,
    },
    {
      key: 'delete',
      Icon: Trash,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label: <Trans>Delete</Trans>,
      tooltip: t`Delete`,
      onClick: props.onDelete,
      disabled: !props.canDelete,
      display: true,
    },
    {
      key: 'undo',
      Icon: Undo,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label: <Trans>Undo</Trans>,
      tooltip: t`Undo`,
      onClick: props.onUndo,
      disabled: !props.canUndo,
      display: !props.hideHistoryChangeButtons,
    },
    {
      key: 'redo',
      Icon: Redo,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label: <Trans>Redo</Trans>,
      tooltip: t`Redo`,
      onClick: props.onRedo,
      disabled: !props.canRedo,
      display: !props.hideHistoryChangeButtons,
    },
  ];

  const buttonsToDisplay = buttons.filter(button => button.display);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin>
          {buttonsToDisplay.map(
            ({ key, Icon, label, tooltip, onClick, disabled }, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <React.Fragment key={key}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {index > 0 ? <Spacer /> : null}
                {props.isNarrow ? (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <IconButton
                    key={key}
                    tooltip={tooltip}
                    onClick={onClick}
                    size="small"
                    disabled={disabled}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Icon style={props.iconStyle} />
                  </IconButton>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <FlatButton
                    key={key}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    leftIcon={<Icon />}
                    disabled={disabled}
                    label={label}
                    onClick={onClick}
                  />
                )}
              </React.Fragment>
            )
          )}
        </Line>
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SearchBar
          value={props.searchText}
          onRequestSearch={props.onChangeSearchText}
          onChange={props.onChangeSearchText}
          placeholder={t`Search variables`}
        />
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
        {props.isNarrow ? (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton
            key="add-variable"
            tooltip={t`Add variable`}
            onClick={props.onAdd}
            size="small"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Add style={props.iconStyle} />
          </IconButton>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            primary
            key="add-variable"
            onClick={props.onAdd}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add variable</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<Add />}
          />
        )}
      </Column>
    </Line>
  );
});

export default VariablesListToolbar;
