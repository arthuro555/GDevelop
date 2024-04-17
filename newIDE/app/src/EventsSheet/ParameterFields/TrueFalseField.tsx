import { Trans } from '@lingui/macro';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import * as React from 'react';

import { Line, Column } from '../../UI/Grid';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
  getParameterValueOrDefault,
} from './ParameterFieldCommons';

import Text from '../../UI/Text';
import FormHelperText from '@material-ui/core/FormHelperText';

import { MarkdownText } from '../../UI/MarkdownText';
import TwoStatesButton, {
  TwoStatesButtonInterface,
} from '../../UI/TwoStatesButton';

const styles = {
  description: {
    marginRight: 5,
  },
} as const;

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function TrueFalseField(props: ParameterFieldProps, ref) {
    const button = React.useRef<TwoStatesButtonInterface | null | undefined>(
      null
    );
    const focus: FieldFocusFunction = (options) => {
      if (button.current) button.current.focusLeftButton();
    };

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
      <Column noMargin>
        <Line alignItems="center" justifyContent="space-between">
          <Text style={styles.description} displayInlineAsSpan>
            {description}
          </Text>
          <TwoStatesButton
            value={effectiveValue}
            leftButton={{ label: <Trans>True</Trans>, value: 'True' }}
            rightButton={{ label: <Trans>False</Trans>, value: 'False' }}
            onChange={props.onChange}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<TwoStatesButtonInterface | null | undefined>' is not assignable to type 'Ref<TwoStatesButtonInterface> | undefined'.
            ref={button}
          />
        </Line>
        {longDescription ? (
          <FormHelperText variant="filled" margin="dense">
            <MarkdownText source={longDescription} />
          </FormHelperText>
        ) : null}
      </Column>
    );
  }
);

export const renderInlineTrueFalse = ({
  value,
  parameterMetadata,
}: ParameterInlineRendererProps) => {
  if (getParameterValueOrDefault(value, parameterMetadata) === 'True') {
    return <Trans>true</Trans>;
  } else {
    return <Trans>false</Trans>;
  }
};
