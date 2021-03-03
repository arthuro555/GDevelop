require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appleId = process.env.APPLEID;
  const appleIdPassword = process.env.APPLEIDPASS;
  const appBundleId = 'com.gdevelop-app.ide';
  const appName = context.packager.appInfo.productFilename;
  const appPath = path.join(appOutDir, `${appName}.app`);

  // Bail out if credentials not present
  if (!appleId) {
    console.info(`APPLEID is not defined, skipping macOS notarization...`);
    return;
  }

  // Sanity checks
  if (!fs.existsSync(appPath)) {
    throw new Error(`Cannot find application at: ${appPath}`);
  }
  if (!appleIdPassword) {
    throw new Error(`APPLEIDPASS environment variable is not defined`);
  }

  // Launch notarization
  const startTime = Date.now();
  console.info(
    `Notarizing ${appBundleId} found at ${appPath} for Apple ID=${appleId}...`
  );

  try {
    await notarize({
      appBundleId,
      appPath,
      appleId,
      appleIdPassword,
    });

    const duration = (Date.now() - startTime) / 1000;
    console.info(`Done notarizing ${appBundleId} in ${duration} seconds.`);
  } catch (error) {
    console.error(`Error during notarization: `, error);
    throw new Error(`Error during notarization: ${error}`);
  }
};
