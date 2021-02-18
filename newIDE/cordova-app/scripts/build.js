var shell = require("shelljs");
var path = require("path");
var args = require("minimist")(process.argv.slice(2));

if (!shell.test("-f", "./node_modules/.bin/cordova")) {
  shell.echo("⚠️ Please run npm install in cordova-app folder");
  shell.exit(1);
}

if (!args["skip-app-build"]) {
  if (shell.exec("npm run app-build").code !== 0) {
    shell.echo(`❌ App build failed with code ${code}.`);
    shell.exit(code);
  }
}

const cordovaCli = path.join("node_modules", ".bin", "cordova");
let cordovaCliArguments = process.argv
  .slice(2)
  .filter((arg) => arg !== "--skip-app-build");
shell.exec(
  [cordovaCli, "build", cordovaCliArguments.join(" ")].join(" "),
  (code) => {
    if (code !== 0) {
      shell.echo(`❌ Electron build failed with code ${code}.`);
    }
    shell.exit(code);
  }
);
