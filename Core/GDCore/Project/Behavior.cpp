/*
 * GDeveloppe Core
 * Copyright 2008-2016 Florian Rival (Florian.Rival@gmail.com). All rights
 * reserved. This project is released under the MIT License.
 */
#include "GDCore/Project/Behavior.h"
#include <iostream>
#if defined(GD_IDE_ONLY)
#include "GDCore/Project/PropertyDescriptor.h"
#endif

namespace gd {

Behavior::~Behavior(){};

#if defined(GD_IDE_ONLY)
std::map<gd::String, gd::PropertyDescriptor> Behavior::GetProperties(
    const gd::SerializerElement& behaviorContent) const {
  std::map<gd::String, gd::PropertyDescriptor> nothing;
  return nothing;
}
#endif

}  // namespace gd
