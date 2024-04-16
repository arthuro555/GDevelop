import * as React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
import { tooltipEnterDelay } from '../UI/Tooltip';

const styles = {
  leftColumn: { flex: 2, minWidth: 0, maxWidth: 150 },
  rightColumn: { flex: 3, minWidth: 75 },
  label: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '17px',
    maxHeight: 34, // 2 * lineHeight to limit to 2 lines.
    opacity: 0.7,
  },
} as const;
type Props = {
  label: string,
  markdownDescription?: string | null | undefined,
  field: React.ReactNode
};

const CompactPropertiesEditorRowField = (props: Props) => {
  const title = !props.markdownDescription
    ? props.label
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    : [props.label, ' - ', <MarkdownText source={props.markdownDescription} />];
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.leftColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Tooltip
          title={title}
          enterDelay={tooltipEnterDelay}
          placement="bottom"
          PopperProps={{
            modifiers: {
              offset: {
                enabled: true,
                /**
                 * It does not seem possible to get the tooltip closer to the anchor
                 * when positioned on top. So it is positioned on bottom with a negative offset.
                 */
                offset: '0,-20',
              },
            },
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin style={styles.label}>
            {props.label}
          </Text>
        </Tooltip>
      </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.rightColumn}>{props.field}</div>
    </LineStackLayout>
  );
};

export default CompactPropertiesEditorRowField;
