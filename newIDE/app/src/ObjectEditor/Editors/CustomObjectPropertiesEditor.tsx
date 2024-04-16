// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../../PropertiesEditor/PropertiesMapToSchema';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
import { EditorProps } from './EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { getExtraObjectsInformation } from '../../Hints';
import { getObjectTutorialIds } from '../../Utils/GDevelopServices/Tutorial';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
import DismissableTutorialMessage from '../../Hints/DismissableTutorialMessage';
import { mapFor } from '../../Utils/MapFor';
import ObjectsEditorService from '../ObjectsEditorService';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../UI/Accordion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Accordion.tsx', but '--jsx' is not set.
import { Accordion, AccordionHeader, AccordionBody } from '../../UI/Accordion';
// @ts-expect-error - TS6142 - Module '../../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { IconContainer } from '../../UI/IconContainer';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
import AnimationList, {
  AnimationListInterface,
// @ts-expect-error - TS6142 - Module './SpriteEditor/AnimationList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/AnimationList.tsx', but '--jsx' is not set.
} from './SpriteEditor/AnimationList';
// @ts-expect-error - TS6142 - Module './SpriteEditor/PointsEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/PointsEditor/index.tsx', but '--jsx' is not set.
import PointsEditor from './SpriteEditor/PointsEditor';
// @ts-expect-error - TS6142 - Module './SpriteEditor/CollisionMasksEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/CollisionMasksEditor/index.tsx', but '--jsx' is not set.
import CollisionMasksEditor from './SpriteEditor/CollisionMasksEditor';
import {
  hasAnyFrame,
  getFirstAnimationFrame,
  setCollisionMaskOnAllFrames,
} from './SpriteEditor/Utils/SpriteObjectHelper';
import { getMatchingCollisionMask } from './SpriteEditor/CollisionMasksEditor/CollisionMaskHelper';
import ResourcesLoader from '../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButtonWithSplitMenu.tsx', but '--jsx' is not set.
import FlatButtonWithSplitMenu from '../../UI/FlatButtonWithSplitMenu';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';

const gd: libGDevelop = global.gd;

type Props = EditorProps;

