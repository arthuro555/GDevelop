import * as React from 'react';
import isDialogOpen from '../UI/OpenedDialogChecker';
import { isMacLike } from '../Utils/Platform';
import reservedShortcuts from './ReservedShortcuts';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
import commandsList, { CommandName } from '../CommandPalette/CommandsList';
import isUserTyping from './IsUserTyping';
import defaultShortcuts, { ShortcutMap } from './DefaultShortcuts';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../Utils/OptionalRequire';
const electron = optionalRequire('electron');

// Valid action keys
type KeyType = // A-Z
'alphabet' | // Numrow 0-9
'number' | // F1-F12
'fn-row' | // Numpad+, Numpad-
'numpad-arith' | // Numrow-, Numrow=
'numrow-arith' | 'other'; // Tab, Space

const eventWhichToCode = {
  '48': 'Digit0',
  '49': 'Digit1',
  '50': 'Digit2',
  '51': 'Digit3',
  '52': 'Digit4',
  '53': 'Digit5',
  '54': 'Digit6',
  '55': 'Digit7',
  '56': 'Digit8',
  '57': 'Digit9',
  '65': 'KeyA',
  '66': 'KeyB',
  '67': 'KeyC',
  '68': 'KeyD',
  '69': 'KeyE',
  '70': 'KeyF',
  '71': 'KeyG',
  '72': 'KeyH',
  '73': 'KeyI',
  '74': 'KeyJ',
  '75': 'KeyK',
  '76': 'KeyL',
  '77': 'KeyM',
  '78': 'KeyN',
  '79': 'KeyO',
  '80': 'KeyP',
  '81': 'KeyQ',
  '82': 'KeyR',
  '83': 'KeyS',
  '84': 'KeyT',
  '85': 'KeyU',
  '86': 'KeyV',
  '87': 'KeyW',
  '88': 'KeyX',
  '89': 'KeyY',
  '90': 'KeyZ',
  '112': 'F1',
  '113': 'F2',
  '114': 'F3',
  '115': 'F4',
  '116': 'F5',
  '117': 'F6',
  '118': 'F7',
  '119': 'F8',
  '120': 'F9',
  '121': 'F10',
  '122': 'F11',
  '123': 'F12',
  '188': 'Comma',
} as const;

const getCodeFromEvent = (e: KeyboardEvent): string => {
  // Somehow `which` was sometimes reported to be undefined.
  if (typeof e.which === 'number' && e.which.toString() in eventWhichToCode)
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly '48': "Digit0"; readonly '49': "Digit1"; readonly '50': "Digit2"; readonly '51': "Digit3"; readonly '52': "Digit4"; readonly '53': "Digit5"; readonly '54': "Digit6"; readonly '55': "Digit7"; readonly '56': "Digit8"; ... 39 more ...; readonly '188': "Comma"; }'.
    return eventWhichToCode[e.which.toString()];
  return e.code || ''; // Somehow `code` was sometimes reported to be undefined.
};

/**
 * Given a key code, gives the associated KeyType.
 * Returns null if the key code can't be categorised.
 */
const getKeyTypeFromCode = (code: string): KeyType | null => {
  if (!code) return null;
  if (code.indexOf('Key') === 0) return 'alphabet';
  if (code.indexOf('Digit') === 0) return 'number';
  if (code.indexOf('F') === 0) return 'fn-row';
  if (code === 'NumpadAdd' || code === 'NumpadSubtract') return 'numpad-arith';
  if (code === 'Equal' || code === 'Minus') return 'numrow-arith';
  if (code === 'Tab' || code === 'Space' || code === 'Comma') return 'other';
  return null;
};

/**
 * Returns possibly partial shortcut string corresponding to given event object
 */
export const getShortcutStringFromEvent = (e: KeyboardEvent): string => {
  let shortcutString = '';
  if (e.ctrlKey || e.metaKey) shortcutString += 'CmdOrCtrl+';
  if (e.shiftKey) shortcutString += 'Shift+';
  if (e.altKey) shortcutString += 'Alt+';

  const code = getCodeFromEvent(e);
  const keyType = getKeyTypeFromCode(code);
  if (keyType) shortcutString += code;
  return shortcutString;
};

/**
 * Checks if the given event corresponds to a valid shortcut press.
 * Does not check if shortcut is reserved or not.
 */
