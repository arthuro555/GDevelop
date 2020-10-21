// @flow
/**
 * This is a declaration of an extension for GDevelop 5.
 *
 * ℹ️ Changes in this file are watched and automatically imported if the editor
 * is running. You can also manually run `node import-GDJS-Runtime.js` (in newIDE/app/scripts).
 *
 * The file must be named "JsExtension.js", otherwise GDevelop won't load it.
 * ⚠️ If you make a change and the extension is not loaded, open the developer console
 * and search for any errors.
 *
 * More information on https://github.com/4ian/GDevelop/blob/master/newIDE/README-extensions.md
 */

/*::
// Import types to allow Flow to do static type checking on this file.
// Extensions declaration are typed using Flow (like the editor), but the files
// for the game engine are checked with TypeScript annotations.
import { type ObjectsRenderingService, type ObjectsEditorService } from '../JsExtensionTypes.flow.js'
*/

module.exports = {
  createExtension: function (
    _ /*: (string) => string */,
    gd /*: libGDevelop */
  ) {
    const extension = new gd.PlatformExtension();
    extension.setExtensionInformation(
      'DiscordRichPresence',
      _('Discord Rich Presence'),
      _(
        'Allow the game to connect to discord and update the rich presence status.'
      ),
      'Arthur Pacaud (arthuro555)',
      'MIT'
    );

    extension
      .registerProperty('DiscordAppId')
      .setLabel(_('Discord App ID'))
      .setDescription('718194112775454720')
      .setType('number');

    extension
      .addDependency()
      .setName('Discord Rich Presence Updater')
      .setDependencyType('npm')
      .setExportName('discord-rich-presence')
      .setVersion('^0.0.8');

    extension
      .addAction(
        'UpdateRichPresence',
        _('Update Rich Presence'),
        _('Updates the discord rich presence. Every field is optional, you do not need to fill them all out.'),
        _('Update discord rich presence'),
        _('Discord'),
        'JsPlatform/Extensions/discord.svg',
        'JsPlatform/Extensions/discord.svg'
      )
      .addParameter("string", "State", "", true)
      .addParameter("string", "Details", "", true)
      .addParameter("expression", "Start timestamp", "", true)
      .addParameter("expression", "End timestamp", "", true)
      .addParameter("string", "Key of large image", "", true)
      .addParameter("string", "Tooltip of large image", "", true)
      .addParameter("string", "Key of small image", "", true)
      .addParameter("string", "Tooltip of small image", "", true)
      .addParameter("string", "Party ID", "", true)
      .addParameter("expression", "Party size", "", true)
      .addParameter("expression", "Party max size", "", true)
      .addParameter("string", "Match ID", "", true)
      .addParameter("string", "Spectating ID", "", true)
      .addParameter("string", "Joining ID", "", true)
      .addParameter("yesorno", "Is in a match?", "", true)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/DiscordRichPresence/discordrichpresencetools.js')
      .setFunctionName('gdjs.evtTools.discord.updateRichPresence');

    return extension;
  },
  runExtensionSanityTests: function (
    gd /*: libGDevelop */,
    extension /*: gdPlatformExtension*/
  ) {
    return [];
  },
};
