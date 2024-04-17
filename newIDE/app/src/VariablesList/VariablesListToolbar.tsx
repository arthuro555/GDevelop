import * as React from 'react';

import { t, Trans } from '@lingui/macro';
import { IconButton } from '@material-ui/core';

import Add from '../UI/CustomSvgIcons/Add';

import Undo from '../UI/CustomSvgIcons/Undo';

import Redo from '../UI/CustomSvgIcons/Redo';

import Trash from '../UI/CustomSvgIcons/Trash';

import Copy from '../UI/CustomSvgIcons/Copy';

import Clipboard from '../UI/CustomSvgIcons/Clipboard';

import { Column, Line, Spacer } from '../UI/Grid';

import FlatButton from '../UI/FlatButton';

import SearchBar from '../UI/SearchBar';

type Props = {
  isNarrow: boolean;
  onCopy: () => void;
  onPaste: () => void;
  onDelete: () => void;
  canCopy: boolean;
  canPaste: boolean;
  canDelete: boolean;
  hideHistoryChangeButtons: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
  onAdd: () => void;
  searchText: string;
  onChangeSearchText: (arg1: string) => void;
  iconStyle?: any;
};

const VariablesListToolbar = React.memo<Props>((props: Props) => {
  const buttons = [
    {
      key: 'copy',
      Icon: Copy,

      label: <Trans>Copy</Trans>,
      tooltip: t`Copy`,
      onClick: props.onCopy,
      disabled: !props.canCopy,
      display: true,
    },
    {
      key: 'paste',
      Icon: Clipboard,

      label: <Trans>Paste</Trans>,
      tooltip: t`Paste`,
      onClick: props.onPaste,
      disabled: !props.canPaste,
      display: true,
    },
    {
      key: 'delete',
      Icon: Trash,

      label: <Trans>Delete</Trans>,
      tooltip: t`Delete`,
      onClick: props.onDelete,
      disabled: !props.canDelete,
      display: true,
    },
    {
      key: 'undo',
      Icon: Undo,

      label: <Trans>Undo</Trans>,
      tooltip: t`Undo`,
      onClick: props.onUndo,
      disabled: !props.canUndo,
      display: !props.hideHistoryChangeButtons,
    },
    {
      key: 'redo',
      Icon: Redo,

      label: <Trans>Redo</Trans>,
      tooltip: t`Redo`,
      onClick: props.onRedo,
      disabled: !props.canRedo,
      display: !props.hideHistoryChangeButtons,
    },
  ];

  const buttonsToDisplay = buttons.filter((button) => button.display);
  return (
    <Line justifyContent="space-between" alignItems="center">
      <Column noMargin>
        <Line noMargin>
          {buttonsToDisplay.map(
            ({ key, Icon, label, tooltip, onClick, disabled }, index) => (
              <React.Fragment key={key}>
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
                    <Icon style={props.iconStyle} />
                  </IconButton>
                ) : (
                  <FlatButton
                    key={key}
                    leftIcon={<Icon />}
                    disabled={disabled}
                    label={label}
// @ts-expect-error - TS2322 - Type '(() => void) | undefined' is not assignable to type '(ev?: any) => void'.
                    onClick={onClick}
                  />
                )}
              </React.Fragment>
            )
          )}
        </Line>
      </Column>
      <Column expand>
        <SearchBar
          value={props.searchText}
          onRequestSearch={props.onChangeSearchText}
          onChange={props.onChangeSearchText}
          placeholder={t`Search variables`}
        />
      </Column>
      <Column noMargin>
        {props.isNarrow ? (
          // @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton
            key="add-variable"
            tooltip={t`Add variable`}
            onClick={props.onAdd}
            size="small"
          >
            <Add style={props.iconStyle} />
          </IconButton>
        ) : (
          <FlatButton
            primary
            key="add-variable"
            onClick={props.onAdd}
            label={<Trans>Add variable</Trans>}
            leftIcon={<Add />}
          />
        )}
      </Column>
    </Line>
  );
});

export default VariablesListToolbar;
