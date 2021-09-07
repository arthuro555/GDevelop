# GDeveloppe.js

This is the port of GDeveloppe core classes to WebAssembly+JavaScript. This allows [GDeveloppe Core libraries](https://github.com/4ian/GDeveloppe) to run in a browser or on Node.js.

> 🎮 GDeveloppe is a full-featured, cross-platform, open-source game development software requiring no programming skills. Download it on [the official website](https://gdevelop-app.com).

## How to build

> 👋 Usually, if you're working on the GDeveloppe editor or extensions in JavaScript, you don't need to rebuild GDeveloppe.js. If you want to make changes in C++ extensions or classes, read this section.

- Make sure you have [CMake 3.17+](http://www.cmake.org/) (3.5+ should work on Linux/macOS) and [Node.js](https://nodejs.org/) installed.

- Install [Emscripten](https://github.com/kripken/emscripten), as explained on the [Emscripten installation instructions](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html):

| Linux/macOS                                  | Windows                                      |
| -------------------------------------------- | -------------------------------------------- |
| `git clone https://github.com/juj/emsdk.git` | `git clone https://github.com/juj/emsdk.git` |
| `cd emsdk`                                   | `cd emsdk`                                   |
| `./emsdk update`                             | `emsdk update`                               |
| `./emsdk install 1.39.6`                     | `emsdk install 1.39.6`                       |
| `./emsdk activate 1.39.6`                    | `emsdk activate 1.39.6`                      |
| `source ./emsdk_env.sh`                      | `emsdk_env.bat`                              |

- Launch the build from GDeveloppe.js folder:

```shell
    cd GDeveloppe.js
    npm install
    npm run build
```

> ℹ️ Output is created in _/path/to/GD/Binaries/embuild/GDeveloppe.js/_ and also copied to GDeveloppe 5 IDE (`newIDE` folder).

-> ⏱ The linking (last step) of the build can be made a few seconds faster by specifying `-- --dev`. Be sure to remove it before building a release version, as this disable "link-time optimizations" of the generated WebAssembly module.

- You can then launch GDeveloppe 5 that will use your build of GDeveloppe.js:

```shell
    cd ..
    cd newIDE/app
    npm install
    npm start
```

More information in [GDeveloppe 5 readme](https://github.com/4ian/GD/blob/master/newIDE/README.md).

### Tests

```
npm test
```

### About the internal steps of compilation

The npm _build_ task:

- Creates `Binaries/embuild` directory,
- Launches CMake inside to compile GDeveloppe with _emconfigure_ to use Emscripten toolchain,
- Updates the glue.cpp and glue.js from Bindings.idl using _Emscripten WebIDL Binder_,
- Launches the compilation with `make` (or `ninja` on Windows with CMake 3.17+) (you can also compile using MinGW-32 using `npm run build-with-MinGW`).

See the [CMakeLists.txt](./CMakeLists.txt) for the arguments passed to the Emscripten linker.

## Documentation

- The file [Bindings.idl](https://github.com/4ian/GDeveloppe/blob/master/GDeveloppe.js/Bindings/Bindings.idl) describes all the classes available in GDeveloppe.js.
- Refer to [GDeveloppe documentation](https://docs.gdevelop-app.com/GDCore%20Documentation/) for detailed documentation of the original C++ classes.
