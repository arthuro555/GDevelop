/** \file
 *  Game Develop
 *  2008-2012 Florian Rival (Florian.Rival@gmail.com)
 */

#if defined(GD_IDE_ONLY)
#include "GDL/IDE/BaseDebugger.h"

void BaseDebugger::Update()
{
    if ( timeInterval.getElapsedTime().asMilliseconds() > 200 ) //Update each 200 ms
    {
        UpdateGUI();
        timeInterval.restart();
    }
}
#endif

