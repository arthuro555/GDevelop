/**
 * \file
 * Adapted from the article http://www.sfml-dev.org/wiki/en/tutorials/formatdat
 * which is itself inspired from archive.gamedev.net/archive/reference/programming/features/pak/index.html
 */

#ifndef DATFILE_H
#define DATFILE_H

#include <string>
#include <vector>

using namespace std;

/**
 * \brief Internal class related to DatFile
 *
 * \ingroup ResourcesManagement
 */
struct sDATHeader
{
    char uniqueID[5]; /// Unique ID used to know if this file is a DAT File from this class
    char version[3]; /// Version of the DAT file format
    unsigned int nb_files; /// Number of files in the DAT file
};

/**
 * \brief Internal class related to DatFile
 *
 * \ingroup ResourcesManagement
 */
struct sFileEntry
{
    char name[1024]; /// Name of the data file
    long size; /// Size of the data file
    long offset; /// Offset, in the DAT file where the file is
};

/**
 * \brief Internal class used to create and access "DAT files".
 *
 * \ingroup ResourcesManagement
 */
class GD_API DatFile
{
private :
    std::string m_datfile; /// name of the DAT file
    sDATHeader m_header; /// file header
    std::vector<sFileEntry> m_entries; /// vector of files entries
    char* m_buffer; /// Buffer pointing on a file in memory
public :
    DatFile (void);
    ~DatFile (void);
    bool Create (std::vector<std::string> files, std::string directory, std::string destination);
    bool ContainsFile(const std::string & filename);
    bool Read (std::string source);
    char* GetFile (std::string filename);
    long int GetFileSize (std::string filename);
};

#endif // DATFILE_H

