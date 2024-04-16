// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toolbar.tsx', but '--jsx' is not set.
import { ToolbarGroup } from '../../UI/Toolbar';
// @ts-expect-error - TS6142 - Module '../../UI/ToolbarSeparator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ToolbarSeparator.tsx', but '--jsx' is not set.
import ToolbarSeparator from '../../UI/ToolbarSeparator';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../../UI/Menu/ElementWithMenu';
import ToolbarCommands from '../ToolbarCommands';
import { MenuItemTemplate } from '../../UI/Menu/Menu.flow';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Undo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Undo.js' implicitly has an 'any' type.
import UndoIcon from '../../UI/CustomSvgIcons/Undo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Redo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Redo.js' implicitly has an 'any' type.
import RedoIcon from '../../UI/CustomSvgIcons/Redo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import TrashIcon from '../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Grid'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Grid.js' implicitly has an 'any' type.
import GridIcon from '../../UI/CustomSvgIcons/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ZoomIn'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ZoomIn.js' implicitly has an 'any' type.
import ZoomInIcon from '../../UI/CustomSvgIcons/ZoomIn';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/EditScene'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/EditScene.js' implicitly has an 'any' type.
import EditSceneIcon from '../../UI/CustomSvgIcons/EditScene';

type Props = {
  toggleObjectsList: () => void,
  toggleObjectGroupsList: () => void,
  toggleProperties: () => void,
  toggleInstancesList: () => void,
  toggleLayersList: () => void,
  undo: () => void,
  canUndo: boolean,
  redo: () => void,
  canRedo: boolean,
  deleteSelection: () => void,
  selectedInstancesCount: number,
  isWindowMaskShown: boolean,
  toggleWindowMask: () => void,
  isGridShown: boolean,
  toggleGrid: () => void,
  openSetupGrid: () => void,
  getContextMenuZoomItems: (arg1: I18nType) => Array<MenuItemTemplate>,
  setZoomFactor: (arg1: number) => void,
  onOpenSettings: () => void,
  settingsIcon: React.ReactNode,
  canRenameObject: boolean,
  onRenameObject: () => void
};

const Toolbar = React.memo<Props>(function(props) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ToolbarCommands
      toggleObjectsList={props.toggleObjectsList}
      toggleObjectGroupsList={props.toggleObjectGroupsList}
      togglePropertiesPanel={props.toggleProperties}
      toggleInstancesList={props.toggleInstancesList}
      toggleLayersList={props.toggleLayersList}
      undo={props.undo}
      canUndo={props.canUndo}
      redo={props.redo}
      canRedo={props.canRedo}
      deleteSelection={props.deleteSelection}
      toggleWindowMask={props.toggleWindowMask}
      toggleGrid={props.toggleGrid}
      setupGrid={props.openSetupGrid}
      canDeleteSelection={props.selectedInstancesCount !== 0}
      canRenameObject={props.canRenameObject}
      onRenameObject={props.onRenameObject}
    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <IconButton
      size="small"
      color="default"
      onClick={props.undo}
      disabled={!props.canUndo}
      tooltip={t`Undo the last changes`}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UndoIcon />
    </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <IconButton
      size="small"
      color="default"
      onClick={props.redo}
      disabled={!props.canRedo}
      tooltip={t`Redo the last changes`}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RedoIcon />
    </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ElementWithMenu
      element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <IconButton
          size="small"
          color="default"
          tooltip={t`Change editor zoom`}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ZoomInIcon />
        </IconButton>
      }
      buildMenuTemplate={(i18n: I18nType) => [
        ...props.getContextMenuZoomItems(i18n),
        { type: 'separator' },
        { label: '5%', click: () => props.setZoomFactor(0.05) },
        { label: '10%', click: () => props.setZoomFactor(0.1) },
        { label: '25%', click: () => props.setZoomFactor(0.25) },
        { label: '50%', click: () => props.setZoomFactor(0.5) },
        { label: '100%', click: () => props.setZoomFactor(1.0) },
        { label: '150%', click: () => props.setZoomFactor(1.5) },
        { label: '200%', click: () => props.setZoomFactor(2.0) },
        { label: '400%', click: () => props.setZoomFactor(4.0) },
      ]}
    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <IconButton
      size="small"
      color="default"
      onClick={props.deleteSelection}
      disabled={!props.selectedInstancesCount}
      tooltip={t`Delete the selected instances from the scene`}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TrashIcon />
    </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ToolbarSeparator />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ToolbarGroup lastChild>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ElementWithMenu
        element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton
            size="small"
            color="default"
            tooltip={t`Toggle/edit grid`}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <GridIcon />
          </IconButton>
        }
        buildMenuTemplate={(i18n: I18nType) => [
          {
            type: 'checkbox',
            label: i18n._(t`Show Mask`),
            checked: props.isWindowMaskShown,
            click: () => props.toggleWindowMask(),
          },
          {
            type: 'checkbox',
            label: i18n._(t`Show grid`),
            checked: props.isGridShown,
            click: () => props.toggleGrid(),
          },
          { type: 'separator' },
          {
            label: i18n._(t`Setup grid`),
            click: () => props.openSetupGrid(),
          },
        ]}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ToolbarSeparator />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IconButton
        size="small"
        color="default"
        onClick={props.onOpenSettings}
        tooltip={t`Open settings`}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        {props.settingsIcon || <EditSceneIcon />}
      </IconButton>
    </ToolbarGroup>
  </>;
});

export default Toolbar;
