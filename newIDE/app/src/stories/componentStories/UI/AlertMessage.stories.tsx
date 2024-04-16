import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import { getPaperDecorator } from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';

export default {
  title: 'UI Building Blocks/AlertMessage',
  component: AlertMessage,
  decorators: [getPaperDecorator('medium')],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage>Hello World, this is an alert text</AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage onHide={() => {}}>
      Hello World, this is an alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage onHide={() => {}} hideButtonSize="small">
      Hello World, this is an alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="info">
      Hello World, this is an info alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="info" onHide={() => {}}>
      Hello World, this is an info alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="info" onHide={() => {}} hideButtonSize="small">
      Hello World, this is an info alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="warning">
      Hello World, this is a warning alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="warning" onHide={() => {}}>
      Hello World, this is a warning alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="warning" onHide={() => {}} hideButtonSize="small">
      Hello World, this is a warning alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="error">
      Hello World, this is an error alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="error" onHide={() => {}}>
      Hello World, this is an error alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="error" onHide={() => {}} hideButtonSize="small">
      Hello World, this is an error alert text
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="info">
      Hello World, this is a long alert text. Lorem ipsum dolor sit amet, at
      cibo erroribus sed, sea in meis laoreet. Has modus epicuri ne, dicat
      nostrum eos ne, elit virtute appetere cu sea. Ut nec erat maluisset
      argumentum, duo integre propriae ut. Sed cu eius sonet verear, ne sit
      legendos senserit. Ne mel mundi perpetua dissentiunt. Nec ei nusquam
      inimicus.
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="info" onHide={() => {}}>
      Hello World, this is a long alert text. Lorem ipsum dolor sit amet, at
      cibo erroribus sed, sea in meis laoreet. Has modus epicuri ne, dicat
      nostrum eos ne, elit virtute appetere cu sea. Ut nec erat maluisset
      argumentum, duo integre propriae ut. Sed cu eius sonet verear, ne sit
      legendos senserit. Ne mel mundi perpetua dissentiunt. Nec ei nusquam
      inimicus.
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage kind="info" onHide={() => {}} hideButtonSize="small">
      Hello World, this is a long alert text. Lorem ipsum dolor sit amet, at
      cibo erroribus sed, sea in meis laoreet. Has modus epicuri ne, dicat
      nostrum eos ne, elit virtute appetere cu sea. Ut nec erat maluisset
      argumentum, duo integre propriae ut. Sed cu eius sonet verear, ne sit
      legendos senserit. Ne mel mundi perpetua dissentiunt. Nec ei nusquam
      inimicus.
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage
      kind="info"
      renderLeftIcon={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <img
          src="res/tutorial_icons/tween-behavior.jpg"
          alt=""
          style={{
            maxWidth: 128,
            maxHeight: 128,
          }}
        />
      )}
      onHide={() => {}}
    >
      Hello World, this is a long alert text. Lorem ipsum dolor sit amet, at
      cibo erroribus sed, sea in meis laoreet. Has modus epicuri ne, dicat
      nostrum eos ne, elit virtute appetere cu sea. Ut nec erat maluisset
      argumentum, duo integre propriae ut. Sed cu eius sonet verear, ne sit
      legendos senserit. Ne mel mundi perpetua dissentiunt. Nec ei nusquam
      inimicus.
    </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AlertMessage
      kind="info"
      renderLeftIcon={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <img
          src="res/tutorial_icons/tween-behavior.jpg"
          alt=""
          style={{
            maxWidth: 128,
            maxHeight: 128,
          }}
        />
      )}
      onHide={() => {}}
      hideButtonSize="small"
    >
      Hello World, this is a long alert text. Lorem ipsum dolor sit amet, at
      cibo erroribus sed, sea in meis laoreet. Has modus epicuri ne, dicat
      nostrum eos ne, elit virtute appetere cu sea. Ut nec erat maluisset
      argumentum, duo integre propriae ut. Sed cu eius sonet verear, ne sit
      legendos senserit. Ne mel mundi perpetua dissentiunt. Nec ei nusquam
      inimicus.
    </AlertMessage>
  </ColumnStackLayout>
);
