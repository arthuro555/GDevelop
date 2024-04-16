import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import { EditorProps } from './EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import { mapFor } from '../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../../UI/EmptyPlaceholder';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS6142 - Module '../../UI/DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
import { makeDragSourceAndDropTarget } from '../../UI/DragAndDrop/DragSourceAndDropTarget';
// @ts-expect-error - TS6142 - Module '../../UI/DragHandle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragHandle.tsx', but '--jsx' is not set.
import { DragHandleIcon } from '../../UI/DragHandle';
// @ts-expect-error - TS6142 - Module '../../UI/SortableVirtualizedItemList/DropIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SortableVirtualizedItemList/DropIndicator.tsx', but '--jsx' is not set.
import DropIndicator from '../../UI/SortableVirtualizedItemList/DropIndicator';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
import PixiResourcesLoader, {
  SpineDataOrLoadingError,
} from '../../ObjectsRendering/PixiResourcesLoader';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module './PropertyFields' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/PropertyFields.tsx', but '--jsx' is not set.
import { PropertyResourceSelector, PropertyField } from './PropertyFields';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';

const gd: libGDevelop = global.gd;

const DragSourceAndDropTarget = makeDragSourceAndDropTarget(
  'spine-animations-list'
);

const styles = {
  rowContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
  },
  rowContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
} as const;