const CustomObjectPropertiesEditor = (props: Props) => {
  const forceUpdate = useForceUpdate();

  const {
    objectConfiguration,
    project,
    layout,
    object,
    objectName,
    resourceManagementProps,
    onSizeUpdated,
    onObjectUpdated,
    unsavedChanges,
    renderObjectNameField,
    isChildObject,
  } = props;

  const { isMobile } = useResponsiveWindowSize();

  const customObjectConfiguration = gd.asCustomObjectConfiguration(
    objectConfiguration
  );
  const properties = customObjectConfiguration.getProperties();

  const propertiesSchema = propertiesMapToSchema(
    properties,
// @ts-expect-error - TS7006 - Parameter 'object' implicitly has an 'any' type.
    object => object.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'object' implicitly has an 'any' type. | TS7006 - Parameter 'name' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
    (object, name, value) => object.updateProperty(name, value)
  );

  const extraInformation = getExtraObjectsInformation()[
    customObjectConfiguration.getType()
  ];

  const { values } = React.useContext(PreferencesContext);
  const tutorialIds = getObjectTutorialIds(customObjectConfiguration.getType());

  const eventBasedObject = project.hasEventsBasedObject(
    customObjectConfiguration.getType()
  )
    ? project.getEventsBasedObject(customObjectConfiguration.getType())
    : null;

  const animations = customObjectConfiguration.getAnimations();

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

  const [pointsEditorOpen, setPointsEditorOpen] = React.useState(false);
  const [
    collisionMasksEditorOpen,
    setCollisionMasksEditorOpen,
  ] = React.useState(false);

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
            <ColumnStackLayout noMargin>
              {renderObjectNameField && renderObjectNameField()}
              {tutorialIds.map(tutorialId => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <DismissableTutorialMessage
                  key={tutorialId}
                  tutorialId={tutorialId}
                />
              ))}
              {propertiesSchema.length ||
              (eventBasedObject &&
                (eventBasedObject.getObjectsCount() ||
                  eventBasedObject.isAnimatable())) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <React.Fragment>
                  {extraInformation ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <ColumnStackLayout noMargin>
                        {extraInformation.map(({ kind, message }, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <AlertMessage kind={kind} key={index}>
                            {i18n._(message)}
                          </AlertMessage>
                        ))}
                      </ColumnStackLayout>
                    </Line>
                  ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <PropertiesEditor
                    unsavedChanges={unsavedChanges}
                    schema={propertiesSchema}
                    instances={[customObjectConfiguration]}
                    project={project}
                    resourceManagementProps={resourceManagementProps}
                  />
                  {eventBasedObject &&
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
                    mapFor(0, eventBasedObject.getObjectsCount(), i => {
                      const childObject = eventBasedObject.getObjectAt(i);
                      const childObjectConfiguration = customObjectConfiguration.getChildObjectConfiguration(
                        childObject.getName()
                      );
                      const editorConfiguration = ObjectsEditorService.getEditorConfiguration(
                        project,
                        childObjectConfiguration.getType()
                      );
                      const EditorComponent = editorConfiguration.component;

                      const objectMetadata = gd.MetadataProvider.getObjectMetadata(
                        gd.JsPlatform.get(),
                        childObjectConfiguration.getType()
                      );
                      const iconUrl = objectMetadata.getIconFilename();
                      const tutorialIds = getObjectTutorialIds(
                        childObjectConfiguration.getType()
                      );
                      const enabledTutorialIds = tutorialIds.filter(
                        tutorialId => !values.hiddenTutorialHints[tutorialId]
                      );
                      // TODO EBO: Add a protection against infinite loops in case
                      // of object cycles (thought it should be forbidden).
                      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Accordion key={childObject.getName()} defaultExpanded>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <AccordionHeader>
                            {iconUrl ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <IconContainer
                                src={iconUrl}
                                alt={childObject.getName()}
                                size={20}
                              />
                            ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Text size="block-title">
                                {childObject.getName()}
                              </Text>
                            </Column>
                          </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <AccordionBody>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Column expand noMargin noOverflowParent>
                              {enabledTutorialIds.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <ColumnStackLayout expand>
                                    {tutorialIds.map(tutorialId => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      <DismissableTutorialMessage
                                        key={tutorialId}
                                        tutorialId={tutorialId}
                                      />
                                    ))}
                                  </ColumnStackLayout>
                                </Line>
                              ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <EditorComponent
                                    isChildObject
                                    objectConfiguration={
                                      childObjectConfiguration
                                    }
                                    project={project}
                                    layout={layout}
                                    resourceManagementProps={
                                      resourceManagementProps
                                    }
                                    onSizeUpdated={
                                      forceUpdate /*Force update to ensure dialog is properly positioned*/
                                    }
                                    objectName={
                                      objectName + ' ' + childObject.getName()
                                    }
                                  />
                                </Column>
                              </Line>
                            </Column>
                          </AccordionBody>
                        </Accordion>
                      );
                    })}
                  {eventBasedObject && eventBasedObject.isAnimatable() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>Animations</Trans>
                      </Text>
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
                        isAnimationListLocked={false}
                        scrollView={scrollView}
                        onCreateMatchingSpriteCollisionMask={
                          onCreateMatchingSpriteCollisionMask
                        }
                      />
                    </Column>
                  )}
                </React.Fragment>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    There is nothing to configure for this object. You can still
                    use events to interact with the object.
                  </Trans>
                </EmptyMessage>
              )}
            </ColumnStackLayout>
          </ScrollView>
          {eventBasedObject &&
            eventBasedObject.isAnimatable() &&
            !isChildObject && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
                    </ResponsiveLineStackLayout>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <FlatButtonWithSplitMenu
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Edit collision masks</Trans>}
                      onClick={() => setCollisionMasksEditorOpen(true)}
                      disabled={!hasAnyFrame(animations)}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
                      buildMenuTemplate={i18n => [
                        {
                          label: i18n._(t`Edit points`),
                          disabled: !hasAnyFrame(animations),
                          click: () => setPointsEditorOpen(true),
                        },
                      ]}
                    />
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
                </ResponsiveLineStackLayout>
              </Column>
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
};

export default CustomObjectPropertiesEditor;
