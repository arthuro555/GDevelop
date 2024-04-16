import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-dom'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-dom/index.js' implicitly has an 'any' type.
import ReactDOM from 'react-dom';
import { dataObjectToProps, HTMLDataset } from '../Utils/HTMLDataset';

const styles = {
  container: {
    flex: 1,
  },
} as const;

type Props = {
  children: React.ReactNode,
  id?: string,
  data?: HTMLDataset,
  /**
   * If true, scrollbar won't be shown if the content is not clipped.
   */
  autoHideScrollbar?: boolean | null | undefined,
  style?: any | null | undefined,
  onScroll?: (
    arg1: {
      remainingScreensToBottom: number
    },
  ) => void
};

export type ScrollViewInterface = {
  getScrollPosition: () => number,
  scrollTo: (
    target: React.Component<any, any> | null | undefined | React.ElementRef<any> | null | undefined,
  ) => void,
  scrollToPosition: (number: number) => void,
  scrollToBottom: () => void
};

// @ts-expect-error - TS2345 - Argument of type '({ id, data, children, autoHideScrollbar, style, onScroll, }: Props, ref: ForwardedRef<Props>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, ScrollViewInterface>'.
export default React.forwardRef<Props, ScrollViewInterface>(({
  id,
  data,
  children,
  autoHideScrollbar,
  style,
  onScroll,
}: Props, ref) => {
  const scrollView = React.useRef((null as HTMLDivElement | null | undefined));
// @ts-expect-error - TS2741 - Property 'children' is missing in type '{ getScrollPosition: () => number; scrollTo: (target?: React.Component<any, any, any> | null | undefined) => void; scrollToPosition: (y: number) => void; scrollToBottom: () => void; }' but required in type 'Props'.
  React.useImperativeHandle(ref, () => ({
    /**
     * Return the scroll position.
     */
    getScrollPosition: () => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return 0;

      const scrollViewYPosition = scrollViewElement.getBoundingClientRect()
        .top;
      return scrollViewElement.scrollTop + scrollViewYPosition;
    },
    /**
     * Scroll the view to the target component.
     */
    scrollTo: (target?: React.Component<any, any> | null) => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      const targetElement = ReactDOM.findDOMNode(target);
      if (targetElement instanceof HTMLElement) {
        const yPosition = targetElement.getBoundingClientRect().top;

        const scrollViewYPosition = scrollViewElement.getBoundingClientRect()
          .top;
        scrollViewElement.scrollTop += yPosition - scrollViewYPosition;
      } else {
        console.error(
          'Tried to scroll to something that is not a HTMLElement'
        );
      }
    },
    /**
     * Scroll the view to the target position.
     */
    scrollToPosition: (y: number) => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      const scrollViewYPosition = scrollViewElement.getBoundingClientRect()
        .top;
      scrollViewElement.scrollTop = y - scrollViewYPosition;
    },
    /**
     * Scroll the view to the bottom.
     */
    scrollToBottom: () => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      scrollViewElement.scrollTop = scrollViewElement.scrollHeight;
    },
  }));

  const handleScroll = React.useCallback(
    () => {
      if (!onScroll) return;
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      onScroll({
        remainingScreensToBottom:
          (scrollViewElement.scrollHeight -
            (scrollViewElement.clientHeight + scrollViewElement.scrollTop)) /
          scrollViewElement.clientHeight,
      });
    },
    [onScroll]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      id={id}
      {...dataObjectToProps(data)}
      style={{
        ...styles.container,
        overflowY: autoHideScrollbar ? 'auto' : 'scroll',
        ...style,
      }}
      onScroll={handleScroll}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<HTMLDivElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
      ref={scrollView}
    >
      {children}
    </div>
  );
});
