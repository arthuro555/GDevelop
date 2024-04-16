import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { EventsScope } from '../../../InstructionOrExpression/EventsScope.flow';
// @ts-expect-error - TS6142 - Module './ExpressionParametersEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/ExpressionParametersEditor.tsx', but '--jsx' is not set.
import ExpressionParametersEditor from './ExpressionParametersEditor';
// @ts-expect-error - TS6142 - Module '../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../../UI/HelpButton';

export type ParameterValues = Array<string>;

const styles = {
  minHeightContainer: {
    // Use a minimum height that is large enough so that ExpressionSelector in
    // GenericExpressionField can fit and display entirely.
    minHeight: 300,
    flex: 1,
    flexDirection: 'column',
  },
} as const;

type Props = {
  project?: gdProject,
  scope: EventsScope,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  expressionMetadata: gdExpressionMetadata,
  onDone: (arg1: ParameterValues) => void,
  onRequestClose: () => void,
  parameterRenderingService?: {
    components: any,
    getParameterComponent: (type: string) => any
  }
};

const ExpressionParametersEditorDialog = ({
  project,
  scope,
  onDone,
  onRequestClose,
  globalObjectsContainer,
  objectsContainer,
  expressionMetadata,
  parameterRenderingService,
}: Props) => {
  const [parameterValues, setParameterValues] = React.useState<Array<string>>(Array(expressionMetadata.getParametersCount()).fill(''));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Enter the expression parameters</Trans>}
      id="expression-parameters-editor-dialog"
      open
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          id="apply-button"
          key="apply"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Apply</Trans>}
          primary
          onClick={() => onDone(parameterValues)}
        />,
      ]}
      secondaryActions={
        expressionMetadata.getHelpPath()
          ? [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <HelpButton
                key="help-button"
                helpPagePath={expressionMetadata.getHelpPath()}
              />,
            ]
          : []
      }
      onRequestClose={onRequestClose}
      onApply={() => onDone(parameterValues)}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.minHeightContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>{expressionMetadata.getDescription()}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExpressionParametersEditor
            project={project}
            scope={scope}
            globalObjectsContainer={globalObjectsContainer}
            objectsContainer={objectsContainer}
            expressionMetadata={expressionMetadata}
            parameterValues={parameterValues}
// @ts-expect-error - TS7006 - Parameter 'editedIndex' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChangeParameter={(editedIndex, value) => {
              setParameterValues(
                parameterValues.map((oldValue, index) =>
                  index === editedIndex ? value : oldValue
                )
              );
            }}
            parameterRenderingService={parameterRenderingService}
          />
        </div>
      </Column>
    </Dialog>
  );
};

export default ExpressionParametersEditorDialog;
