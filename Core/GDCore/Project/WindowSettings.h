/*
 * GDevelop Core
 * Copyright 2008-2016 Florian Rival (Florian.Rival@gmail.com). All rights
 * reserved. This project is released under the MIT License.
 */

#ifndef GDCORE_WINDOWSETTINGS_H
#define GDCORE_WINDOWSETTINGS_H
#include "GDCore/String.h"

#define DEFINE_CLASS_FIELD(type, fieldName)                                    \
private:                                                                       \
  type fieldName;                                                              \
  bool usingDefault##fieldName = true;                                         \
                                                                               \
public:                                                                        \
  type Get##fieldName() { return fieldName; };                                 \
  type Get##fieldName() const { return fieldName; };                           \
  void Set##fieldName(type new_##fieldName) {                                  \
    fieldName = new_##fieldName;                                               \
    usingDefault##fieldName = false;                                           \
  };                                                                           \
  bool UsingDefault##fieldName() { return usingDefault##fieldName; };          \
  const bool UsingDefault##fieldName() const {                                 \
    return usingDefault##fieldName;                                            \
  };                                                                           \
  void RevertToDefault##fieldName() { usingDefault##fieldName = true; };

namespace gd {

/**
 * \brief Some settings for the game window.
 */
class GD_CORE_API WindowSettings {
public:
  WindowSettings();

  DEFINE_CLASS_FIELD(int, MaximumHeight);
  DEFINE_CLASS_FIELD(int, MaximumWidth);
  DEFINE_CLASS_FIELD(int, MinimumHeight);
  DEFINE_CLASS_FIELD(int, MinimumWidth);
  DEFINE_CLASS_FIELD(bool, Resizable);
  DEFINE_CLASS_FIELD(bool, Movable);
  DEFINE_CLASS_FIELD(bool, Minimizable);
  DEFINE_CLASS_FIELD(bool, Maximizable);
  DEFINE_CLASS_FIELD(bool, Closable);
  DEFINE_CLASS_FIELD(bool, FullScreen);
  DEFINE_CLASS_FIELD(bool, FullScreenable);
  DEFINE_CLASS_FIELD(bool, DisplayFrame);
  DEFINE_CLASS_FIELD(bool, Transparent);
  DEFINE_CLASS_FIELD(gd::String, MacOSVibrancy);
};

} // namespace gd

#undef DEFINE_CLASS_FIELD
#endif // GDCORE_VARIABLESCONTAINER_H
