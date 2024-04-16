import * as React from 'react';
import ResourcesLoader from '../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../../UI/CorsAwareImage';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
import { useLongTouch } from '../../Utils/UseLongTouch';
// @ts-expect-error - TS6142 - Module '../CheckeredBackground' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/CheckeredBackground.tsx', but '--jsx' is not set.
import CheckeredBackground from '../CheckeredBackground';

const SPRITE_SIZE = 100;
export const thumbnailContainerStyle = {
  position: 'relative',
  display: 'inline-block',
  width: SPRITE_SIZE,
  height: SPRITE_SIZE,
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: SPRITE_SIZE + 'px',
  textAlign: 'center',
} as const;

const styles = {
  spriteThumbnail: {
    ...thumbnailContainerStyle,
  },
  spriteThumbnailImage: {
    position: 'relative',
    maxWidth: SPRITE_SIZE,
    maxHeight: SPRITE_SIZE,
    verticalAlign: 'middle',
    pointerEvents: 'none',
  },
  checkboxContainer: {
    textAlign: 'initial',
    position: 'absolute',
    width: 34, // Used to position the checkbox near the right border with a proper margin
    height: 64,
    bottom: 0,
    right: 0,
  },
} as const;

type Props = {
  project: gdProject,
  resourceName: string,
  resourcesLoader: typeof ResourcesLoader,
  style?: any,
  selectable?: boolean,
  selected?: boolean,
  onSelect?: (checked: boolean) => void,
  onContextMenu?: (x: number, y: number) => void
};

const ImageThumbnail = (props: Props) => {
  const { onContextMenu, resourcesLoader, resourceName, project } = props;
  const theme = React.useContext(GDevelopThemeContext);

  // Allow a long press to show the context menu
  const longTouchForContextMenuProps = useLongTouch(
    React.useCallback(
      event => {
        if (onContextMenu) onContextMenu(event.clientX, event.clientY);
      },
      [onContextMenu]
    )
  );

  const normalBorderColor = theme.imagePreview.borderColor;
  const borderColor = props.selected
    ? theme.palette.secondary
    : normalBorderColor;

  const containerStyle = {
    ...styles.spriteThumbnail,
    border: `2px solid ${borderColor}`,
    borderRadius: 4,
    ...props.style,
  } as const;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children: (false | Element | undefined)[]; onTouchStart: (event: TouchEvent) => void; onTouchMove: (event: TouchEvent) => void; onTouchEnd: () => void; title: string; style: any; onContextMenu: (e: MouseEvent<...>) => void; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    <div
      title={resourceName}
      style={containerStyle}
      onContextMenu={e => {
        e.stopPropagation();
        if (onContextMenu) onContextMenu(e.clientX, e.clientY);
      }}
      {...longTouchForContextMenuProps}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CheckeredBackground />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CorsAwareImage
        style={styles.spriteThumbnailImage}
        alt={resourceName}
        src={resourcesLoader.getResourceFullUrl(project, resourceName, {})}
      />
      {props.selectable && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div style={styles.checkboxContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Checkbox
            checked={!!props.selected}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onCheck={(e, check) => props.onSelect && props.onSelect(check)}
          />
        </div>
      )}
    </div>
  );
};

export default ImageThumbnail;
