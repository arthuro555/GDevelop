import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem } from '../../../UI/List';
// @ts-expect-error - TS6142 - Module '../../../UI/ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from '../../../UI/ListIcon';
import ObjectsRenderingService from '../../../ObjectsRendering/ObjectsRenderingService';
import type { ObjectWithContext } from '../../../ObjectsList/EnumerateObjects';
import {
  getObjectOrObjectGroupListItemValue,
  getObjectListItemKey,
} from './Keys';
// @ts-expect-error - TS6142 - Module '../../../UI/Search/HighlightedText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/HighlightedText.tsx', but '--jsx' is not set.
import HighlightedText from '../../../UI/Search/HighlightedText';
// @ts-expect-error - TS6142 - Module '../InstructionOrObjectSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionOrObjectSelector.tsx', but '--jsx' is not set.
import { styles } from '../InstructionOrObjectSelector';
import { HTMLDataset } from '../../../Utils/HTMLDataset';

type Props = {
  project: gdProject,
  objectWithContext: ObjectWithContext,
  iconSize: number,
  onClick: () => void,
  selectedValue: string | null | undefined,
  matchesCoordinates: number[][],
  id?: string | null | undefined,
  data?: HTMLDataset,
  withIndent?: boolean,
  keyPrefix?: string
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
