// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import React, { Component } from 'react';
import {
  AutoSizer,
  Table as RVTable,
  Column as RVColumn,
  SortDirection,
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
} from 'react-virtualized';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
import KeyboardShortcuts from '../../UI/KeyboardShortcuts';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar, { SearchBarInterface } from '../../UI/SearchBar';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/RemoveCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/RemoveCircle.js' implicitly has an 'any' type.
import RemoveCircle from '../../UI/CustomSvgIcons/RemoveCircle';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Lock'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Lock.js' implicitly has an 'any' type.
import Lock from '../../UI/CustomSvgIcons/Lock';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/LockOpen'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/LockOpen.js' implicitly has an 'any' type.
import LockOpen from '../../UI/CustomSvgIcons/LockOpen';
import { toFixedWithoutTrailingZeros } from '../../Utils/Mathematics';
// @ts-expect-error - TS6142 - Module '../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../UI/ErrorBoundary';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

const minimumWidths = {
  table: 400,
  objectName: 80,
  icon: 40,
  numberProperty: 40,
  layerName: 50,
} as const;

type RenderedRowInfo = {
  instance: gdInitialInstance,
  name: string,
  locked: boolean,
  x: string,
  y: string,
  angle: string,
  layer: string,
  zOrder: string
};

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  tableContainer: {
    flex: 1,
    overflowX: 'auto',
    overflowY: 'hidden',
  },
} as const;

const compareStrings = (x: string, y: string, direction: number): number => {
  x = x.toLowerCase();
  y = y.toLowerCase();

  if (x < y) return direction * 1;
  if (x > y) return direction * -1;
  return 0;
};

export type InstancesListInterface = {
  forceUpdate: () => void
};

type State = {
  searchText: string,
  sortBy: string,
  sortDirection: SortDirection
};

type Props = {
  instances: gdInitialInstancesContainer,
  selectedInstances: Array<gdInitialInstance>,
  onSelectInstances: (arg1: Array<gdInitialInstance>, arg2: boolean) => void
};

class InstancesList extends Component<Props, State> {
  state = {
    searchText: '',
    sortBy: '',
    sortDirection: SortDirection.ASC,
  };
  renderedRows: Array<RenderedRowInfo> = [];
  instanceRowRenderer: typeof gd.InitialInstanceJSFunctor | null | undefined;
  table: typeof RVTable | null | undefined;
  _searchBar = React.createRef<SearchBarInterface>();
  _keyboardShortcuts = new KeyboardShortcuts({
    isActive: () => false,
    shortcutCallbacks: {},
  });

  // This should be updated, see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html.
  UNSAFE_componentWillMount() {
    // Functor used to display an instance row
    this.instanceRowRenderer = new gd.InitialInstanceJSFunctor();
    this.instanceRowRenderer.invoke = instancePtr: any => {
      const { searchText } = this.state;
      const instance = gd.wrapPointer(instancePtr, gd.InitialInstance);

      const name: string = instance.getObjectName();
      if (
        !searchText ||
        name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      ) {
        this.renderedRows.push({
          instance,
          name,
          locked: instance.isLocked(),
          x: toFixedWithoutTrailingZeros(instance.getX(), 2),
          y: toFixedWithoutTrailingZeros(instance.getY(), 2),
          angle: toFixedWithoutTrailingZeros(instance.getAngle(), 2),
          layer: instance.getLayer(),
          zOrder: instance.getZOrder(),
        });
      }
    };
  }

  componentWillUnmount() {
    if (this.instanceRowRenderer) this.instanceRowRenderer.delete();
  }

  _onRowClick = ({
    index,
  }: {
    index: number
  }) => {
    if (!this.renderedRows[index]) return;

    this.props.onSelectInstances(
      [this.renderedRows[index].instance],
      this._keyboardShortcuts.shouldMultiSelect()
    );
  };

  _rowGetter = ({
    index,
  }: {
    index: number
  }) => {
    return this.renderedRows[index];
  };

  _rowClassName = ({
    index,
  }: {
    index: number
  }) => {
    if (index < 0) {
      return 'tableHeaderRow';
    } else {
      const row = this.renderedRows[index];
      if (row && this.props.selectedInstances.indexOf(row.instance) !== -1)
        return 'tableSelectedRow';

      return index % 2 === 0 ? 'tableEvenRow' : 'tableOddRow';
    }
  };

