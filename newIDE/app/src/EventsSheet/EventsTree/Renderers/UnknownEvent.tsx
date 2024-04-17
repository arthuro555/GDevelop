import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import { largeSelectedArea, largeSelectableArea } from '../ClassNames';
import { EventRendererProps } from './EventRenderer';

export default class UnknownEvent extends React.Component<
  EventRendererProps,
  any
> {
  render() {
    return (
      <p
        className={classNames({
          [largeSelectableArea]: true,
          [largeSelectedArea]: this.props.selected,
        })}
      >
        {'Unknown event of type ' + this.props.event.getType()}
      </p>
    );
  }
}
