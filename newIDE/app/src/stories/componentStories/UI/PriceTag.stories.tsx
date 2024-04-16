import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/PriceTag' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PriceTag.tsx', but '--jsx' is not set.
import PriceTag from '../../../UI/PriceTag';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';

export default {
  title: 'UI Building Blocks/PriceTag',
  component: PriceTag,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PriceTag label={<Text>$8</Text>} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PriceTag label={<Text>$8.50</Text>} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PriceTag label={<Text>$1.20</Text>} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PriceTag label={<Text>$1.23</Text>} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PriceTag label={<Text>✅ Owned</Text>} />
    </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          backgroundSize: 'contain',
          backgroundImage:
            "url('https://resources.gdevelop-app.com/assets/Packs/wesxdz skullcup.png?gdUsage=img')",
          aspectRatio: '16 / 9',
          height: 200,
          padding: 10,
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PriceTag label={<Text>$1.20</Text>} withOverlay />
      </div>
    </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          backgroundSize: 'contain',
          backgroundImage:
            "url('https://resources.gdevelop-app.com/assets/Packs/wesxdz skullcup.png?gdUsage=img')",
          aspectRatio: '16 / 9',
          height: 200,
          padding: 10,
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PriceTag label={<Text>✅ Owned</Text>} withOverlay />
      </div>
    </LineStackLayout>
  </ColumnStackLayout>
);
