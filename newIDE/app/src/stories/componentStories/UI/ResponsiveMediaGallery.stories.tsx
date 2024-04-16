import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../../UI/ResponsiveMediaGallery' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ResponsiveMediaGallery.tsx', but '--jsx' is not set.
import ResponsiveMediaGallery from '../../../UI/ResponsiveMediaGallery';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../UI/Paper';

export default {
  title: 'UI Building Blocks/ResponsiveMediaGallery',
  component: ResponsiveMediaGallery,
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Paper background="dark">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout noColumnMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand noOverflowParent noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>Default</Text>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand noOverflowParent noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveMediaGallery
            mediaItems={[
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/gdevelop platformer.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/space shooter.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/particles emitter.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/lucid icons pack.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/wesxdz skullcup.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/casual buttons pack.png',
              },
            ]}
            altTextTemplate={'Image {imageIndex}'}
          />
        </Column>
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout noColumnMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand noOverflowParent noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>Eating outer margins on the side on small devices</Text>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand noOverflowParent noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveMediaGallery
            mediaItems={[
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/gdevelop platformer.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/space shooter.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/particles emitter.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/lucid icons pack.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/wesxdz skullcup.png',
              },
              {
                kind: 'image',
                url:
                  'https://resources.gdevelop-app.com/assets/Packs/casual buttons pack.png',
              },
            ]}
            altTextTemplate={'Image {imageIndex}'}
            horizontalOuterMarginToEatOnMobile={8}
          />
        </Column>
      </ResponsiveLineStackLayout>
    </Column>
  </Paper>
);
