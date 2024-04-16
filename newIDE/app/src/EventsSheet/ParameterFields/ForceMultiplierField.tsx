import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
import { ButtonInterface } from '../../UI/Button';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
// @ts-expect-error - TS6142 - Module './GenericExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/index.tsx', but '--jsx' is not set.
import GenericExpressionField from './GenericExpressionField';
// @ts-expect-error - TS6142 - Module '../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../UI/BackgroundText';
import { focusButton } from '../../UI/Button';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function ForceMultiplierField(props: ParameterFieldProps, ref) {
  const button = React.useRef<ButtonInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (button.current) focusButton(button.current);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));
  const showDeprecatedNumericValue =
    props.value !== '' && props.value !== '1' && props.value !== '0';

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Instant</Trans>}
            primary={props.value === '' || props.value === '0'}
            onClick={() => props.onChange('0')}
            ref={button}
          />
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              The force will only push the object during the time of one
              frame. Typically used in an event with no conditions or with
              conditions that stay valid for a certain amount of time.
            </Trans>
          </Text>
        </Column>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Permanent</Trans>}
            primary={props.value === '1'}
            onClick={() => props.onChange('1')}
          />
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              The force will push the object forever, unless you use the
              action "Stop the object". Typically used in an event with
              conditions that are only true once, or with a "Trigger Once"
              condition.
            </Trans>
          </Text>
        </Column>
      </Line>
      {showDeprecatedNumericValue && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>or</Trans>
          </BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <GenericExpressionField expressionType="number" {...props} />
            </Column>
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              The usage of a number or expression is deprecated. Please now
              use only "Permanent" or "Instant" for configuring forces.
            </Trans>
          </BackgroundText>
        </React.Fragment>
      )}
    </Column>
  );
});

export const renderInlineForceMultiplier = ({
  value,
}: ParameterInlineRendererProps) => {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (value === '1') return <Trans>{`a permanent`}</Trans>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  else if (value === '0' || value === '') return <Trans>{`an instant`}</Trans>;

  return 'a (multiplier: ' + value + ')';
};
