import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
import { mapFor } from '../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../UI/Menu/ElementWithMenu';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
import newNameGenerator from '../Utils/NewNameGenerator';
// @ts-expect-error - TS6142 - Module '../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
import useForceUpdate from '../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
import {
  enumerateEffectsMetadata,
  EnumeratedEffectMetadata,
  setEffectDefaultParameters,
} from './EnumerateEffects';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../UI/EmptyPlaceholder';
import {
  addCreateBadgePreHookIfNotClaimed,
  TRIVIAL_FIRST_EFFECT,
} from '../Utils/GDevelopServices/Badge';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
import { makeDragSourceAndDropTarget } from '../UI/DragAndDrop/DragSourceAndDropTarget';
// @ts-expect-error - TS6142 - Module '../UI/DragHandle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragHandle.tsx', but '--jsx' is not set.
import { DragHandleIcon } from '../UI/DragHandle';
// @ts-expect-error - TS6142 - Module '../UI/SortableVirtualizedItemList/DropIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SortableVirtualizedItemList/DropIndicator.tsx', but '--jsx' is not set.
import DropIndicator from '../UI/SortableVirtualizedItemList/DropIndicator';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../UI/CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
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
import { ConnectDragSource } from 'react-dnd';
// @ts-expect-error - TS6142 - Module '../UI/ResponsiveFlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ResponsiveFlatButton.tsx', but '--jsx' is not set.
import ResponsiveFlatButton from '../UI/ResponsiveFlatButton';

const gd: libGDevelop = global.gd;

const EFFECTS_CLIPBOARD_KIND = 'Effects';

