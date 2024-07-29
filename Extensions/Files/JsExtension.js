//@ts-check
/// <reference path="../JsExtensionTypes.d.ts" />
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

/** @type {ExtensionModule} */
module.exports = {
  createExtension: function (_, gd) {
    const extension = new gd.PlatformExtension();
    extension
      .setExtensionInformation(
        'Files',
        _('Files'),
        _('Load, use and save binary File variables from different sources.'),
        'Arthur Pacaud (arthuro555)',
        'Open source (MIT License)'
      )
      .setExtensionHelpPath('/all-features/file')
      .setCategory('General');

    extension
      .addInstructionOrExpressionGroupMetadata(_('File'))
      .setIcon('JsPlatform/Extensions/filesystem_file32.png');

    extension
      .addAction(
        'ReadFileAsText',
        _('Read file variable as text'),
        _('Reads the binary file as an UTF-8 text file into another variable.'),
        _('Read file _PARAM0_ as text into _PARAM1_'),
        _('Read'),
        'JsPlatform/Extensions/filesystem_file32.png',
        'JsPlatform/Extensions/filesystem_file32.png'
      )
      .addParameter('variable', _('File variable'), '', false)
      .addParameter('variable', _('Variable to output the text to'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/Files/filestools.js')
      .setAsyncFunctionName('gdjs.evtTools.files.readAsText');

    extension
      .addAction(
        'ReadFileAsBytes',
        _('Read file variable as bytes'),
        _('Reads the bytes of the binary file into an array of bytes.'),
        _('Read file _PARAM0_ as bytes into _PARAM1_'),
        _('Read'),
        'JsPlatform/Extensions/filesystem_file32.png',
        'JsPlatform/Extensions/filesystem_file32.png'
      )
      .addParameter('variable', _('File variable'), '', false)
      .addParameter('variable', _('Variable to output the bytes to'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/Files/filestools.js')
      .setAsyncFunctionName('gdjs.evtTools.files.readAsByteArray');

    extension
      .addStrExpression(
        'Name',
        _('File name'),
        _('Gets the file name of a file variable.'),
        _('Read'),
        'JsPlatform/Extensions/filesystem_file32.png'
      )
      .addParameter('variable', _('File variable'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/Files/filestools.js')
      .setFunctionName('gdjs.evtTools.files.getFileName');

    extension
      .addStrExpression(
        'Type',
        _('File type'),
        _('Gets the file MIME type of a file variable.'),
        _('Read'),
        'JsPlatform/Extensions/filesystem_file32.png'
      )
      .addParameter('variable', _('File variable'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/Files/filestools.js')
      .setFunctionName('gdjs.evtTools.files.getFileType');

    extension
      .addAction(
        'OpenFile',
        _('Open file with the open file dialogue'),
        _(
          'Opens the system file selection dialogue, and stores the selected file in a variable.'
        ),
        _(
          'Pick a file and store it into _PARAM0_ (allowed file types: _PARAM1_, allow multiple files: _PARAM2_)'
        ),
        _('Load'),
        'JsPlatform/Extensions/filesystem_file32.png',
        'JsPlatform/Extensions/filesystem_file32.png'
      )
      .addParameter(
        'variable',
        _('File variable to store the file(s) in'),
        '',
        false
      )
      .addParameter('string', _('Accepted file types'), '', true)
      .setParameterLongDescription(
        'A comma separated list of [MIME file types](https://mimetype.io/all-types) of files that should be allowed to be selected. For example, `image/*` for any image, `audio/ogg, .json` for an ogg or JSON file, `.png, .jpg` for either jpg or png files, ... [More examples](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types)'
      )
      .addParameter(
        'yesorno',
        _('Allow multiple files to be selected'),
        '',
        true
      )
      .setParameterLongDescription(
        'If multiple files are allowed, the variable will be an array of file variables, even if only a single or no file is selected. Otherwise, it will simply be a single file variable.'
      )
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/Files/filestools.js')
      .setAsyncFunctionName('gdjs.evtTools.files.openFile');

    extension
      .addAction(
        'DownloadFileFromURL',
        _('Download a file from an URL'),
        _('Downloads a file from a URL.'),
        _('Download file _PARAM1_ into _PARAM0_ (lazy loading: _PARAM2_)'),
        _('Load'),
        'JsPlatform/Extensions/filesystem_file32.png',
        'JsPlatform/Extensions/filesystem_file32.png'
      )
      .addParameter(
        'variable',
        _('File variable to store the file in'),
        '',
        false
      )
      .addParameter('string', _('URL'), '', true)
      .setParameterLongDescription(
        'Keep in mind: The URL must be publicly accessible. If CORS headers are not properly set on the URL, the file might fail to load on web and mobile builds.\n\n' +
          'To bypass CORS or access more advanced HTTP features like caching or authentication, use the Advanced HTTP extension.'
      )
      .addParameter('yesorno', _('Enable lazy loading?'), '', true)
      .setParameterLongDescription(
        'Lazy loading will cause the file not to be downloaded until it starts being used. Not enabling lazy loading will let the image immediately start to download.'
      )
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/Files/filestools.js')
      .setFunctionName('gdjs.evtTools.files.loadUrl');

    return extension;
  },
  runExtensionSanityTests: function (gd, extension) {
    return [];
  },
};
