import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/HighlightingTooltip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HighlightingTooltip.tsx', but '--jsx' is not set.
import HighlightingTooltip from '../../../UI/HighlightingTooltip';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../../UI/Link';
import Window from '../../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/TreeLeaves'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/TreeLeaves.js' implicitly has an 'any' type.
import TreeLeaves from '../../../UI/CustomSvgIcons/TreeLeaves';

export default {
  title: 'UI Building Blocks/HighlightingTooltip',
  component: HighlightingTooltip,
  decorators: [paperDecorator],
};

export const WithThumbnailSetByHref = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null | undefined>(null);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FixedHeightFlexContainer height={300}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          width: 150,
          border: '1px solid blue',
          borderRadius: 5,
          height: 30,
          padding: 3,
          display: 'flex',
          justifyContent: 'center',
        }}
        ref={ref => setAnchorEl(ref)}
      >
        Anchor
      </div>
      {anchorEl && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HighlightingTooltip
          title={'Games dashboard'}
          anchorElement={anchorEl}
          placement="right"
          content={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text noMargin key="paragraph">
              Follow your game’s online performance, manage published versions,
              and collect player feedback.
            </Text>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text noMargin key="link">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Link
                href="https://gdevelop.io"
                onClick={() => Window.openExternalURL('https://gdevelop.io')}
              >
                Learn more
              </Link>
            </Text>,
          ]}
          thumbnailSource="https://resources.gdevelop-app.com/tutorials/images/best-practices-when-making-games.png?gdUsage=img"
          onClose={action('onClose')}
          closeWithBackdropClick={false}
        />
      )}
    </FixedHeightFlexContainer>
  );
};

export const WithThumbnailSetInContent = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null | undefined>(null);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FixedHeightFlexContainer height={300}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          width: 150,
          border: '1px solid blue',
          borderRadius: 5,
          height: 30,
          padding: 3,
          display: 'flex',
          justifyContent: 'center',
        }}
        ref={ref => setAnchorEl(ref)}
      >
        Anchor
      </div>
      {anchorEl && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HighlightingTooltip
          title={'Games dashboard'}
          anchorElement={anchorEl}
          placement="bottom"
          content={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TreeLeaves style={{ height: 80, width: '100%' }} />,

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text noMargin>
              Follow your game’s online performance, manage published versions,
              and collect player feedback.
            </Text>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Link
                href="https://gdevelop.io"
                onClick={() => Window.openExternalURL('https://gdevelop.io')}
              >
                Learn more
              </Link>
            </Text>,
          ]}
          onClose={action('onClose')}
          closeWithBackdropClick={false}
        />
      )}
    </FixedHeightFlexContainer>
  );
};
