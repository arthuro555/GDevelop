import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module './Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from './Chip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Stairs'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Stairs.js' implicitly has an 'any' type.
import StairsIcon from './CustomSvgIcons/Stairs';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';

const styles = {
  chip: {
    marginRight: 2,
    marginBottom: 2,
    background: 'none',
  },
} as const;

const makeFirstLetterUppercase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

type Props = {
  difficultyLevel: string
};

export const ExampleDifficultyChip = ({
  difficultyLevel,
}: Props) => {
  const theme = React.useContext(GDevelopThemeContext);
  const color: string | null | undefined = theme.example.difficulty.color[difficultyLevel];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Chip
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      icon={<StairsIcon style={{ color }} />}
      size="small"
      style={{
        ...styles.chip,
        border: color ? `1px solid ${color}` : undefined,
      }}
      label={
        difficultyLevel === 'simple' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Simple</Trans>
        ) : difficultyLevel === 'advanced' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Advanced</Trans>
        ) : difficultyLevel === 'expert' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Expert</Trans>
        ) : (
          makeFirstLetterUppercase(difficultyLevel)
        )
      }
      key="example-size-level"
    />
  );
};
