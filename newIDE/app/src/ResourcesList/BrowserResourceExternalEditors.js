// @flow
import Window from '../Utils/Window';
import { type ResourceExternalEditor } from './ResourceExternalEditor.flow';
import { sendExternalEditorOpened } from '../Utils/Analytics/EventSender';

/**
 * This is the list of editors that can be used to edit resources
 * when running in a browser.
 */
const editors: Array<ResourceExternalEditor> = [
  {
    name: 'piskel-app',
    displayName: 'Edit with Piskel',
    kind: 'image',
    edit: () => {
      sendExternalEditorOpened('piskel');
      Window.showMessageBox(
        'This feature is only supported in the desktop version for now!\nDownload it from GDeveloppe website.'
      );
    },
  },
  {
    name: 'jfxr-app',
    displayName: 'Edit with Jfxr',
    kind: 'audio',
    edit: () => {
      sendExternalEditorOpened('jfxr');
      Window.showMessageBox(
        'This feature is only supported in the desktop version for now!\nDownload it from GDeveloppe website.'
      );
    },
  },
  {
    name: 'yarn-app',
    displayName: 'Edit with Yarn',
    kind: 'json',
    edit: () => {
      sendExternalEditorOpened('yarn');
      Window.showMessageBox(
        'This feature is only supported in the desktop version for now!\nDownload it from GDeveloppe website.'
      );
    },
  },
];

export default editors;