  _renderLockCell = ({
    rowData: { instance },
  }: {
    rowData: RenderedRowInfo
  }) => {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <IconButton
        size="small"
        onClick={() => {
          if (instance.isSealed()) {
            instance.setSealed(false);
            instance.setLocked(false);
            return;
          }
          if (instance.isLocked()) {
            instance.setSealed(true);
            return;
          }
          instance.setLocked(true);
        }}
      >
        {instance.isLocked() && instance.isSealed() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <RemoveCircle />
        ) : instance.isLocked() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Lock />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <LockOpen />
        )}
      </IconButton>
    );
  };

  _selectFirstInstance = () => {
    if (this.renderedRows.length) {
      this.props.onSelectInstances([this.renderedRows[0].instance], false);
    }
  };

  _sort = ({
    sortBy,
    sortDirection,
  }: {
    sortBy: string,
    sortDirection: SortDirection
  }) => {
    this.setState({ sortBy, sortDirection });
  };

  _orderRenderedRows = () => {
    this.renderedRows.sort(
      (a: RenderedRowInfo, b: RenderedRowInfo): number => {
        const direction =
          this.state.sortDirection === SortDirection.ASC ? 1 : -1;

        switch (this.state.sortBy) {
          case 'name':
            return compareStrings(a.name, b.name, direction);
          case 'x':
            return direction * (parseFloat(a.x) - parseFloat(b.x));
          case 'y':
            return direction * (parseFloat(a.y) - parseFloat(b.y));
          case 'angle':
            return direction * (parseFloat(a.angle) - parseFloat(b.angle));
          case 'layer':
            return compareStrings(a.layer, b.layer, direction);
          case 'locked':
            return direction * (Number(a.locked) - Number(b.locked));
          case 'zOrder':
            return direction * (parseFloat(a.zOrder) - parseFloat(b.zOrder));

          default:
            return 0;
        }
      }
    );
  };

  render() {
    const { searchText, sortBy, sortDirection } = this.state;
    const { instances } = this.props;

    if (!this.instanceRowRenderer) return null;

    this.renderedRows.length = 0;
    instances.iterateOverInstances(this.instanceRowRenderer);
    this._orderRenderedRows();

    // Force RVTable component to be mounted again if instances
    // has been changed. Avoid accessing to invalid objects that could
    // crash the app.
    const tableKey = instances.ptr;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <GDevelopThemeContext.Consumer>
        {gdevelopTheme => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div style={styles.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SearchBar
                  value={searchText}
// @ts-expect-error - TS7006 - Parameter 'searchText' implicitly has an 'any' type.
                  onChange={searchText =>
                    this.setState({
                      searchText,
                    })
                  }
                  onRequestSearch={this._selectFirstInstance}
                  ref={this._searchBar}
                  placeholder={t`Search instances`}
                  autoFocus="desktop"
                />
              </Column>
            </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
              style={styles.tableContainer}
// @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
              onKeyDown={this._keyboardShortcuts.onKeyDown}
// @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
              onKeyUp={this._keyboardShortcuts.onKeyUp}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AutoSizer>
{ /* @ts-expect-error - TS7031 - Binding element 'height' implicitly has an 'any' type. | TS7031 - Binding element 'width' implicitly has an 'any' type. */}
                {({ height, width }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <RVTable
// @ts-expect-error - TS7006 - Parameter 'table' implicitly has an 'any' type.
                    ref={table => (this.table = table)}
                    key={tableKey}
                    headerHeight={30}
                    height={height}
                    className={`gd-table`}
                    headerClassName={'tableHeaderColumn'}
                    rowCount={this.renderedRows.length}
                    rowGetter={this._rowGetter}
                    rowHeight={32}
                    onRowClick={this._onRowClick}
                    rowClassName={this._rowClassName}
                    sort={this._sort}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    width={Math.max(width, minimumWidths.table)}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RVColumn
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Object name</Trans>}
                      dataKey="name"
                      width={Math.max(width * 0.35, minimumWidths.objectName)}
                      className={'tableColumn'}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RVColumn
                      label=""
                      dataKey="locked"
                      width={Math.max(
                        width * 0.05,
                        minimumWidths.numberProperty
                      )}
                      className={'tableColumn'}
                      cellRenderer={this._renderLockCell}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RVColumn
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>X</Trans>}
                      dataKey="x"
                      width={Math.max(
                        width * 0.1,
                        minimumWidths.numberProperty
                      )}
                      className={'tableColumn'}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RVColumn
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Y</Trans>}
                      dataKey="y"
                      width={Math.max(
                        width * 0.1,
                        minimumWidths.numberProperty
                      )}
                      className={'tableColumn'}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RVColumn
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Angle</Trans>}
                      dataKey="angle"
                      width={Math.max(
                        width * 0.1,
                        minimumWidths.numberProperty
                      )}
                      className={'tableColumn'}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RVColumn
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Layer</Trans>}
                      dataKey="layer"
                      width={Math.max(width * 0.2, minimumWidths.layerName)}
                      className={'tableColumn'}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RVColumn
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Z Order</Trans>}
                      dataKey="zOrder"
                      width={Math.max(
                        width * 0.1,
                        minimumWidths.numberProperty
                      )}
                      className={'tableColumn'}
                    />
                  </RVTable>
                )}
              </AutoSizer>
            </div>
          </div>
        )}
      </GDevelopThemeContext.Consumer>
    );
  }
}

const InstancesListWithErrorBoundary = React.forwardRef<Props, InstancesListInterface>((props, ref) => {
  const forceUpdate = useForceUpdate();
// @ts-expect-error - TS2739 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': instances, selectedInstances, onSelectInstances
  React.useImperativeHandle(ref, () => ({
    forceUpdate,
  }));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle={<Trans>Instances list</Trans>}
      scope="scene-editor-instances-list"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2769 - No overload matches this call. */}
      <InstancesList {...props} />
    </ErrorBoundary>
  );
});

export default InstancesListWithErrorBoundary;
