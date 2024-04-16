// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module './AnimationList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/AnimationList.tsx', but '--jsx' is not set.
import AnimationList, { AnimationListInterface } from './AnimationList';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../../UI/HelpButton';
import ResourcesLoader from '../../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module './PointsEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/PointsEditor/index.tsx', but '--jsx' is not set.
import PointsEditor from './PointsEditor';
// @ts-expect-error - TS6142 - Module './CollisionMasksEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/CollisionMasksEditor/index.tsx', but '--jsx' is not set.
import CollisionMasksEditor from './CollisionMasksEditor';
import { EditorProps } from '../EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../../UI/Checkbox';
import useForceUpdate from '../../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module './SpacedDismissableTutorialMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/SpacedDismissableTutorialMessage.tsx', but '--jsx' is not set.
import SpacedDismissableTutorialMessage from './SpacedDismissableTutorialMessage';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButtonWithSplitMenu.tsx', but '--jsx' is not set.
import FlatButtonWithSplitMenu from '../../../UI/FlatButtonWithSplitMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../UI/CustomSvgIcons/Add';
import { getMatchingCollisionMask } from './CollisionMasksEditor/CollisionMaskHelper';
import {
  hasAnyFrame,
  getFirstAnimationFrame,
  setCollisionMaskOnAllFrames,
} from './Utils/SpriteObjectHelper';

const gd: libGDevelop = global.gd;

type SpriteEditorProps = (EditorProps) & {
  isAnimationListLocked?: boolean
};

