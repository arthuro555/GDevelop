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
    extension
      .setExtensionInformation(
        'IAP',
        _('In-app purchases'),
        _('Allow to buy items using the system in-app purchase APIs.'),
        'Arthur Pacaud (arthuro555)',
        'MIT'
      )
      .setExtensionHelpPath('/all-features/iap');

    extension
      .registerProperty('AndroidBilling')
      .setLabel(_('Google Play billing key'))
      .setType('string');

    extension
      .addDependency()
      .setName('IAP Cordova plugin')
      .setDependencyType('cordova')
      .setExportName('cordova-plugin-purchase')
      .setVersion('10.5.0')
      .setExtraSetting(
        'BILLING_KEY',
        new gd.PropertyDescriptor('AndroidBilling').setType('ExtensionProperty')
      )
      .onlyIfSomeExtraSettingsNonEmpty();

    extension
      .addAction(
        'RegisterProduct',
        _('Register a product'),
        _(
          'Registers a store product. You need to call this for every product you want to sell before initializing the store.'
        ),
        _('Register product _PARAM0_ of type _PARAM1_ (alias: _PARAM2_)'),
        _('IAP'),
        'JsPlatform/Extensions/admobicon24.png',
        'JsPlatform/Extensions/admobicon16.png'
      )
      .addParameter('string', _('Product ID'), '', false)
      .addParameter(
        'stringWithSelector',
        _('Type'),
        '["consumable", "non consumable"]',
        false
      )
      .addParameter('string', _('Alias'), '', true)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/IAP/iaptools.js')
      .setFunctionName('gdjs.evtTools.iap.registerProduct');

    extension
      .addAction(
        'InitStore',
        _('Initialize the store'),
        _(
          'Fetches all product information from the server to initialize the store. Use this after registering all products.'
        ),
        _('Initialize store'),
        _('IAP'),
        'JsPlatform/Extensions/admobicon24.png',
        'JsPlatform/Extensions/admobicon16.png'
      )
      .getCodeExtraInformation()
      .setFunctionName('window.store ? store.refresh() : (() => {})');

    extension
      .addAction(
        'UpdateStore',
        _('Update the store'),
        _('Updates product price and purchase history from the server.'),
        _('Update store'),
        _('IAP'),
        'JsPlatform/Extensions/admobicon24.png',
        'JsPlatform/Extensions/admobicon16.png'
      )
      .getCodeExtraInformation()
      .setFunctionName('window.store ? store.update() : (() => {})');

    extension
      .addAction(
        'OrderProduct',
        _('Order a prodcut'),
        _('Begins the process to buy a registered prodcut.'),
        _('Buy product with id _PARAM0_'),
        _('IAP'),
        'JsPlatform/Extensions/admobicon24.png',
        'JsPlatform/Extensions/admobicon16.png'
      )
      .addParameter('string', _('Product ID'), '', false)
      .getCodeExtraInformation()
      .setFunctionName('(!window.store) ? (() => {})() : store.order');

    extension
      .addAction(
        'ConfirmDelivery',
        _('Confirm delivery'),
        _(
          'Confirms that the product that has been bought has been successfully delivered to the user.'
        ),
        _('Buy product with id _PARAM0_'),
        _('IAP'),
        'JsPlatform/Extensions/admobicon24.png',
        'JsPlatform/Extensions/admobicon16.png'
      )
      .addParameter('string', _('Product ID'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/IAP/iaptools.js')
      .setFunctionName('gdjs.evtTools.iap.confirmOrder');

    

    extension
      .addExpressionAndCondition(
        'string',
        'State',
        _('Prodcut state'),
        _('Get the state of a product.'),
        _('State of product _PARAM0_ is _PARAM1_'),
        _('IAP'),
        'JsPlatform/Extensions/admobicon24.png'
      )
      .addParameter('string', _('Product ID'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/IAP/iaptools.js')
      .setFunctionName('gdjs.evtTools.iap.getState');

    return extension;
  },
  runExtensionSanityTests: function (
    gd /*: libGDevelop */,
    extension /*: gdPlatformExtension*/
  ) {
    return [];
  },
};
