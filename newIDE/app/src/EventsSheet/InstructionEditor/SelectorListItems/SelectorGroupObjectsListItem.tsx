import * as React from 'react';

import { ListItem } from '../../../UI/List';

import ListIcon from '../../../UI/ListIcon';
import type { GroupWithContext } from '../../../ObjectsList/EnumerateObjects';
import {
  getObjectGroupListItemKey,
  getObjectOrObjectGroupListItemValue,
} from './Keys';

import HighlightedText from '../../../UI/Search/HighlightedText';

type Props = {
  groupWithContext: GroupWithContext;
  iconSize: number;
  onClick: () => void;
  selectedValue: string | null | undefined;
  matchesCoordinates: number[][];
};

export const renderGroupObjectsListItem = ({
  groupWithContext,
  iconSize,
  onClick,
  selectedValue,
  matchesCoordinates,
}: Props) => {
  const groupName: string = groupWithContext.group.getName();
  return (
    <ListItem
      key={getObjectGroupListItemKey(groupWithContext)}
      selected={
        selectedValue === getObjectOrObjectGroupListItemValue(groupName)
      }
      primaryText={
        // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HighlightedText
          text={groupName}
          matchesCoordinates={matchesCoordinates}
        />
      }
      leftIcon={
        <ListIcon
          iconSize={iconSize}
          src="res/ribbon_default/objectsgroups64.png"
        />
      }
      onClick={onClick}
      disableAutoTranslate
    />
  );
};
