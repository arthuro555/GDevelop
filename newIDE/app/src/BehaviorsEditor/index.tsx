// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../UI/MiniToolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MiniToolbar.tsx', but '--jsx' is not set.
import { MiniToolbarText } from '../UI/MiniToolbar';
// @ts-expect-error - TS6142 - Module '../UI/HelpIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from '../UI/HelpIcon';
// @ts-expect-error - TS6142 - Module './NewBehaviorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorsEditor/NewBehaviorDialog.tsx', but '--jsx' is not set.
import NewBehaviorDialog from './NewBehaviorDialog';
import BehaviorsEditorService from './BehaviorsEditorService';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import DismissableTutorialMessage from '../Hints/DismissableTutorialMessage';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
import useForceUpdate from '../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../UI/Accordion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Accordion.tsx', but '--jsx' is not set.
import { Accordion, AccordionHeader, AccordionBody } from '../UI/Accordion';
// @ts-expect-error - TS6142 - Module '../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../UI/EmptyPlaceholder';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { IconContainer } from '../UI/IconContainer';
import { getBehaviorTutorialIds } from '../Utils/GDevelopServices/Tutorial';
import {
  addBehaviorToObject,
  listObjectBehaviorsTypes,
} from '../Utils/Behavior';
import { sendBehaviorAdded } from '../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../UI/Menu/ElementWithMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../UI/CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
import { mapVector } from '../Utils/MapFor';
import Clipboard, { SafeExtractor } from '../Utils/Clipboard';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../Utils/Serializer';
import useAlertDialog from '../UI/Alert/useAlertDialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Clipboard'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Clipboard.js' implicitly has an 'any' type.
import PasteIcon from '../UI/CustomSvgIcons/Clipboard';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Copy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Copy.js' implicitly has an 'any' type.
import CopyIcon from '../UI/CustomSvgIcons/Copy';
// @ts-expect-error - TS6142 - Module '../UI/ResponsiveFlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ResponsiveFlatButton.tsx', but '--jsx' is not set.
import ResponsiveFlatButton from '../UI/ResponsiveFlatButton';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';

const gd: libGDevelop = global.gd;

const BEHAVIORS_CLIPBOARD_KIND = 'Behaviors';

export const useBehaviorOverridingAlertDialog = () => {
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  return async (existingBehaviorNames: Array<string>): Promise<boolean> => {
    return await showConfirmation({
      title: t`Existing behaviors`,
      message: t`These behaviors are already attached to the object:${'\n\n - ' +
        existingBehaviorNames.join('\n\n - ') +
        '\n\n'}Do you want to replace their property values?`,
      confirmButtonLabel: t`Replace`,
      dismissButtonLabel: t`Omit`,
    });
  };
};

type BehaviorConfigurationEditorInterface = Record<any, any>;
type BehaviorConfigurationEditorProps = {
  project: gdProject,
  object: gdObject,
  behavior: gdBehavior,
  resourceManagementProps: ResourceManagementProps,
  onBehaviorsUpdated: () => void,
  onChangeBehaviorName: (behavior: gdBehavior, newName: string) => void,
  onRemoveBehavior: (behaviorName: string) => void,
  copyBehavior: (behaviorName: string) => void,
  canPasteBehaviors: boolean,
  pasteBehaviors: () => Promise<void>,
  openExtension: (behaviorType: string) => void
};

