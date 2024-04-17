import * as React from 'react';

import { ListItem } from '../../../UI/List';

import ListIcon from '../../../UI/ListIcon';
import ObjectsRenderingService from '../../../ObjectsRendering/ObjectsRenderingService';
import type { ObjectWithContext } from '../../../ObjectsList/EnumerateObjects';
import {
  getObjectOrObjectGroupListItemValue,
  getObjectListItemKey,
} from './Keys';

import HighlightedText from '../../../UI/Search/HighlightedText';

import { styles } from '../InstructionOrObjectSelector';
import { HTMLDataset } from '../../../Utils/HTMLDataset';

type Props = {
  project: gd.Project;
  objectWithContext: ObjectWithContext;
  iconSize: number;
  onClick: () => void;
  selectedValue: string | null | undefined;
  matchesCoordinates: number[][];
  id?: string | null | undefined;
  data?: HTMLDataset;
  withIndent?: boolean;
  keyPrefix?: string;
};

export const renderObjectListItem = ({
  project,
  objectWithContext,
  iconSize,
  onClick,
  selectedValue,
  matchesCoordinates,
  id,
  data,
  withIndent,
  keyPrefix,
}: Props) => {
  const objectName: string = objectWithContext.object.getName();
  return (
    <ListItem
      id={id}
      data={data}
      key={(keyPrefix || '') + getObjectListItemKey(objectWithContext)}
      selected={
        selectedValue === getObjectOrObjectGroupListItemValue(objectName)
      }
      style={withIndent ? styles.indentedListItem : undefined}
      primaryText={
        // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HighlightedText
          text={objectName}
          matchesCoordinates={matchesCoordinates}
        />
      }
      leftIcon={
        <ListIcon
          iconSize={iconSize}
          src={ObjectsRenderingService.getThumbnail(
            project,
            objectWithContext.object.getConfiguration()
          )}
        />
      }
      onClick={onClick}
      disableAutoTranslate
    />
  );
};
