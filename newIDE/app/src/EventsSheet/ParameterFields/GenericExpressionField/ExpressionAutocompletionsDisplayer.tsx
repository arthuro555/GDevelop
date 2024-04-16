// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import {I18n} from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import Popper from '@material-ui/core/Popper';
import muiZIndex from '@material-ui/core/styles/zIndex';
import ButtonBase from '@material-ui/core/ButtonBase';
import { ExpressionAutocompletion } from '../../../ExpressionAutocompletion';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../../../UI/ScrollView';
import { getVisibleParameterTypes } from './FormatExpressionCall';
import { ParameterRenderingServiceType } from '../ParameterFieldCommons';
import { EnumeratedInstructionOrExpressionMetadata } from '../../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../../UI/Grid';
import ObjectsRenderingService from '../../../ObjectsRendering/ObjectsRenderingService';
// @ts-expect-error - TS6142 - Module '../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../UI/Paper';
import { mapVector } from '../../../Utils/MapFor';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../../VariablesList/VariableTypeSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariableTypeSelector.tsx', but '--jsx' is not set.
import { getVariableTypeToIcon } from '../../../VariablesList/VariableTypeSelector';

const gd: libGDevelop = global.gd;

const defaultTextStyle = {
  // Break words if they are too long to fit on a single line.
  overflow: 'hidden',
  overflowWrap: 'break-word',
} as const;

const autocompletionIconSizeStyle = {
  maxWidth: 16,
  maxHeight: 16,
} as const;

const getTypeToIcon = (type: string) => {
  // Reuse variable icons for property types.
  if (type === 'number') {
    return getVariableTypeToIcon()[gd.Variable.Number];
  } else if (type === 'boolean') {
    return getVariableTypeToIcon()[gd.Variable.Boolean];
  } else {
    return getVariableTypeToIcon()[gd.Variable.String];
  }
};

// @ts-expect-error - TS2339 - Property 'src' does not exist on type '{}'.
const AutocompletionIcon = React.memo(({ src }) => {
  const {
    palette: { type: paletteType },
  } = React.useContext(GDevelopThemeContext);

  const shouldInvertGrayScale =
    paletteType === 'dark' &&
    (src.startsWith('data:image/svg+xml') || src.includes('_black'));
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <img
      src={src}
      alt=""
      style={{
        ...autocompletionIconSizeStyle,
        filter: shouldInvertGrayScale ? 'grayscale(1) invert(1)' : undefined,
      }}
    />
  );
});

const formatParameterTypesString = (
  parameterRenderingService: ParameterRenderingServiceType,
  i18n: I18nType,
  enumeratedExpressionMetadata: EnumeratedInstructionOrExpressionMetadata
) => {
  return getVisibleParameterTypes(enumeratedExpressionMetadata)
    .map(type => {
      const userFriendlyName = parameterRenderingService.getUserFriendlyTypeName(
        type
      );

      return userFriendlyName ? i18n._(userFriendlyName) : type;
    })
    .join(', ');
};

const AutocompletionRow = React.forwardRef(
  (
    {
      icon,
      iconSrc,
      label,
      parametersLabel,
      isSelected,
      onClick,
    }: {
      icon: React.ReactNode | null,
      iconSrc: string | null,
      label: string,
      parametersLabel: string | null,
      isSelected: boolean,
      onClick: () => void
    },
    ref
  ) => {
    const trimmedLabel = label.length > 46 ? label.substr(0, 46) + '…' : label;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2769 - No overload matches this call.
      <ButtonBase
        style={styles.button}
        onPointerDown={e =>
          // Prevent default behavior that gives the focus to the button and makes
          // the field lose focus, hence closing the autocompletion displayer.
          e.preventDefault()
        }
        onClick={onClick}
        ref={ref}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ src: string; }' is not assignable to type 'IntrinsicAttributes & object'. */}
        {icon || (iconSrc ? <AutocompletionIcon src={iconSrc} /> : null)}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text style={defaultTextStyle} noMargin align="left">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          {isSelected ? <b>{trimmedLabel}</b> : trimmedLabel}
          {parametersLabel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              (<i>{parametersLabel}</i>)
            </>
          )}
        </Text>
      </ButtonBase>
    );
  }
);

