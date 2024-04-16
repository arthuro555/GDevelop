// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../ResourcesList/ResourceSelectorWithThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelectorWithThumbnail.tsx', but '--jsx' is not set.
import ResourceSelectorWithThumbnail from '../../ResourcesList/ResourceSelectorWithThumbnail';
import { EditorProps } from './EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout, ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

export default class TiledSpriteEditor extends React.Component<EditorProps, undefined> {
  render() {
    const {
      objectConfiguration,
      project,
      resourceManagementProps,
      objectName,
      renderObjectNameField,
    } = this.props;
    const tiledSpriteConfiguration = gd.asTiledSpriteConfiguration(
      objectConfiguration
    );

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ColumnStackLayout noMargin>
        {renderObjectNameField && renderObjectNameField()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResourceSelectorWithThumbnail
          project={project}
          resourceManagementProps={resourceManagementProps}
          resourceKind="image"
          resourceName={tiledSpriteConfiguration.getTexture()}
          defaultNewResourceName={objectName}
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
          onChange={resourceName => {
            tiledSpriteConfiguration.setTexture(resourceName);
            this.forceUpdate();
          }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Select an image</Trans>}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Default width (in pixels)</Trans>}
            fullWidth
            type="number"
            value={tiledSpriteConfiguration.getWidth()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              tiledSpriteConfiguration.setWidth(parseInt(value, 10) || 0);
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Default height (in pixels)</Trans>}
            fullWidth
            type="number"
            value={tiledSpriteConfiguration.getHeight()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              tiledSpriteConfiguration.setHeight(parseInt(value, 10) || 0);
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
      </ColumnStackLayout>
    );
  }
}
