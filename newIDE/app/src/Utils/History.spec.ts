import {getHistoryInitialState, canRedo, canUndo, saveToHistory, undo, redo} from './History';
import { makeTestProject } from '../fixtures/TestProject';
const gd: libGDevelop = global.gd;

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('History', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can save changes for a simple serializable object from libGD.js', () => {
    const gdVariable = new gd.Variable();

    gdVariable.setString('Original value');
    let history = getHistoryInitialState(gdVariable, { historyMaxSize: 50 });
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(false);

    gdVariable.setString('New value 1');
    history = saveToHistory(history, gdVariable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    gdVariable.setString('New value 2');
    history = saveToHistory(history, gdVariable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    history = undo(history, gdVariable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(gdVariable.getString()).toBe('New value 1');

    history = undo(history, gdVariable);
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(true);
    expect(gdVariable.getString()).toBe('Original value');

    history = redo(history, gdVariable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(gdVariable.getString()).toBe('New value 1');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can save changes for a serializable object from libGD.js', () => {
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'void'. | TS2339 - Property 'testLayout' does not exist on type 'void'.
    const { project, testLayout } = makeTestProject(gd);

    testLayout.setWindowDefaultTitle('Original name');
    let history = getHistoryInitialState(testLayout, { historyMaxSize: 50 });
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(false);

    testLayout.setWindowDefaultTitle('New name 1');
    history = saveToHistory(history, testLayout, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    testLayout.setWindowDefaultTitle('New name 2');
    history = saveToHistory(history, testLayout, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    history = undo(history, testLayout, project);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(testLayout.getWindowDefaultTitle()).toBe('New name 1');

    history = undo(history, testLayout, project);
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(true);
    expect(testLayout.getWindowDefaultTitle()).toBe('Original name');

    history = redo(history, testLayout, project);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(testLayout.getWindowDefaultTitle()).toBe('New name 1');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('is limited to the maximum specified size', () => {
    const gdVariable = new gd.Variable();

    gdVariable.setString('Original value');
    let history = getHistoryInitialState(gdVariable, { historyMaxSize: 2 });
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(false);

    gdVariable.setString('New value 1');
    history = saveToHistory(history, gdVariable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    gdVariable.setString('New value 2');
    history = saveToHistory(history, gdVariable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    gdVariable.setString('New value 3');
    history = saveToHistory(history, gdVariable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    history = undo(history, gdVariable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(gdVariable.getString()).toBe('New value 2');

    history = undo(history, gdVariable);
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(true);
    expect(gdVariable.getString()).toBe('New value 1');

    history = redo(history, gdVariable);
    history = redo(history, gdVariable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);
    expect(gdVariable.getString()).toBe('New value 3');

    gdVariable.setString('New value 4');
    history = saveToHistory(history, gdVariable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    history = undo(history, gdVariable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(gdVariable.getString()).toBe('New value 3');

    history = undo(history, gdVariable);
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(true);
    expect(gdVariable.getString()).toBe('New value 2');
  });
});