const BehaviorConfigurationEditor = React.forwardRef<BehaviorConfigurationEditorProps, BehaviorConfigurationEditorInterface>((
  {
    project,
    object,
    behavior,
    resourceManagementProps,
    onBehaviorsUpdated,
    onChangeBehaviorName,
    onRemoveBehavior,
    copyBehavior,
    canPasteBehaviors,
    pasteBehaviors,
    openExtension,
  },
  ref
) => {
  const { values } = React.useContext(PreferencesContext);
  const forceUpdate = useForceUpdate();
  const behaviorName = behavior.getName();
  const behaviorTypeName = behavior.getTypeName();

  if (behavior.isDefaultBehavior()) {
    return null;
  }

  const expanded = !behavior.isFolded();

  const behaviorMetadata = gd.MetadataProvider.getBehaviorMetadata(
    gd.JsPlatform.get(),
    behaviorTypeName
  );
  if (gd.MetadataProvider.isBadBehaviorMetadata(behaviorMetadata)) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Accordion
        defaultExpanded
        id={`behavior-parameters-${behaviorName}`}
        ref={ref}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AccordionHeader
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <IconButton
              key="delete"
// @ts-expect-error - TS7006 - Parameter 'ev' implicitly has an 'any' type.
              onClick={ev => {
                ev.stopPropagation();
                onRemoveBehavior(behaviorName);
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trash />
            </IconButton>,
          ]}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MiniToolbarText firstChild>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Unknown behavior</Trans>{' '}
          </MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextField margin="none" value={behaviorName} disabled />
          </Column>
        </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AccordionBody>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              This behavior is unknown. It might be a behavior that was
              defined in an extension and that was later removed. You should
              delete it.
            </Trans>
          </EmptyMessage>
        </AccordionBody>
      </Accordion>
    );
  }

  const BehaviorComponent = BehaviorsEditorService.getEditor(
    behaviorTypeName
  );
  const tutorialIds = getBehaviorTutorialIds(behaviorTypeName);
  const enabledTutorialIds = tutorialIds.filter(
    tutorialId => !values.hiddenTutorialHints[tutorialId]
  );
  const iconUrl = behaviorMetadata.getIconFilename();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Accordion
      expanded={expanded}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'newExpanded' implicitly has an 'any' type.
      onChange={(_, newExpanded) => {
        behavior.setFolded(!newExpanded);
        forceUpdate();
      }}
      id={`behavior-parameters-${behaviorName}`}
      ref={ref}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AccordionHeader
        actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <HelpIcon
            key="help"
            size="small"
            helpPagePath={behaviorMetadata.getHelpPath()}
          />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ElementWithMenu
            key="menu"
            element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <IconButton size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ThreeDotsMenu />
              </IconButton>
            }
            buildMenuTemplate={(i18n: I18nType) => [
              {
                label: i18n._(t`Delete`),
                click: () => onRemoveBehavior(behaviorName),
              },
              {
                label: i18n._(t`Copy`),
                click: () => copyBehavior(behaviorName),
              },
              {
                label: i18n._(t`Paste`),
                click: pasteBehaviors,
                enabled: canPasteBehaviors,
              },
              ...(project.hasEventsBasedBehavior(behaviorTypeName)
                ? [
                    { type: 'separator' },
                    {
                      label: i18n._(t`Edit this behavior`),
                      click: () => openExtension(behaviorTypeName),
                    },
                  ]
                : []),
            ]}
          />,
        ]}
      >
        {iconUrl ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconContainer
            src={iconUrl}
            alt={behaviorMetadata.getFullName()}
            size={20}
          />
        ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
            value={behaviorName}
            translatableHintText={t`Behavior name`}
            margin="none"
            fullWidth
            disabled
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={(e, text) => onChangeBehaviorName(behavior, text)}
            id={`behavior-${behaviorName}-name-text-field`}
          />
        </Column>
      </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AccordionBody>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column
          expand
          noMargin
          // Avoid Physics2 behavior overflow on small screens
          noOverflowParent
        >
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
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <BehaviorComponent
              behavior={behavior}
              project={project}
              object={object}
              resourceManagementProps={resourceManagementProps}
              onBehaviorUpdated={onBehaviorsUpdated}
            />
          </Line>
        </Column>
      </AccordionBody>
    </Accordion>
  );
});

type Props = {
  project: gdProject,
  eventsFunctionsExtension?: gdEventsFunctionsExtension,
  object: gdObject,
  onUpdateBehaviorsSharedData: () => void,
  onSizeUpdated?: () => void | null | undefined,
  resourceManagementProps: ResourceManagementProps,
  onBehaviorsUpdated: () => void,
  openBehaviorEvents: (extensionName: string, behaviorName: string) => Promise<void>
};

