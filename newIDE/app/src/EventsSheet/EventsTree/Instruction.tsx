// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import { mapFor } from '../../Utils/MapFor';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import {
  selectedArea,
  selectableArea,
  subInstructionsContainer,
  instructionParameter,
  disabledText,
  icon,
  warningInstruction,
} from './ClassNames';
import {
  InstructionsListContext,
  InstructionContext,
} from '../SelectionHandler';
// @ts-expect-error - TS6142 - Module './InstructionsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/InstructionsList.tsx', but '--jsx' is not set.
import InstructionsList from './InstructionsList';
// @ts-expect-error - TS6142 - Module './DropIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/DropIndicator.tsx', but '--jsx' is not set.
import DropIndicator from './DropIndicator';
import ParameterRenderingService from '../ParameterRenderingService';
// @ts-expect-error - TS6142 - Module './InvalidParameterValue' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/InvalidParameterValue.tsx', but '--jsx' is not set.
import InvalidParameterValue from './InvalidParameterValue';
// @ts-expect-error - TS6142 - Module './MissingParameterValue' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/MissingParameterValue.tsx', but '--jsx' is not set.
import MissingParameterValue from './MissingParameterValue';
// @ts-expect-error - TS6142 - Module '../../UI/DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
import { makeDragSourceAndDropTarget } from '../../UI/DragAndDrop/DragSourceAndDropTarget';
import {
  ScreenType,
  useScreenType,
} from '../../UI/Responsive/ScreenTypeMeasurer';
import { WindowSizeType } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
import { useLongTouch } from '../../Utils/UseLongTouch';
import {
  shouldActivate,
  shouldValidate,
} from '../../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Async'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Async.js' implicitly has an 'any' type.
import AsyncIcon from '../../UI/CustomSvgIcons/Async';
import Tooltip from '@material-ui/core/Tooltip';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
import {
  EventsScope,
  getProjectScopedContainersFromScope,
} from '../../InstructionOrExpression/EventsScope.flow';
import { enumerateParametersUsableInExpressions } from '../ParameterFields/EnumerateFunctionParameters';
import { getFunctionNameFromType } from '../../EventsFunctionsExtensionsLoader';
// @ts-expect-error - TS6142 - Module '../../AssetStore/ExtensionStore/ExtensionStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionStoreContext.tsx', but '--jsx' is not set.
import { ExtensionStoreContext } from '../../AssetStore/ExtensionStore/ExtensionStoreContext';
// @ts-expect-error - TS6142 - Module '../ParameterFields/ObjectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectField.tsx', but '--jsx' is not set.
import { getRequiredBehaviorTypes } from '../ParameterFields/ObjectField';
// @ts-expect-error - TS6142 - Module '../../ObjectsList/ObjectSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectsList/ObjectSelector.tsx', but '--jsx' is not set.
import { checkHasRequiredCapability } from '../../ObjectsList/ObjectSelector';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Warning'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Warning.js' implicitly has an 'any' type.
import Warning from '../../UI/CustomSvgIcons/Warning';

const gd: libGDevelop = global.gd;

const styles = {
  container: {
    whiteSpace: 'normal',
    overflowWrap: 'anywhere', // Ensure everything is wrapped on small devices (or for long expressions).
    cursor: 'pointer',
    marginBottom: 1,
  },
} as const;

export const reactDndInstructionType = 'GD_DRAGGED_INSTRUCTION';

const DragSourceAndDropTarget = makeDragSourceAndDropTarget<{
  isCondition: boolean
}>(reactDndInstructionType);