const DragSourceAndDropTarget2D = makeDragSourceAndDropTarget(
  '2d-effects-list'
);
const DragSourceAndDropTarget3D = makeDragSourceAndDropTarget(
  '3d-effects-list'
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

export const useEffectOverridingAlertDialog = () => {
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  return async (existingEffectNames: Array<string>): Promise<boolean> => {
    return await showConfirmation({
      title: t`Existing effects`,
      message: t`These effects already exist:${'\n\n - ' +
        existingEffectNames.join('\n\n - ') +
        '\n\n'}Do you want to replace them?`,
      confirmButtonLabel: t`Replace`,
      dismissButtonLabel: t`Omit`,
    });
  };
};

const Effect = React.forwardRef(
  (
    {
      layerRenderingType,
      target,
      project,
      resourceManagementProps,
      effectsContainer,
      effect,
      removeEffect,
      copyEffect,
      pasteEffectsBefore,
      chooseEffectType,
      allEffectMetadata,
      onEffectsUpdated,
      onEffectsRenamed,
      nameErrors,
      setNameErrors,
      connectDragSource,
    }: {
      layerRenderingType: '2d' | '3d',
      target: 'object' | 'layer',
      project: gdProject,
      resourceManagementProps: ResourceManagementProps,
      effectsContainer: gdEffectsContainer,
      effect: gdEffect,
      onEffectsUpdated: () => void,
      onEffectsRenamed: (oldName: string, newName: string) => void,
      removeEffect: (effect: gdEffect) => void,
      copyEffect: (effect: gdEffect) => void,
      pasteEffectsBefore: (effect: gdEffect) => Promise<void>,
      chooseEffectType: (effect: gdEffect, newEffectType: string) => void,
      allEffectMetadata: Array<EnumeratedEffectMetadata>,
      nameErrors: {
        [key: number]: React.ReactNode
      },
      setNameErrors: (
        nameErrors: {
          [key: number]: React.ReactNode
        },
      ) => void,
      connectDragSource: ConnectDragSource
    },
    ref
  ) => {
    const gdevelopTheme = React.useContext(GDevelopThemeContext);

    const preferences = React.useContext(PreferencesContext);
    const showEffectParameterNames =
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
      preferences.values.showEffectParameterNames;
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
    const setShowEffectParameterNames = preferences.setShowEffectParameterNames;

    const forceUpdate = useForceUpdate();

    const isClipboardContainingEffects = Clipboard.has(EFFECTS_CLIPBOARD_KIND);

    const renameEffect = React.useCallback(
      (effect: gdEffect, newName: string) => {
        if (newName === effect.getName()) return;
        if (nameErrors[effect.ptr]) {
          const newNameErrors = { ...nameErrors } as const;
// @ts-expect-error - TS2542 - Index signature in type '{ readonly [x: number]: ReactNode; }' only permits reading.
          delete newNameErrors[effect.ptr];
          setNameErrors(newNameErrors);
        }

        if (!newName) {
          setNameErrors({
            ...nameErrors,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            [effect.ptr]: <Trans>Effects cannot have empty names</Trans>,
          });
          return;
        }

        if (effectsContainer.hasEffectNamed(newName)) {
          setNameErrors({
            ...nameErrors,
            [effect.ptr]: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>The effect name {newName} is already taken</Trans>
            ),
          });
          return;
        }
        const oldName = effect.getName();
        effect.setName(newName);
        forceUpdate();
        onEffectsRenamed(oldName, newName);
        onEffectsUpdated();
      },
      [
        effectsContainer,
        forceUpdate,
        nameErrors,
        onEffectsRenamed,
        onEffectsUpdated,
        setNameErrors,
      ]
    );

    const effectType = effect.getEffectType();
    const effectMetadata = getEnumeratedEffectMetadata(
      allEffectMetadata,
      effectType
    );

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
// @ts-expect-error - TS2322 - Type 'ForwardedRef<unknown>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
              ref={ref}
              style={{
                ...styles.rowContent,
                backgroundColor: gdevelopTheme.list.itemsBackgroundColor,
              }}
            >
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
              <ResponsiveLineStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin noShrink>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Effect name:</Trans>
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SemiControlledTextField
                    margin="none"
                    commitOnBlur
                    errorText={nameErrors[effect.ptr]}
                    translatableHintText={t`Enter the effect name`}
                    value={effect.getName()}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
                    onChange={newName => {
                      renameEffect(effect, newName);
                    }}
                    fullWidth
                  />
                </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin noShrink>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Type:</Trans>
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectField
                    margin="none"
                    value={effectType}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                    onChange={(e, i, newEffectType: string) =>
                      chooseEffectType(effect, newEffectType)
                    }
                    fullWidth
                    translatableHintText={t`Choose the effect to apply`}
                  >
                    {allEffectMetadata.map(effectMetadata => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <SelectOption
                        key={effectMetadata.type}
                        value={effectMetadata.type}
                        label={effectMetadata.fullName}
                        disabled={
                          target === 'object' &&
                          effectMetadata.isMarkedAsNotWorkingForObjects
                        }
                      />
                    ))}
                  </SelectField>
                </Line>
              </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ElementWithMenu
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
                    click: () => removeEffect(effect),
                  },
                  {
                    label: i18n._(t`Copy`),
                    click: () => copyEffect(effect),
                  },
                  {
                    label: i18n._(t`Paste`),
                    click: () => pasteEffectsBefore(effect),
                    enabled: isClipboardContainingEffects,
                  },
                  { type: 'separator' },
                  {
                    type: 'checkbox',
                    label: i18n._(t`Show Properties Names`),
                    checked: showEffectParameterNames,
                    click: () =>
                      setShowEffectParameterNames(!showEffectParameterNames),
                  },
                ]}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
            </div>
            {effectType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand>
                  {effectMetadata ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <MarkdownText source={effectMetadata.description} />
                        </BackgroundText>
                      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <PropertiesEditor
                        instances={[effect]}
                        schema={effectMetadata.parametersSchema}
                        project={project}
                        resourceManagementProps={resourceManagementProps}
                        renderExtraDescriptionText={
                          showEffectParameterNames
                            ? parameterName: string =>
                                i18n._(
                                  t`Property name in events: \`${parameterName}\` `
                                )
{ /* @ts-expect-error - TS1005 - '}' expected. | TS1381 - Unexpected token. Did you mean `{'}'}` or `&rbrace;`? | TS1382 - Unexpected token. Did you mean `{'>'}` or `&gt;`? */}
                            : undefined
                        }
                      />
                    </React.Fragment>
                  ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
                </Column>
              </Line>
            )}
          </React.Fragment>
        )}
      </I18n>
    );
  }
);

