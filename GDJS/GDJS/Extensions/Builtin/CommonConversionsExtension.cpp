/*
 * GDeveloppe JS Platform
 * Copyright 2008-2016 Florian Rival (Florian.Rival@gmail.com). All rights
 * reserved. This project is released under the MIT License.
 */
#include "CommonConversionsExtension.h"
#include "GDCore/CommonTools.h"
#include "GDCore/Events/CodeGeneration/EventsCodeGenerator.h"
#include "GDCore/Extensions/Builtin/AllBuiltinExtensions.h"
#include "GDCore/IDE/Project/ArbitraryResourceWorker.h"
#include "GDCore/Tools/Localization.h"

namespace gdjs {

CommonConversionsExtension::CommonConversionsExtension() {
  gd::BuiltinExtensionsImplementer::ImplementsCommonConversionsExtension(*this);

  GetAllExpressions()["ToNumber"].SetFunctionName(
      "gdjs.evtTools.common.toNumber");
  GetAllStrExpressions()["ToString"].SetFunctionName(
      "gdjs.evtTools.common.toString");
  GetAllStrExpressions()["LargeNumberToString"].SetFunctionName(
      "gdjs.evtTools.common.toString");
  GetAllExpressions()["ToRad"].SetFunctionName("gdjs.toRad");
  GetAllExpressions()["ToDeg"].SetFunctionName("gdjs.toDegrees");
}

}  // namespace gdjs
