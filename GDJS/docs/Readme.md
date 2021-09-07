# GDJS Documentation

📚 Read the documentation online: **[GDJS Runtime (game engine) documentation](https://docs.gdevelop-app.com/GDJS%20Runtime%20Documentation/index.html)** or [GDJS Platform documentation for the IDE](https://docs.gdevelop-app.com/GDJS%20Documentation/index.html).

## How to generate the documentation

- To generate the GDJS Runtime (game engine) documentation:

  ```bash
  cd <GDeveloppe repository>/GDJS
  npm run generate-doc
  ```

  Output will be in `<GDeveloppe repository>/docs/GDJS Documentation`.

- To generate the GDJS Platform documentation for the IDE, install [Doxygen](https://www.doxygen.nl/index.html). Then:

  ```bash
  cd <GDeveloppe repository>/GDJS/docs
  doxygen
  ```

  Output will be in `<GDeveloppe repository>/docs/GDJS Runtime Documentation`.
