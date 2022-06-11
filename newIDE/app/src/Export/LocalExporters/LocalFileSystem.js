import optionalRequire from '../../Utils/OptionalRequire';
import { getUID } from '../../Utils/LocalUserInfo';
var fs = optionalRequire('fs-extra');
var path = optionalRequire('path');
var os = optionalRequire('os');
const gd /* TODO: add flow in this file */ = global.gd;

/**
 * Gives access to the local filesystem, but returns paths
 * that are using "/" as a path separator, even on Windows
 * (so that in exported games, paths are slashs, which is
 * supported everywhere).
 */
export class LocalFileSystem {
  pendingOperations = [];

  mkDir = path => {
    try {
      fs.mkdirsSync(path);
    } catch (e) {
      console.error('mkDir(' + path + ') failed: ' + e);
      return false;
    }
    return true;
  };

  dirExists = path => {
    return fs.existsSync(path);
  };

  clearDir = path => {
    try {
      fs.emptyDirSync(path);
    } catch (e) {
      console.error('clearDir(' + path + ') failed: ' + e);
    }
  };

  getTempDir = () => {
    return path.join(os.tmpdir(), `GDTMP-${getUID()}`);
  };

  fileNameFrom = fullPath => {
    if (this._isExternalUrl(fullPath)) return fullPath;

    fullPath = this._translateUrl(fullPath);
    return path.basename(fullPath);
  };

  dirNameFrom = fullPath => {
    if (this._isExternalUrl(fullPath)) return '';

    fullPath = this._translateUrl(fullPath);
    return path.dirname(fullPath).replace(/\\/g, '/');
  };

  makeAbsolute = (filename, baseDirectory) => {
    if (this._isExternalUrl(filename)) return filename;

    filename = this._translateUrl(filename);
    if (!this.isAbsolute(baseDirectory))
      baseDirectory = path.resolve(baseDirectory);

    return path
      .resolve(baseDirectory, path.normalize(filename))
      .replace(/\\/g, '/');
  };

  makeRelative = (filename, baseDirectory) => {
    if (this._isExternalUrl(filename)) return filename;

    filename = this._translateUrl(filename);
    return path
      .relative(baseDirectory, path.normalize(filename))
      .replace(/\\/g, '/');
  };

  isAbsolute = fullPath => {
    if (this._isExternalUrl(fullPath)) return true;

    if (fullPath.length === 0) return true;
    fullPath = this._translateUrl(fullPath);
    return (
      (fullPath.length > 0 && fullPath.charAt(0) === '/') ||
      (fullPath.length > 1 && fullPath.charAt(1) === ':')
    );
  };

  copyFile = (source, dest) => {
    //URL are not copied.
    if (this._isExternalUrl(source)) return true;

    source = this._translateUrl(source);
    if (source !== dest)
      this.pendingOperations.push(
        fs
          .copy(source, dest)
          .catch(e =>
            console.error('copyFile(' + source + ', ' + dest + ') failed: ' + e)
          )
      );

    return true;
  };

  writeToFile = (file, contents) => {
    this.pendingOperations.push(
      fs
        .outputFile(file, contents)
        .catch(e =>
          console.error('writeToFile(' + file + ', ...) failed: ' + e)
        )
    );
    return true;
  };

  readFile = file => {
    try {
      var contents = fs.readFileSync(file);
      return contents.toString();
    } catch (e) {
      console.error('readFile(' + file + ') failed: ' + e);
      return '';
    }
  };

  readDir = (path, ext) => {
    ext = ext.toUpperCase();
    var output = new gd.VectorString();
    try {
      var files = [];
      if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file) {
          if (
            ext.length === 0 ||
            file.toUpperCase().indexOf(ext, file.length - ext.length) !== -1
          ) {
            output.push_back(path + '/' + file);
          }
        });
      }
    } catch (e) {
      console.error('readDir(' + path + ',' + ext + ') failed: ' + e);
    }

    return output;
  };

  fileExists = filename => {
    filename = this._translateUrl(filename);
    try {
      const stat = fs.statSync(filename);
      return stat.isFile();
    } catch (e) {
      return false;
    }
  };

  async waitForPendingOperationsToEnd() {
    await Promise.all(this.pendingOperations);
    this.pendingOperations.length = 0;
  }

  _isExternalUrl(filename) {
    return (
      filename.startsWith('http://') ||
      filename.startsWith('https://') ||
      filename.startsWith('ftp://') ||
      filename.startsWith('blob:') ||
      filename.startsWith('data:')
    );
  }

  /**
   * Return the filename associated to the URL on the server, relative to the games directory.
   * (i.e: Transform g/mydirectory/myfile.png to mydirectory/myfile.png).
   */
  _translateUrl(filename) {
    // TODO: remove
    if (filename.substr(0, 2) === 'g/' || filename.substr(0, 2) === 'g\\')
      filename = filename.substr(2);

    return filename;
  }
}
