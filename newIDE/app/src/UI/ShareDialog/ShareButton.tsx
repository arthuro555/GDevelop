import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../FlatButton';
// @ts-expect-error - TS6142 - Module '../Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Share'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Share.js' implicitly has an 'any' type.
import Share from '../CustomSvgIcons/Share';

type Props = {
  url: string
};

const ShareButton = ({
  url,
}: Props) => {
  const onShare = async () => {
    if (!url || !navigator.share) return;

    // We are on mobile (or on browsers supporting sharing using the system dialog).
    const shareData = {
      title: 'My GDevelop game',
      text: 'Try the game I just created with #gdevelop',
      url: url,
    } as const;

    try {
      await navigator.share(shareData);
    } catch (err: any) {
      console.error("Couldn't share the game", err);
    }
  };

  if (!navigator.share) return null;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Share</Trans>}
        onClick={onShare}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        leftIcon={<Share />}
      />
    </Line>
  );
};

export default ShareButton;