type Props = {
  project: gdProject,
  resourceManagementProps: ResourceManagementProps,
  effectsContainer: gdEffectsContainer,
  onEffectsUpdated: () => void,
  onEffectsRenamed: (oldName: string, newName: string) => void,
  target: 'object' | 'layer',
  layerRenderingType: string
};

const getEnumeratedEffectMetadata = (allEffectDescriptions: Array<EnumeratedEffectMetadata>, effectType: string): EnumeratedEffectMetadata | null | undefined => {
  return allEffectDescriptions.find(
    effectMetadata => effectMetadata.type === effectType
  );
};

export const getEffects2DCount = (
  platform: gdPlatform,
  effectsContainer: gdEffectsContainer
) => {
  const effectCount = effectsContainer.getEffectsCount();
  let effect2DCount = 0;
  for (let i = 0; i < effectCount; i++) {
    const effect: gdEffect = effectsContainer.getEffectAt(i);
    const effectMetadata = gd.MetadataProvider.getEffectMetadata(
      platform,
      effect.getEffectType()
    );
    if (!effectMetadata || !effectMetadata.isMarkedAsOnlyWorkingFor3D()) {
      effect2DCount++;
    }
  }
  return effect2DCount;
};

export const getEffects3DCount = (
  platform: gdPlatform,
  effectsContainer: gdEffectsContainer
) => {
  const effectCount = effectsContainer.getEffectsCount();
  let effect3DCount = 0;
  for (let i = 0; i < effectCount; i++) {
    const effect: gdEffect = effectsContainer.getEffectAt(i);
    const effectMetadata = gd.MetadataProvider.getEffectMetadata(
      platform,
      effect.getEffectType()
    );
    if (!effectMetadata || !effectMetadata.isMarkedAsOnlyWorkingFor2D()) {
      effect3DCount++;
    }
  }
  return effect3DCount;
};

/**
 * Display a list of effects and allow to add/remove/edit them.
 *
 * All available effects are fetched from the project's platform.
 */
