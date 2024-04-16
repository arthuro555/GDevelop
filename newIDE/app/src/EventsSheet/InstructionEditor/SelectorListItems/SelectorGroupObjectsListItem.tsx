import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem } from '../../../UI/List';
// @ts-expect-error - TS6142 - Module '../../../UI/ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from '../../../UI/ListIcon';
import type { GroupWithContext } from '../../../ObjectsList/EnumerateObjects';
import {
  getObjectGroupListItemKey,
  getObjectOrObjectGroupListItemValue,
} from './Keys';
// @ts-expect-error - TS6142 - Module '../../../UI/Search/HighlightedText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/HighlightedText.tsx', but '--jsx' is not set.
import HighlightedText from '../../../UI/Search/HighlightedText';

type Props = {
  groupWithContext: GroupWithContext,
  iconSize: number,
  onClick: () => void,
  selectedValue: string | null | undefined,
  matchesCoordinates: number[][]
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
