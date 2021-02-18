const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));

// Sanity check libGD.js size
const checkLibGDjsSize = () => {
  const appPublicPath = path.join(__dirname, "../../app/public/");
  return new Promise((resolve) => {
    fs.stat(path.join(appPublicPath, "libGD.js"), (err, stats) => {
      if (err) {
        shell.echo(
          `❌ Unable to check libGD.js size. Have you compiled GDevelop.js? Error is: ${err}`
        );
        shell.exit(1);
      }

      const sizeInMiB = stats.size / 1024 / 1024;
      if (sizeInMiB > 5) {
        shell.echo(
          `❌ libGD.js size is too big (${sizeInMiB.toFixed(
            2
          )}MiB) - are you sure you're not trying to deploy the development version?`
        );
        shell.exit(1);
      }

      shell.echo(`✅ libGD.js size seems correct (${sizeInMiB.toFixed(2)}MiB)`);

      if (
        !fs.existsSync(path.join(appPublicPath, "libGD.js.mem")) ||
        fs.existsSync(path.join(appPublicPath, "libGD.wasm"))
      ) {
        shell.echo(
          `❌ Found libGD.wasm or missing libGD.js.mem - are you sure you're not trying to deploy the development version?`
        );
        shell.exit(1);
      }
      resolve();
    });
  });
};

checkLibGDjsSize().then(() => {
  if (!args["skip-app-build"]) {
    shell.cd("../app");
    if (shell.exec("npm run build").code !== 0) {
      shell.exit(1);
    }
    shell.cd("../cordova-app");
  }

  shell.rm("-rf", "www");
  shell.mkdir("-p", "www");
  if (shell.cp("-r", "../app/build/*", "www").code !== 0) {
    shell.echo(`❌ Copy from "../app/build" to Cordova's "www" folder failed.`);
    shell.exit(1);
  }
});
