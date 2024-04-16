import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from './Chip';
import SizeIcon from '@material-ui/icons/PhotoSizeSelectSmall';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

const styles = {
  chip: {
    marginRight: 2,
    marginBottom: 2,
  },
} as const;

const makeFirstLetterUppercase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

type Props = {
  codeSizeLevel: string
};

export const ExampleSizeChip = ({
  codeSizeLevel,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Chip
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      icon={<SizeIcon />}
      size="small"
      style={styles.chip}
      label={
        codeSizeLevel === 'tiny' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Tiny</Trans>
        ) : codeSizeLevel === 'small' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Short</Trans>
        ) : codeSizeLevel === 'medium' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Medium</Trans>
        ) : codeSizeLevel === 'big' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Long</Trans>
        ) : codeSizeLevel === 'huge' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Huge</Trans>
        ) : (
          makeFirstLetterUppercase(codeSizeLevel)
        )
      }
      key="example-size-level"
    />
  );
};
