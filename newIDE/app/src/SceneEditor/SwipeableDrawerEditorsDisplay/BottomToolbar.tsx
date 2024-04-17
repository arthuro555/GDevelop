import * as React from 'react';

import { Toolbar, ToolbarGroup } from '../../UI/Toolbar';

import ObjectIcon from '../../UI/CustomSvgIcons/Object';

import ObjectGroupIcon from '../../UI/CustomSvgIcons/ObjectGroup';

import EditIcon from '../../UI/CustomSvgIcons/Edit';

import InstancesListIcon from '../../UI/CustomSvgIcons/InstancesList';

import LayersIcon from '../../UI/CustomSvgIcons/Layers';

import IconButton from '../../UI/IconButton';

import { EditorId } from '..';

import Paper from '../../UI/Paper';

const styles = { container: { padding: 4, paddingBottom: 8 } } as const;

type Props = {
  selectedEditorId: EditorId | null | undefined;
  onSelectEditor: (arg1: EditorId) => void;
};

const editors = {
  'objects-list': {
    buttonId: 'toolbar-open-objects-panel-button',

    icon: <ObjectIcon />,
  },
  'object-groups-list': {
    buttonId: 'toolbar-open-object-groups-panel-button',

    icon: <ObjectGroupIcon />,
  },
  properties: {
    buttonId: 'toolbar-open-properties-panel-button',

    icon: <EditIcon />,
  },
  'instances-list': {
    buttonId: 'toolbar-open-instances-list-panel-button',

    icon: <InstancesListIcon />,
  },
  'layers-list': {
    buttonId: 'toolbar-open-layers-panel-button',

    icon: <LayersIcon />,
  },
} as const;

const BottomToolbar = React.memo<Props>((props: Props) => {
  return (
    <Paper background="medium" square style={styles.container}>
      <Toolbar>
        <ToolbarGroup>
          {Object.keys(editors).map((editorId) => {
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly 'objects-list': { readonly buttonId: "toolbar-open-objects-panel-button"; readonly icon: Element; }; readonly 'object-groups-list': { readonly buttonId: "toolbar-open-object-groups-panel-button"; readonly icon: Element; }; readonly properties: { ...; }; readonly 'instances-list': { ...; }; readonly 'layer...'.
            const { icon, buttonId } = editors[editorId];
            const isSelected = props.selectedEditorId === editorId;
            return (
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