const isParameterVisible = (expressionMetadata: gdExpressionMetadata, parameterIndex: number): boolean => {
  const parameter = expressionMetadata.getParameter(parameterIndex);
  return (
    !parameter.isCodeOnly() &&
    // This filters parameters that are implicit because of the context
    // (MyObject.MyBehavior::).
    // Free functions have an instanceContainer as first parameter,
    // their first object parameter are kept.
    (parameterIndex !== 0 || parameter.getType() !== 'object') &&
    (parameterIndex !== 1 || parameter.getType() !== 'behavior')
  );
};

type ExpressionDocumentationProps = {
  expressionMetadata: gdExpressionMetadata,
  i18n: I18nType,
  parameterRenderingService: ParameterRenderingServiceType
};

const ExpressionDocumentation = ({
  expressionMetadata,
  i18n,
  parameterRenderingService,
}: ExpressionDocumentationProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text style={defaultTextStyle} size="body2">
        {expressionMetadata.getDescription()}
      </Text>
      {mapVector(
        expressionMetadata.getParameters(),
// @ts-expect-error - TS7006 - Parameter 'parameter' implicitly has an 'any' type. | TS7006 - Parameter 'parameterIndex' implicitly has an 'any' type.
        (parameter, parameterIndex) =>
          isParameterVisible(expressionMetadata, parameterIndex) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text style={defaultTextStyle} size="body2" key={parameterIndex}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <i>
                {i18n._(
                  parameterRenderingService.getUserFriendlyTypeName(
                    parameter.getType()
                  )
                )}
              </i>
              {' － ' + parameter.getDescription()}
            </Text>
          )
      )}
    </Column>
  );
};

type Props = {
  project: gdProject | null | undefined,
  expressionAutocompletions: Array<ExpressionAutocompletion>,
  remainingCount: number,
  selectedCompletionIndex: number,
  anchorEl: Element,
  onChoose: (chosenExpressionAutocompletion: ExpressionAutocompletion) => void,
  onScroll: () => void,
  parameterRenderingService: ParameterRenderingServiceType
};

