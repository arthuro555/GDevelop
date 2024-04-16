// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import Timer from '@material-ui/icons/Timer';
// @ts-expect-error - TS6142 - Module '../../../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../../../UI/TextButton';
// @ts-expect-error - TS6142 - Module '../../../UI/InlineCheckbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/InlineCheckbox.tsx', but '--jsx' is not set.
import InlineCheckbox from '../../../UI/InlineCheckbox';
// @ts-expect-error - TS6142 - Module '../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../../UI/Dialog';
// @ts-expect-error - TS6142 - Module './AnimationPreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/AnimationPreview.tsx', but '--jsx' is not set.
import AnimationPreview from './AnimationPreview';
import ResourcesLoader from '../../../ResourcesLoader';
import { ResourceExternalEditor } from '../../../ResourcesList/ResourceExternalEditor';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/ResourcePreview/ImagePreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourcePreview/ImagePreview.tsx', but '--jsx' is not set.
import { isProjectImageResourceSmooth } from '../../../ResourcesList/ResourcePreview/ImagePreview';
import useForceUpdate from '../../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout, ResponsiveLineStackLayout } from '../../../UI/Layout';
import { Tooltip } from '@material-ui/core';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import Edit from '../../../UI/CustomSvgIcons/Edit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Play'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Play.js' implicitly has an 'any' type.
import Play from '../../../UI/CustomSvgIcons/Play';
import { toFixedWithoutTrailingZeros } from '../../../Utils/Mathematics';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';

const styles = {
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    alignItems: 'center',
  },
  timeField: {
    width: 75,
    fontSize: 14,
  },
  timeIcon: {
    paddingLeft: 6,
    paddingRight: 6,
  },
  spacer: {
    width: 16,
  },
} as const;

type Props = {
  animationName: string,
  direction: gdDirection,
  resourcesLoader: typeof ResourcesLoader,
  project: gdProject,
  resourceExternalEditors: Array<ResourceExternalEditor>,
  onEditWith: (i18n: I18nType, arg2: ResourceExternalEditor) => Promise<void>,
  onDirectionUpdated?: () => void
};

const DirectionTools = ({
  animationName,
  direction,
  resourcesLoader,
  project,
  resourceExternalEditors,
  onEditWith,
  onDirectionUpdated,
}: Props) => {
  const forceUpdate = useForceUpdate();
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const currentTimeBetweenFrames = direction.getTimeBetweenFrames();
  const timeBetweenFramesFormatted = toFixedWithoutTrailingZeros(
    direction.getTimeBetweenFrames(),
    6
  );
  const hasNoSprites = direction.getSpritesCount() === 0;
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  const saveTimeBetweenFrames = newTimeBetweenFramesString: number => {
    if (!newTimeBetweenFramesString) return;
    const newTimeBetweenFrames = Math.max(
      parseFloat(newTimeBetweenFramesString),
      0.00001
    );
    if (currentTimeBetweenFrames === newTimeBetweenFrames) return;

    const newTimeIsValid = !isNaN(newTimeBetweenFrames);

    if (newTimeIsValid) {
      direction.setTimeBetweenFrames(newTimeBetweenFrames);
      if (onDirectionUpdated) onDirectionUpdated();
      forceUpdate();
    }
  };

  const setLooping = (check: boolean) => {
    direction.setLoop(!!check);
    forceUpdate();

    if (onDirectionUpdated) onDirectionUpdated();
  };

  const openPreview = (open: boolean) => {
    setPreviewOpen(open);
  };

  const imageResourceExternalEditors = resourceExternalEditors.filter(
// @ts-expect-error - TS7031 - Binding element 'kind' implicitly has an 'any' type.
    ({ kind }) => kind === 'image'
  );

  const hasSprites = direction.getSpritesCount();
  const { isMobile } = useResponsiveWindowSize();

  return (
    <I18n>
      {({ i18n }) => (
        <>
          <ResponsiveLineStackLayout
            alignItems="center"
            justifyContent="flex-end"
            noColumnMargin
          >
            <LineStackLayout noMargin>
              {!!imageResourceExternalEditors.length && (
                <TextButton
                  label={i18n._(
                    isMobile
                      ? hasSprites
                        ? t`Edit`
                        : t`Create`
                      : hasSprites
                      ? imageResourceExternalEditors[0].editDisplayName
                      : imageResourceExternalEditors[0].createDisplayName
                  )}
                  icon={<Edit />}
                  onClick={() =>
                    onEditWith(i18n, imageResourceExternalEditors[0])
                  }
                />
              )}
              <TextButton
                label={<Trans>Preview</Trans>}
                icon={<Play />}
                onClick={() => openPreview(true)}
                disabled={hasNoSprites}
              />
            </LineStackLayout>
            <LineStackLayout noMargin alignItems="center">
              <Tooltip title={<Trans>Time between frames</Trans>}>
                <Timer
                  style={{
                    ...styles.timeIcon,
                    color: hasNoSprites
                      ? gdevelopTheme.text.color.disabled
                      : gdevelopTheme.text.color.primary,
                  }}
                />
              </Tooltip>
              <SemiControlledTextField
                id="direction-time-between-frames"
                margin="none"
                style={styles.timeField}
                type="number"
                step={0.005}
                precision={2}
                min={0.01}
                max={5}
                commitOnBlur
                value={timeBetweenFramesFormatted}
                onChange={saveTimeBetweenFrames}
                disabled={hasNoSprites}
              />
              <InlineCheckbox
                checked={direction.isLooping()}
                label={
                  <Text
                    size="body-small"
                    color="primary"
                    style={{
                      opacity: hasNoSprites ? 0.5 : 1,
                    }}
                  >
                    <Trans>Loop</Trans>
                  </Text>
                }
                onCheck={(e, check) => setLooping(check)}
                disabled={hasNoSprites}
              />
            </LineStackLayout>
          </ResponsiveLineStackLayout>
          {previewOpen && (
            <Dialog
              title={<Trans>Preview {animationName}</Trans>}
              actions={[
                <DialogPrimaryButton
                  label={<Trans>Ok</Trans>}
                  primary
                  onClick={() => openPreview(false)}
                  key="ok"
                />,
              ]}
              onRequestClose={() => openPreview(false)}
              onApply={() => openPreview(false)}
              open={previewOpen}
              fullHeight
              flexBody
            >
              <AnimationPreview
                animationName={animationName}
                resourceNames={direction.getSpriteNames().toJSArray()}
                getImageResourceSource={(name: string) =>
                  resourcesLoader.getResourceFullUrl(project, name, {})
                }
                isImageResourceSmooth={(name: string) =>
                  isProjectImageResourceSmooth(project, name)
                }
                timeBetweenFrames={currentTimeBetweenFrames}
                onChangeTimeBetweenFrames={saveTimeBetweenFrames}
                isLooping={direction.isLooping()}
                hideAnimationLoader // No need to show a loader in the Direction Tools.
              />
            </Dialog>
          )}
        </>
      )}
    </I18n>
  );
// @ts-expect-error - TS1128 - Declaration or statement expected.
};

export default DirectionTools;