type Props = {
  platform: gdPlatform,
  instruction: gdInstruction,
  isCondition: boolean,
  onClick: any,
  selected: boolean,
  disabled: boolean,
  onDoubleClick: () => void,
  onContextMenu: (x: number, y: number) => void,
  onMoveToInstruction: () => void,
  // For potential sub-instructions list:
  selection: any,
  onAddNewSubInstruction: (arg1: InstructionsListContext) => void,
  onPasteSubInstructions: (arg1: InstructionsListContext) => void,
  onMoveToSubInstruction: (destinationContext: InstructionContext) => void,
  onMoveToSubInstructionsList: (destinationContext: InstructionsListContext) => void,
  onSubInstructionClick: (arg1: InstructionContext) => void,
  onSubInstructionDoubleClick: (arg1: InstructionContext) => void,
  onAddSubInstructionContextMenu: (
    button: HTMLButtonElement,
    instructionsListContext: InstructionsListContext,
  ) => void,
  onSubParameterClick: any,
  onSubInstructionContextMenu: (x: number, y: number, instructionContext: InstructionContext) => void,
  onParameterClick: (event: any, parameterIndex: number) => void,
  renderObjectThumbnail: (arg1: string) => React.ReactElement,
  screenType: ScreenType,
  windowSize: WindowSizeType,
  scope: EventsScope,
  resourcesManager: gdResourcesManager,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  id: string
};

const shouldNotBeValidated = ({
  value,
  parameterType,
}: {
  value: string,
  parameterType: string
}) => parameterType === 'layer' && value === '';

const formatValue = ({
  value,
  parameterType,
  i18n,
}: {
  value: string,
  parameterType: string,
  i18n: I18nType
}) =>
  (value === '' || value === '""') && parameterType === 'layer'
    ? i18n._(t`Base layer`)
    : value;

const InstructionMissing = (props: {
  instructionType: string,
  isCondition: boolean
}) => {
  const { hasExtensionNamed } = React.useContext(ExtensionStoreContext);
  const { name, behaviorName, extensionName } = getFunctionNameFromType(
    props.instructionType
  );
  const extensionStoreMention = hasExtensionNamed(extensionName) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>Try installing it from the extension store.</Trans>
  ) : (
    ''
  );

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  const functionNode = <span className="function-name">{name}</span>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  const behaviorNode = <span className="behavior-name">{behaviorName}</span>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  const extensionNode = <span className="extension-name">{extensionName}</span>;

  if (behaviorName) {
    if (props.isCondition) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <span className="instruction-missing">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            {functionNode} condition on behavior {behaviorNode} from
            {extensionNode} extension is missing.
          </Trans>{' '}
          {extensionStoreMention}
        </span>
      );
    } else {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <span className="instruction-missing">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            {functionNode} action on behavior {behaviorNode} from
            {extensionNode} extension is missing.
          </Trans>{' '}
          {extensionStoreMention}
        </span>
      );
    }
  } else {
    if (props.isCondition) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <span className="instruction-missing">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            {functionNode} condition from {extensionNode} extension is missing.
          </Trans>{' '}
          {extensionStoreMention}
        </span>
      );
    } else {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <span className="instruction-missing">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            {functionNode} action from {extensionNode} extension is missing.
          </Trans>{' '}
          {extensionStoreMention}
        </span>
      );
    }
  }
};

