// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
  getParameterValueOrDefault,
} from './ParameterFieldCommons';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import FormHelperText from '@material-ui/core/FormHelperText';
// @ts-expect-error - TS6142 - Module '../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../UI/MarkdownText';
import TwoStatesButton, {
  TwoStatesButtonInterface,
// @ts-expect-error - TS6142 - Module '../../UI/TwoStatesButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TwoStatesButton.tsx', but '--jsx' is not set.
} from '../../UI/TwoStatesButton';

const styles = {
  description: {
    marginRight: 5,
  },
} as const;

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function TrueFalseField(props: ParameterFieldProps, ref) {
  const button = React.useRef<TwoStatesButtonInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (button.current) button.current.focusLeftButton();
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const { parameterMetadata, value } = props;
  const description = parameterMetadata
    ? parameterMetadata.getDescription()
    : undefined;
  const longDescription = parameterMetadata
    ? parameterMetadata.getLongDescription()
    : null;
  const effectiveValue = getParameterValueOrDefault(value, parameterMetadata);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line alignItems="center" justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text style={styles.description} displayInlineAsSpan>
          {description}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TwoStatesButton
          value={effectiveValue}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftButton={{ label: <Trans>True</Trans>, value: 'True' }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          rightButton={{ label: <Trans>False</Trans>, value: 'False' }}
          onChange={props.onChange}
          ref={button}
        />
      </Line>
      {longDescription ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FormHelperText variant="filled" margin="dense">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MarkdownText source={longDescription} />
        </FormHelperText>
      ) : null}
    </Column>
  );
});

export const renderInlineTrueFalse = ({
  value,
  parameterMetadata,
}: ParameterInlineRendererProps) => {
  if (getParameterValueOrDefault(value, parameterMetadata) === 'True') {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>true</Trans>;
  } else {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>false</Trans>;
  }
};
