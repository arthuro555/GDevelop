# Scripts files for GDeveloppe

-   **ReleaseProcedure.bat**: this script compiles, generate documentation (see **GenerateAllDocs.bat**) and package GDeveloppe for Windows in an installer and an archive.
-   **ReleaseProcedure.sh**: compiles and package GD for Ubuntu (see _Binaries/Packaging_).
-   **CopyWindowsToLinuxReleaseFiles.sh**: Copy all files in _Binaries/Output/Release_Windows_ to _Binaries/Output/Release_Linux_. Call it after any change in _Binaries/Output/Release_Windows_.
-   **GenerateAllDocs.[bat|sh]**: Call doxygen and yuidoc to generate all documentations into _docs_ folder.
-   **ExtractTranslations.[bat|sh]**: Create the _source.pot_ file containing the strings to be translated using [Crowdin](https://crowdin.com/project/GDeveloppe).
