import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../Grid';
// @ts-expect-error - TS6142 - Module '../Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../Text';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './DiscountFlame'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HotMessage/DiscountFlame.js' implicitly has an 'any' type.
import DiscountFlame from './DiscountFlame';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../CustomSvgIcons/ChevronArrowRight';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';

const styles = {
  paper: { padding: 10 },
  buttonLabel: { fontWeight: 'bold', cursor: 'default' },
} as const;

type Props = {
  title: React.ReactNode,
  message: React.ReactNode,
  onClickRightButton?: () => void,
  rightButtonLabel?: React.ReactNode
};

const HotMessage = ({
  title,
  message,
  onClickRightButton,
  rightButtonLabel,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Paper
      style={{
        ...styles.paper,
        backgroundColor: gdevelopTheme.message.hot.backgroundColor,
        color: gdevelopTheme.message.hot.color,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <DiscountFlame fontSize="large" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin color="inherit" size="sub-title">
            {title}
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin color="inherit">
            {message}
          </Text>
        </Column>
        {onClickRightButton && rightButtonLabel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Link onClick={onClickRightButton} color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Typography color="inherit" style={styles.buttonLabel}>
                {rightButtonLabel}
              </Typography>
            </Link>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ChevronArrowRight />
          </Line>
        )}
      </Line>
    </Paper>
  );
};

export default HotMessage;
