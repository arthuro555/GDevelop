import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import { MenuItemTemplate } from '../UI/Menu/Menu.flow';
import { HTMLDataset } from '../Utils/HTMLDataset';
// @ts-expect-error - TS6142 - Module '../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { IconContainer, iconWithBackgroundStyle } from '../UI/IconContainer';
// @ts-expect-error - TS6142 - Module '../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem } from '../UI/List';
import TextField, {
  TextFieldInterface,
  noMarginTextFieldInListItemTopOffset,
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
} from '../UI/TextField';
import {
  shouldCloseOrCancel,
  shouldValidate,
} from '../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../UI/TextEllipsis';

// @ts-expect-error - TS6142 - Module '../AssetStore/ExtensionStore/ExtensionStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionStoreContext.tsx', but '--jsx' is not set.
import { ExtensionStoreContext } from '../AssetStore/ExtensionStore/ExtensionStoreContext';
import { ExtensionShortHeader } from '../Utils/GDevelopServices/Extension';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/SortableVirtualizedItemList/DropIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SortableVirtualizedItemList/DropIndicator.tsx', but '--jsx' is not set.
import DropIndicator from '../UI/SortableVirtualizedItemList/DropIndicator';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Extension'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Extension.js' implicitly has an 'any' type.
import ExtensionIcon from '../UI/CustomSvgIcons/Extension';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Warning'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Warning.js' implicitly has an 'any' type.
import Warning from '../UI/CustomSvgIcons/Warning';

const styles = {
  noIndentNestedList: {
    padding: 0,
  },
  itemTextField: {
    top: noMarginTextFieldInListItemTopOffset,
  },
  dragAndDropItemContainer: { display: 'flex', flexDirection: 'column' },
  draggableIcon: { display: 'flex' },
  extensionPlaceholderIconContainer: {
    ...iconWithBackgroundStyle,
    display: 'flex',
    color: '#1D1D26',
  },
} as const;

type ProjectStructureItemProps = {
  id?: string,
  autoGenerateNestedIndicator?: boolean,
  renderNestedItems: () => Array<React.ReactElement<any> | null>,
  primaryText: React.ReactNode,
  error?: Error | null | undefined,
  onRefresh?: () => void,
  open?: boolean
};

export const ProjectStructureItem = ({
  id,
  error,
  onRefresh,
  autoGenerateNestedIndicator,
  open,
  primaryText,
  renderNestedItems,
}: ProjectStructureItemProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ListItem
      id={id}
      open={open}
      primaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Text size="sub-title" noMargin>
          {primaryText}
        </Text>
      }
      initiallyOpen
      autoGenerateNestedIndicator
      renderNestedItems={renderNestedItems}
      onReload={onRefresh}
      noPadding
      nestedListStyle={styles.noIndentNestedList}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      leftIcon={error ? <Warning /> : undefined}
      displayReloadButton={!!error}
      reloadButtonTooltip={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>An error has occurred in functions. Click to reload them.</Trans>
      }
    />
  );
};

type ItemProps = {
  id?: string,
  data?: HTMLDataset,
  primaryText: string,
  textEndAdornment?: React.ReactNode,
  editingName: boolean,
  leftIcon: React.ReactElement<any>,
  onEdit: () => void,
  onDelete: () => void,
  addLabel: string,
  onAdd: () => void,
  onRename: (arg1: string) => void,
  onEditName: () => void,
  onCopy: () => void,
  onCut: () => void,
  onPaste: () => void,
  onDuplicate: () => void,
  canPaste: () => boolean,
  canMoveUp: boolean,
  onMoveUp: () => void,
  canMoveDown: boolean,
  onMoveDown: () => void,
  buildExtraMenuTemplate?: (i18n: I18nType) => Array<MenuItemTemplate>,
  isLastItem: boolean,
  dragAndDropProps: {
    DragSourceAndDropTarget: (arg1?: any) => React.ReactElement,
    onBeginDrag: () => void,
    onDrop: () => void
  }
};