const SpineEditor = ({
  objectConfiguration,
  project,
  layout,
  object,
  onSizeUpdated,
  onObjectUpdated,
  resourceManagementProps,
  renderObjectNameField,
}: EditorProps) => {
  const scrollView = React.useRef<ScrollViewInterface | null | undefined>(null);
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
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const draggedAnimationIndex = React.useRef<number | null>(null);

  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const forceUpdate = useForceUpdate();

  const spineConfiguration = gd.asSpineConfiguration(objectConfiguration);
  const properties = objectConfiguration.getProperties();

  const [nameErrors, setNameErrors] = React.useState<{
    [key: number]: React.ReactNode
  }>({});

  const [spineData, setSpineData] = React.useState<SpineDataOrLoadingError>({
    skeleton: null,
    loadingError: null,
    loadingErrorReason: null,
  });

  const [sourceSelectOptions, setSourceSelectOptions] = React.useState<Array<any>>([]);
  const spineResourceName = properties.get('spineResourceName').getValue();

  React.useEffect(
    () => {
      (async () => {
        const spineData = await PixiResourcesLoader.getSpineData(
          project,
          spineResourceName
        );

        setSpineData(spineData);

        if (spineData.skeleton) {
          setSourceSelectOptions(
// @ts-expect-error - TS2339 - Property 'animations' does not exist on type 'ISkeleton<ISkeletonData<IBoneData, ISlotData, ISkin, IAnimation<ITimeline>, IEventData, IIkConstraintData, ITransformConstraintData, IPathConstraintData>, IBone, ISlot, ISkin>'. | TS7006 - Parameter 'animation' implicitly has an 'any' type.
            spineData.skeleton.animations.map(animation => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectOption
                key={animation.name}
                value={animation.name}
                label={animation.name}
                shouldNotTranslate
              />
            ))
          );
        }
      })();
    },
    [project, spineResourceName, setSourceSelectOptions]
  );

  const onChangeSpineResourceName = React.useCallback(
    () => {
      spineConfiguration.removeAllAnimations();
      forceUpdate();
    },
    [forceUpdate, spineConfiguration]
  );

  const scanNewAnimations = React.useCallback(
    () => {
      const { skeleton } = spineData;
      if (!skeleton) return;

      setNameErrors({});

      const animationSources = mapFor(
        0,
        spineConfiguration.getAnimationsCount(),
// @ts-expect-error - TS7006 - Parameter 'animationIndex' implicitly has an 'any' type.
        animationIndex =>
          spineConfiguration.getAnimation(animationIndex).getSource()
      );

      let hasAddedAnimation = false;
// @ts-expect-error - TS2339 - Property 'animations' does not exist on type 'ISkeleton<ISkeletonData<IBoneData, ISlotData, ISkin, IAnimation<ITimeline>, IEventData, IIkConstraintData, ITransformConstraintData, IPathConstraintData>, IBone, ISlot, ISkin>'.
      for (const resourceAnimation of skeleton.animations) {
        if (animationSources.includes(resourceAnimation.name)) {
          continue;
        }
        const newAnimationName = spineConfiguration.hasAnimationNamed(
          resourceAnimation.name
        )
          ? ''
          : resourceAnimation.name;

        const newAnimation = new gd.SpineAnimation();
        newAnimation.setName(newAnimationName);
        newAnimation.setSource(resourceAnimation.name);
        spineConfiguration.addAnimation(newAnimation);
        newAnimation.delete();
        hasAddedAnimation = true;
      }
      if (hasAddedAnimation) {
        forceUpdate();
        onSizeUpdated();
        if (onObjectUpdated) onObjectUpdated();

        // Scroll to the bottom of the list.
        // Ideally, we'd wait for the list to be updated to scroll, but
        // to simplify the code, we just wait a few ms for a new render
        // to be done.
        setTimeout(() => {
          if (scrollView.current) {
            scrollView.current.scrollToBottom();
          }
        }, 100); // A few ms is enough for a new render to be done.
      } else {
        showAlert({
          title: t`No new animation`,
          message: t`Every animation from the Spine file is already in the list.`,
        });
      }
    },
    [
      forceUpdate,
      spineData,
      spineConfiguration,
      onObjectUpdated,
      onSizeUpdated,
      showAlert,
    ]
  );

  const addAnimation = React.useCallback(
    () => {
      setNameErrors({});

      const emptyAnimation = new gd.SpineAnimation();
      spineConfiguration.addAnimation(emptyAnimation);
      emptyAnimation.delete();
      forceUpdate();
      onSizeUpdated();
      if (onObjectUpdated) onObjectUpdated();

      // Scroll to the bottom of the list.
      // Ideally, we'd wait for the list to be updated to scroll, but
      // to simplify the code, we just wait a few ms for a new render
      // to be done.
      setTimeout(() => {
        if (scrollView.current) {
          scrollView.current.scrollToBottom();
        }
      }, 100); // A few ms is enough for a new render to be done.
    },
    [forceUpdate, onObjectUpdated, onSizeUpdated, spineConfiguration]
  );

  const removeAnimation = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'animationIndex' implicitly has an 'any' type.
    animationIndex => {
      setNameErrors({});

      spineConfiguration.removeAnimation(animationIndex);
      forceUpdate();
      onSizeUpdated();
      if (onObjectUpdated) onObjectUpdated();
    },
    [forceUpdate, onObjectUpdated, onSizeUpdated, spineConfiguration]
  );

  const moveAnimation = React.useCallback(
    (targetIndex: number) => {
      const draggedIndex = draggedAnimationIndex.current;
      if (draggedIndex === null) return;

      setNameErrors({});

      spineConfiguration.moveAnimation(
        draggedIndex,
        targetIndex > draggedIndex ? targetIndex - 1 : targetIndex
      );
      forceUpdate();
    },
    [spineConfiguration, forceUpdate]
  );

  const changeAnimationName = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'animationIndex' implicitly has an 'any' type. | TS7006 - Parameter 'newName' implicitly has an 'any' type.
    (animationIndex, newName) => {
      const currentName = spineConfiguration
        .getAnimation(animationIndex)
        .getName();
      if (currentName === newName) return;
      const animation = spineConfiguration.getAnimation(animationIndex);

      setNameErrors({});

      if (newName !== '' && spineConfiguration.hasAnimationNamed(newName)) {
        // The indexes can be used as a key because errors are cleared when
        // animations are moved.
        setNameErrors({
          ...nameErrors,
          [animationIndex]: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>The animation name {newName} is already taken</Trans>
          ),
        });
        return;
      }

      animation.setName(newName);
      if (layout && object) {
        gd.WholeProjectRefactorer.renameObjectAnimation(
          project,
          layout,
          object,
          currentName,
          newName
        );
      }
      forceUpdate();
      if (onObjectUpdated) onObjectUpdated();
    },
    [
      spineConfiguration,
      layout,
      object,
      forceUpdate,
      onObjectUpdated,
      nameErrors,
      project,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ScrollView ref={scrollView}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin>
          {renderObjectNameField && renderObjectNameField()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              You need to own a license of Spine to publish a game with a Spine
              object.
            </Trans>
          </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PropertyResourceSelector
            objectConfiguration={objectConfiguration}
            propertyName="spineResourceName"
            project={project}
            resourceManagementProps={resourceManagementProps}
            onChange={onChangeSpineResourceName}
          />
          {!spineData.skeleton && spineData.loadingErrorReason ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="error">
              {spineData.loadingErrorReason === 'invalid-spine-resource' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  The selected resource is not a proper Spine resource.
                </Trans>
              ) : spineData.loadingErrorReason ===
                'missing-texture-atlas-name' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Missing texture atlas name in the Spine file.</Trans>
              ) : spineData.loadingErrorReason ===
                'spine-resource-loading-error' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Error while loading the Spine resource (
                  {spineData.loadingError
                    ? spineData.loadingError.message
                    : 'Unknown error'}
                  ).
                </Trans>
              ) : spineData.loadingErrorReason === 'invalid-atlas-resource' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  The Atlas embedded in the Spine fine can't be located.
                </Trans>
              ) : spineData.loadingErrorReason ===
                'missing-texture-resources' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Missing texture for an atlas in the Spine file.</Trans>
              ) : spineData.loadingErrorReason ===
                'atlas-resource-loading-error' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Error while loading the Spine Texture Atlas resource (
                  {spineData.loadingError
                    ? spineData.loadingError.message
                    : 'Unknown error'}
                  ).
                </Trans>
              ) : null}
            </AlertMessage>
          ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Default size</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PropertyField
            objectConfiguration={objectConfiguration}
            propertyName="scale"
          />
          {sourceSelectOptions.length && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title">Animations</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin expand useFullHeight>
                {spineConfiguration.getAnimationsCount() === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Column noMargin expand justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <EmptyPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      title={<Trans>Add your first animation</Trans>}
                      description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>
                          Import one or more animations that are available in
                          this Spine file.
                        </Trans>
                      }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      actionLabel={<Trans>Add an animation</Trans>}
                      onAction={addAnimation}
                    />
                  </Column>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <React.Fragment>
                    {mapFor(
                      0,
                      spineConfiguration.getAnimationsCount(),
// @ts-expect-error - TS7006 - Parameter 'animationIndex' implicitly has an 'any' type.
                      animationIndex => {
                        const animation = spineConfiguration.getAnimation(
                          animationIndex
                        );

                        const animationRef =
                          justAddedAnimationName === animation.getName()
                            ? justAddedAnimationElement
                            : null;

                        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <DragSourceAndDropTarget
                            key={animationIndex}
                            beginDrag={() => {
                              draggedAnimationIndex.current = animationIndex;
                              return {};
                            }}
                            canDrag={() => true}
                            canDrop={() => true}
                            drop={() => {
                              moveAnimation(animationIndex);
                            }}
                          >
                            {({
// @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type.
                              connectDragSource,
// @ts-expect-error - TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type.
                              connectDropTarget,
// @ts-expect-error - TS7031 - Binding element 'isOver' implicitly has an 'any' type.
                              isOver,
// @ts-expect-error - TS7031 - Binding element 'canDrop' implicitly has an 'any' type.
                              canDrop,
                            }) =>
                              connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <div
                                  key={animationIndex}
                                  style={styles.rowContainer}
                                >
                                  {isOver && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                    <DropIndicator canDrop={canDrop} />
                                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <div
                                    ref={animationRef}
                                    style={{
                                      ...styles.rowContent,
                                      backgroundColor:
                                        gdevelopTheme.list.itemsBackgroundColor,
                                    }}
                                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Line noMargin expand alignItems="center">
                                      {connectDragSource(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                        <span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                            <DragHandleIcon />
                                          </Column>
                                        </span>
                                      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <Text noMargin noShrink>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                        <Trans>
                                          Animation #{animationIndex}
                                        </Trans>
                                      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <SemiControlledTextField
                                        margin="none"
                                        commitOnBlur
                                        errorText={nameErrors[animationIndex]}
                                        translatableHintText={t`Optional animation name`}
                                        value={animation.getName()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                                        onChange={text =>
                                          changeAnimationName(
                                            animationIndex,
                                            text
                                          )
                                        }
                                        fullWidth
                                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <IconButton
                                        size="small"
                                        onClick={() =>
                                          removeAnimation(animationIndex)
                                        }
                                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                        <Trash />
                                      </IconButton>
                                    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Spacer />
                                  </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <SelectField
                                      id="animation-source-field"
                                      value={animation.getSource()}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                                      onChange={(event, value) => {
                                        animation.setSource(event.target.value);
                                        forceUpdate();
                                      }}
                                      margin="dense"
                                      fullWidth
                                      floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                        <Trans>Spine animation name</Trans>
                                      }
                                      translatableHintText={t`Choose an animation`}
                                    >
                                      {sourceSelectOptions}
                                    </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      label={<Trans>Loop</Trans>}
                                      checked={animation.shouldLoop()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                                      onCheck={(e, checked) => {
                                        animation.setShouldLoop(checked);
                                        forceUpdate();
                                      }}
                                    />
                                  </ColumnStackLayout>
                                </div>
                              )
                            }
                          </DragSourceAndDropTarget>
                        );
                      }
                    )}
                  </React.Fragment>
                )}
              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ResponsiveLineStackLayout
                  justifyContent="space-between"
                  noColumnMargin
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Scan missing animations</Trans>}
                    onClick={scanNewAnimations}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Add an animation</Trans>}
                    primary
                    onClick={addAnimation}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    icon={<Add />}
                  />
                </ResponsiveLineStackLayout>
              </Column>
            </>
          )}
        </ColumnStackLayout>
      </ScrollView>
    </>
  );
};

export default SpineEditor;
