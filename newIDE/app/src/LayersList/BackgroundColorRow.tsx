// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import {I18n} from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/ColorField/ColorPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/ColorPicker.tsx', but '--jsx' is not set.
import ColorPicker from '../UI/ColorField/ColorPicker';
// @ts-expect-error - TS6142 - Module '../UI/TreeTable' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TreeTable/index.tsx', but '--jsx' is not set.
import { TreeTableCell, TreeTableRow } from '../UI/TreeTable';
// @ts-expect-error - TS6142 - Module '../UI/DragHandle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragHandle.tsx', but '--jsx' is not set.
import DragHandle from '../UI/DragHandle';

type Props = {
  layout: gdLayout,
  onBackgroundColorChanged: () => void
};

const BackgroundColorRow = ({
  layout,
  onBackgroundColorChanged,
}: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <TreeTableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TreeTableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DragHandle disabled />
        </TreeTableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TreeTableCell expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
            fullWidth
            value={i18n._(t`Background color`)}
            margin="none"
            disabled
          />
        </TreeTableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TreeTableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColorPicker
            disableAlpha
            color={{
              r: layout.getBackgroundColorRed(),
              g: layout.getBackgroundColorGreen(),
              b: layout.getBackgroundColorBlue(),
              a: 255,
            }}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
            onChangeComplete={color => {
              layout.setBackgroundColor(color.rgb.r, color.rgb.g, color.rgb.b);
              onBackgroundColorChanged();
            }}
          />
        </TreeTableCell>
      </TreeTableRow>
    )}
  </I18n>
);

export default BackgroundColorRow;
