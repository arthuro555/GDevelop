import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/Messages/InfoBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Messages/InfoBar.tsx', but '--jsx' is not set.
import InfoBar from '../../../UI/Messages/InfoBar';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../UI/Grid';

export default {
  title: 'UI Building Blocks/InfoBar',
  component: InfoBar,
  decorators: [paperDecorator],
};

export const Default = () => {
  const [infoBarOpen, setInfoBarOpen] = React.useState<boolean>(false);
  const [
    infoBarWithActionOpen,
    setInfoBarWithActionOpen,
  ] = React.useState<boolean>(false);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
            onClick={() => setInfoBarOpen(true)}
            label={'Open info bar'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
            onClick={() => setInfoBarWithActionOpen(true)}
            label={'Open info bar with button'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <InfoBar
            message={"You're seeing an info bar"}
            hide={() => setInfoBarOpen(false)}
            visible={infoBarOpen}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <InfoBar
            message={"You're seeing an info bar with a button"}
            hide={() => setInfoBarWithActionOpen(false)}
            visible={infoBarWithActionOpen}
            actionLabel={'Alright'}
            onActionClick={action('Click on button')}
          />
        </ColumnStackLayout>
      </Line>
    </>
  );
};
