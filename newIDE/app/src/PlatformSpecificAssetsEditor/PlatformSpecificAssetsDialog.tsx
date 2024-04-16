// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
import ResourcesLoader from '../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../ResourcesList/ResourceSelectorWithThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelectorWithThumbnail.tsx', but '--jsx' is not set.
import ResourceSelectorWithThumbnail from '../ResourcesList/ResourceSelectorWithThumbnail';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import { getImageFromPath, resizeImage } from './ImageResizer';
import { showErrorBox } from '../UI/Messages/MessageBox';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';

const path = optionalRequire('path');
const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  open: boolean,
  onClose: any,
  onApply: any,
  resourceManagementProps: ResourceManagementProps
};

type State = {
  thumbnailResourceName: string,
  desktopIconResourceNames: Array<string>,
  androidIconResourceNames: Array<string>,
  androidWindowSplashScreenAnimatedIconResourceName: string,
  iosIconResourceNames: Array<string>,
  displayGamesPlatformThumbnailWarning: boolean
};

const desktopSizes = [512];
const androidSizes = [192, 144, 96, 72, 48, 36];
/**
 * The recommended size for the image containing the Android SplashScreen icon.
 * It's based on the recommended 288dp for a xxdpi (=480 dpi) screen, which results in
 * 288 * 480 / 160 = "288 @ 3x" = 864px.
 */
const androidWindowSplashScreenAnimatedIconRecommendedSize = 864;
const iosSizes = [
  1024,
  180,
  167,
  152,
  144,
  120,
  114,
  100,
  87,
  80,
  76,
  72,
  60,
  58,
  57,
  50,
  40,
  29,
  20,
];

class PlatformSpecificAssetsDialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = this._loadFrom(props.project);
  }

  _loadFrom(project: gdProject): State {
    const platformSpecificAssets = project.getPlatformSpecificAssets();
    return {
      thumbnailResourceName: platformSpecificAssets.get('liluo', 'thumbnail'),
      desktopIconResourceNames: desktopSizes.map(size =>
        platformSpecificAssets.get('desktop', `icon-${size}`)
      ),
      androidIconResourceNames: androidSizes.map(size =>
        platformSpecificAssets.get('android', `icon-${size}`)
      ),
      androidWindowSplashScreenAnimatedIconResourceName: project
        .getPlatformSpecificAssets()
        .get('android', `windowSplashScreenAnimatedIcon`),
      iosIconResourceNames: iosSizes.map(size =>
        platformSpecificAssets.get('ios', `icon-${size}`)
      ),
      displayGamesPlatformThumbnailWarning: false,
    };
  }

  // To be updated, see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops.
  UNSAFE_componentWillReceiveProps(newProps: Props) {
    if (
      (!this.props.open && newProps.open) ||
      (newProps.open && this.props.project !== newProps.project)
    ) {
      this.setState(this._loadFrom(newProps.project));
    }
  }

  _generateFromFile = async () => {
    const { project, resourceManagementProps } = this.props;

    const resourceSource = resourceManagementProps.resourceSources
      .filter(source => source.kind === 'image')
      .filter(source => source.name.startsWith('local-file-opener'))[0];

    if (!resourceSource) {
      throw new Error(
        'No supported resource source - only local files are supported.'
      );
    }

    const resources = await resourceManagementProps.onChooseResource({
      initialSourceName: resourceSource.name,
      multiSelection: false,
      resourceKind: 'image',
    });

    if (!resources.length || !path) {
      return;
    }

    const resourcesManager = project.getResourcesManager();
    const projectPath = path.dirname(project.getProjectFile());
    const fullPath = path.resolve(projectPath, resources[0].getFile());

    const image = await getImageFromPath(fullPath);

    // Important, we are responsible for deleting the resources that were given to us.
    // Otherwise we have a memory leak.
    resources.forEach(resource => resource.delete());

    const results = await Promise.all([
      ...desktopSizes.map(size =>
        resizeImage(image, path.join(projectPath, `desktop-icon-${size}.png`), {
          width: size,
          height: size,
        })
      ),
      ...androidSizes.map(size =>
        resizeImage(image, path.join(projectPath, `android-icon-${size}.png`), {
          width: size,
          height: size,
        })
      ),
      resizeImage(
        image,
        path.join(projectPath, 'android-windowSplashScreenAnimatedIcon.png'),
        {
          width: androidWindowSplashScreenAnimatedIconRecommendedSize,
          height: androidWindowSplashScreenAnimatedIconRecommendedSize,
          transparentBorderSize:
            androidWindowSplashScreenAnimatedIconRecommendedSize / 6,
        }
      ),
      ...iosSizes.map(size =>
        resizeImage(image, path.join(projectPath, `ios-icon-${size}.png`), {
          width: size,
          height: size,
        })
      ),
    ]);

    if (results.indexOf(false) !== -1) {
      showErrorBox({
        message: 'Some icons could not be generated!',
        rawError: undefined,
        errorId: 'icon-generation-error',
        doNotReport: true,
      });
      return;
    }

    // Add resources to the game
    const allResourcesNames = [
      ...desktopSizes.map(size => `desktop-icon-${size}.png`),
      ...androidSizes.map(size => `android-icon-${size}.png`),
      'android-windowSplashScreenAnimatedIcon.png',
      ...iosSizes.map(size => `ios-icon-${size}.png`),
    ];
    allResourcesNames.forEach(resourceName => {
      if (!resourcesManager.hasResource(resourceName)) {
        const imageResource = new gd.ImageResource();
        imageResource.setFile(resourceName);
        imageResource.setName(resourceName);

        resourcesManager.addResource(imageResource);

        // Important, we are responsible for deleting the resources that we created
        // Otherwise we have a memory leak, as calling addResource is making a copy of the resource.
        imageResource.delete();
      } else {
        resourcesManager.getResource(resourceName).setFile(resourceName);
      }
    });

    // Make sure the resources are (re)loaded.
    ResourcesLoader.burstUrlsCacheForResources(project, allResourcesNames);
    setTimeout(() => {
      this.setState({
        desktopIconResourceNames: desktopSizes.map(
          size => `desktop-icon-${size}.png`
        ),
        androidIconResourceNames: androidSizes.map(
          size => `android-icon-${size}.png`
        ),
        androidWindowSplashScreenAnimatedIconResourceName:
          'android-windowSplashScreenAnimatedIcon.png',
        iosIconResourceNames: iosSizes.map(size => `ios-icon-${size}.png`),
      });
    }, 200 /* Let a bit of time so that image files can be found */);
  };

  onApply = () => {
    const { project } = this.props;
    const {
      thumbnailResourceName,
      desktopIconResourceNames,
      androidIconResourceNames,
      androidWindowSplashScreenAnimatedIconResourceName,
      iosIconResourceNames,
    } = this.state;

    const platformSpecificAssets = project.getPlatformSpecificAssets();

    platformSpecificAssets.set('liluo', `thumbnail`, thumbnailResourceName);

    desktopSizes.forEach((size, index) => {
      platformSpecificAssets.set(
        'desktop',
        `icon-${size}`,
        desktopIconResourceNames[index]
      );
    });
    androidSizes.forEach((size, index) => {
      platformSpecificAssets.set(
        'android',
        `icon-${size}`,
        androidIconResourceNames[index]
      );
    });
    platformSpecificAssets.set(
      'android',
      `windowSplashScreenAnimatedIcon`,
      androidWindowSplashScreenAnimatedIconResourceName
    );
    iosSizes.forEach((size, index) => {
      platformSpecificAssets.set(
        'ios',
        `icon-${size}`,
        iosIconResourceNames[index]
      );
    });

    this.props.onApply();
  };

  render() {
    const actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <FlatButton
        key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Cancel</Trans>}
        primary={false}
        onClick={this.props.onClose}
      />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DialogPrimaryButton
        key="apply"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Apply</Trans>}
        primary={true}
        onClick={this.onApply}
      />,
    ];
    const { project, resourceManagementProps } = this.props;
    const {
      thumbnailResourceName,
      desktopIconResourceNames,
      androidIconResourceNames,
      androidWindowSplashScreenAnimatedIconResourceName,
      iosIconResourceNames,
      displayGamesPlatformThumbnailWarning,
    } = this.state;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Project icons</Trans>}
        actions={actions}
        open={this.props.open}
        onRequestClose={this.props.onClose}
        onApply={this.onApply}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center" noMargin>
            {!!path ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <RaisedButton
                primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Generate icons from a file</Trans>}
                onClick={this._generateFromFile}
              />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Download GDevelop desktop version to generate the Android and
                  iOS icons of your game.
                </Trans>
              </Text>
            )}
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>gd.games thumbnail</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResourceSelectorWithThumbnail
            floatingLabelText={`gd.games thumbnail (1920x1080 px)`}
            project={project}
            resourceManagementProps={resourceManagementProps}
            resourceKind="image"
            resourceName={thumbnailResourceName}
            defaultNewResourceName={'Thumbnail'}
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
            onChange={resourceName => {
              this.setState({
                thumbnailResourceName: resourceName,
                displayGamesPlatformThumbnailWarning:
                  resourceName !== this.state.thumbnailResourceName,
              });
            }}
          />
          {displayGamesPlatformThumbnailWarning ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  You're about to change the thumbnail displayed on gd.games for
                  your game. Once you have applied changes here, you will then
                  need to publish a new version of your game on gd.games so that
                  this new thumbnail is used.
                </Trans>
              </AlertMessage>
            </Line>
          ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Desktop (Windows, macOS and Linux) icon</Trans>
          </Text>
          {desktopSizes.map((size, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ResourceSelectorWithThumbnail
              key={size}
              floatingLabelText={`Desktop icon (${size}x${size} px)`}
              project={project}
              resourceManagementProps={resourceManagementProps}
              resourceKind="image"
              resourceName={desktopIconResourceNames[index]}
              defaultNewResourceName={'DesktopIcon' + size}
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
              onChange={resourceName => {
                const newIcons = [...desktopIconResourceNames];
                newIcons[index] = resourceName;
                this.setState({
                  desktopIconResourceNames: newIcons,
                });
              }}
            />
          ))}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Android icons and Android 12+ splashscreen</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
            {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ResourceSelectorWithThumbnail
                floatingLabelText={`Android 12+ splashscreen icon (576x576 px)`}
                project={project}
                resourceManagementProps={resourceManagementProps}
                resourceKind="image"
                resourceName={androidWindowSplashScreenAnimatedIconResourceName}
                defaultNewResourceName={'AndroidSplashscreenIcon'}
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
                onChange={resourceName => {
                  this.setState({
                    androidWindowSplashScreenAnimatedIconResourceName: resourceName,
                  });
                }}
                helperMarkdownText={i18n._(
                  t`The image should be at least 864x864px, and the logo must fit [within a circle of 576px](https://developer.android.com/guide/topics/ui/splash-screen#splash_screen_dimensions). Transparent borders are automatically added when generated to help ensuring this.`
                )}
              />
            )}
          </I18n>
          {androidSizes.map((size, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ResourceSelectorWithThumbnail
              key={size}
              floatingLabelText={`Android icon (${size}x${size} px)`}
              project={project}
              resourceManagementProps={resourceManagementProps}
              resourceKind="image"
              resourceName={androidIconResourceNames[index]}
              defaultNewResourceName={'AndroidIcon' + size}
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
              onChange={resourceName => {
                const newIcons = [...androidIconResourceNames];
                newIcons[index] = resourceName;
                this.setState({
                  androidIconResourceNames: newIcons,
                });
              }}
            />
          ))}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>iOS (iPhone and iPad) icons</Trans>
          </Text>
          {iosSizes.map((size, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ResourceSelectorWithThumbnail
              key={size}
              floatingLabelText={`iOS icon (${size}x${size} px)`}
              project={project}
              resourceManagementProps={resourceManagementProps}
              resourceKind="image"
              resourceName={iosIconResourceNames[index]}
              defaultNewResourceName={'IosIcon' + size}
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
              onChange={resourceName => {
                const newIcons = [...iosIconResourceNames];
                newIcons[index] = resourceName;
                this.setState({
                  iosIconResourceNames: newIcons,
                });
              }}
            />
          ))}
        </ColumnStackLayout>
      </Dialog>
    );
  }
}

const PlatformSpecificAssetsDialogWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Project icons</Trans>}
    scope="project-icons"
    onClose={props.onClose}
    showOnTop
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <PlatformSpecificAssetsDialog {...props} />
  </ErrorBoundary>
);

export default PlatformSpecificAssetsDialogWithErrorBoundary;