export const Item = ({
  id,
  data,
  primaryText,
  textEndAdornment,
  editingName,
  leftIcon,
  onEdit,
  onDelete,
  addLabel,
  onAdd,
  onRename,
  onEditName,
  onCopy,
  onCut,
  onPaste,
  onDuplicate,
  canPaste,
  canMoveUp,
  onMoveUp,
  canMoveDown,
  onMoveDown,
  buildExtraMenuTemplate,
  isLastItem,
  dragAndDropProps: { DragSourceAndDropTarget, onBeginDrag, onDrop },
}: ItemProps) => {
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
      defaultValue={primaryText}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
      onBlur={e =>
        onRename(
          shouldDiscardChanges.current ? primaryText : e.currentTarget.value
        )
      }
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
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      onKeyDown={event => {
        // Prevent project manager to be closed when pressing escape
        // to cancel name change.
        if (shouldCloseOrCancel(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }}
      fullWidth
      style={styles.itemTextField}
    />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{ display: 'inline-flex', width: '100%', alignItems: 'center' }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <span
        style={textEllipsisStyle}
        title={primaryText}
        className="notranslate"
      >
        {primaryText}
      </span>
      {textEndAdornment && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <span
          style={{
            marginLeft: 5,
            display: 'flex',
          }}
        >
          {textEndAdornment}
        </span>
      )}
    </div>
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DragSourceAndDropTarget
          beginDrag={() => {
            onBeginDrag();
            return {};
          }}
          canDrag={() => !editingName}
          canDrop={() => true}
          drop={onDrop}
        >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type. | TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
          {({ connectDragSource, connectDropTarget, isOver, canDrop }) =>
            connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div style={styles.dragAndDropItemContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {isOver && <DropIndicator canDrop={canDrop} zIndex={1} />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ListItem
                  id={id}
                  data={data}
                  style={
                    isLastItem
                      ? undefined
                      : {
                          borderBottom: `1px solid ${
                            gdevelopTheme.listItem.separatorColor
                          }`,
                        }
                  }
                  noPadding
                  primaryText={label}
                  leftIcon={connectDragSource(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <div style={styles.draggableIcon}>{leftIcon}</div>
                  )}
                  displayMenuButton
                  buildMenuTemplate={(i18n: I18nType) => [
                    {
                      label: i18n._(t`Edit`),
                      click: onEdit,
                    },
                    ...(buildExtraMenuTemplate
                      ? buildExtraMenuTemplate(i18n)
                      : []),
                    { type: 'separator' },
                    {
                      label: i18n._(t`Rename`),
                      click: onEditName,
                    },
                    {
                      label: i18n._(t`Delete`),
                      click: onDelete,
                    },
                    {
                      label: i18n._(addLabel),
                      visible: !!onAdd,
                      click: onAdd,
                    },
                    { type: 'separator' },
                    {
                      label: i18n._(t`Copy`),
                      click: onCopy,
                    },
                    {
                      label: i18n._(t`Cut`),
                      click: onCut,
                    },
                    {
                      label: i18n._(t`Paste`),
                      enabled: canPaste(),
                      click: onPaste,
                    },
                    {
                      label: i18n._(t`Duplicate`),
                      click: onDuplicate,
                    },
                    { type: 'separator' },
                    {
                      label: i18n._(t`Move up`),
                      enabled: canMoveUp,
                      click: onMoveUp,
                    },
                    {
                      label: i18n._(t`Move down`),
                      enabled: canMoveDown,
                      click: onMoveDown,
                    },
                  ]}
                  onClick={() => {
                    // It's essential to discard clicks when editing the name,
                    // to avoid weird opening of an editor (accompanied with a
                    // closing of the project manager) when clicking on the text
                    // field.
                    if (!editingName) onEdit();
                  }}
                />
              </div>
            )
          }
        </DragSourceAndDropTarget>
      )}
    </I18n>
  );
};

type EventFunctionExtensionItemProps = {
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  onEdit: (
    arg1: {
      [key: string]: ExtensionShortHeader
    },
  ) => void,
  onRename: (arg1: string) => void,
  onEditName: () => void,
  isEditingName: boolean,
  onDelete: () => void,
  onAdd: () => void,
  onCopy: () => void,
  onCut: () => void,
  onPaste: () => void,
  onDuplicate: () => void,
  canPaste: () => boolean,
  canMoveUp: boolean,
  onMoveUp: () => void,
  canMoveDown: boolean,
  onMoveDown: () => void,
  isLastItem: boolean,
  dragAndDropProps: {
    DragSourceAndDropTarget: (arg1?: any) => React.ReactElement,
    onBeginDrag: () => void,
    onDrop: () => void
  }
};

export const EventFunctionExtensionItem = ({
  eventsFunctionsExtension,
  onEdit,
  onRename,
  onEditName,
  isEditingName,
  onDelete,
  onAdd,
  onCopy,
  onCut,
  onPaste,
  onDuplicate,
  canPaste,
  canMoveUp,
  onMoveUp,
  canMoveDown,
  onMoveDown,
  isLastItem,
  dragAndDropProps,
}: EventFunctionExtensionItemProps) => {
  const name = eventsFunctionsExtension.getName();
  const iconUrl = eventsFunctionsExtension.getIconUrl();

  const { extensionShortHeadersByName } = React.useContext(
    ExtensionStoreContext
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Item
      leftIcon={
        iconUrl ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconContainer
            size={24}
            alt={eventsFunctionsExtension.getFullName()}
            src={iconUrl}
          />
        ) : (
          // Use icon placeholder so that the user can drag and drop the
          // item in the project manager.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div style={styles.extensionPlaceholderIconContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ExtensionIcon />
          </div>
        )
      }
      primaryText={name}
      editingName={isEditingName}
      onEdit={() => onEdit(extensionShortHeadersByName)}
      onDelete={onDelete}
      addLabel={t`Add a New Extension`}
      onAdd={onAdd}
      onRename={onRename}
      onEditName={onEditName}
      onCopy={onCopy}
      onCut={onCut}
      onPaste={onPaste}
      onDuplicate={onDuplicate}
      canPaste={canPaste}
      canMoveUp={canMoveUp}
      onMoveUp={onMoveUp}
      canMoveDown={canMoveDown}
      onMoveDown={onMoveDown}
      isLastItem={isLastItem}
      dragAndDropProps={dragAndDropProps}
    />
  );
};
