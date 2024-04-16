import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import Radio from '@material-ui/core/Radio';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/TreeTable' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TreeTable/index.tsx', but '--jsx' is not set.
import { TreeTableRow, TreeTableCell } from '../UI/TreeTable';
// @ts-expect-error - TS6142 - Module '../UI/InlineCheckbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/InlineCheckbox.tsx', but '--jsx' is not set.
import InlineCheckbox from '../UI/InlineCheckbox';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../UI/DragHandle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragHandle.tsx', but '--jsx' is not set.
import DragHandle from '../UI/DragHandle';
// @ts-expect-error - TS6142 - Module '../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../UI/Menu/ElementWithMenu';
// @ts-expect-error - TS6142 - Module '../UI/Badge' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Badge.tsx', but '--jsx' is not set.
import Badge from '../UI/Badge';
// @ts-expect-error - TS6142 - Module '../UI/DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
import { makeDragSourceAndDropTarget } from '../UI/DragAndDrop/DragSourceAndDropTarget';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';

// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../UI/CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Visibility'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Visibility.js' implicitly has an 'any' type.
import VisibilityIcon from '../UI/CustomSvgIcons/Visibility';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Lock'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Lock.js' implicitly has an 'any' type.
import LockIcon from '../UI/CustomSvgIcons/Lock';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/LockOpen'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/LockOpen.js' implicitly has an 'any' type.
import LockOpenIcon from '../UI/CustomSvgIcons/LockOpen';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/VisibilityOff'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/VisibilityOff.js' implicitly has an 'any' type.
import VisibilityOffIcon from '../UI/CustomSvgIcons/VisibilityOff';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import TrashIcon from '../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import EditIcon from '../UI/CustomSvgIcons/Edit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Lightbulb'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Lightbulb.js' implicitly has an 'any' type.
import LightbulbIcon from '../UI/CustomSvgIcons/Lightbulb';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/LightMode'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/LightMode.js' implicitly has an 'any' type.
import LightModeIcon from '../UI/CustomSvgIcons/LightMode';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Object2d'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Object2d.js' implicitly has an 'any' type.
import Object2dIcon from '../UI/CustomSvgIcons/Object2d';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Object3d'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Object3d.js' implicitly has an 'any' type.
import Object3dIcon from '../UI/CustomSvgIcons/Object3d';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Layer2dAnd3d'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Layer2dAnd3d.js' implicitly has an 'any' type.
import Layer2dAnd3dIcon from '../UI/CustomSvgIcons/Layer2dAnd3d';

const DragSourceAndDropTarget = makeDragSourceAndDropTarget('layers-list');

export const styles = {
  dropIndicator: {
    outline: '1px solid white',
  },
} as const;

type Props = {
  id: string,
  layer: gdLayer,
  isSelected: boolean,
  onSelect: (arg1: string) => void,
  nameError: React.ReactNode,
  onBlur: (arg1: string) => void,
  onRemove: () => void,
  onBeginDrag: () => void,
  onDrop: () => void,
  isVisible: boolean,
  onChangeVisibility: (arg1: boolean) => void,
  isLocked: boolean,
  onChangeLockState: (arg1: boolean) => void,
  effectsCount: number,
  onEditEffects: () => void,
  onEdit: () => void,
  width: number
};