const BehaviorsEditor = (props: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const scrollView = React.useRef<ScrollViewInterface | null | undefined>(null);
  const [
    justAddedBehaviorName,
    setJustAddedBehaviorName,
  ] = React.useState<string | null | undefined>(null);
  const justAddedBehaviorAccordionElement = React.useRef<BehaviorConfigurationEditorInterface | null | undefined>(null);

  React.useEffect(
    () => {
      if (
        scrollView.current &&
        justAddedBehaviorAccordionElement.current &&
        justAddedBehaviorName
      ) {
        scrollView.current.scrollTo(justAddedBehaviorAccordionElement.current);
        setJustAddedBehaviorName(null);
        justAddedBehaviorAccordionElement.current = null;
      }
    },
    [justAddedBehaviorName]
  );

  const [newBehaviorDialogOpen, setNewBehaviorDialogOpen] = React.useState(
    false
  );

  const showBehaviorOverridingConfirmation = useBehaviorOverridingAlertDialog();

  const {
    object,
    project,
    eventsFunctionsExtension,
    onSizeUpdated,
    onBehaviorsUpdated,
    onUpdateBehaviorsSharedData,
    openBehaviorEvents,
  } = props;
  // As for now, any default behavior is hidden,
  // it avoids to get behavior metadata to check the "hidden" flag.
  const allVisibleBehaviors = object
    .getAllBehaviorNames()
    .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'behaviorName' implicitly has an 'any' type.
    .map(behaviorName => object.getBehavior(behaviorName))
// @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type.
    .filter(behavior => !behavior.isDefaultBehavior());
  const forceUpdate = useForceUpdate();

  const addBehavior = React.useCallback(
    (type: string, defaultName: string) => {
      const wasBehaviorAdded = addBehaviorToObject(
        project,
        object,
        type,
        defaultName
      );

      if (wasBehaviorAdded) {
        setNewBehaviorDialogOpen(false);
        sendBehaviorAdded({
          behaviorType: type,
          parentEditor: 'behaviors-editor',
        });
        setJustAddedBehaviorName(defaultName);
      }

      forceUpdate();
      if (onSizeUpdated) onSizeUpdated();
      onUpdateBehaviorsSharedData();
      if (onBehaviorsUpdated) onBehaviorsUpdated();
    },
    [
      forceUpdate,
      object,
      onBehaviorsUpdated,
      onSizeUpdated,
      onUpdateBehaviorsSharedData,
      project,
    ]
  );

  const onChangeBehaviorName = React.useCallback(
    (behavior: gdBehavior, newName: string) => {
      // TODO: This is disabled for now as there is no proper refactoring
      // of events after a behavior renaming. Once refactoring is available,
      // the text field can be enabled again and refactoring calls added here
      // (or in a parent).
      // Renaming a behavior is something that is really rare anyway! :)

      if (object.hasBehaviorNamed(newName)) return;
      object.renameBehavior(behavior.getName(), newName);
      forceUpdate();
      if (onBehaviorsUpdated) onBehaviorsUpdated();
    },
    [forceUpdate, object, onBehaviorsUpdated]
  );

  const onRemoveBehavior = React.useCallback(
    (behaviorName: string) => {
      let message =
        "Are you sure you want to remove this behavior? This can't be undone.";
      const dependentBehaviors = gd.WholeProjectRefactorer.findDependentBehaviorNames(
        project,
        object,
        behaviorName
      ).toJSArray();
      if (dependentBehaviors.length > 0) {
        message +=
          '\nDependent behaviors will be removed too: ' +
          dependentBehaviors.join(', ');
      }
      const answer = Window.showConfirmDialog(message);

      if (answer) {
        object.removeBehavior(behaviorName);
// @ts-expect-error - TS7006 - Parameter 'name' implicitly has an 'any' type.
        dependentBehaviors.forEach(name => object.removeBehavior(name));
        if (onSizeUpdated) onSizeUpdated();
      }
      if (onBehaviorsUpdated) onBehaviorsUpdated();
    },
    [object, onBehaviorsUpdated, onSizeUpdated, project]
  );

  const copyBehavior = React.useCallback(
    (behaviorName: string) => {
      const behavior = object.getBehavior(behaviorName);
      Clipboard.set(BEHAVIORS_CLIPBOARD_KIND, [
        {
          name: behaviorName,
          type: behavior.getTypeName(),
          serializedBehavior: serializeToJSObject(behavior),
        },
      ]);
      forceUpdate();
    },
    [forceUpdate, object]
  );

  const copyAllBehaviors = React.useCallback(
    () => {
      Clipboard.set(
        BEHAVIORS_CLIPBOARD_KIND,
// @ts-expect-error - TS7006 - Parameter 'behaviorName' implicitly has an 'any' type.
        mapVector(object.getAllBehaviorNames(), behaviorName => {
          const behavior = object.getBehavior(behaviorName);
          if (behavior.isDefaultBehavior()) {
            return null;
          }
          return {
            name: behaviorName,
            type: behavior.getTypeName(),
            serializedBehavior: serializeToJSObject(behavior),
          };
        }).filter(Boolean)
      );
      forceUpdate();
    },
    [forceUpdate, object]
  );

  const pasteBehaviors = React.useCallback(
    async () => {
      const clipboardContent = Clipboard.get(BEHAVIORS_CLIPBOARD_KIND);
      const behaviorContents = SafeExtractor.extractArray(clipboardContent);
      if (!behaviorContents) return;

      const newNamedBehaviors: Array<{
        name: string,
        type: string,
        serializedBehavior: string
      }> = [];
      const existingNamedBehaviors: Array<{
        name: string,
        type: string,
        serializedBehavior: string
      }> = [];
      const existingBehaviorFullNames: Array<string> = [];
      behaviorContents.forEach(behaviorContent => {
        const name = SafeExtractor.extractStringProperty(
          behaviorContent,
          'name'
        );
        const type = SafeExtractor.extractStringProperty(
          behaviorContent,
          'type'
        );
        const serializedBehavior = SafeExtractor.extractObjectProperty(
          behaviorContent,
          'serializedBehavior'
        );
        if (!name || !type || !serializedBehavior) {
          return;
        }

        const behaviorMetadata = gd.MetadataProvider.getBehaviorMetadata(
          project.getCurrentPlatform(),
          type
        );
        if (
          behaviorMetadata.getObjectType() !== '' &&
          behaviorMetadata.getObjectType() !== object.getType()
        ) {
          return;
        }

        if (object.hasBehaviorNamed(name)) {
          const existingBehavior = object.getBehavior(name);
          if (existingBehavior.getTypeName() !== type) {
            return;
          }
          existingNamedBehaviors.push({ name, type, serializedBehavior });
          existingBehaviorFullNames.push(behaviorMetadata.getFullName());
        } else {
          newNamedBehaviors.push({ name, type, serializedBehavior });
        }
      });

      let firstAddedBehaviorName: string | null = null;
      newNamedBehaviors.forEach(({ name, type, serializedBehavior }) => {
        object.addNewBehavior(project, type, name);
        if (object.hasBehaviorNamed(name)) {
          if (!firstAddedBehaviorName) {
            firstAddedBehaviorName = name;
          }
          const behavior = object.getBehavior(name);
          unserializeFromJSObject(behavior, serializedBehavior);
        }
      });
      // Add missing required behaviors as a 2nd step because these behaviors
      // could have been in the array.
      newNamedBehaviors.forEach(({ name }) => {
        gd.WholeProjectRefactorer.addRequiredBehaviorsFor(
          project,
          object,
          name
        );
      });

      let shouldOverrideBehaviors = false;
      if (existingNamedBehaviors.length > 0) {
        shouldOverrideBehaviors = await showBehaviorOverridingConfirmation(
          existingBehaviorFullNames
        );

        if (shouldOverrideBehaviors) {
          existingNamedBehaviors.forEach(
            ({ name, type, serializedBehavior }) => {
              if (object.hasBehaviorNamed(name)) {
                const behavior = object.getBehavior(name);
                // Property values can be replaced directly because the type has been check earlier.
                unserializeFromJSObject(behavior, serializedBehavior);
              }
            }
          );
        }
      }

      forceUpdate();
      if (firstAddedBehaviorName) {
        setJustAddedBehaviorName(firstAddedBehaviorName);
        if (onSizeUpdated) onSizeUpdated();
        onUpdateBehaviorsSharedData();
      } else if (existingNamedBehaviors.length === 1) {
        setJustAddedBehaviorName(existingNamedBehaviors[0].name);
      }
      if (firstAddedBehaviorName || shouldOverrideBehaviors) {
        if (onBehaviorsUpdated) onBehaviorsUpdated();
      }
    },
    [
      forceUpdate,
      object,
      onBehaviorsUpdated,
      onSizeUpdated,
      onUpdateBehaviorsSharedData,
      project,
      showBehaviorOverridingConfirmation,
    ]
  );

  const openExtension = React.useCallback(
    (behaviorType: string) => {
      const elements = behaviorType.split('::');
      if (elements.length !== 2) {
        return;
      }
      const extensionName = elements[0];
      const behaviorName = elements[1];

      if (
        !extensionName ||
        !project.hasEventsFunctionsExtensionNamed(extensionName)
      ) {
        return;
      }
      openBehaviorEvents(extensionName, behaviorName);
    },
    [openBehaviorEvents, project]
  );

  const isClipboardContainingBehaviors = Clipboard.has(
    BEHAVIORS_CLIPBOARD_KIND
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin expand useFullHeight noOverflowParent>
      {allVisibleBehaviors.length === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column noMargin expand justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EmptyPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            title={<Trans>Add your first behavior</Trans>}
            description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Behaviors add features to objects in a matter of clicks.
              </Trans>
            }
            helpPagePath="/behaviors"
            tutorialId="intro-behaviors-and-functions"
            actionButtonId="add-behavior-button"
            actionLabel={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              isMobile ? <Trans>Add</Trans> : <Trans>Add a behavior</Trans>
            }
            onAction={() => setNewBehaviorDialogOpen(true)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            secondaryActionIcon={<PasteIcon />}
            secondaryActionLabel={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              isClipboardContainingBehaviors ? <Trans>Paste</Trans> : null
            }
            onSecondaryAction={() => {
              pasteBehaviors();
            }}
          />
        </Column>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ScrollView ref={scrollView}>
{ /* @ts-expect-error - TS7006 - Parameter 'behavior' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type. */}
            {allVisibleBehaviors.map((behavior, index) => {
              const behaviorName = behavior.getName();

              const ref =
                justAddedBehaviorName === behaviorName
                  ? justAddedBehaviorAccordionElement
                  : null;

              return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <BehaviorConfigurationEditor
// @ts-expect-error - TS2322 - Type 'MutableRefObject<BehaviorConfigurationEditorInterface | null | undefined> | null' is not assignable to type 'LegacyRef<BehaviorConfigurationEditorProps> | undefined'.
                  ref={ref}
                  key={behaviorName}
                  project={project}
                  object={object}
                  behavior={behavior}
                  copyBehavior={copyBehavior}
                  onRemoveBehavior={onRemoveBehavior}
                  onBehaviorsUpdated={onBehaviorsUpdated}
                  onChangeBehaviorName={onChangeBehaviorName}
                  openExtension={openExtension}
                  canPasteBehaviors={isClipboardContainingBehaviors}
                  pasteBehaviors={pasteBehaviors}
                  resourceManagementProps={props.resourceManagementProps}
                />
              );
            })}
          </ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ResponsiveFlatButton
                  key={'copy-all-behaviors'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  leftIcon={<CopyIcon />}
                  label={
                    isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Copy all</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Copy all behaviors</Trans>
                    )
                  }
                  onClick={() => {
                    copyAllBehaviors();
                  }}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ResponsiveFlatButton
                  key={'paste-behaviors'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  leftIcon={<PasteIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Paste</Trans>}
                  onClick={() => {
                    pasteBehaviors();
                  }}
                  disabled={!isClipboardContainingBehaviors}
                />
              </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout justifyContent="flex-end" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
                  key="add-behavior-line"
                  label={
                    isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Add</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Add a behavior</Trans>
                    )
                  }
                  primary
                  onClick={() => setNewBehaviorDialogOpen(true)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  icon={<Add />}
                  id="add-behavior-button"
                />
              </LineStackLayout>
            </LineStackLayout>
          </Column>
        </React.Fragment>
      )}

      {newBehaviorDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <NewBehaviorDialog
          open={newBehaviorDialogOpen}
          objectType={object.getType()}
          objectBehaviorsTypes={listObjectBehaviorsTypes(object)}
          onClose={() => setNewBehaviorDialogOpen(false)}
          onChoose={addBehavior}
          project={project}
          eventsFunctionsExtension={eventsFunctionsExtension}
        />
      )}
    </Column>
  );
};

export default BehaviorsEditor;
