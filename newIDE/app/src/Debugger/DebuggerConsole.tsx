import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';

import {
  List,
  CellMeasurer,
  CellMeasurerCache,
  AutoSizer,
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
} from 'react-virtualized';
import useForceUpdate from '../Utils/UseForceUpdate';

// @ts-expect-error - TS6142 - Module '../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../UI/Chip';

// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/MiniToolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MiniToolbar.tsx', but '--jsx' is not set.
import MiniToolbar from '../UI/MiniToolbar';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';

import TimerIcon from '@material-ui/icons/Timer';

// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/SquaredInfo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/SquaredInfo.js' implicitly has an 'any' type.
import InfoIcon from '../UI/CustomSvgIcons/SquaredInfo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Warning'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Warning.js' implicitly has an 'any' type.
import WarningIcon from '../UI/CustomSvgIcons/Warning';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Error'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Error.js' implicitly has an 'any' type.
import ErrorIcon from '../UI/CustomSvgIcons/Error';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Filter'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Filter.js' implicitly has an 'any' type.
import FilterIcon from '../UI/CustomSvgIcons/Filter';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Folder'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Folder.js' implicitly has an 'any' type.
import FolderIcon from '../UI/CustomSvgIcons/Folder';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Visibility'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Visibility.js' implicitly has an 'any' type.
import VisibilityIcon from '../UI/CustomSvgIcons/Visibility';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/VisibilityOff'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/VisibilityOff.js' implicitly has an 'any' type.
import VisibilityOffIcon from '../UI/CustomSvgIcons/VisibilityOff';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Maximize'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Maximize.js' implicitly has an 'any' type.
import MaximizeIcon from '../UI/CustomSvgIcons/Maximize';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Minimize'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Minimize.js' implicitly has an 'any' type.
import MinimizeIcon from '../UI/CustomSvgIcons/Minimize';

export type Log = {
  message: string,
  type: 'info' | 'warning' | 'error',
  group: string,
  internal?: boolean,
  timestamp: number
};

/**
 * Store logs and groups that are received, batch the logs and allow to register callbacks called when a batch of log is received.
 * This helps avoiding too much re-render on React side when a lot of logs are received.
 */
export class LogsManager {
  logs: Array<Log> = [];
  groups: Set<string> = new Set();
  _onNewLog: Set<() => void> = new Set();
  _onNewGroup: Set<() => void> = new Set();
  _pendingLogs: Array<Log> = [];
  _pendingCommit: boolean = false;

  _commitLogs() {
    this.logs.unshift(...this._pendingLogs);
    this._pendingLogs.length = 0;
    this._pendingCommit = false;
    this._onNewLog.forEach(f => f());
  }

  addLog(log: Log) {
    this._pendingLogs.unshift(log);
    if (!this.groups.has(log.group)) {
      this.groups.add(log.group);
      this._onNewGroup.forEach(f => f());
    }
    if (!this._pendingCommit) {
      setTimeout(this._commitLogs.bind(this), 200);
      this._pendingCommit = true;
    }
  }

  on(event: 'group' | 'log', handler: () => void) {
    if (event === 'group') this._onNewGroup.add(handler);
    if (event === 'log') this._onNewLog.add(handler);
  }

  off(event: 'group' | 'log', handler: () => void) {
    if (event === 'group') this._onNewGroup.delete(handler);
    if (event === 'log') this._onNewLog.delete(handler);
  }
}

const selectableTextStyle = {
  userSelect: 'text',
  cursor: 'text',
  wordBreak: 'break-word',
} as const;

const styles = {
  list: {
    // While in theory it should not happen, be sure there is never a horizontal scrollbar:
    overflowX: 'hidden',
    // Always show the vertical scrollbar to avoid rendering issues:
    overflowY: 'scroll',
  },
  tag: { marginRight: 2 },
  consoleTextArea: {
    ...selectableTextStyle,
    width: '100%',
    backgroundColor: '#292929',
    borderRadius: '4px',
    border: '1px solid slategray',
    color: 'white',
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    padding: 3,
  },
} as const;

