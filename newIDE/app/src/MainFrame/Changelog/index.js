// @flow
import * as React from 'react';
import ChangelogRenderer from './ChangelogRenderer';

/**
 * Load information about latest releases and display them.
 */
export default class Changelog extends React.Component<Props, State> {
  render() {
    return <ChangelogRenderer />;
  }
}
