/*
 * GDevelop Core
 * Copyright 2008-2016 Florian Rival (Florian.Rival@gmail.com). All rights
 * reserved. This project is released under the MIT License.
 */

#ifndef GDCORE_INMEMORYFILESYSTEM
#define GDCORE_INMEMORYFILESYSTEM
#include <unordered_map>
#include <unordered_set>
#include <vector>

#include "AbstractFileSystem.h"
#include "GDCore/String.h"

#undef CopyFile  // Remove a Windows macro

namespace gd {

/**
 * \brief An interface to manipulate files in a platform agnostic
 * way. This allow exporters to work on files without knowing
 * what is actually being used to manipulate files (Node.js, browser shims,
 * etc...)
 *
 * \ingroup IDE
 */
class GD_CORE_API InMemoryFileSystem : AbstractFileSystem {
 public:
  InMemoryFileSystem(){};
  virtual ~InMemoryFileSystem();

  static gd::String Normalize(const gd::String& pathName_) {
    gd::String pathName = NormalizeSeparator(pathName_);
    std::vector<gd::String> path;

    const gd::String delimiter = "/";

    // Remove root delimiter
    while (pathName[0] == '/') pathName = pathName.substr(1);

    size_t pos = 0;
    gd::String token;
    while ((pos = pathName.find(delimiter)) != std::string::npos) {
      token = pathName.substr(0, pos);
      if (token.empty()) continue;
      if (token == "..")
        path.pop_back();
      else if (token != ".")
        path.push_back(token);
      pathName.erase(0, pos + delimiter.length());
    }

    gd::String result = "/";
    for (const auto& pathPart : path) result += pathPart;

    return result;
  };

  /**
   * \brief Create the specified directory.
   * \param path The directory to create.
   */
  virtual void MkDir(const gd::String& path) {
    gd::String normalizedPath = Normalize(path);
    if (directoriesContents.count(normalizedPath)) return;
    const gd::String delimiter = "/";
    size_t pos = 0;
    gd::String token;
    gd::String previousDirectory = "/";
    while ((pos = normalizedPath.find(delimiter)) != std::string::npos) {
      token = normalizedPath.substr(0, pos);
      if (token.empty()) continue;
      directoriesContents[previousDirectory].insert((token));
      previousDirectory += token + "/";
      normalizedPath.erase(0, pos + delimiter.length());
    }
  };

  /**
   * \brief Return true if the specified directory exists
   */
  virtual bool DirExists(const gd::String& path) {
    const gd::String normalizedPath = Normalize(path);
    if (directoriesContents.count(normalizedPath)) return true;

    for (const auto& linkedDirectoryWithFS : linkedFS) {
      if (InsideDirectory(normalizedPath, linkedDirectoryWithFS.first)) {
        return linkedDirectoryWithFS.second.fs->DirExists(
            linkedDirectoryWithFS.second.cwd + normalizedPath);
      }
    };

    return false;
  };

  /**
   * \brief Return true if the specified file exists
   */
  virtual bool FileExists(const gd::String& path) {
    const gd::String normalizedPath = Normalize(path);
    if (filesMap.count(normalizedPath)) return true;

    for (const auto& linkedDirectoryWithFS : linkedFS) {
      if (InsideDirectory(normalizedPath, linkedDirectoryWithFS.first)) {
        return linkedDirectoryWithFS.second.fs->FileExists(
            linkedDirectoryWithFS.second.cwd + normalizedPath);
      }
    };

    return false;
  };

  /**
   * \brief Clear the directory given as parameter, removing all the files.
   */
  virtual bool ClearDir(const gd::String& directory) {
    const auto normalizedDirectory = Normalize(directory);
    for (const auto& file : directoriesContents[normalizedDirectory])
      ClearDir(normalizedDirectory);
    filesMap.erase(normalizedDirectory);
    directoriesContents[normalizedDirectory].clear();
    clearedDirectories.insert(normalizedDirectory);
    return true;
  };

  /**
   * \brief Get a directory suitable for temporary files.
   */
  virtual gd::String GetTempDir() { return "/tmp"; };

  /**
   * \brief Extract the name of the file (with its extension) from a path.
   */
  virtual gd::String FileNameFrom(const gd::String& file) {
    size_t pos = 0;
    const gd::String delimiter = "/";
    if ((pos = file.rfind(delimiter)) != std::string::npos) {
      gd::String copy = file;
      copy.erase(0, pos + delimiter.length());
      return copy;
    }
    return file;
  };

  /**
   * \brief Extract the path without the filename.
   */
  virtual gd::String DirNameFrom(const gd::String& file) {
    size_t pos = 0;
    if ((pos = file.rfind("/")) != std::string::npos) {
      gd::String copy = file;
      copy.erase(pos);
      return copy;
    }
    return file;
  };

  /**
   * \brief Change the filename so that it is absolute, using the base directory
   * passed as parameter.
   * \return true if the operation succeeded.
   */
  virtual bool MakeAbsolute(gd::String& filename,
                            const gd::String& baseDirectory) {
    return true;
  };

