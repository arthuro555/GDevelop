// @ts-expect-error - TS7016 - Could not find a declaration file for module './TomorrowNight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/TomorrowNight.js' implicitly has an 'any' type.
import TomorrowNight from './TomorrowNight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Monokai'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/Monokai.js' implicitly has an 'any' type.
import Monokai from './Monokai';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Tomorrow'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/Tomorrow.js' implicitly has an 'any' type.
import Tomorrow from './Tomorrow';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './SolarizedDark'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/SolarizedDark.js' implicitly has an 'any' type.
import SolarizedDark from './SolarizedDark';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './SolarizedLight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/SolarizedLight.js' implicitly has an 'any' type.
import SolarizedLight from './SolarizedLight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './VibrantInk'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/VibrantInk.js' implicitly has an 'any' type.
import VibrantInk from './VibrantInk';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './GitHub'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/GitHub.js' implicitly has an 'any' type.
import GitHub from './GitHub';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './NordDark'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/NordDark.js' implicitly has an 'any' type.
import NordDark from './NordDark';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './OneDark'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/OneDark.js' implicitly has an 'any' type.
import OneDark from './OneDark';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './RosePine'. '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/Theme/RosePine.js' implicitly has an 'any' type.
import RosePine from './RosePine';

type CodeEditorTheme = {
  name: string,
  themeName: string,
  themeData?: any
};

// Want to add a new theme? Grab a theme made for Visual Studio Code (Monaco Editor)
// (for example on https://bitwiser.in/monaco-themes/). Copy an existing file (like Monokai.js),
// replace themeData, update the name, and finally add it to this list
// (+import it at the top of the file):
const themes: Array<CodeEditorTheme> = [
  // Built-in Monaco editor themes
  {
    name: 'Visual Studio',
    themeName: 'vs',
  },
  {
    name: 'Visual Studio Dark',
    themeName: 'vs-dark',
  },
  // Third parties themes
  GitHub,
  Monokai,
  SolarizedDark,
  SolarizedLight,
  Tomorrow,
  TomorrowNight,
  VibrantInk,
  NordDark,
  OneDark,
  RosePine,
];

export const getAllThemes = () => themes;
