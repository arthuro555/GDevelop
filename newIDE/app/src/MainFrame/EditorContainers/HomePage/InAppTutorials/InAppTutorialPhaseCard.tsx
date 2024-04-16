import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import Divider from '@material-ui/core/Divider';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
import { MessageDescriptor } from '../../../../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module '../CardWidget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/CardWidget.tsx', but '--jsx' is not set.
import { CardWidget } from '../CardWidget';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/ColoredLinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColoredLinearProgress.tsx', but '--jsx' is not set.
import ColoredLinearProgress from '../../../../UI/ColoredLinearProgress';
// @ts-expect-error - TS6142 - Module '../../../../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../../../../UI/Chip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Lock'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Lock.js' implicitly has an 'any' type.
import Lock from '../../../../UI/CustomSvgIcons/Lock';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';

const styles = {
  cardTextContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 10px 20px 10px',
  },
  image: { height: 130, width: 130 },
  lockerImage: { height: 80, width: 80 },
  imageContainer: {
    width: '100%',
    height: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyPointsList: {
    paddingInlineStart: 12,
    textAlign: 'left',
    overflowWrap: 'anywhere',
  },
} as const;

type Props = {
  progress?: number,
  /** For tutorials that cannot be started yet. */
  locked?: boolean,
  size?: 'large' | 'banner',
  /** To prevent start on click. */
  disabled?: boolean,
  title: MessageDescriptor,
  description: MessageDescriptor,
  durationInMinutes?: number,
  keyPoints?: Array<MessageDescriptor>,
  onClick: () => void,
  renderImage: (props?: any) => React.ReactElement,
  loading?: boolean
};

const getTextStyle = disabled: undefined | boolean => (disabled ? { opacity: 0.4 } : undefined);

const InAppTutorialPhaseCard = ({
  progress,
  locked,
  size = 'large',
  disabled,
  title,
  description,
  durationInMinutes,
  keyPoints,
  onClick,
  renderImage,
  loading,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const shouldTextBeDisabled = loading || disabled || locked;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <CardWidget
          onClick={onClick}
          size={size}
          disabled={shouldTextBeDisabled}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
              style={{
                ...styles.imageContainer,
                backgroundColor: locked
                  ? gdevelopTheme.paper.backgroundColor.light
                  : disabled
                  ? gdevelopTheme.palette.type === 'dark'
                    ? '#4F28CD'
                    : '#9979F1'
                  : '#7046EC',
              }}
            >
              {locked ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Lock style={styles.lockerImage} />
              ) : (
                renderImage({
                  style: { ...styles.image, opacity: disabled ? 0.6 : 1 },
                })
              )}
            </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
              style={{
                ...styles.cardTextContainer,
                maxWidth: size === 'banner' ? '40%' : undefined,
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColumnStackLayout
                expand
                justifyContent="flex-start"
                useFullHeight
              >
                {progress && progress > 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <LineStackLayout alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text displayInlineAsSpan noMargin size="body2">
                      {progress}%
                    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ColoredLinearProgress value={progress} />
                  </LineStackLayout>
                ) : durationInMinutes ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Chip
                      size="small"
                      label={
                        durationInMinutes === 1 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Trans>1 minute</Trans>
                        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Trans>{durationInMinutes} minutes</Trans>
                        )
                      }
                    />
                  </Line>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Spacer />
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text
                  size="block-title"
                  noMargin
                  style={getTextStyle(shouldTextBeDisabled)}
                  color="primary"
                >
                  {i18n._(title)}
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text
                  size="body"
                  noMargin
                  style={getTextStyle(shouldTextBeDisabled)}
                  color="secondary"
                >
                  {i18n._(description)}
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {keyPoints && <Divider />}
                {keyPoints && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Column
                    noMargin
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    expand
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ul style={styles.keyPointsList}>
                      {keyPoints.map((keyPoint, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Text
                          key={`key-point-${index}`}
                          size="body2"
                          noMargin
                          style={getTextStyle(shouldTextBeDisabled)}
                          color="secondary"
                          displayAsListItem
                        >
                          {i18n._(keyPoint)}
                        </Text>
                      ))}
                    </ul>
                  </Column>
                )}
              </ColumnStackLayout>
            </div>
          </Column>
        </CardWidget>
      )}
    </I18n>
  );
};

export default InAppTutorialPhaseCard;