export default function EffectsList(props: Props) {
  const {
    effectsContainer,
    onEffectsUpdated,
    onEffectsRenamed,
    project,
    target,
  } = props;
  const scrollView = React.useRef<ScrollViewInterface | null | undefined>(null);
  const [justAddedEffectName, setJustAddedEffectName] = React.useState<string | null | undefined>(null);
  const justAddedEffectElement = React.useRef<any | null | undefined>(null);

  React.useEffect(
    () => {
      if (
        scrollView.current &&
        justAddedEffectElement.current &&
        justAddedEffectName
      ) {
        scrollView.current.scrollTo(justAddedEffectElement.current);
        setJustAddedEffectName(null);
        justAddedEffectElement.current = null;
      }
    },
    [justAddedEffectName]
  );

  const draggedEffect = React.useRef<gdEffect | null | undefined>(null);

  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const [nameErrors, setNameErrors] = React.useState<{
    [key: number]: React.ReactNode
  }>({});

  const allEffectMetadata = React.useMemo(
    () => enumerateEffectsMetadata(props.project),
    [props.project]
  );

  const all3DEffectMetadata = React.useMemo(
    () => {
      const lightEffectMetadata = [];
      const fogEffectMetadata = [];
      const otherEffectMetadata = [];
      for (const effect of allEffectMetadata) {
        if (!effect.isMarkedAsOnlyWorkingFor3D) {
          continue;
        }
        if (effect.type.endsWith('Light')) {
          lightEffectMetadata.push(effect);
        } else if (effect.type.endsWith('Fog')) {
          fogEffectMetadata.push(effect);
        } else {
          otherEffectMetadata.push(effect);
        }
      }
      return [
        ...lightEffectMetadata,
        ...fogEffectMetadata,
        ...otherEffectMetadata,
      ];
    },
    [allEffectMetadata]
  );

  const all2DEffectMetadata = React.useMemo(
    () => allEffectMetadata.filter(effect => effect.isMarkedAsOnlyWorkingFor2D),
    [allEffectMetadata]
  );

  const showEffectOverridingConfirmation = useEffectOverridingAlertDialog();

  const forceUpdate = useForceUpdate();

  const chooseEffectType = React.useCallback(
    (effect: gdEffect, newEffectType: string) => {
      effect.setEffectType(newEffectType);
      const effectMetadata = getEnumeratedEffectMetadata(
        allEffectMetadata,
        newEffectType
      );

      if (effectMetadata) {
        setEffectDefaultParameters(effect, effectMetadata.effectMetadata);
      }

      forceUpdate();
      onEffectsUpdated();
    },
    [allEffectMetadata, forceUpdate, onEffectsUpdated]
  );

  const _addEffect = React.useCallback(
    (is3D: boolean) => {
      const newName = newNameGenerator('Effect', name =>
        effectsContainer.hasEffectNamed(name)
      );
      const effect = effectsContainer.insertNewEffect(
        newName,
        effectsContainer.getEffectsCount()
      );

      if (is3D) {
        chooseEffectType(effect, 'Scene3D::DirectionalLight');
      } else {
        chooseEffectType(effect, 'Outline');
      }

      forceUpdate();
      onEffectsUpdated();
      setJustAddedEffectName(newName);
    },
    [chooseEffectType, effectsContainer, forceUpdate, onEffectsUpdated]
  );

  const addEffect = addCreateBadgePreHookIfNotClaimed(
    authenticatedUser,
    TRIVIAL_FIRST_EFFECT,
    _addEffect
  );

  const removeEffect = React.useCallback(
    (effect: gdEffect) => {
      effectsContainer.removeEffect(effect.getName());
      forceUpdate();
      onEffectsUpdated();
    },
    [effectsContainer, forceUpdate, onEffectsUpdated]
  );

  const copyEffect = React.useCallback(
    (effect: gdEffect) => {
      Clipboard.set(EFFECTS_CLIPBOARD_KIND, [
        {
          name: effect.getName(),
          type: effect.getEffectType(),
          serializedEffect: serializeToJSObject(effect),
        },
      ]);
      forceUpdate();
    },
    [forceUpdate]
  );

  const copyAllEffects = React.useCallback(
    () => {
      Clipboard.set(
        EFFECTS_CLIPBOARD_KIND,
        mapFor(0, effectsContainer.getEffectsCount(), (index: number) => {
          const effect: gdEffect = effectsContainer.getEffectAt(index);
          return {
            name: effect.getName(),
            type: effect.getEffectType(),
            serializedEffect: serializeToJSObject(effect),
          };
        })
      );
      forceUpdate();
    },
    [forceUpdate, effectsContainer]
  );

  const pasteEffects = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'effectInsertionIndex' implicitly has an 'any' type.
    async effectInsertionIndex => {
      const clipboardContent = Clipboard.get(EFFECTS_CLIPBOARD_KIND);
      const effectContents = SafeExtractor.extractArray(clipboardContent);
      if (!effectContents) return;

      const newNamedEffects: Array<{
        name: string,
        serializedEffect: string
      }> = [];
      const existingNamedEffects: Array<{
        name: string,
        serializedEffect: string
      }> = [];
      effectContents.forEach(effectContent => {
        const name = SafeExtractor.extractStringProperty(effectContent, 'name');
        const type = SafeExtractor.extractStringProperty(effectContent, 'type');
        const serializedEffect = SafeExtractor.extractObjectProperty(
          effectContent,
          'serializedEffect'
        );
        if (!name || !serializedEffect) {
          return;
        }

        if (type) {
          const effectMetadata = gd.MetadataProvider.getEffectMetadata(
            project.getCurrentPlatform(),
            type
          );
          if (!effectMetadata) {
            return;
          }
          if (
            target === 'object' &&
            effectMetadata.isMarkedAsNotWorkingForObjects()
          ) {
            return;
          }
        }

        if (effectsContainer.hasEffectNamed(name)) {
          existingNamedEffects.push({ name, serializedEffect });
        } else {
          newNamedEffects.push({ name, serializedEffect });
        }
      });

      let firstAddedEffectName: string | null = null;
      let index = effectInsertionIndex;
      newNamedEffects.forEach(({ name, serializedEffect }) => {
        const effect = effectsContainer.insertNewEffect(name, index);
        index++;
        unserializeFromJSObject(effect, serializedEffect);
        if (!firstAddedEffectName) {
          firstAddedEffectName = name;
        }
      });

      let shouldOverrideEffects = false;
      if (existingNamedEffects.length > 0) {
        shouldOverrideEffects = await showEffectOverridingConfirmation(
          existingNamedEffects.map(namedEffect => namedEffect.name)
        );

        if (shouldOverrideEffects) {
          existingNamedEffects.forEach(({ name, serializedEffect }) => {
            if (effectsContainer.hasEffectNamed(name)) {
              const effect = effectsContainer.getEffect(name);
              unserializeFromJSObject(effect, serializedEffect);
            }
          });
        }
      }

      forceUpdate();
      if (firstAddedEffectName) {
        setJustAddedEffectName(firstAddedEffectName);
      } else if (existingNamedEffects.length === 1) {
        setJustAddedEffectName(existingNamedEffects[0].name);
      }
      if (firstAddedEffectName || shouldOverrideEffects) {
        if (onEffectsUpdated) onEffectsUpdated();
      }
    },
    [
      forceUpdate,
      project,
      target,
      effectsContainer,
      showEffectOverridingConfirmation,
      onEffectsUpdated,
    ]
  );

  const pasteEffectsAtTheEnd = React.useCallback(
    async () => {
      await pasteEffects(effectsContainer.getEffectsCount());
    },
    [effectsContainer, pasteEffects]
  );

  const pasteEffectsBefore = React.useCallback(
    async (effect: gdEffect) => {
      await pasteEffects(effectsContainer.getEffectPosition(effect.getName()));
    },
    [effectsContainer, pasteEffects]
  );

  const moveEffect = React.useCallback(
    (targetEffect: gdEffect) => {
      const { current } = draggedEffect;
      if (!current) return;

      const draggedIndex = effectsContainer.getEffectPosition(
        current.getName()
      );
      const targetIndex = effectsContainer.getEffectPosition(
        targetEffect.getName()
      );

      effectsContainer.moveEffect(
        draggedIndex,
        targetIndex > draggedIndex ? targetIndex - 1 : targetIndex
      );
      forceUpdate();
      onEffectsUpdated();
    },
    [effectsContainer, forceUpdate, onEffectsUpdated]
  );

  const isClipboardContainingEffects = Clipboard.has(EFFECTS_CLIPBOARD_KIND);

  const getDuplicatedUniqueEffectMetadata = React.useCallback(
    () => {
      if (effectsContainer.getEffectsCount() < 2) {
        return null;
      }
      const uniqueEffectTypes: Array<string> = [];
      for (let i = 0; i < effectsContainer.getEffectsCount(); i++) {
        const effect: gdEffect = effectsContainer.getEffectAt(i);
        const effectType = effect.getEffectType();
        const effectMetadata = getEnumeratedEffectMetadata(
          allEffectMetadata,
          effectType
        );
        if (!effectMetadata) {
          continue;
        }
        // TODO Add an `isUnique` attribute in effect metadata if more effect are unique.
        if (
          effectType === 'Scene3D::LinearFog' ||
          effectType === 'Scene3D::ExponentialFog'
        ) {
          if (uniqueEffectTypes.includes(effectType)) {
            return effectMetadata;
          }
          uniqueEffectTypes.push(effectType);
        }
      }
      return null;
    },
    [allEffectMetadata, effectsContainer]
  );

  const duplicatedUniqueEffectMetadata = getDuplicatedUniqueEffectMetadata();

  // Count the number of effects to hide titles of empty sections.
  const platform = project.getCurrentPlatform();
  const effects2DCount = getEffects2DCount(platform, effectsContainer);
  const effects3DCount = getEffects3DCount(platform, effectsContainer);
  const visibleEffectsCount =
    props.layerRenderingType === '2d'
      ? effects2DCount
      : props.layerRenderingType === '3d'
      ? effects3DCount
      : effectsContainer.getEffectsCount();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column noMargin expand useFullHeight>
          {visibleEffectsCount !== 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ScrollView ref={scrollView}>
                {duplicatedUniqueEffectMetadata && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>
                          The "{duplicatedUniqueEffectMetadata.fullName}" effect
                          can only be applied once.
                        </Trans>
                      </AlertMessage>
                    </Column>
                  </Line>
                )}
                {effectsContainer.getEffectsCount() > 3 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <DismissableAlertMessage
                        identifier="too-much-effects"
                        kind="warning"
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>
                          Using a lot of effects can have a severe negative
                          impact on the rendering performance, especially on
                          low-end or mobile devices. Consider using less effects
                          if possible. You can also disable and re-enable
                          effects as needed using events.
                        </Trans>
                      </DismissableAlertMessage>
                    </Column>
                  </Line>
                )}
                {props.layerRenderingType !== '2d' && effects3DCount > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Column noMargin expand>
                    {props.layerRenderingType !== '3d' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Trans>3D effects</Trans>
                          </Text>
                        </Line>
                      </Column>
                    )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Column noMargin expand>
                        {mapFor(
                          0,
                          effectsContainer.getEffectsCount(),
                          (i: number) => {
                            const effect: gdEffect = effectsContainer.getEffectAt(
                              i
                            );
                            const effectType = effect.getEffectType();
                            const effectMetadata = getEnumeratedEffectMetadata(
                              allEffectMetadata,
                              effectType
                            );

                            const effectRef =
                              justAddedEffectName === effect.getName()
                                ? justAddedEffectElement
                                : null;

                            return !effectMetadata ||
                              !effectMetadata.isMarkedAsOnlyWorkingFor2D ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <DragSourceAndDropTarget3D
                                key={effect.ptr}
                                beginDrag={() => {
                                  draggedEffect.current = effect;
                                  return {};
                                }}
                                canDrag={() => true}
                                canDrop={() => true}
                                drop={() => {
                                  moveEffect(effect);
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
                                      key={effect.ptr}
                                      style={styles.rowContainer}
                                    >
                                      {isOver && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                        <DropIndicator canDrop={canDrop} />
                                      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <Effect
                                        ref={effectRef}
                                        layerRenderingType={'3d'}
                                        target={target}
                                        project={project}
                                        resourceManagementProps={
                                          props.resourceManagementProps
                                        }
                                        effectsContainer={effectsContainer}
                                        effect={effect}
                                        removeEffect={removeEffect}
                                        copyEffect={copyEffect}
                                        pasteEffectsBefore={pasteEffectsBefore}
                                        chooseEffectType={chooseEffectType}
                                        allEffectMetadata={all3DEffectMetadata}
                                        onEffectsUpdated={onEffectsUpdated}
                                        onEffectsRenamed={onEffectsRenamed}
                                        nameErrors={nameErrors}
                                        setNameErrors={setNameErrors}
                                        connectDragSource={connectDragSource}
                                      />
                                    </div>
                                  )
                                }
                              </DragSourceAndDropTarget3D>
                            ) : null;
                          }
                        )}
                      </Column>
                    </Line>
                  </Column>
                )}
                {props.layerRenderingType !== '3d' && effects2DCount > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Column noMargin expand>
                    {props.layerRenderingType !== '2d' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Trans>2D effects</Trans>
                          </Text>
                        </Line>
                      </Column>
                    )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Column noMargin expand>
                        {mapFor(
                          0,
                          effectsContainer.getEffectsCount(),
                          (i: number) => {
                            const effect: gdEffect = effectsContainer.getEffectAt(
                              i
                            );
                            const effectType = effect.getEffectType();
                            const effectMetadata = getEnumeratedEffectMetadata(
                              allEffectMetadata,
                              effectType
                            );

                            const effectRef =
                              justAddedEffectName === effect.getName()
                                ? justAddedEffectElement
                                : null;

                            return !effectMetadata ||
                              !effectMetadata.isMarkedAsOnlyWorkingFor3D ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <DragSourceAndDropTarget2D
                                key={effect.ptr}
                                beginDrag={() => {
                                  draggedEffect.current = effect;
                                  return {};
                                }}
                                canDrag={() => true}
                                canDrop={() => true}
                                drop={() => {
                                  moveEffect(effect);
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
                                      key={effect.ptr}
                                      style={styles.rowContainer}
                                    >
                                      {isOver && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                        <DropIndicator canDrop={canDrop} />
                                      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <Effect
                                        ref={effectRef}
                                        layerRenderingType={'2d'}
                                        target={target}
                                        project={project}
                                        resourceManagementProps={
                                          props.resourceManagementProps
                                        }
                                        effectsContainer={effectsContainer}
                                        effect={effect}
                                        removeEffect={removeEffect}
                                        copyEffect={copyEffect}
                                        pasteEffectsBefore={pasteEffectsBefore}
                                        chooseEffectType={chooseEffectType}
                                        allEffectMetadata={all2DEffectMetadata}
                                        onEffectsUpdated={onEffectsUpdated}
                                        onEffectsRenamed={onEffectsRenamed}
                                        nameErrors={nameErrors}
                                        setNameErrors={setNameErrors}
                                        connectDragSource={connectDragSource}
                                      />
                                    </div>
                                  )
                                }
                              </DragSourceAndDropTarget2D>
                            ) : null;
                          }
                        )}
                      </Column>
                    </Line>
                  </Column>
                )}
              </ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <LineStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ResponsiveFlatButton
                      key={'copy-all-effects'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      leftIcon={<CopyIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Copy all effects</Trans>}
                      onClick={() => {
                        copyAllEffects();
                      }}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ResponsiveFlatButton
                      key={'paste-effects'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      leftIcon={<PasteIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Paste</Trans>}
                      onClick={() => {
                        pasteEffectsAtTheEnd();
                      }}
                      disabled={!isClipboardContainingEffects}
                    />
                  </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <LineStackLayout justifyContent="flex-end" expand>
                    {props.layerRenderingType !== '2d' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <RaisedButton
                        primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        label={<Trans>Add a 3D effect</Trans>}
                        onClick={() => addEffect(true)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        icon={<Add />}
                      />
                    )}
                    {props.layerRenderingType !== '3d' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <RaisedButton
                        primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        label={<Trans>Add a 2D effect</Trans>}
                        onClick={() => addEffect(false)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        icon={<Add />}
                      />
                    )}
                  </LineStackLayout>
                </Line>
              </Column>
            </React.Fragment>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column noMargin expand justifyContent="center">
              {props.layerRenderingType === '' ||
              props.layerRenderingType === '2d+3d' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <EmptyPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  title={<Trans>Add your first effect</Trans>}
                  description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Effects create visual changes to the object.</Trans>
                  }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  actionLabel={<Trans>Add a 2D effect</Trans>}
                  helpPagePath={
                    props.target === 'object'
                      ? '/objects/effects'
                      : '/interface/scene-editor/layer-effects'
                  }
                  onAction={() => addEffect(false)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  secondaryActionIcon={<Add />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  secondaryActionLabel={<Trans>Add a 3D effect</Trans>}
                  onSecondaryAction={() => addEffect(true)}
                />
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <EmptyPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  title={<Trans>Add your first effect</Trans>}
                  description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Effects create visual changes to the object.</Trans>
                  }
                  actionLabel={
                    props.layerRenderingType === '3d' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Add a 3D effect</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Add a 2D effect</Trans>
                    )
                  }
                  helpPagePath={
                    props.target === 'object'
                      ? '/objects/effects'
                      : '/interface/scene-editor/layer-effects'
                  }
                  onAction={() => addEffect(props.layerRenderingType === '3d')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  secondaryActionIcon={<PasteIcon />}
                  secondaryActionLabel={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    isClipboardContainingEffects ? <Trans>Paste</Trans> : null
                  }
                  onSecondaryAction={() => {
                    pasteEffectsAtTheEnd();
                  }}
                />
              )}
            </Column>
          )}
        </Column>
      )}
    </I18n>
  );
}