  /**
   * \brief Return true if the filename is absolute
   */
  virtual bool IsAbsolute(const gd::String& filename) {
    return filename[0] == '/';
  };

  /**
   * \brief Change the filename so that it is relative to the base directory
   * passed as parameter.
   * \return true if the operation succeeded.
   */
  virtual bool MakeRelative(gd::String& filename,
                            const gd::String& baseDirectory) {
    return true;
  };

  /**
   * \brief Copy a file
   * \return true if the operation succeeded.
   */
  virtual bool CopyFile(const gd::String& file, const gd::String& destination) {
    return WriteToFile(destination, ReadFile(file));
  };

  /**
   * \brief Write the content of a string to a file.
   * \return true if the operation succeeded.
   */
  virtual bool WriteToFile(const gd::String& file, const gd::String& content) {
    const auto normalizedFile = Normalize(file);
    const auto dirName = DirNameFrom(normalizedFile);
    MkDir(dirName);
    filesMap[normalizedFile] = content;
    directoriesContents[dirName].insert(FileNameFrom(normalizedFile));
    return true;
  };

  /**
   * \brief Read the content of a file.
   * \return The content of the file.
   */
  virtual gd::String ReadFile(const gd::String& file) {
    const gd::String normalizedFile = Normalize(file);

    if (filesMap.count(normalizedFile)) return filesMap.at(normalizedFile);

    for (const auto& linkedDirectoryWithFS : linkedFS) {
      if (InsideDirectory(normalizedFile, linkedDirectoryWithFS.first)) {
        return linkedDirectoryWithFS.second.fs->ReadFile(
            linkedDirectoryWithFS.second.cwd + normalizedFile);
      }
    };

    // Not found, just return an empty value.
    return "";
  };

  /**
   * \brief Return a vector containing the files in the specified path
   *
   * \param path The path to read
   * \param extension If specified, only file finishing with this extension will
   * be returned
   * \return A vector with all the matched files
   */
  virtual std::vector<gd::String> ReadDir(const gd::String& path,
                                          const gd::String& extension = "") {
    std::unordered_set<gd::String> result_set;
    const auto normalizedDirectory = Normalize(path);

    for (const auto& linkedDirectoryWithFS : linkedFS) {
      if (InsideDirectory(normalizedDirectory, linkedDirectoryWithFS.first)) {
        for (const auto& fileName : linkedDirectoryWithFS.second.fs->ReadDir(
                 linkedDirectoryWithFS.second.cwd + normalizedDirectory)) {
          result_set.insert(fileName);
        }
        break;
      }
    };

    for (const auto& file : directoriesContents[normalizedDirectory]) {
      if (extension.empty() ||
          file.substr(file.length() - extension.length()) == extension)
        result_set.insert(file);
    }

    std::vector<gd::String> result(result_set.begin(), result_set.end());
    return result;
  };

  /**
   * \brief Links a real filesystem to this in-memory one. Reads for files
   * that are not in-memory will be forwarded to the linked FS, and persist
   * will write in-memory changes to the linked filesystem.
   */
  void MountFS(AbstractFileSystem* fs,
               const gd::String& mountLocation,
               const gd::String& linkedDirectory) {
    const gd::String normalizedMountLocation = Normalize(mountLocation);
    linkedFS[normalizedMountLocation].fs = fs;
    linkedFS[normalizedMountLocation].cwd = linkedDirectory;
  };

  /**
   * \brief Apply the pending destructive actions on the linked file systems.
   */
  void Persist() {
    for (const auto& linkedDirectoryWithFS : linkedFS) {
      for (const auto& directoryName : clearedDirectories) {
        if (InsideDirectory(directoryName, linkedDirectoryWithFS.first)) {
          linkedDirectoryWithFS.second.fs->ClearDir(
              linkedDirectoryWithFS.second.cwd + directoryName);
        }
      }
      for (const auto& fileWithContent : filesMap) {
        if (InsideDirectory(fileWithContent.first,
                            linkedDirectoryWithFS.first)) {
          linkedDirectoryWithFS.second.fs->WriteToFile(
              linkedDirectoryWithFS.second.cwd + fileWithContent.first,
              fileWithContent.second);
        }
      }
    }
  };

 protected:
  bool InsideDirectory(const gd::String& file, const gd::String& directory) {
    return file.length() > directory.length() &&
           file.substr(0, directory.length()) == directory;
  }

  std::unordered_map<gd::String, gd::String> filesMap;
  std::unordered_map<gd::String, std::unordered_set<gd::String>>
      directoriesContents;
  std::unordered_set<gd::String> clearedDirectories;

  struct LinkedFS {
    LinkedFS();
    AbstractFileSystem* fs;
    gd::String cwd;
  };
  std::unordered_map<gd::String, LinkedFS> linkedFS;
};

}  // namespace gd

#endif  // GDCORE_INMEMORYFILESYSTEM
