// @flow
import * as React from 'react';

import muiDecorator from '../../ThemeDecorator';

import ResponsiveMediaGallery from '../../../UI/ResponsiveMediaGallery';
import Text from '../../../UI/Text';
import { Column } from '../../../UI/Grid';
import { ResponsiveLineStackLayout } from '../../../UI/Layout';
import Paper from '../../../UI/Paper';

export default {
  title: 'UI Building Blocks/ResponsiveMediaGallery',
  component: ResponsiveMediaGallery,
  decorators: [muiDecorator],
};

export const Default = () => (
  <Paper background="dark">
    <Column>
      <ResponsiveLineStackLayout noColumnMargin>
        <Column expand noOverflowParent noMargin>
          <Text>Default</Text>
        </Column>
        <Column expand noOverflowParent noMargin>
          <ResponsiveMediaGallery
            mediaItems={[
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
            ]}
            altTextTemplate={'Image {imageIndex}'}
          />
        </Column>
      </ResponsiveLineStackLayout>
      <ResponsiveLineStackLayout noColumnMargin>
        <Column expand noOverflowParent noMargin>
          <Text>Eating outer margins on the side on small devices</Text>
        </Column>
        <Column expand noOverflowParent noMargin>
          <ResponsiveMediaGallery
            mediaItems={[
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
              },
              {
                kind: 'image',
                url:
                  'res/down.png',
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
