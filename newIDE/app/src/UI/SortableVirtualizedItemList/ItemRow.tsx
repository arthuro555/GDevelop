import * as React from 'react';

import { ListItem } from '../List';

import ListIcon from '../ListIcon';
import TextField, {
  noMarginTextFieldInListItemTopOffset,
  TextFieldInterface,
} from '../TextField';
import { MenuItemTemplate } from '../Menu/Menu';
import { HTMLDataset } from '../../Utils/HTMLDataset';
import {
  shouldCloseOrCancel,
  shouldValidate,
} from '../KeyboardShortcuts/InteractionKeys';

import { textEllipsisStyle } from '../TextEllipsis';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';

import Text from '../Text';

const styles = {
  textField: {
    top: noMarginTextFieldInListItemTopOffset,
    fontSize: 12,
  },
} as const;

const LEFT_MOUSE_BUTTON = 0;

type Props<Item> = {
  item: Item;
  itemName: string;
  id?: string | null | undefined;
  data?: HTMLDataset;
  isBold: boolean;
  onRename: (arg1: string) => void;
  editingName: boolean;
  getThumbnail?: () => string;
  renderItemLabel?: () => React.ReactElement;
  selected: boolean;
  onItemSelected: (arg1?: Item | null | undefined) => void;
  errorStatus: '' | 'error' | 'warning';
  buildMenuTemplate: () => Array<MenuItemTemplate>;
  onEdit?: (arg1: Item) => void | null | undefined;
  hideMenuButton: boolean;
  scaleUpItemIconWhenSelected?: boolean;
};

function ItemRow<Item>({
  item,
  itemName,
  id,
  data,
  isBold,
  onRename,
  editingName,
  getThumbnail,
  renderItemLabel,
  selected,
  onItemSelected,
  errorStatus,
  buildMenuTemplate,
  onEdit,
  hideMenuButton,
  scaleUpItemIconWhenSelected,
}: Props<Item>) {
  const textFieldRef = React.useRef<TextFieldInterface | null | undefined>(
    null
  );
  const shouldDiscardChanges = React.useRef<boolean>(false);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  React.useEffect(() => {
    if (editingName) {
      shouldDiscardChanges.current = false;
      const timeoutId = setTimeout(() => {
        if (textFieldRef.current) textFieldRef.current.focus();
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [editingName]);

  const label = editingName ? (
    <TextField
      id="rename-item-field"
      margin="none"
      ref={textFieldRef}
      defaultValue={itemName}
      onBlur={(e) => {
        onRename(
          shouldDiscardChanges.current ? itemName : e.currentTarget.value
        );
      }}
      onKeyPress={(event) => {
        if (shouldValidate(event)) {
          if (textFieldRef.current) textFieldRef.current.blur();
        }
      }}
      onKeyUp={(event) => {
        if (shouldCloseOrCancel(event)) {
          const { current: currentTextField } = textFieldRef;
          if (currentTextField) {
            shouldDiscardChanges.current = true;
            currentTextField.blur();
          }
        }
      }}
      fullWidth
      style={styles.textField}
    />
  ) : (
    <div
      title={typeof itemName === 'string' ? itemName : undefined}
      style={{
        ...textEllipsisStyle,
        color: selected ? gdevelopTheme.listItem.selectedTextColor : undefined,
        fontStyle: isBold ? 'italic' : undefined,
        fontWeight: isBold ? 'bold' : 'normal',
      }}
    >
      {renderItemLabel ? (
        renderItemLabel()
      ) : (
        <Text noMargin size="body-small">
          {itemName}
        </Text>
      )}
    </div>
  );

  const itemStyle = {
    backgroundColor: selected
      ? errorStatus === ''
        ? gdevelopTheme.listItem.selectedBackgroundColor
        : errorStatus === 'error'
          ? gdevelopTheme.listItem.selectedErrorBackgroundColor
          : gdevelopTheme.listItem.selectedWarningBackgroundColor
      : undefined,
    color:
      errorStatus === ''
        ? undefined
        : errorStatus === 'error'
          ? gdevelopTheme.listItem.errorTextColor
          : gdevelopTheme.listItem.warningTextColor,
  } as const;

  const leftIcon = getThumbnail ? (
    <ListIcon
      iconSize={24}
      src={getThumbnail()}
      cssAnimation={
        scaleUpItemIconWhenSelected && selected
          ? 'scale-and-jiggle 0.8s forwards'
          : ''
      }
    />
  ) : null;

  return (
    <ListItem
      style={{ ...itemStyle }}
      primaryText={label}
      leftIcon={leftIcon}
      displayMenuButton={!hideMenuButton}
      rightIconColor={
        selected
          ? gdevelopTheme.listItem.selectedRightIconColor
          : gdevelopTheme.listItem.rightIconColor
      }
      buildMenuTemplate={buildMenuTemplate}
      onClick={() => {
        if (!onItemSelected) return;
        if (editingName) return;

        onItemSelected(selected ? null : item);
      }}
      // @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      onDoubleClick={(event) => {
        if (event.button !== LEFT_MOUSE_BUTTON) return;
        if (!onEdit) return;
        if (editingName) return;

        onItemSelected(null);
        onEdit(item);
      }}
      id={id}
      data={data}
    />
  );
}

export default ItemRow;