export const isValidShortcutEvent = (e: KeyboardEvent): boolean => {
  // Check if action key is a shortcut supported key
  const code = getCodeFromEvent(e);
  const keyType = getKeyTypeFromCode(code);
  if (!keyType) return false;

  const ctrlOrCmdPressed = e.ctrlKey || e.metaKey;
  const altPressed = e.altKey;

  // Check keytype-specific restrictions
  if (keyType === 'other') {
    // Tab and Space may clash with keyboard navigation - Ctrl or Alt required
    if (!ctrlOrCmdPressed && !altPressed) return false;
  }

  return true;
};

/**
 * Extracts shortcut-related information from given event object
 */
export const getShortcutMetadataFromEvent = (e: KeyboardEvent): {
  shortcutString: string,
  isValid: boolean
} => {
  const shortcutString = getShortcutStringFromEvent(e);
  const isValidKey = isValidShortcutEvent(e);
  const isReserved = reservedShortcuts.includes(shortcutString);
  return { shortcutString, isValid: isValidKey && !isReserved };
};

/**
 * Patches default shortcuts set with user's custom shortcuts and
 * returns the full shortcut map obtained.
 */
export const useShortcutMap = (): ShortcutMap => {
  const preferences = React.useContext(PreferencesContext);
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
  const userShortcutMap = preferences.values.userShortcutMap;
  return { ...defaultShortcuts, ...userShortcutMap };
};

/**
 * Listens for keyboard shortcuts and launches
 * callback with corresponding command
 */
export const useKeyboardShortcuts = (onRunCommand: (arg1: CommandName) => void) => {
  const shortcutMap = useShortcutMap();

  React.useEffect(
    () => {
      const handler = (e: KeyboardEvent) => {
        // Extract shortcut from event object and check if it's valid
        const shortcutData = getShortcutMetadataFromEvent(e);
        if (!shortcutData.isValid) return;

        // Get corresponding command, if it exists
        const commandName = Object.keys(shortcutMap).find(
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, string>>'.
          name => shortcutMap[name] === shortcutData.shortcutString
        );
        if (!commandName) return;

        // On desktop app, ignore shortcuts that are handled by Electron
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, CommandMetadata>>'.
        if (electron && commandsList[commandName].handledByElectron) return;

        // e.preventDefault tends to block user from typing,
        // so do it only if user is not typing.
        if (isUserTyping()) return;
        e.preventDefault();

        // Discard shortcut presses if a dialog is open
        if (isDialogOpen()) return;

// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'CommandName'.
        onRunCommand(commandName);
      };

      document.addEventListener('keydown', handler);
      return () => document.removeEventListener('keydown', handler);
    },
    [onRunCommand, shortcutMap]
  );
};

/**
 * Converts an action key's e.code value to user-friendly string
 * For example, "KeyA" -> "A", "NumpadAdd" -> "Plus"
 */
const getKeyDisplayName = (code: string) => {
  const keyType = getKeyTypeFromCode(code);
  if (keyType === 'alphabet') return code.slice(3);
  if (keyType === 'number') return code.slice(5);
  if (keyType === 'fn-row') return code;
  if (keyType === 'numpad-arith') return code === 'NumpadAdd' ? 'Num+' : 'Num-';
  if (keyType === 'numrow-arith') return code === 'Minus' ? '-' : '=';
  if (code === 'Comma') return ',';
  return code; // Tab, Space
};

/**
 * Parses shortcut string into array of platform-specific key strings
 */
export const getShortcutDisplayName = (shortcutString?: string | null) => {
  if (!shortcutString) return '';

  return shortcutString
    .split('+')
    .map<string>(keyCode => {
      if (keyCode === 'CmdOrCtrl') return isMacLike() ? 'Cmd' : 'Ctrl';
      if (keyCode === 'Shift' || keyCode === 'Alt') return keyCode;
      return getKeyDisplayName(keyCode);
    })
    .join(' + ');
};

/**
 * Takes key code and returns Electron string for the key
 */
const getElectronKeyString = (code: string) => {
  const keyType = getKeyTypeFromCode(code);
  if (keyType === 'alphabet') return code.slice(3);
  if (keyType === 'number') return code.slice(5);
  if (keyType === 'fn-row') return code;
  if (keyType === 'numpad-arith')
    return code === 'NumpadAdd' ? 'numadd' : 'numsub';
  if (keyType === 'numrow-arith') return code === 'Minus' ? '-' : '=';
  return code; // Tab, Space
};

/**
 * Converts given shortcut string into an Electron accelerator string
 */
export const getElectronAccelerator = (shortcutString: string) => {
  return shortcutString
    .split('+')
    .map<string>(keyCode => {
      if (keyCode === 'CmdOrCtrl' || keyCode === 'Shift' || keyCode === 'Alt')
        return keyCode;
      return getElectronKeyString(keyCode);
    })
    .join('+');
};
