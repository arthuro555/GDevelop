/** \file
 *  GDeveloppe
 *  2008-2016 Florian Rival (Florian.Rival@gmail.com)
 */

#ifndef GDCORE_VERSIONWRAPPER_H
#define GDCORE_VERSIONWRAPPER_H
#include "GDCore/String.h"

namespace gd {

/**
 * \brief Used to get information about GDeveloppe Core version.
 *
 * \ingroup Tools
 */
class GD_CORE_API VersionWrapper {
 public:
  /**
   * \brief Get GDeveloppe Core Major version number
   */
  static int Major();

  /**
   * \brief Get GDeveloppe Core Minor version number
   */
  static int Minor();

  /**
   * \brief Get GDeveloppe Core Build version number
   */
  static int Build();

  /**
   * \brief Get GDeveloppe Core Revision version number
   */
  static int Revision();

  /**
   * \brief Get a full string containing version.
   */
  static gd::String FullString();

  /**
   * \brief Get GDCore status ( Alpha/Beta/Release Candidate/Release )
   */
  static gd::String Status();

  /**
   * \brief Get Year of the release
   */
  static gd::String Year();

  /**
   * \brief Get Month of the release
   */
  static gd::String Month();

  /**
   * \brief Get Day of the release
   */
  static gd::String Date();

  /**
   * \brief Return true if the first version is older
   * than the second version.
   */
  static bool IsOlder(int major,
                      int minor,
                      int build,
                      int revision,
                      int major2,
                      int minor2,
                      int build2,
                      int revision2);

  /**
   * \brief Return true if the first version is older or equal
   * to the second version.
   */
  static bool IsOlderOrEqual(int major,
                             int minor,
                             int build,
                             int revision,
                             int major2,
                             int minor2,
                             int build2,
                             int revision2);
};

}  // namespace gd

#endif  // GDCORE_VERSIONWRAPPER_H
