const electron = require('electron');
const { app, Menu, ipcMain } = electron;
const package = require('./package.json');

/**
 * Create the editor main menu. Menu items that requires interaction
 * with the editor and that are not native are sent using events
 * to the electron renderer process (see ElectronEventsBridge).
 *
 * @param {BrowserWindow} window The window for which the menu is built
 * @param {Object[]} mainMenuTemplate The template (see ElectronMainMenu.js), where "click" is replaced
 * by declarative properties like onClickSendEvent or onClickOpenLink.
 */
const buildMainMenuFor = (window, mainMenuTemplate) => {
  const adaptMenuTemplate = menuTemplate =>
    menuTemplate.map(menuItemTemplate => {
      const hasOnClick =
        menuItemTemplate.onClickSendEvent || menuItemTemplate.onClickOpenLink;
      const args = menuItemTemplate.eventArgs;

      return {
        ...menuItemTemplate,
        click: hasOnClick
          ? function() {
              if (menuItemTemplate.onClickSendEvent) {
                if (args)
                  window.webContents.send(
                    menuItemTemplate.onClickSendEvent,
                    args
                  );
                else window.webContents.send(menuItemTemplate.onClickSendEvent);
              }

              if (menuItemTemplate.onClickOpenLink) {
                electron.shell.openExternal(menuItemTemplate.onClickOpenLink);
              }
            }
          : undefined,
        submenu: menuItemTemplate.submenu
          ? adaptMenuTemplate(menuItemTemplate.submenu)
          : undefined,
      };
    });

  return Menu.buildFromTemplate(
    mainMenuTemplate.map(rootMenuTemplate => ({
      ...rootMenuTemplate,
      submenu: adaptMenuTemplate(rootMenuTemplate.submenu),
    }))
  );
};

/**
 * Create a placeholder main menu, displayed before the real main menu
 * is constructed.
 */
const buildPlaceholderMainMenu = () => {
  const placeholderMenuItem = {
    label: "No.",
    enabled: false,
  };

  const fileTemplate = {
    label: 'File',
    submenu: [placeholderMenuItem],
  };

  const editTemplate = {
    label: 'Edit',
    submenu: [placeholderMenuItem],
  };

  const viewTemplate = {
    label: 'View',
    submenu: [placeholderMenuItem],
  };

  const windowTemplate = {
    role: 'window',
    submenu: [{ role: 'minimize' }],
  };

  const helpTemplate = {
    role: 'help',
    submenu: [placeholderMenuItem],
  };

  const urmomTemplate = {
    label: 'click for surprise ;)',
    click: () => {
      app.relaunch();
      app.quit();
    },
  };

  const template = [
    fileTemplate,
    editTemplate,
    viewTemplate,
    windowTemplate,
    helpTemplate,
    urmomTemplate,
  ];

  if (process.platform === 'darwin') {
    template.unshift({
      label: 'GDeveloppe 6',
      submenu: [placeholderMenuItem],
    });

    windowTemplate.submenu = [
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' },
    ];
  }

  return Menu.buildFromTemplate(template);
};

module.exports = { buildMainMenuFor, buildPlaceholderMainMenu };
