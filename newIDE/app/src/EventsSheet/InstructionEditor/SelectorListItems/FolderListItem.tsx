import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem } from '../../../UI/List';
// @ts-expect-error - TS6142 - Module '../../../UI/Search/HighlightedText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/HighlightedText.tsx', but '--jsx' is not set.
import HighlightedText from '../../../UI/Search/HighlightedText';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Folder'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Folder.js' implicitly has an 'any' type.
import Folder from '../../../UI/CustomSvgIcons/Folder';

type Props = {
  folderWithPath: {
    path: string,
    folder: gdObjectFolderOrObject,
    global: boolean
  },
  iconSize: number,
  matchesCoordinates: number[][]
};

export const renderFolderListItem = ({
  folderWithPath,
  iconSize,
  matchesCoordinates,
}: Props) => {
  const folderPath: string = folderWithPath.path;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ListItem
      key={folderPath}
      selected={false}
      primaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HighlightedText
          text={folderPath}
          matchesCoordinates={matchesCoordinates}
        />
      }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      leftIcon={<Folder width={iconSize} />}
      disableAutoTranslate
    />
  );
};
