// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';

const styles = {
  image: {
    display: 'block',
    objectFit: 'cover',
  },
  thumbnail: {
    // 16/9 format
    width: 272,
    height: 153,
  },
} as const;

type Props = {
  thumbnailUrl?: string,
  gameName: string,
  background?: 'light' | 'medium' | 'dark'
};

export const GameThumbnail = ({
  thumbnailUrl,
  gameName,
  background = 'light',
}: Props) =>
  thumbnailUrl ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <img
      src={thumbnailUrl}
      style={{
        ...styles.image,
        ...styles.thumbnail,
      }}
      alt={gameName}
      title={gameName}
    />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Paper
      variant="outlined"
      style={{
        ...styles.thumbnail,
        whiteSpace: 'normal',
        display: 'flex',
      }}
      background={background}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>No thumbnail set</Trans>
      </EmptyMessage>
    </Paper>
  );