const Tag = ({
  icon,
  label,
}: {
  icon: React.ReactNode,
  label: React.ReactNode
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Chip
    icon={icon}
    style={styles.tag}
    size="small"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label={<span style={selectableTextStyle}>{label}</span>}
  />
);

const iconMap = {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  info: <InfoIcon color="primary" fontSize="small" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  warning: <WarningIcon color="secondary" fontSize="small" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  error: <ErrorIcon color="error" fontSize="small" />,
} as const;

export const DebuggerConsole = ({
  logsManager,
}: {
  logsManager: LogsManager
}) => {
  const forceUpdate = useForceUpdate();

  const { logs, groups } = logsManager;
  React.useEffect(
    () => {
      // Rerender when the logs are updated
      const onUpdate = () => {
        forceUpdate();
      };
      logsManager.on('log', onUpdate);
      return () => {
        logsManager.off('log', onUpdate);
      };
    },
    [forceUpdate, logsManager]
  );

  const cachedHeightsForWidth = React.useRef(0);
  const cellMeasurerCache = React.useMemo(
    () =>
      new CellMeasurerCache({
        defaultHeight: 45,
        minHeight: 25,
        fixedWidth: true,
        // Inverse index so that each log always
        // get assigned the same ID despite all indices
        // shifting when a log is added.
// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type.
        keyMapper: index => logs.length - index,
      }),
    [logs]
  );

  const [hideInternal, setHideInternal] = React.useState(false);
  const [showDetails, _setShowDetails] = React.useState(true);
  const setShowDetails = (show: boolean) => {
    _setShowDetails(show);
    // As the size of the cells have changed, clear the measurer cache to allow remeasuring them.
    cellMeasurerCache.clearAll();
  };

  const [editingHiddenGroups, setEditingHiddenGroups] = React.useState(false);
  const hiddenGroups = React.useRef(new Set()).current;
  React.useEffect(
    () => {
      // Do not register for group updates to avoid rerendering when the groups are not displayed.
      if (!editingHiddenGroups) return;

      // Rerender when the groups are updated
      const onUpdate = () => forceUpdate();
      logsManager.on('group', onUpdate);
      return () => {
        logsManager.off('group', onUpdate);
      };
    },
    [editingHiddenGroups, forceUpdate, logsManager]
  );

  const filteredLogs = logs
    .filter(({ internal }) => !(hideInternal && internal))
    .filter(({ group }) => !hiddenGroups.has(group));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin noOverflowParent expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AutoSizer>
{ /* @ts-expect-error - TS7031 - Binding element 'width' implicitly has an 'any' type. | TS7031 - Binding element 'height' implicitly has an 'any' type. */}
          {({ width, height }) => {
            if (!width || !height) return null;

            // Reset the cached heights in case the width changed.
            if (cachedHeightsForWidth.current !== width) {
              cellMeasurerCache.clearAll();
              cachedHeightsForWidth.current = width;
            }

            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <List
                deferredMeasurementCache={cellMeasurerCache}
                height={height}
                width={width}
                style={styles.list}
                rowCount={filteredLogs.length}
                rowHeight={cellMeasurerCache.rowHeight}
// @ts-expect-error - TS7031 - Binding element 'index' implicitly has an 'any' type. | TS7031 - Binding element 'key' implicitly has an 'any' type. | TS7031 - Binding element 'parent' implicitly has an 'any' type. | TS7031 - Binding element 'style' implicitly has an 'any' type.
                rowRenderer={({ index, key, parent, style }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <CellMeasurer
                    cache={cellMeasurerCache}
                    columnIndex={0}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                  >
{ /* @ts-expect-error - TS7031 - Binding element 'registerChild' implicitly has an 'any' type. */}
                    {({ registerChild }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <div
                        key={key}
                        style={{
                          ...style,
                          padding: 2,
                          display: 'flex',
                          alignItems: 'flex-start',
                        }}
                        ref={registerChild}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Column noMargin>
                          {iconMap[filteredLogs[index].type] || iconMap['info']}
                        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <div style={styles.consoleTextArea}>
                              {filteredLogs[index].message}
                            </div>
                          </Line>
                          {showDetails && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Line noMargin>
                                {filteredLogs[index].group ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <Tag
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                    icon={<FolderIcon />}
                                    label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      <Trans>
                                        Group: {filteredLogs[index].group}
                                      </Trans>
                                    }
                                  />
                                ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <Tag
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  icon={<TimerIcon />}
                                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                    <Trans>
                                      Timestamp:{' '}
                                      {Math.round(
                                        filteredLogs[index].timestamp * 1000
                                      ) /
                                        1000000 +
                                        's'}
                                    </Trans>
                                  }
                                />
                              </Line>
                            </>
                          )}
                        </Column>
                      </div>
                    )}
                  </CellMeasurer>
                )}
              />
            );
          }}
        </AutoSizer>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MiniToolbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="space-between" alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Checkbox
            label={
              showDetails ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Hide details</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Show details</Trans>
              )
            }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            checkedIcon={<MinimizeIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            uncheckedIcon={<MaximizeIcon />}
            checked={showDetails}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'enabled' implicitly has an 'any' type.
            onCheck={(_, enabled) => setShowDetails(enabled)}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Show internal</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            checkedIcon={<VisibilityIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            uncheckedIcon={<VisibilityOffIcon />}
            checked={!hideInternal}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onCheck={(_, value) => setHideInternal(!value)}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            tooltip={t`Filter the logs by group`}
            onClick={() => setEditingHiddenGroups(true)}
            edge="start"
            size="small"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FilterIcon />
          </IconButton>
        </Line>
      </MiniToolbar>

      {editingHiddenGroups && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Select log groups to display</Trans>}
          maxWidth="sm"
          open
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Close</Trans>}
              primary={false}
              onClick={() => setEditingHiddenGroups(false)}
            />,
          ]}
          onRequestClose={() => setEditingHiddenGroups(false)}
          onApply={() => setEditingHiddenGroups(false)}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
            {(() => {
              const list = [];
              for (const group of groups.values())
                list.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line key={group}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Checkbox
                      label={group}
                      checked={!hiddenGroups.has(group)}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                      onCheck={(_, checked) => {
                        if (checked) hiddenGroups.delete(group);
                        else hiddenGroups.add(group);
                        // Since hiddenGroups is a ref, not a state, we need to manually update.
                        forceUpdate();
                      }}
                    />
                  </Line>
                );
              return list;
            })()}
          </Column>
        </Dialog>
      )}
    </Column>
  );
};
