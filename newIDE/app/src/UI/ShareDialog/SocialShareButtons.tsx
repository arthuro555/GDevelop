import * as React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
// @ts-expect-error - TS6142 - Module '../Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../Grid';

type Props = {
  url: string
};

const styles = {
  icon: {
    padding: 5,
  },
} as const;

const SocialShareButtons = ({
  url,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FacebookShareButton
        url={url}
        style={styles.icon}
        quote={`Try the game I just created with GDevelop.io`}
        hashtag="#gdevelop"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FacebookIcon size={32} round />
      </FacebookShareButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RedditShareButton
        url={url}
        title={`Try the game I just created with r/gdevelop`}
        style={styles.icon}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RedditIcon size={32} round />
      </RedditShareButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TwitterShareButton
        title={`Try the game I just created with GDevelop.io`}
        hashtags={['gdevelop']}
        url={url}
        style={styles.icon}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TwitterIcon size={32} round />
      </TwitterShareButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <WhatsappShareButton
        title={`Try the game I just created with GDevelop.io`}
        url={url}
        style={styles.icon}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EmailShareButton
        subject="My GDevelop game"
        body="Try the game I just created with GDevelop.io"
        url={url}
        style={styles.icon}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <EmailIcon size={32} round />
      </EmailShareButton>
    </Line>
  );
};

export default SocialShareButtons;
