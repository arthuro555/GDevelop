// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
import { mapFor } from '../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';

export type ExternalProperties = {
  layoutName: string
};

type Props = {
  open: boolean,
  onChoose: (arg1: ExternalProperties) => void,
  layoutName?: string | null | undefined,
  onClose: () => void,
  project: gdProject,
  title: React.ReactNode,
  helpTexts?: Array<React.ReactNode>
};

export default function ExternalPropertiesDialog({
  open,
  onChoose,
  layoutName,
  onClose,
  project,
  title,
  helpTexts,
}: Props) {
  const initialLayoutName = layoutName || '';
  const [selectedLayoutName, setSelectedLayoutName] = React.useState<string>(initialLayoutName);
  const onClick = React.useCallback(
    () => {
      if (!selectedLayoutName) return;

      const externalProperties: ExternalProperties = {
        layoutName: selectedLayoutName,
      };
      onChoose(externalProperties);
    },
    [onChoose, selectedLayoutName]
  );

  const actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
      key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Cancel</Trans>}
      primary={false}
      onClick={onClose}
    />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DialogPrimaryButton
      key="choose"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Choose</Trans>}
      primary
      onClick={onClick}
      disabled={!selectedLayoutName}
    />,
  ];

// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  const layoutNames = mapFor(0, project.getLayoutsCount(), i => {
    return project.getLayoutAt(i).getName();
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={title}
      actions={actions}
      open={open}
      onRequestClose={onClose}
      onApply={onClick}
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
        {helpTexts &&
          helpTexts.map((helpText, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Line key={index}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <BackgroundText>{helpText}</BackgroundText>
            </Line>
          ))}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Choose the associated scene:</Trans>
          </Text>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RadioGroup
          aria-label="Associated scene"
          name="associated-layout"
          value={selectedLayoutName}
          onChange={event => setSelectedLayoutName(event.target.value)}
        >
{ /* @ts-expect-error - TS7006 - Parameter 'name' implicitly has an 'any' type. */}
          {layoutNames.map(name => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FormControlLabel
              key={name}
              value={name}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              control={<Radio color="secondary" />}
              label={name}
            />
          ))}
        </RadioGroup>
      </Column>
    </Dialog>
  );
}
