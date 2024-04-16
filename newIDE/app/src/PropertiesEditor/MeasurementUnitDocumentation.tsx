// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';

// Strings are used instead of gdMeasurementUnit
// because the C++ instances would be dead when the component is rendered.
//
// The gdMeasurementUnit instances are only living during their iteration on
// the properties when building the property editor view. As the rendering of
// MeasurementUnitDocumentation is done outside of this loop, the memory
// referenced by the gdMeasurementUnit instance has been reused and it displays
// wrong values.
type Props = {
  label: string,
  description: string,
  elementsWithWords: string
};

export default function MeasurementUnitDocumentation({
  label,
  description,
  elementsWithWords,
}: Props) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="sub-title">{label}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {description && <Text size="body">{description}</Text>}
      {elementsWithWords && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Text size="body">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <i>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>{`in ${elementsWithWords}`}</Trans>
          </i>
        </Text>
      )}
    </Column>
  );
}
