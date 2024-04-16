import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toolbar.tsx', but '--jsx' is not set.
import { Toolbar, ToolbarGroup } from '../../UI/Toolbar';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Object'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Object.js' implicitly has an 'any' type.
import ObjectIcon from '../../UI/CustomSvgIcons/Object';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ObjectGroup'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ObjectGroup.js' implicitly has an 'any' type.
import ObjectGroupIcon from '../../UI/CustomSvgIcons/ObjectGroup';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import EditIcon from '../../UI/CustomSvgIcons/Edit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/InstancesList'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/InstancesList.js' implicitly has an 'any' type.
import InstancesListIcon from '../../UI/CustomSvgIcons/InstancesList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Layers'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Layers.js' implicitly has an 'any' type.
import LayersIcon from '../../UI/CustomSvgIcons/Layers';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '..' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/SceneEditor/index.tsx', but '--jsx' is not set.
import { EditorId } from '..';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';

const styles = { container: { padding: 4, paddingBottom: 8 } } as const;

type Props = {
  selectedEditorId: EditorId | null | undefined,
  onSelectEditor: (arg1: EditorId) => void
};

const editors = {
  'objects-list': {
    buttonId: 'toolbar-open-objects-panel-button',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <ObjectIcon />,
  },
  'object-groups-list': {
    buttonId: 'toolbar-open-object-groups-panel-button',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <ObjectGroupIcon />,
  },
  properties: {
    buttonId: 'toolbar-open-properties-panel-button',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <EditIcon />,
  },
  'instances-list': {
    buttonId: 'toolbar-open-instances-list-panel-button',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <InstancesListIcon />,
  },
  'layers-list': {
    buttonId: 'toolbar-open-layers-panel-button',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <LayersIcon />,
  },
} as const;

const BottomToolbar = React.memo<Props>((props: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Paper background="medium" square style={styles.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Toolbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ToolbarGroup>
          {Object.keys(editors).map(editorId => {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly 'objects-list': { readonly buttonId: "toolbar-open-objects-panel-button"; readonly icon: Element; }; readonly 'object-groups-list': { readonly buttonId: "toolbar-open-object-groups-panel-button"; readonly icon: Element; }; readonly properties: { ...; }; readonly 'instances-list': { ...; }; readonly 'layer...'.
            const { icon, buttonId } = editors[editorId];
            const isSelected = props.selectedEditorId === editorId;
            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <IconButton
                color="default"
                key={editorId}
                disableRipple
                disableFocusRipple
                id={buttonId}
                onClick={() => {
                  props.onSelectEditor(editorId);
                }}
                selected={isSelected}
              >
                {icon}
              </IconButton>
            );
          })}
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  );
});

export default BottomToolbar;
