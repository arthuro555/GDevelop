import * as React from 'react';

import { List, ListItem } from '../UI/List';
import get from 'lodash/get';
import {
  InspectorDescription,
  InspectorDescriptionsGetter,
  GameData,
} from './GDJSInspectorDescriptions';

type Props = {
  gameData: GameData;
  getInspectorDescriptions: InspectorDescriptionsGetter;
  onChooseInspector: (
    arg1: InspectorDescription,
    fullInspectorPath: Array<string>
  ) => void;
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
    path: Array<string>
  ): Array<React.ReactElement<any> | null> {
    return getInspectorDescriptions(gameData).map((inspectorDescription) => {
      if (!inspectorDescription) return null;
      const fullInspectorPath = path.concat(inspectorDescription.key);

      const getSubInspectors = inspectorDescription.getSubInspectors;

      return (
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
