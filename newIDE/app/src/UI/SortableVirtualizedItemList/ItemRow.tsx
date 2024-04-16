import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem } from '../List';
// @ts-expect-error - TS6142 - Module '../ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from '../ListIcon';
import TextField, {
  noMarginTextFieldInListItemTopOffset,
  TextFieldInterface,
// @ts-expect-error - TS6142 - Module '../TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
} from '../TextField';
import { MenuItemTemplate } from '../Menu/Menu.flow';
import { HTMLDataset } from '../../Utils/HTMLDataset';
import {
  shouldCloseOrCancel,
  shouldValidate,
} from '../KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../TextEllipsis';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../Text';

const styles = {
  textField: {
    top: noMarginTextFieldInListItemTopOffset,
    fontSize: 12,
  },
} as const;

const LEFT_MOUSE_BUTTON = 0;

type Props<Item> = {
  item: Item,
  itemName: string,
  id?: string | null | undefined,
  data?: HTMLDataset,
  isBold: boolean,
  onRename: (arg1: string) => void,
  editingName: boolean,
  getThumbnail?: () => string,
  renderItemLabel?: () => React.ReactElement,
  selected: boolean,
  onItemSelected: (arg1?: Item | null | undefined) => void,
  errorStatus: '' | 'error' | 'warning',
  buildMenuTemplate: () => Array<MenuItemTemplate>,
  onEdit?: (arg1: Item) => void | null | undefined,
  hideMenuButton: boolean,
  scaleUpItemIconWhenSelected?: boolean
};

function ItemRow<Item>(
  {
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
  }: Props<Item>,
) {
  const textFieldRef = React.useRef<TextFieldInterface | null | undefined>(null);
  const shouldDiscardChanges = React.useRef<boolean>(false);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  React.useEffect(
    () => {
      if (editingName) {
        shouldDiscardChanges.current = false;
        const timeoutId = setTimeout(() => {
          if (textFieldRef.current) textFieldRef.current.focus();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    },
    [editingName]
  );

  const label = editingName ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextField
      id="rename-item-field"
      margin="none"
      ref={textFieldRef}
      defaultValue={itemName}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
      onBlur={e => {
        onRename(
          shouldDiscardChanges.current ? itemName : e.currentTarget.value
        );
      }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      onKeyPress={event => {
        if (shouldValidate(event)) {
          if (textFieldRef.current) textFieldRef.current.blur();
        }
      }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      onKeyUp={event => {
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
      onDoubleClick={event => {
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
