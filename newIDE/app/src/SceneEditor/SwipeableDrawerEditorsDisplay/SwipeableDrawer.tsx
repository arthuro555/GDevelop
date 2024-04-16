import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import { getBackgroundColor } from '../../UI/Paper';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
import useSwipeGesture from './UseSwipeGesture';
import {
  getAvoidSoftKeyboardStyle,
  useSoftKeyboardBottomOffset,
} from '../../UI/MobileSoftKeyboard';

const topMargin = 52; // This is equal to the height of the bottom bar.

const styles = {
  container: {
    flexDirection: 'column',
    overflow: 'hidden',
  },
  childrenContainer: {
    display: 'flex',
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  topBarContainer: {
    borderRadius: '8px 8px 0 0',
    padding: 4,
  },
  topBarHandleContainer: {
    height: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarHandle: {
    height: 4,
    width: '40%',
    borderRadius: 2,
  },
} as const;

type SwipeableDrawerTopBarProps = {
  title: React.ReactNode,
  onClick: () => void,
  onSwipeUp: () => void,
  onSwipeDown: () => void,
  containerRef: {
    current: HTMLDivElement | null | undefined
  },
  controls: React.ReactNode | null | undefined
};

const SwipeableDrawerTopBar = (props: SwipeableDrawerTopBarProps) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { onTouchStart, onTouchEnd, onTouchMove } = useSwipeGesture({
    onSwipeUp: props.onSwipeUp,
    onSwipeDown: props.onSwipeDown,
    containerRef: props.containerRef,
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        ...styles.topBarContainer,
        backgroundColor: getBackgroundColor(gdevelopTheme, 'light'),
      }}
      onClick={props.onClick}
// @ts-expect-error - TS2322 - Type '(event: TouchEvent) => void' is not assignable to type 'TouchEventHandler<HTMLDivElement>'.
      onTouchStart={onTouchStart}
// @ts-expect-error - TS2322 - Type '(event: TouchEvent) => void' is not assignable to type 'TouchEventHandler<HTMLDivElement>'.
      onTouchEnd={onTouchEnd}
// @ts-expect-error - TS2322 - Type '(event: TouchEvent) => void' is not assignable to type 'TouchEventHandler<HTMLDivElement>'.
      onTouchMove={onTouchMove}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.topBarHandleContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <span
            style={{
              ...styles.topBarHandle,
              backgroundColor: gdevelopTheme.swipeableDrawer.topBar.pillColor,
            }}
          />
        </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line
            noMargin
            justifyContent={props.controls ? 'space-between' : 'flex-start'}
            alignItems="center"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" noMargin>
              {props.title}
            </Text>
            {props.controls}
          </Line>
        </Column>
      </ColumnStackLayout>
    </div>
  );
};

type DrawerOpeningState = 'closed' | 'halfOpen' | 'open';

type Props = {
  maxHeight: number,
  children: React.ReactNode,
  title: React.ReactNode,
  openingState: DrawerOpeningState,
  setOpeningState: (arg1: DrawerOpeningState) => void,
  topBarControls?: React.ReactNode | null | undefined
};

function useAnimationOpeningState(openingState: DrawerOpeningState) {
  const lastOpeningState = React.useRef<DrawerOpeningState>(openingState);
  React.useEffect(
    () => {
      lastOpeningState.current = openingState;
    },
    [openingState]
  );

  // Animate the half opening of the drawer, to give a hint that it can be opened
  // even more.
  if (openingState === 'halfOpen') {
    if (lastOpeningState.current === 'closed') return 'swipe-up-ending';
  }

  return null;
}

const SwipeableDrawer = (props: Props) => {
  const containerRef = React.useRef<HTMLDivElement | null | undefined>(null);
  const { openingState, setOpeningState } = props;
  const height =
    openingState === 'closed'
      ? 0
      : openingState === 'halfOpen'
      ? props.maxHeight * 0.42 // Empirical value that leaves space in both editor and canvas.
      : props.maxHeight - topMargin;
  const display = openingState === 'closed' ? 'none' : 'flex';
  const animationOpeningState = useAnimationOpeningState(openingState);

  const softKeyboardBottomOffset = useSoftKeyboardBottomOffset();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        ...styles.container,
        height,
        display,
        ...getAvoidSoftKeyboardStyle(softKeyboardBottomOffset),
        animation: animationOpeningState
          ? `${animationOpeningState} 0.4s ease-out`
          : undefined,
      }}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<HTMLDivElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
      ref={containerRef}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SwipeableDrawerTopBar
        containerRef={containerRef}
        title={props.title}
        onClick={() => setOpeningState('closed')}
        onSwipeUp={() => {
          if (openingState === 'halfOpen') setOpeningState('open');
        }}
        onSwipeDown={() => {
          if (openingState === 'halfOpen') setOpeningState('closed');
          else if (openingState === 'open') setOpeningState('halfOpen');
        }}
        controls={props.topBarControls}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.childrenContainer}>{props.children}</div>
    </div>
  );
};

export default SwipeableDrawer;
