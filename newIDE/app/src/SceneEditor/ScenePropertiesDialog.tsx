// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../UI/ColorField';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module './BehaviorSharedPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/SceneEditor/BehaviorSharedPropertiesEditor.tsx', but '--jsx' is not set.
import BehaviorSharedPropertiesEditor from './BehaviorSharedPropertiesEditor';
// @ts-expect-error - TS6142 - Module '../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../PropertiesEditor/PropertiesMapToSchema';
import some from 'lodash/some';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
import { isNullPtr } from '../Utils/IsNullPtr';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
import {
  rgbColorToRGBString,
  rgbStringAndAlphaToRGBColor,
  RGBColor,
} from '../Utils/ColorTransformer';
// @ts-expect-error - TS6142 - Module '../UI/HelpIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from '../UI/HelpIcon';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import DismissableTutorialMessage from '../Hints/DismissableTutorialMessage';
// @ts-expect-error - TS6142 - Module '../UI/Accordion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Accordion.tsx', but '--jsx' is not set.
import { Accordion, AccordionHeader, AccordionBody } from '../UI/Accordion';
// @ts-expect-error - TS6142 - Module '../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { IconContainer } from '../UI/IconContainer';
import { getBehaviorTutorialIds } from '../Utils/GDevelopServices/Tutorial';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';

const gd: libGDevelop = global.gd;

type Props = {
  open: boolean,
  layout: gdLayout,
  project: gdProject,
  onApply: () => void,
  onClose: () => void,
  onOpenMoreSettings?: () => void | null | undefined,
  onEditVariables: () => void,
  resourceManagementProps: ResourceManagementProps
};

const ScenePropertiesDialog = ({
  open,
  layout,
  project,
  onApply,
  onClose,
  onOpenMoreSettings,
  onEditVariables,
  resourceManagementProps,
}: Props) => {
  const [windowTitle, setWindowTitle] = React.useState<string>(layout.getWindowDefaultTitle());
  const [
    shouldStopSoundsOnStartup,
    setShouldStopSoundsOnStartup,
  ] = React.useState<boolean>(layout.stopSoundsOnStartup());
  const [backgroundColor, setBackgroundColor] = React.useState<RGBColor | null | undefined>({
    r: layout.getBackgroundColorRed(),
    g: layout.getBackgroundColorGreen(),
    b: layout.getBackgroundColorBlue(),
    a: 1,
  });

  React.useEffect(
    () => {
      if (open && layout) {
        setWindowTitle(layout.getWindowDefaultTitle());
        setShouldStopSoundsOnStartup(layout.stopSoundsOnStartup());
        setBackgroundColor({
          r: layout.getBackgroundColorRed(),
          g: layout.getBackgroundColorGreen(),
          b: layout.getBackgroundColorBlue(),
          a: 1,
        });
      }
    },
    [open, layout]
  );

  const onSubmit = () => {
    layout.setWindowDefaultTitle(windowTitle);
    layout.setStopSoundsOnStartup(shouldStopSoundsOnStartup);
    layout.setBackgroundColor(
      backgroundColor ? backgroundColor.r : 0,
      backgroundColor ? backgroundColor.g : 0,
      backgroundColor ? backgroundColor.b : 0
    );
    onApply();
  };

  const actions = [
    // TODO: Add support for cancelling modifications made to BehaviorSharedData
    // (either by enhancing a function like propertiesMapToSchema or using copies)
    // and then re-enable cancel button.
    // <FlatButton
    //   label={<Trans>Cancel</Trans>}
    //   primary={false}
    //   onClick={onClose}
    // />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Ok</Trans>}
      key="ok"
      primary={true}
      onClick={onSubmit}
    />,
  ];

  const allBehaviorSharedDataNames = layout
    .getAllBehaviorSharedDataNames()
    .toJSArray();

  const propertiesEditors = allBehaviorSharedDataNames
// @ts-expect-error - TS7006 - Parameter 'behaviorName' implicitly has an 'any' type.
    .map(behaviorName => {
      const behaviorSharedData = layout.getBehaviorSharedData(behaviorName);

      if (isNullPtr(gd, behaviorSharedData)) return null;

      const properties = behaviorSharedData.getProperties();
      const propertiesSchema = propertiesMapToSchema(
        properties,
// @ts-expect-error - TS7006 - Parameter 'sharedDataContent' implicitly has an 'any' type.
        sharedDataContent => behaviorSharedData.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'sharedDataContent' implicitly has an 'any' type. | TS7006 - Parameter 'name' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
        (sharedDataContent, name, value) => {
          behaviorSharedData.updateProperty(name, value);
        }
      );
      const behaviorTypeName = behaviorSharedData.getTypeName();

      const behaviorMetadata = gd.MetadataProvider.getBehaviorMetadata(
        gd.JsPlatform.get(),
        behaviorTypeName
      );
      const tutorialIds = getBehaviorTutorialIds(behaviorTypeName);
      // TODO Make this a functional component to use PreferencesContext
      const enabledTutorialIds: Array<never> = [];
      const iconUrl = behaviorMetadata.getIconFilename();

      return (
        !!propertiesSchema.length && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Accordion
            key={behaviorName}
            defaultExpanded
            id={`behavior-parameters-${behaviorName}`}
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
                  margin="none"
                  fullWidth
                  disabled
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
                  onChange={(e, text) => {}}
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
                  <BehaviorSharedPropertiesEditor
                    key={behaviorName}
                    behaviorSharedData={behaviorSharedData}
                    project={project}
                    resourceManagementProps={resourceManagementProps}
                  />
                </Line>
              </Column>
            </AccordionBody>
          </Accordion>
        )
      );
    })
    .filter(Boolean);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>{layout.getName()} properties</Trans>}
      actions={actions}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton
          key="edit-scene-variables"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Edit scene variables</Trans>}
          fullWidth
          onClick={() => {
            onEditVariables();
            onClose();
          }}
        />,
      ]}
      onRequestClose={onClose}
      onApply={onSubmit}
      open={open}
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Window title</Trans>}
          fullWidth
          type="text"
          value={windowTitle}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onChange={(e, value) => setWindowTitle(value)}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          checked={shouldStopSoundsOnStartup}
          label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Stop music and sounds at the beginning of this scene</Trans>
          }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
          onCheck={(e, check) => setShouldStopSoundsOnStartup(check)}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Scene background color</Trans>}
          fullWidth
          disableAlpha
          color={rgbColorToRGBString(backgroundColor)}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
          onChange={color =>
            setBackgroundColor(rgbStringAndAlphaToRGBColor(color))
          }
        />
        {!some(propertiesEditors) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Any additional properties will appear here if you add behaviors to
              objects, like Physics behavior.
            </Trans>
          </EmptyMessage>
        )}
        {propertiesEditors}
        {onOpenMoreSettings && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Open advanced settings</Trans>}
            fullWidth
            onClick={() => {
              if (onOpenMoreSettings) onOpenMoreSettings();
              onClose();
            }}
          />
        )}
      </ColumnStackLayout>
    </Dialog>
  );
};

export default ScenePropertiesDialog;
