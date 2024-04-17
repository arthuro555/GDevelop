import * as React from 'react';

import { ListItem } from '../../../UI/List';

import HighlightedText from '../../../UI/Search/HighlightedText';

import Folder from '../../../UI/CustomSvgIcons/Folder';

type Props = {
  folderWithPath: {
    path: string;
    folder: gd.ObjectFolderOrObject;
    global: boolean;
  };
  iconSize: number;
  matchesCoordinates: number[][];
};

export const renderFolderListItem = ({
  folderWithPath,
  iconSize,
  matchesCoordinates,
}: Props) => {
  const folderPath: string = folderWithPath.path;
  return (
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
