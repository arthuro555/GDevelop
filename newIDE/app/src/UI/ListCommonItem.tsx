import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from './CustomSvgIcons/Add';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Search'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Search.js' implicitly has an 'any' type.
import Search from './CustomSvgIcons/Search';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from './Grid';
// @ts-expect-error - TS6142 - Module './RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from './RaisedButton';
// No i18n in this file

type Props = {
  onClick?: () => void,
  primaryText: React.ReactNode | null | undefined,
  id?: string | null | undefined,
  kind?: 'search',
  noMargin?: boolean
};

export const AddListItem = (props: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column expand noMargin={props.noMargin}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
          primary
          onClick={props.onClick}
          label={props.primaryText}
          id={props.id}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={props.kind === 'search' ? <Search /> : <Add />}
          fullWidth
        />
      </Line>
    </Column>
  );
};
