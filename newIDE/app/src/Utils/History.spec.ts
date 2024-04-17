import {getHistoryInitialState, canRedo, canUndo, saveToHistory, undo, redo} from './History';
import { makeTestProject } from '../fixtures/TestProject';


describe('History', () => {

  it('can save changes for a simple serializable object from libGD.js', () => {
    const gd.Variable = new gd.Variable();

    gd.Variable.setString('Original value');
    let history = getHistoryInitialState(gd.Variable, { historyMaxSize: 50 });
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(false);

    gd.Variable.setString('New value 1');
    history = saveToHistory(history, gd.Variable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    gd.Variable.setString('New value 2');
    history = saveToHistory(history, gd.Variable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    history = undo(history, gd.Variable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(gd.Variable.getString()).toBe('New value 1');

    history = undo(history, gd.Variable);
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(true);
    expect(gd.Variable.getString()).toBe('Original value');

    history = redo(history, gd.Variable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(gd.Variable.getString()).toBe('New value 1');
  });


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


  it('is limited to the maximum specified size', () => {
    const gd.Variable = new gd.Variable();

    gd.Variable.setString('Original value');
    let history = getHistoryInitialState(gd.Variable, { historyMaxSize: 2 });
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(false);

    gd.Variable.setString('New value 1');
    history = saveToHistory(history, gd.Variable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    gd.Variable.setString('New value 2');
    history = saveToHistory(history, gd.Variable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    gd.Variable.setString('New value 3');
    history = saveToHistory(history, gd.Variable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    history = undo(history, gd.Variable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(gd.Variable.getString()).toBe('New value 2');

    history = undo(history, gd.Variable);
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(true);
    expect(gd.Variable.getString()).toBe('New value 1');

    history = redo(history, gd.Variable);
    history = redo(history, gd.Variable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);
    expect(gd.Variable.getString()).toBe('New value 3');

    gd.Variable.setString('New value 4');
    history = saveToHistory(history, gd.Variable, 'EDIT');
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(false);

    history = undo(history, gd.Variable);
    expect(canUndo(history)).toBe(true);
    expect(canRedo(history)).toBe(true);
    expect(gd.Variable.getString()).toBe('New value 3');

    history = undo(history, gd.Variable);
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(true);
    expect(gd.Variable.getString()).toBe('New value 2');
  });
});