const styles = {
  container: {
    width: 370,
    maxHeight: 150,
    display: 'flex',
    overflowX: 'hidden',
  },
  button: {
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'flex-start',
  },
  tooManyTextContainer: {
    width: '100%',
  },
  popperStyle: {
    // Ensure the popper is above everything (modal, dialog, snackbar, tooltips, etc).
    // There will be only one ExpressionAutocompletionsDisplay opened at a time, so it's fair to put the
    // highest z index. If this is breaking, check the z-index of material-ui.
    zIndex: muiZIndex.tooltip + 100,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
} as const;

export default function ExpressionAutocompletionsDisplayer({
  project,
  expressionAutocompletions,
  remainingCount,
  selectedCompletionIndex,
  anchorEl,
  onChoose,
  onScroll,
  parameterRenderingService,
}: Props) {
  const scrollView = React.useRef((null as ScrollViewInterface | null | undefined));
  const selectedAutocompletionElement = React.useRef(
    (null as React.Component<any, any> | null | undefined)
  );
  React.useEffect(
    () => {
      if (scrollView.current && selectedAutocompletionElement.current) {
        scrollView.current.scrollTo(selectedAutocompletionElement.current);
      }
    },
    [scrollView, selectedAutocompletionElement, selectedCompletionIndex]
  );

  if (expressionAutocompletions.length === 0) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Popper
          style={styles.popperStyle}
          open
          anchorEl={anchorEl}
          placement="bottom-start"
          disablePortal={
            // We can use a portal to display this component, because even if it
            // used inside a modal, which has a focus trap, it's entirely
            // controlled by the parent component.
            false
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Paper
            variant="outlined"
            square
            style={styles.container}
            background="light"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ScrollView ref={scrollView} onScroll={onScroll}>
              {expressionAutocompletions.map(
                (expressionAutocompletion, index) => {
                  const isSelected = selectedCompletionIndex === index;
                  const ref = isSelected
                    ? selectedAutocompletionElement
                    : undefined;

// @ts-expect-error - TS2339 - Property 'enumeratedExpressionMetadata' does not exist on type 'ExpressionAutocompletion'.
                  const parametersLabel = expressionAutocompletion.enumeratedExpressionMetadata
                    ? formatParameterTypesString(
                        parameterRenderingService,
                        i18n,
// @ts-expect-error - TS2339 - Property 'enumeratedExpressionMetadata' does not exist on type 'ExpressionAutocompletion'.
                        expressionAutocompletion.enumeratedExpressionMetadata
                      )
                    : null;

                  const label = expressionAutocompletion.completion;
                  const iconSrc =
                    expressionAutocompletion.kind === 'Expression'
                      ? expressionAutocompletion.enumeratedExpressionMetadata
                          .iconFilename
                      : expressionAutocompletion.kind === 'Object'
                      ? project && expressionAutocompletion.objectConfiguration
                        ? ObjectsRenderingService.getThumbnail(
                            project,
                            expressionAutocompletion.objectConfiguration
                          )
                        : 'res/types/object.png'
                      : expressionAutocompletion.kind === 'Behavior'
                      ? project && expressionAutocompletion.behaviorType
                        ? gd.MetadataProvider.getBehaviorMetadata(
                            project.getCurrentPlatform(),
                            expressionAutocompletion.behaviorType
                          ).getIconFilename()
                        : 'res/types/behavior.png'
                      : null;

                  const IconComponent =
                    expressionAutocompletion.kind === 'Variable'
                      ? getVariableTypeToIcon()[
                          expressionAutocompletion.variableType
                        ]
                      : expressionAutocompletion.kind === 'Property'
                      ? getTypeToIcon(
                          gd.ValueTypeMetadata.getPrimitiveValueType(
                            gd.ValueTypeMetadata.convertPropertyTypeToValueType(
                              expressionAutocompletion.propertyType
                            )
                          )
                        )
                      : expressionAutocompletion.kind === 'Parameter'
                      ? getTypeToIcon(
                          gd.ValueTypeMetadata.getPrimitiveValueType(
                            expressionAutocompletion.parameterType
                          )
                        )
                      : null;
                  const icon = IconComponent ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <IconComponent style={autocompletionIconSizeStyle} />
                  ) : null;

                  if (expressionAutocompletion.kind === 'Expression') {
                    if (expressionAutocompletion.isExact) return null;
                  }

                  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <AutocompletionRow
                      key={index}
                      icon={icon}
                      iconSrc={iconSrc}
                      label={label}
                      parametersLabel={parametersLabel}
                      onClick={() => onChoose(expressionAutocompletion)}
                      isSelected={isSelected}
                      ref={ref}
                    />
                  );
                }
              )}
              {remainingCount > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Column justifyContent="flex-start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>And others...</Trans>
                  </Text>
                </Column>
              )}
            </ScrollView>
          </Paper>
          {selectedCompletionIndex !== null &&
            expressionAutocompletions[selectedCompletionIndex].kind ===
              'Expression' &&
            !expressionAutocompletions[selectedCompletionIndex].isExact && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Paper
                variant="outlined"
                square
                style={styles.container}
                background="light"
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ScrollView autoHideScrollbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line noMargin expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <ExpressionDocumentation
                        expressionMetadata={
                          expressionAutocompletions[selectedCompletionIndex]
// @ts-expect-error - TS2339 - Property 'enumeratedExpressionMetadata' does not exist on type 'ExpressionAutocompletion'.
                            .enumeratedExpressionMetadata.metadata
                        }
                        i18n={i18n}
                        parameterRenderingService={parameterRenderingService}
                      />
                    </Line>
                  </Column>
                </ScrollView>
              </Paper>
            )}
        </Popper>
      )}
    </I18n>
  );
}
