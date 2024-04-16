import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItem } from '../UI/List';
import get from 'lodash/get';
import {
  InspectorDescription,
  InspectorDescriptionsGetter,
  GameData,
// @ts-expect-error - TS6142 - Module './GDJSInspectorDescriptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/GDJSInspectorDescriptions.tsx', but '--jsx' is not set.
} from './GDJSInspectorDescriptions';

type Props = {
  gameData: GameData,
  getInspectorDescriptions: InspectorDescriptionsGetter,
  onChooseInspector: (arg1: InspectorDescription, fullInspectorPath: Array<string>) => void
};

const styles = {
  container: {
    flex: 1,
    display: 'flex',
  },
  list: {
    overflowY: 'scroll',
    flex: 1,
  },
} as const;

/**
 * Generate a visual list of inspectors, using gameData and getInspectorDescriptions
 */
export default class InspectorsList extends React.Component<Props, undefined> {
  _renderInspectorList(
    gameData: GameData,
    getInspectorDescriptions: InspectorDescriptionsGetter,
    path: Array<string>,
  ): Array<React.ReactElement<any> | null> {
// @ts-expect-error - TS7006 - Parameter 'inspectorDescription' implicitly has an 'any' type.
    return getInspectorDescriptions(gameData).map(inspectorDescription => {
      if (!inspectorDescription) return null;
      const fullInspectorPath = path.concat(inspectorDescription.key);

      const getSubInspectors = inspectorDescription.getSubInspectors;

      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ListItem
          key={fullInspectorPath.join('.')}
          primaryText={inspectorDescription.label}
          initiallyOpen={!!inspectorDescription.initiallyOpen}
          onClick={() =>
            this.props.onChooseInspector(
              inspectorDescription,
              fullInspectorPath
            )
          }
          renderNestedItems={
            getSubInspectors
              ? () =>
                  this._renderInspectorList(
                    get(gameData, inspectorDescription.key, null),
                    getSubInspectors,
                    fullInspectorPath
                  )
              : undefined
          }
        />
      );
    });
  }

  render() {
    return this.props.gameData ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <List style={styles.list}>
        {this._renderInspectorList(
          this.props.gameData,
          this.props.getInspectorDescriptions,
          []
        )}
      </List>
    ) : null;
  }
}
