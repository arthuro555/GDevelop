import * as React from 'react';
import MUICard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from './Grid';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';

const styles = {
  headerContainer: {
    minWidth: 0,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  cardContent: {
    paddingBottom: 18,
    paddingTop: 0,
    minWidth: 0,
  },
} as const;

type Props = {
  children: React.ReactNode,
  cardCornerAction?: React.ReactNode,
  header?: React.ReactNode,
  background?: 'medium' | 'dark',
  disabled?: boolean,
  isHighlighted?: boolean
};

const Card = ({
  children,
  header,
  background,
  cardCornerAction,
  isHighlighted,
  disabled,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MUICard
      style={{
        opacity: disabled ? 0.5 : 1,
        backgroundColor:
          background === 'dark'
            ? gdevelopTheme.paper.backgroundColor.dark
            : gdevelopTheme.paper.backgroundColor.medium,
        ...(isHighlighted
          ? {
              borderLeftWidth: 4,
              borderLeftColor: gdevelopTheme.palette.secondary,
            }
          : {}),
      }}
      variant="outlined"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="space-between" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div
            style={{
              ...styles.headerContainer,
              paddingLeft: isMobile ? 8 : 24,
              paddingRight: cardCornerAction ? (isMobile ? 8 : 24) : 0,
            }}
          >
            {header}
          </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>{cardCornerAction}</Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CardContent
          style={{
            ...styles.cardContent,
            paddingRight: isMobile ? 8 : 24,
            paddingLeft: isMobile ? 8 : 24,
          }}
        >
          {children}
        </CardContent>
      </Column>
    </MUICard>
  );
};

export default Card;