export default function SpriteEditor({
  objectConfiguration,
  project,
  layout,
  object,
  objectName,
  resourceManagementProps,
  onSizeUpdated,
  onObjectUpdated,
  isChildObject,
  renderObjectNameField,
}: SpriteEditorProps) {
  const [pointsEditorOpen, setPointsEditorOpen] = React.useState(false);
  const [advancedOptionsOpen, setAdvancedOptionsOpen] = React.useState(false);
  const [
    collisionMasksEditorOpen,
    setCollisionMasksEditorOpen,
  ] = React.useState(false);
  const forceUpdate = useForceUpdate();
  const spriteConfiguration = gd.asSpriteConfiguration(objectConfiguration);
  const animations = spriteConfiguration.getAnimations();
  const { isMobile } = useResponsiveWindowSize();

  const scrollView = React.useRef<ScrollViewInterface | null | undefined>(null);
  const animationList = React.useRef<AnimationListInterface | null | undefined>(null);

  const [
    justAddedAnimationName,
    setJustAddedAnimationName,
  ] = React.useState<string | null | undefined>(null);
  const justAddedAnimationElement = React.useRef<any | null | undefined>(null);

  React.useEffect(
    () => {
      if (
        scrollView.current &&
        justAddedAnimationElement.current &&
        justAddedAnimationName
      ) {
        scrollView.current.scrollTo(justAddedAnimationElement.current);
        setJustAddedAnimationName(null);
        justAddedAnimationElement.current = null;
      }
    },
    [justAddedAnimationName]
  );

  // The matching collision mask only takes the first sprite of the first
  // animation of the object. We consider this is enough to start with, and
  // the user can then edit the collision mask for further needs.
  const onCreateMatchingSpriteCollisionMask = React.useCallback(
    async () => {
      const firstSprite = getFirstAnimationFrame(animations);
      if (!firstSprite) {
        return;
      }
      const firstSpriteResourceName = firstSprite.getImageName();
      const firstAnimationResourceSource = ResourcesLoader.getResourceFullUrl(
        project,
        firstSpriteResourceName,
        {}
      );
      let matchingCollisionMask = null;
      try {
        matchingCollisionMask = await getMatchingCollisionMask(
          firstAnimationResourceSource
        );
      } catch (e: any) {
        console.error(
          'Unable to create a matching collision mask for the sprite, fallback to full image collision mask.',
          e
        );
      }
      setCollisionMaskOnAllFrames(animations, matchingCollisionMask);
      forceUpdate();
    },
    [animations, project, forceUpdate]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ScrollView ref={scrollView}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <>
              {renderObjectNameField && renderObjectNameField()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SpacedDismissableTutorialMessage />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AnimationList
                ref={animationList}
                animations={animations}
                project={project}
                layout={layout}
                object={object}
                objectName={objectName}
                resourceManagementProps={resourceManagementProps}
                onSizeUpdated={onSizeUpdated}
                onObjectUpdated={onObjectUpdated}
                isAnimationListLocked={isChildObject}
                scrollView={scrollView}
                onCreateMatchingSpriteCollisionMask={
                  onCreateMatchingSpriteCollisionMask
                }
              />
            </>
          </ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout
              justifyContent="space-between"
              noColumnMargin
            >
              {!isMobile ? ( // On mobile, use only 1 button to gain space.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ResponsiveLineStackLayout noMargin noColumnMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Edit collision masks</Trans>}
                    onClick={() => setCollisionMasksEditorOpen(true)}
                    disabled={!hasAnyFrame(animations)}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Edit points</Trans>}
                    onClick={() => setPointsEditorOpen(true)}
                    disabled={!hasAnyFrame(animations)}
                  />
                  {!isChildObject && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Advanced options</Trans>}
                      onClick={() => setAdvancedOptionsOpen(true)}
                      disabled={!hasAnyFrame(animations)}
                    />
                  )}
                </ResponsiveLineStackLayout>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButtonWithSplitMenu
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Edit collision masks</Trans>}
                  onClick={() => setCollisionMasksEditorOpen(true)}
                  disabled={!hasAnyFrame(animations)}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
                  buildMenuTemplate={i18n =>
                    [
                      {
                        label: i18n._(t`Edit points`),
                        disabled: !hasAnyFrame(animations),
                        click: () => setPointsEditorOpen(true),
                      },
                      isChildObject
                        ? {
                            label: i18n._(t`Advanced options`),
                            disabled: !hasAnyFrame(animations),
                            click: () => setAdvancedOptionsOpen(true),
                          }
                        : null,
                    ].filter(Boolean)
                  }
                />
              )}
              {!isChildObject && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Add an animation</Trans>}
                  primary
                  onClick={() => {
                    if (!animationList.current) {
                      return;
                    }
                    animationList.current.addAnimation();
                  }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  icon={<Add />}
                />
              )}
            </ResponsiveLineStackLayout>
          </Column>
          {advancedOptionsOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              title={<Trans>Advanced options</Trans>}
              actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Close</Trans>}
                  primary
                  onClick={() => setAdvancedOptionsOpen(false)}
                />,
              ]}
              maxWidth="sm"
              flexBody
              onRequestClose={() => setAdvancedOptionsOpen(false)}
              open
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Don't play the animation when the object is far from the
                      camera or hidden (recommended for performance)
                    </Trans>
                  }
                  checked={!spriteConfiguration.getUpdateIfNotVisible()}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                  onCheck={(_, value) => {
                    spriteConfiguration.setUpdateIfNotVisible(!value);

                    forceUpdate();
                    if (onObjectUpdated) onObjectUpdated();
                  }}
                />
              </Column>
            </Dialog>
          )}
          {pointsEditorOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              title={<Trans>Edit points</Trans>}
              actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Close</Trans>}
                  primary
                  onClick={() => setPointsEditorOpen(false)}
                />,
              ]}
              secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <HelpButton
                  helpPagePath="/objects/sprite/edit-points"
                  key="help"
                />,
              ]}
              onRequestClose={() => setPointsEditorOpen(false)}
              maxWidth="lg"
              flexBody
              fullHeight
              open={pointsEditorOpen}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <PointsEditor
                animations={animations}
                resourcesLoader={ResourcesLoader}
                project={project}
                onPointsUpdated={onObjectUpdated}
// @ts-expect-error - TS7006 - Parameter 'oldName' implicitly has an 'any' type. | TS7006 - Parameter 'newName' implicitly has an 'any' type.
                onRenamedPoint={(oldName, newName) =>
                  // TODO EBO Refactor event-based object events when a point is renamed.
                  layout &&
                  object &&
                  gd.WholeProjectRefactorer.renameObjectPoint(
                    project,
                    layout,
                    object,
                    oldName,
                    newName
                  )
                }
              />
            </Dialog>
          )}
          {collisionMasksEditorOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              title={<Trans>Edit collision masks</Trans>}
              actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Close</Trans>}
                  primary
                  onClick={() => setCollisionMasksEditorOpen(false)}
                />,
              ]}
              secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <HelpButton
                  helpPagePath="/objects/sprite/collision-mask"
                  key="help"
                />,
              ]}
              maxWidth="lg"
              flexBody
              fullHeight
              onRequestClose={() => setCollisionMasksEditorOpen(false)}
              open={collisionMasksEditorOpen}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CollisionMasksEditor
                animations={animations}
                resourcesLoader={ResourcesLoader}
                project={project}
                onMasksUpdated={onObjectUpdated}
                onCreateMatchingSpriteCollisionMask={
                  onCreateMatchingSpriteCollisionMask
                }
              />
            </Dialog>
          )}
        </>
      )}
    </I18n>
  );
}