const Instruction = (props: Props) => {
  const {
    platform,
    instruction,
    isCondition,
    onClick,
    onMoveToInstruction,
    onContextMenu,
    globalObjectsContainer,
    objectsContainer,
    id,
    resourcesManager,
    scope,
  } = props;

  const instrFormatter = React.useMemo(
    () => gd.InstructionSentenceFormatter.get(),
    []
  );
  const preferences = React.useContext(PreferencesContext);
  const theme = React.useContext(GDevelopThemeContext);
  const type = theme.palette.type;
  const warningColor = theme.message.warning;

  const useAssignmentOperators =
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
    preferences.values.eventsSheetUseAssignmentOperators;
  const showDeprecatedInstructionWarning =
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
    preferences.values.showDeprecatedInstructionWarning;

  /**
   * Render the different parts of the text of the instruction.
   * Parameter can have formatting, be hovered and clicked. The rest
   * has not particular styling.
   */
  const renderInstructionText = (
    metadata: gdInstructionMetadata,
    i18n: I18nType
  ) => {
    const { instruction, disabled, renderObjectThumbnail } = props;
    const formattedTexts = instrFormatter.getAsFormattedText(
      instruction,
      metadata
    );
    const parametersCount = metadata.getParametersCount();

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <span
        className={classNames({
          [disabledText]: disabled,
        })}
        data-instruction={instruction.getType()}
        data-instruction-inverted={
          instruction.isInverted() ? 'true' : undefined
        }
      >
{ /* @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type. */}
        {mapFor(0, formattedTexts.size(), i => {
          const formatting = formattedTexts.getTextFormatting(i);
          const value = formattedTexts.getString(i);
          const parameterIndex = formatting.getUserData();
          const isParameter =
            parameterIndex >= 0 && parameterIndex < parametersCount;

          if (!isParameter) {
            if (value === 'Unknown or unsupported instruction') {
              return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <InstructionMissing
                  instructionType={instruction.getType()}
                  isCondition={isCondition}
                  key={`unknown-behavior-instruction-${i}`}
                />
              );
            }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            return <span key={i}>{value}</span>;
          }

          const parameterMetadata = metadata.getParameter(parameterIndex);
          // TODO Remove the ternary when any parameter declaration uses
          // 'number' instead of 'expression'.
          const parameterType: string =
            parameterMetadata.getType() === 'expression'
              ? 'number'
              : parameterMetadata.getType();
          let expressionIsValid = true;
          if (!shouldNotBeValidated({ value, parameterType })) {
            if (
              gd.ParameterMetadata.isExpression('number', parameterType) ||
              gd.ParameterMetadata.isExpression('string', parameterType) ||
              gd.ParameterMetadata.isExpression('variable', parameterType)
            ) {
              const expressionNode = instruction
                .getParameter(parameterIndex)
                .getRootNode();
              const expressionValidator = new gd.ExpressionValidator(
                gd.JsPlatform.get(),
                getProjectScopedContainersFromScope(
                  scope,
                  globalObjectsContainer,
                  objectsContainer
                ),
                parameterType
              );
              expressionNode.visit(expressionValidator);
              expressionIsValid =
                expressionValidator.getAllErrors().size() === 0;
              expressionValidator.delete();
            } else if (gd.ParameterMetadata.isObject(parameterType)) {
              const objectOrGroupName = instruction
                .getParameter(parameterIndex)
                .getPlainString();
              expressionIsValid =
                (globalObjectsContainer.hasObjectNamed(objectOrGroupName) ||
                  objectsContainer.hasObjectNamed(objectOrGroupName) ||
                  globalObjectsContainer
                    .getObjectGroups()
                    .has(objectOrGroupName) ||
                  objectsContainer.getObjectGroups().has(objectOrGroupName)) &&
                (!parameterMetadata.getExtraInfo() ||
                  gd.getTypeOfObject(
                    globalObjectsContainer,
                    objectsContainer,
                    objectOrGroupName,
                    /*searchInGroups=*/ true
                  ) === parameterMetadata.getExtraInfo()) &&
                checkHasRequiredCapability({
                  globalObjectsContainer,
                  objectsContainer,
                  objectName: objectOrGroupName,
                  requiredBehaviorTypes: getRequiredBehaviorTypes(
                    platform,
                    metadata,
                    parameterIndex
                  ),
                });
            } else if (
              gd.ParameterMetadata.isExpression('resource', parameterType)
            ) {
              const resourceName = instruction
                .getParameter(parameterIndex)
                .getPlainString();
              expressionIsValid = resourcesManager.hasResource(resourceName);
            }
            if (
              expressionIsValid &&
              parameterType === 'functionParameterName'
            ) {
              const eventsFunction = props.scope.eventsFunction;
              if (eventsFunction) {
                const eventsBasedEntity =
                  props.scope.eventsBasedBehavior ||
                  props.scope.eventsBasedObject;
                const functionsContainer = eventsBasedEntity
                  ? eventsBasedEntity.getEventsFunctions()
                  : props.scope.eventsFunctionsExtension;

                if (functionsContainer) {
                  const allowedParameterTypes = parameterMetadata
                    .getExtraInfo()
                    .split(',');
                  const parameters = enumerateParametersUsableInExpressions(
                    functionsContainer,
                    eventsFunction,
                    allowedParameterTypes
                  );
                  const functionParameterNameExpression = instruction
                    .getParameter(parameterIndex)
                    .getPlainString();
                  const functionParameterName = functionParameterNameExpression.substring(
                    1,
                    functionParameterNameExpression.length - 1
                  );
                  expressionIsValid = parameters.some(
                    parameter => parameter.getName() === functionParameterName
                  );
                }
              } else {
                // This can happen if function-dedicated instructions are
                // copied to scene events.
                expressionIsValid = false;
              }
            }
          }

          const formattedValue = formatValue({
            value,
            parameterType,
            i18n,
          });

          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <span
              key={i}
              className={classNames({
                [selectableArea]: true,
                [instructionParameter]: true,
                [parameterType]: true,
              })}
              onClick={domEvent => {
                props.onParameterClick(domEvent, parameterIndex);

                // On touchscreen, don't propagate the click to the instruction div,
                // as it's listening for taps to simulate double "clicks".
                if (props.screenType === 'touch') {
                  domEvent.stopPropagation();
                }
              }}
              onKeyPress={event => {
                if (shouldActivate(event)) {
                  props.onParameterClick(event, parameterIndex);
                  event.stopPropagation();
                  event.preventDefault();
                }
              }}
              tabIndex={0}
            >
              {ParameterRenderingService.renderInlineParameter({
                value: formattedValue,
                expressionIsValid,
                parameterMetadata,
                renderObjectThumbnail,
                InvalidParameterValue,
                MissingParameterValue,
                useAssignmentOperators,
              })}
            </span>
          );
        })}
      </span>
    );
  };

  // Disable drag on touchscreens, because it would interfere with the
  // scroll, and would create too much mistake/frustration.
  const screenType = useScreenType();
  const dragAllowed = screenType !== 'touch';

  // Allow a long press to show the context menu
  const longTouchForContextMenuProps = useLongTouch(
    React.useCallback(
      event => {
        onContextMenu(event.clientX, event.clientY);
      },
      [onContextMenu]
    ),
    { context: 'events-tree-event-component' }
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DragSourceAndDropTarget
          beginDrag={() => {
            onClick(); // Select the dragged instruction

            // No need to save here what is being dragged,
            // as its the entire selection that is considered to be dragged.
            return {
              isCondition,
            };
          }}
          canDrag={() => dragAllowed}
// @ts-expect-error - TS7006 - Parameter 'draggedItem' implicitly has an 'any' type.
          canDrop={draggedItem => draggedItem.isCondition === isCondition}
          drop={() => {
            onMoveToInstruction();
          }}
        >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type. | TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
          {({ connectDragSource, connectDropTarget, isOver, canDrop }) => {
            // /!\ It's important to get the metadata now so that we're sure they
            // are valid.
            // If the metadata is retrieved outside of the closure, it's possible
            // that the metadata is changed in the meantime (especially on behavior
            // properties it seems).
            const metadata = isCondition
              ? gd.MetadataProvider.getConditionMetadata(
                  gd.JsPlatform.get(),
                  instruction.getType()
                )
              : gd.MetadataProvider.getActionMetadata(
                  gd.JsPlatform.get(),
                  instruction.getType()
                );

            const smallIconFilename = metadata.getSmallIconFilename();
            // The instruction itself can be dragged and is a target for
            // another instruction to be dropped. It's IMPORTANT NOT to have
            // the subinstructions list inside the connectDropTarget/connectDragSource
            // as otherwise this can confuse react-dnd ("Expected to find a valid target")
            // (surely due to components re-mounting/rerendering ?).
            const isBlackIcon =
              smallIconFilename.startsWith('data:image/svg+xml') ||
              smallIconFilename.includes('_black');

            const instructionDragSourceElement = connectDragSource(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children: any[]; onKeyPress: (event: KeyboardEvent<HTMLDivElement>) => void; tabIndex: number; id: string; onTouchStart: (event: TouchEvent) => void; ... 6 more ...; onContextMenu: (e: MouseEvent<...>) => void; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
              <div
                style={styles.container}
                className={classNames({
                  [selectableArea]: true,
                  [selectedArea]: props.selected,
                  [warningInstruction]:
                    showDeprecatedInstructionWarning && metadata.isHidden(),
                })}
                onClick={e => {
                  e.stopPropagation();

                  if (props.screenType === 'touch' && props.selected) {
                    // On touch screens, tapping again a selected instruction should edit it.
                    props.onDoubleClick();
                  } else {
                    props.onClick();
                  }
                }}
                onDoubleClick={e => {
                  e.stopPropagation();
                  props.onDoubleClick();
                }}
                onContextMenu={e => {
                  e.stopPropagation();
                  onContextMenu(e.clientX, e.clientY);
                }}
                {...longTouchForContextMenuProps}
                onKeyPress={event => {
                  if (shouldValidate(event)) {
                    props.onDoubleClick();
                    event.stopPropagation();
                    event.preventDefault();
                  } else if (shouldActivate(event)) {
                    props.onClick();
                    event.stopPropagation();
                    event.preventDefault();
                  }
                }}
                tabIndex={0}
                id={id}
              >
                {showDeprecatedInstructionWarning && metadata.isHidden() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Tooltip
                    title={
                      props.isCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Deprecated condition</Trans>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Deprecated action</Trans>
                      )
                    }
// @ts-expect-error - TS2322 - Type '{ children: Element; title: Element; fontSize: string; }' is not assignable to type 'IntrinsicAttributes & TooltipProps'.
                    fontSize="small"
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Warning
                      style={{ color: warningColor }}
                      className={classNames({
                        [icon]: true,
                      })}
                    />
                  </Tooltip>
                ) : null}
                {instruction.isInverted() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <img
                    className={classNames({
                      [icon]: true,
                    })}
                    src="res/contraire.png"
                    alt="Condition is negated"
                  />
                )}
                {metadata.isAsync() &&
                  (!metadata.isOptionallyAsync() ||
                    instruction.isAwaited()) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Tooltip
                      title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>
                          Next actions (and sub-events) will wait for this
                          action to be finished before running.
                        </Trans>
                      }
                      placement="top"
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <AsyncIcon
                        className={classNames({
                          [icon]: true,
                        })}
                      />
                    </Tooltip>
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <img
                  className={classNames({
                    [icon]: true,
                  })}
                  src={smallIconFilename}
                  alt=""
                  style={{
                    filter:
                      type === 'dark' && isBlackIcon
                        ? 'grayscale(1) invert(1)'
                        : undefined,
                  }}
                />
                {renderInstructionText(metadata, i18n)}
              </div>
            );

            const instructionDragSourceDropTargetElement = instructionDragSourceElement
              ? connectDropTarget(instructionDragSourceElement)
              : null;

            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {isOver && <DropIndicator canDrop={canDrop} />}
                {instructionDragSourceDropTargetElement}
                {metadata.canHaveSubInstructions() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <InstructionsList
                    platform={props.platform}
                    style={
                      {} /* TODO: Use a new object to force update - somehow updates are not always propagated otherwise */
                    }
                    className={subInstructionsContainer}
                    instrsList={instruction.getSubInstructions()}
                    areConditions={props.isCondition}
                    selection={props.selection}
                    onAddNewInstruction={props.onAddNewSubInstruction}
                    onPasteInstructions={props.onPasteSubInstructions}
                    onMoveToInstruction={props.onMoveToSubInstruction}
                    onMoveToInstructionsList={props.onMoveToSubInstructionsList}
                    onInstructionClick={props.onSubInstructionClick}
                    onInstructionDoubleClick={props.onSubInstructionDoubleClick}
                    onInstructionContextMenu={props.onSubInstructionContextMenu}
                    onAddInstructionContextMenu={
                      props.onAddSubInstructionContextMenu
                    }
                    onParameterClick={props.onSubParameterClick}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    addButtonLabel={<Trans>Add a sub-condition</Trans>}
                    addButtonId="add-sub-condition-button"
                    disabled={props.disabled}
                    renderObjectThumbnail={props.renderObjectThumbnail}
                    screenType={props.screenType}
                    windowSize={props.windowSize}
                    scope={props.scope}
                    resourcesManager={props.resourcesManager}
                    globalObjectsContainer={props.globalObjectsContainer}
                    objectsContainer={props.objectsContainer}
                    idPrefix={props.id}
                  />
                )}
              </React.Fragment>
            );
          }}
        </DragSourceAndDropTarget>
      )}
    </I18n>
  );
};

export default Instruction;
