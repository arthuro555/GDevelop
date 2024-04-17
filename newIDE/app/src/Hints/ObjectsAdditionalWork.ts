import { t } from '@lingui/macro';

import { AlertMessageIdentifier } from '../MainFrame/Preferences/PreferencesContext';
import newNameGenerator from '../Utils/NewNameGenerator';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';

/*
 * Define additional logic which executes after an object/instance has been created.
 * Also, InfoBar can be used which could notify users of the additional changes.
 * Declare new identifier for infoBar in Mainframe/Preferences/PreferenceContext
 * and add it in hints/explanation list.
 */

export type InfoBarDetails = {
  identifier: AlertMessageIdentifier;
  message: MessageDescriptor;
  touchScreenMessage: MessageDescriptor;
};

type InfoBarEvent = 'onObjectAdded' | 'onInstanceAdded';

export const onObjectAdded = (
  object: gd.gdObject,
  layout: gd.Layout,
  project: gd.Project
): InfoBarDetails | null | undefined => {
  // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly 'Lighting::LightObject': { readonly onObjectAdded: (object: gd.gdObject, layout: gd.Layout, project: gd.Project) => void; readonly onInstanceAdded: (instance: gd.InitialInstance, layout: gd.Layout, project: gd.Project) => void; readonly getInfoBarDetails: (infoBarEvent: InfoBarEvent) => InfoBarDetails | ... 1 mor...'.
  const additionalWork = objectType[object.getType()];
  if (additionalWork) {
    additionalWork.onObjectAdded(object, layout, project);
    return additionalWork.getInfoBarDetails('onObjectAdded');
  }

  return null;
};

export const onInstanceAdded = (
  instance: gd.InitialInstance,
  layout: gd.Layout,
  project: gd.Project
): InfoBarDetails | null | undefined => {
  const objectName = instance.getObjectName();
  let object: gd.gdObject | null | undefined = null;
  if (layout.hasObjectNamed(objectName)) object = layout.getObject(objectName);
  else if (project.hasObjectNamed(objectName))
    object = project.getObject(objectName);

  // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly 'Lighting::LightObject': { readonly onObjectAdded: (object: gd.gdObject, layout: gd.Layout, project: gd.Project) => void; readonly onInstanceAdded: (instance: gd.InitialInstance, layout: gd.Layout, project: gd.Project) => void; readonly getInfoBarDetails: (infoBarEvent: InfoBarEvent) => InfoBarDetails | ... 1 mor...'.
  const additionalWork = object ? objectType[object.getType()] : null;
  if (additionalWork) {
    additionalWork.onInstanceAdded(instance, layout, project);
    return additionalWork.getInfoBarDetails('onInstanceAdded');
  }

  return null;
};

const getLightingLayer = (layout: gd.Layout): gd.Layer | null | undefined => {
  for (let i = 0; i < layout.getLayersCount(); i++) {
    const layer = layout.getLayerAt(i);
    if (layer.isLightingLayer()) return layer;
  }

  return null;
};

const objectType = {
  'Lighting::LightObject': {
    onObjectAdded: (
      object: gd.gdObject,
      layout: gd.Layout,
      project: gd.Project
    ) => {
      const lightingLayer = getLightingLayer(layout);
      if (lightingLayer === null) {
        const name = newNameGenerator('Lighting', (name) =>
          layout.hasLayerNamed(name)
        );
        layout.insertNewLayer(name, layout.getLayersCount());
        const layer: gd.Layer = layout.getLayer('Lighting');
        layer.setLightingLayer(true);
        layer.setFollowBaseLayerCamera(true);
        layer.setAmbientLightColor(128, 128, 128);
      }
    },

    onInstanceAdded: (
      instance: gd.InitialInstance,
      layout: gd.Layout,
      project: gd.Project
    ) => {
      const lightingLayer = getLightingLayer(layout);
      if (lightingLayer) {
        instance.setLayer(lightingLayer.getName());
      }
    },

    getInfoBarDetails: (
      infoBarEvent: InfoBarEvent
    ): InfoBarDetails | null | undefined => {
      if (infoBarEvent === 'onObjectAdded') {
        return {
          identifier: 'automatic-lighting-layer',
          message: t`A lighting layer was created. Lights will be placed on it automatically. You can change the ambient light color in the properties of this layer`,
          touchScreenMessage: t`A lighting layer was created. Lights will be placed on it automatically. You can change the ambient light color in the properties of this layer`,
        };
      }

      if (infoBarEvent === 'onInstanceAdded') {
        return {
          identifier: 'object-moved-in-lighting-layer',
          message: t`The light object was automatically placed on the Lighting layer.`,
          touchScreenMessage: t`The light object was automatically placed on the Lighting layer.`,
        };
      }

      return null;
    },
  },
} as const;
