// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/ColorField/ColorPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/ColorPicker.tsx', but '--jsx' is not set.
import ColorPicker from '../../UI/ColorField/ColorPicker';
import { RGBColor } from '../../Utils/ColorTransformer';
// @ts-expect-error - TS6142 - Module '../../UI/MiniToolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MiniToolbar.tsx', but '--jsx' is not set.
import MiniToolbar, { MiniToolbarText } from '../../UI/MiniToolbar';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';

const gd: libGDevelop = global.gd;

const styles = {
  sizeTextField: {
    width: 90,
  },
} as const;

type Props = {
  event: gdBaseEvent,
  onClose: () => void,
  onApply: () => void
};

const white: RGBColor = {
  r: 255,
  g: 255,
  b: 255,
};

const black: RGBColor = {
  r: 0,
  g: 0,
  b: 0,
};

export const filterEditableWithEventTextDialog = (events: Array<gdBaseEvent>): Array<gdBaseEvent> => {
  return events.filter(event =>
    [
      'BuiltinCommonInstructions::Group',
      'BuiltinCommonInstructions::Comment',
    ].includes(event.getType())
  );
};

const EventTextDialog = (props: Props) => {
  const { event, onClose } = props;

  const [textValue, setTextValue] = React.useState<string>('');
  const [textColor, setTextColor] = React.useState<RGBColor>(black);
  const [backgroundColor, setBackgroundColor] = React.useState<RGBColor>(black);

  const eventType = event.getType();

  React.useEffect(
    () => {
      if (eventType === 'BuiltinCommonInstructions::Comment') {
        const commentEvent = gd.asCommentEvent(event);

        setTextColor({
          r: commentEvent.getTextColorRed(),
          g: commentEvent.getTextColorGreen(),
          b: commentEvent.getTextColorBlue(),
        });

        setBackgroundColor({
          r: commentEvent.getBackgroundColorRed(),
          g: commentEvent.getBackgroundColorGreen(),
          b: commentEvent.getBackgroundColorBlue(),
        });

        setTextValue(gd.asCommentEvent(event).getComment());
      } else if (eventType === 'BuiltinCommonInstructions::Group') {
        var groupEvent = gd.asGroupEvent(event);
        const r = groupEvent.getBackgroundColorR(),
          g = groupEvent.getBackgroundColorG(),
          b = groupEvent.getBackgroundColorB();

        // Text color is automatically chosen for groups.
        setTextColor(() => {
          return (r + g + b) / 3 > 200 ? black : white;
        });

        setBackgroundColor({
          r: groupEvent.getBackgroundColorR(),
          g: groupEvent.getBackgroundColorG(),
          b: groupEvent.getBackgroundColorB(),
        });

        setTextValue(gd.asGroupEvent(event).getName());
      } else {
        console.error(
          'Dialog was opened for an unsupported event type: ' + eventType
        );
      }
    },
    [event, eventType]
  );

  const onApply = React.useCallback(
    () => {
      if (eventType === 'BuiltinCommonInstructions::Comment') {
        //Text value
        gd.asCommentEvent(event).setComment(textValue);

        //Text color
        gd.asCommentEvent(event).setTextColor(
          textColor.r,
          textColor.g,
          textColor.b
        );
        //Background color
        gd.asCommentEvent(event).setBackgroundColor(
          backgroundColor.r,
          backgroundColor.g,
          backgroundColor.b
        );
      } else if (eventType === 'BuiltinCommonInstructions::Group') {
        //Text value
        gd.asGroupEvent(event).setName(textValue);

        //Text color for group not supported in Core, instead GroupEvent.js handle this
        //Background color
        gd.asGroupEvent(event).setBackgroundColor(
          backgroundColor.r,
          backgroundColor.g,
          backgroundColor.b
        );
      }
      props.onApply();
      return;
    },
    [props, event, eventType, textValue, textColor, backgroundColor]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={
        eventType === 'BuiltinCommonInstructions::Comment' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Edit comment</Trans>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Edit group</Trans>
        )
      }
      open
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          primary={false}
          onClick={onClose}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key={'Apply'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Apply</Trans>}
          primary
          onClick={onApply}
        />,
      ]}
      onRequestClose={onClose}
      onApply={onApply}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <MiniToolbar noPadding>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MiniToolbarText firstChild>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Background color:</Trans>
          </MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColorPicker
            style={styles.sizeTextField}
            disableAlpha
            color={backgroundColor}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
            onChangeComplete={color => {
              setBackgroundColor(color.rgb);
            }}
          />

          {eventType === 'BuiltinCommonInstructions::Comment' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Text color:</Trans>
              </MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColorPicker
                style={styles.sizeTextField}
                disableAlpha
                color={textColor}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
                onChangeComplete={color => {
                  setTextColor(color.rgb);
                }}
              />
            </React.Fragment>
          )}
        </MiniToolbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledTextField
                commitOnBlur
                translatableHintText={t`Enter the text to be displayed`}
                fullWidth
                multiline
                rows={8}
                rowsMax={30}
                value={textValue}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={value => {
                  setTextValue(value);
                }}
              />
            </Line>
          </Column>
        </Line>
      </Column>
    </Dialog>
  );
};

export default EventTextDialog;
