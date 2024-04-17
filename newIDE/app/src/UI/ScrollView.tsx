import * as React from 'react';

import ReactDOM from 'react-dom';
import { dataObjectToProps, HTMLDataset } from '../Utils/HTMLDataset';

const styles = {
  container: {
    flex: 1,
  },
} as const;

type Props = {
  children: React.ReactNode;
  id?: string;
  data?: HTMLDataset;
  /**
   * If true, scrollbar won't be shown if the content is not clipped.
   */
  autoHideScrollbar?: boolean | null | undefined;
  style?: any | null | undefined;
  onScroll?: (arg1: { remainingScreensToBottom: number }) => void;
};

export type ScrollViewInterface = {
  getScrollPosition: () => number;
  scrollTo: (
    target:
      | React.Component<any, any>
      | null
      | undefined
      | React.ElementRef<any>
      | null
      | undefined
  ) => void;
  scrollToPosition: (number: number) => void;
  scrollToBottom: () => void;
};

export default React.forwardRef<ScrollViewInterface, Props>(
  ({ id, data, children, autoHideScrollbar, style, onScroll }: Props, ref) => {
    const scrollView = React.useRef(null as HTMLDivElement | null | undefined);

    React.useImperativeHandle(ref, () => ({
      /**
       * Return the scroll position.
       */
      getScrollPosition: () => {
        const scrollViewElement = scrollView.current;
        if (!scrollViewElement) return 0;

        const scrollViewYPosition =
          scrollViewElement.getBoundingClientRect().top;
        return scrollViewElement.scrollTop + scrollViewYPosition;
      },
      /**
       * Scroll the view to the target component.
       */
      //@ts-ignore TODO look at this type
      scrollTo: (target?: React.Component<any, any> | null) => {
        const scrollViewElement = scrollView.current;
        if (!scrollViewElement) return;

        const targetElement = ReactDOM.findDOMNode(target);
        if (targetElement instanceof HTMLElement) {
          const yPosition = targetElement.getBoundingClientRect().top;

          const scrollViewYPosition =
            scrollViewElement.getBoundingClientRect().top;
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

        const scrollViewYPosition =
          scrollViewElement.getBoundingClientRect().top;
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

    const handleScroll = React.useCallback(() => {
      if (!onScroll) return;
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      onScroll({
        remainingScreensToBottom:
          (scrollViewElement.scrollHeight -
            (scrollViewElement.clientHeight + scrollViewElement.scrollTop)) /
          scrollViewElement.clientHeight,
      });
    }, [onScroll]);

    return (
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
  }
);
