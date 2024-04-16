import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetCard.tsx', but '--jsx' is not set.
import { AssetCard } from '../../../../AssetStore/AssetCard';
import { fakeAssetShortHeader1 } from '../../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'AssetStore/AssetStore/AssetCard',
  component: AssetCard,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AssetCard size={128} assetShortHeader={fakeAssetShortHeader1} />
);