const LayerRow = ({
  id,
  layer,
  isSelected,
  onSelect,
  nameError,
  onBlur,
  onRemove,
  isVisible,
  isLocked,
  onChangeLockState,
  effectsCount,
  onEditEffects,
  onChangeVisibility,
  onBeginDrag,
  onDrop,
  width,
  onEdit,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  const layerName = layer.getName();
  const isLightingLayer = layer.isLightingLayer();
  const renderingType = layer.getRenderingType();

  const editPropertiesIcon = isLightingLayer ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LightbulbIcon />
  ) : renderingType === '2d' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Object2dIcon />
  ) : renderingType === '3d' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Object3dIcon />
  ) : renderingType === '2d+3d' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Layer2dAnd3dIcon />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EditIcon />
  );

  const isBaseLayer = !layerName;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DragSourceAndDropTarget
          key={layer.ptr}
          beginDrag={() => {
            onBeginDrag();
            return {};
          }}
          canDrag={() => true}
          canDrop={() => true}
          drop={onDrop}
        >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type. | TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
          {({ connectDragSource, connectDropTarget, isOver, canDrop }) =>
            connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div>
                {isOver && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <div
                    style={{
                      ...styles.dropIndicator,
                      outlineColor: gdevelopTheme.dropIndicator.canDrop,
                    }}
                  />
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TreeTableRow id={id}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TreeTableCell>
                    {connectDragSource(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <span id="layer-drag-handle">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <DragHandle />
                      </span>
                    )}
                  </TreeTableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TreeTableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Tooltip
                      title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>
                          Layer where instances are added by default
                        </Trans>
                      }
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Radio
                        checked={isSelected}
// @ts-expect-error - TS2322 - Type '(arg1: string) => void' is not assignable to type '(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void'.
                        onChange={onSelect}
                        size="small"
                        id={`layer-selected-${
                          isSelected ? 'checked' : 'unchecked'
                        }`}
                      />
                    </Tooltip>
                  </TreeTableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TreeTableCell expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SemiControlledTextField
                      margin="none"
                      value={isBaseLayer ? i18n._(t`Base layer`) : layerName}
                      id="layer-name"
                      errorText={nameError}
                      disabled={isBaseLayer}
                      onChange={onBlur}
                      commitOnBlur
                      fullWidth
                    />
                  </TreeTableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TreeTableCell>
                    {width < 350 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <ElementWithMenu
                        element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <IconButton size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <ThreeDotsMenu />
                          </IconButton>
                        }
                        buildMenuTemplate={(i18n: I18nType) => [
                          {
                            label: isLightingLayer
                              ? i18n._(t`Edit lighting properties`)
                              : i18n._(t`Edit properties`),
                            click: onEdit,
                          },
                          {
                            label: i18n._(t`Edit effects (${effectsCount})`),
                            click: onEditEffects,
                          },
                          {
                            type: 'checkbox',
                            label: i18n._(t`Visible`),
                            checked: isVisible,
                            click: () => onChangeVisibility(!isVisible),
                          },
                          {
                            type: 'checkbox',
                            label: i18n._(t`Locked`),
                            enabled: isVisible,
                            checked: isLocked || !isVisible,
                            click: () => onChangeLockState(!isLocked),
                          },
                          { type: 'separator' },
                          {
                            label: i18n._(t`Delete`),
                            enabled: !isBaseLayer,
                            click: onRemove,
                          },
                        ]}
                      />
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <InlineCheckbox
                          id="layer-visibility"
                          paddingSize="small"
                          checked={isVisible}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          checkedIcon={<VisibilityIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          uncheckedIcon={<VisibilityOffIcon />}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                          onCheck={(e, value) => onChangeVisibility(value)}
                          tooltipOrHelperText={
                            isVisible ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Trans>Hide layer</Trans>
                            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Trans>Show layer</Trans>
                            )
                          }
                        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <InlineCheckbox
                          id="layer-lock"
                          paddingSize="small"
                          disabled={!isVisible}
                          checked={isLocked || !isVisible}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          checkedIcon={<LockIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          uncheckedIcon={<LockOpenIcon />}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                          onCheck={(e, value) => onChangeLockState(value)}
                          tooltipOrHelperText={
                            isLocked ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Trans>Unlock layer</Trans>
                            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Trans>Lock layer</Trans>
                            )
                          }
                        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <IconButton
                          size="small"
                          onClick={onEditEffects}
                          tooltip={t`Edit effects (${effectsCount})`}
                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Badge badgeContent={effectsCount} color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <LightModeIcon />
                          </Badge>
                        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <IconButton
                          size="small"
                          onClick={onEdit}
                          tooltip={
                            isLightingLayer
                              ? t`Edit lighting properties`
                              : t`Edit properties`
                          }
                        >
                          {editPropertiesIcon}
                        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <IconButton
                          size="small"
                          onClick={onRemove}
                          disabled={isBaseLayer}
                          tooltip={t`Delete the layer`}
                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <TrashIcon />
                        </IconButton>
                      </React.Fragment>
                    )}
                  </TreeTableCell>
                </TreeTableRow>
              </div>
            )
          }
        </DragSourceAndDropTarget>
      )}
    </I18n>
  );
};

export default LayerRow;
