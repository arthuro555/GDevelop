// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../Debugger' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/index.tsx', but '--jsx' is not set.
import Debugger from '../../Debugger';
import {
  RenderEditorContainerProps,
  RenderEditorContainerPropsWithRef,
} from './BaseEditor';
import SubscriptionChecker, {
  SubscriptionCheckerInterface,
// @ts-expect-error - TS6142 - Module '../../Profile/Subscription/SubscriptionChecker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionChecker.tsx', but '--jsx' is not set.
} from '../../Profile/Subscription/SubscriptionChecker';

type State = {
  subscriptionChecked: boolean
};

export class DebuggerEditorContainer extends React.Component<RenderEditorContainerProps, State> {
  editor: Debugger | null | undefined;
  _subscriptionChecker: SubscriptionCheckerInterface | null | undefined;
  state = {
    subscriptionChecked: false,
  };

  shouldComponentUpdate(nextProps: RenderEditorContainerProps) {
    // We stop updates when the component is inactive.
    // If it's active, was active or becoming active again we let update propagate.
    // Especially important to note that when becoming inactive, a "last" update is allowed.
    return this.props.isActive || nextProps.isActive;
  }

  getProject(): gdProject | null | undefined {
    return this.props.project;
  }

  getLayout(): gdLayout | null | undefined {
    return null;
  }

  updateToolbar() {
    if (this.editor) this.editor.updateToolbar();
  }

  forceUpdateEditor() {
    // No updates to be done.
  }

  // To be updated, see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops.
  UNSAFE_componentWillReceiveProps() {
    this._checkUserHasSubscription();
  }

  componentDidMount() {
    this._checkUserHasSubscription();
  }

  _checkUserHasSubscription() {
    if (
      this._subscriptionChecker &&
      this.props.isActive &&
      !this.state.subscriptionChecked
    ) {
      this._subscriptionChecker.checkUserHasSubscription();
      this.setState({
        subscriptionChecked: true,
      });
    }
  }

  render() {
    const { project, previewDebuggerServer } = this.props;
    if (!project || !previewDebuggerServer) return null;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Debugger
          project={project}
          setToolbar={this.props.setToolbar}
          previewDebuggerServer={previewDebuggerServer}
// @ts-expect-error - TS7006 - Parameter 'editor' implicitly has an 'any' type.
          ref={editor => (this.editor = editor)}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionChecker
// @ts-expect-error - TS7006 - Parameter 'subscriptionChecker' implicitly has an 'any' type.
          ref={subscriptionChecker =>
            (this._subscriptionChecker = subscriptionChecker)
          }
          id="Debugger"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Debugger</Trans>}
          mode="try"
        />
      </React.Fragment>
    );
  }
}

export const renderDebuggerEditorContainer = (
  props: RenderEditorContainerPropsWithRef
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
) => <DebuggerEditorContainer {...props} />;
