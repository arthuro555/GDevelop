import {
  generateListOfNodesMatchingSearchInVariable,
  generateListOfNodesMatchingSearchInVariablesContainer,
  getVariableContextFromNodeId,
  separator,
  updateListOfNodesFollowingChangeName,
} from './VariableToTreeNodeHandling';

describe('VariableToTreeNodeHandling', () => {
  // @ts-expect-error - TS7034 - Variable 'variablesContainer' implicitly has type 'any' in some locations where its type cannot be determined.
  let variablesContainer;
  // @ts-expect-error - TS7034 - Variable 'parent' implicitly has type 'any' in some locations where its type cannot be determined.
  let parent;
  // @ts-expect-error - TS7034 - Variable 'stringChild' implicitly has type 'any' in some locations where its type cannot be determined.
  let stringChild;
  // @ts-expect-error - TS7034 - Variable 'arrayChild' implicitly has type 'any' in some locations where its type cannot be determined.
  let arrayChild;
  let firstArrayChild;
  // @ts-expect-error - TS7034 - Variable 'secondArrayChild' implicitly has type 'any' in some locations where its type cannot be determined.
  let secondArrayChild;
  // @ts-expect-error - TS7034 - Variable 'parent2' implicitly has type 'any' in some locations where its type cannot be determined.
  let parent2;
  // @ts-expect-error - TS7034 - Variable 'boolChild' implicitly has type 'any' in some locations where its type cannot be determined.
  let boolChild;
  // @ts-expect-error - TS7034 - Variable 'structureChild' implicitly has type 'any' in some locations where its type cannot be determined.
  let structureChild;
  // @ts-expect-error - TS7034 - Variable 'firstStructureChild' implicitly has type 'any' in some locations where its type cannot be determined.
  let firstStructureChild;
  // @ts-expect-error - TS7034 - Variable 'secondStructureChild' implicitly has type 'any' in some locations where its type cannot be determined.
  let secondStructureChild;
  beforeEach(() => {
    /*
    variablesContainer
    ├── parent
    │   ├── stringChild
    │   └── arrayChild (folded)
    │       ├── firstArrayChild 35
    │       └── secondArrayChild false
    └── parent2 (folded)
        ├── boolChild true
        └── structureChild
            ├── firstStructureChild 'Danger'
            └── secondStructureChild 'secondStructureChild'
     */
    parent = new gd.Variable();
    parent.castTo('structure');
    parent.setFolded(false);

    stringChild = new gd.Variable();
    stringChild.setString('stringValue');
    parent.insertChild('stringChild', stringChild);

    arrayChild = new gd.Variable();
    arrayChild.castTo('array');
    arrayChild.setFolded(true);
    firstArrayChild = arrayChild.pushNew();
    firstArrayChild.setValue(35);
    secondArrayChild = arrayChild.pushNew();
    secondArrayChild.setBool(false);

    parent.insertChild('arrayChild', arrayChild);

    parent2 = new gd.Variable();
    parent2.castTo('structure');
    parent2.setFolded(true);

    boolChild = new gd.Variable();
    boolChild.setBool(true);
    parent2.insertChild('boolChild', boolChild);

    structureChild = new gd.Variable();
    structureChild.castTo('structure');
    structureChild.setFolded(false);
    firstStructureChild = new gd.Variable();
    firstStructureChild.setString('Danger');
    structureChild.insertChild('firstStructureChild', firstStructureChild);
    secondStructureChild = new gd.Variable();
    secondStructureChild.setString('secondStructureChild');
    structureChild.insertChild('secondStructureChild', secondStructureChild);

    parent2.insertChild('structureChild', structureChild);

    variablesContainer = new gd.VariablesContainer();
    variablesContainer.insert('parent', parent, 0);
    variablesContainer.insert('parent2', parent2, 1);
  });

  describe('getVariableContextFromNodeId', () => {
    test('Variable context is correctly given for array element', () => {
      const { variable, lineage, depth, name } = getVariableContextFromNodeId(
        `parent${separator}arrayChild${separator}1`,
        // @ts-expect-error - TS7005 - Variable 'variablesContainer' implicitly has an 'any' type.
        variablesContainer
      );
      if (!variable || !name) throw new Error('Variable could not be found');
      expect(name).toBe('1');
      expect(depth).toBe(2);
      expect(lineage.length).toBe(2);
      expect(lineage).toEqual([
        expect.objectContaining({
          nodeId: 'parent',
          name: 'parent',
          variable: expect.any(gd.Variable),
        }),
        expect.objectContaining({
          nodeId: `parent${separator}arrayChild`,
          name: 'arrayChild',
          variable: expect.any(gd.Variable),
        }),
      ]);
      expect(variable.getBool()).toBe(secondArrayChild.getBool());
    });

    test('Variable context is correctly given for structure element', () => {
      const { variable, lineage, depth, name } = getVariableContextFromNodeId(
        `parent2${separator}structureChild${separator}firstStructureChild`,
        // @ts-expect-error - TS7005 - Variable 'variablesContainer' implicitly has an 'any' type.
        variablesContainer
      );
      if (!variable || !name) throw new Error('Variable could not be found');
      expect(name).toBe('firstStructureChild');
      expect(depth).toBe(2);
      expect(lineage.length).toBe(2);
      expect(lineage).toEqual([
        expect.objectContaining({
          nodeId: 'parent2',
          name: 'parent2',
          variable: expect.any(gd.Variable),
        }),
        expect.objectContaining({
          nodeId: `parent2${separator}structureChild`,
          name: 'structureChild',
          variable: expect.any(gd.Variable),
        }),
      ]);
      expect(variable.getString()).toBe(firstStructureChild.getString());
    });
  });

  describe('updateListOfNodesFollowingChangeName', () => {
    test('Concerned variable node id is modified in the list', () => {
      expect(
        updateListOfNodesFollowingChangeName(
          [
            'parent',
            `parent2${separator}structureChild`,
            `parent${separator}arrayChild`,
          ],
          `parent2${separator}structureChild`,
          'newStructureChildName'
        )
      ).toEqual([
        'parent',
        `parent2${separator}newStructureChildName`,
        `parent${separator}arrayChild`,
      ]);
    });

    test("Concerned variable's children node ids are modified in the list", () => {
      expect(
        updateListOfNodesFollowingChangeName(
          [
            'parent',
            `parent2${separator}structureChild${separator}firstStructureChild`,
            `parent2${separator}structureChild${separator}firstSecondChild`,
          ],
          `parent2${separator}structureChild`,
          'newStructureChildName'
        )
      ).toEqual([
        'parent',
        `parent2${separator}newStructureChildName${separator}firstStructureChild`,
        `parent2${separator}newStructureChildName${separator}firstSecondChild`,
      ]);
    });
  });

  describe('generateListOfNodesMatchingSearchInVariable', () => {
    test('First variable should be included if name matches', () => {
      expect(
        generateListOfNodesMatchingSearchInVariable({
          // @ts-expect-error - TS7005 - Variable 'parent' implicitly has an 'any' type.
          variable: parent,
          variableName: 'parent',
          nodeId: 'parent',
          searchText: 'parent',
          acc: [],
        })
      ).toEqual(['parent']);
      expect(
        generateListOfNodesMatchingSearchInVariable({
          // @ts-expect-error - TS7005 - Variable 'parent2' implicitly has an 'any' type.
          variable: parent2,
          variableName: 'parent2',
          nodeId: 'parent2',
          searchText: 'parent',
          acc: [],
        })
      ).toEqual(['parent2']);
    });

    test('Leaf variable in array should be included if value matches', () => {
      expect(
        generateListOfNodesMatchingSearchInVariable({
          // @ts-expect-error - TS7005 - Variable 'parent' implicitly has an 'any' type.
          variable: parent,
          variableName: 'parent',
          nodeId: 'parent',
          searchText: '35',
          acc: [],
        })
      ).toEqual([`parent${separator}arrayChild${separator}0`]);
    });

    test('Leaf variable in structure should be included if value matches', () => {
      expect(
        generateListOfNodesMatchingSearchInVariable({
          // @ts-expect-error - TS7005 - Variable 'parent2' implicitly has an 'any' type.
          variable: parent2,
          variableName: 'parent2',
          nodeId: 'parent2',
          searchText: 'danger',
          acc: [],
        })
      ).toEqual([
        `parent2${separator}structureChild${separator}firstStructureChild`,
      ]);
    });

    test('All branches should be included if each variable matches by the name and/or the value', () => {
      expect(
        generateListOfNodesMatchingSearchInVariable({
          // @ts-expect-error - TS7005 - Variable 'parent2' implicitly has an 'any' type.
          variable: parent2,
          variableName: 'parent2',
          nodeId: 'parent2',
          searchText: 'structure',
          acc: [],
        })
      ).toEqual([
        `parent2${separator}structureChild`,
        `parent2${separator}structureChild${separator}firstStructureChild`,
        `parent2${separator}structureChild${separator}secondStructureChild`,
      ]);
    });
  });

  describe('generateListOfNodesMatchingSearchInVariablesContainer', () => {
    test('First variable should be included if name matches', () => {
      expect(
        generateListOfNodesMatchingSearchInVariablesContainer(
          // @ts-expect-error - TS7005 - Variable 'variablesContainer' implicitly has an 'any' type.
          variablesContainer,
          'parent'
        )
      ).toEqual(['parent', 'parent2']);
    });

    test('Leaf variable in array should be included if value matches', () => {
      expect(
        generateListOfNodesMatchingSearchInVariablesContainer(
          // @ts-expect-error - TS7005 - Variable 'variablesContainer' implicitly has an 'any' type.
          variablesContainer,
          '35'
        )
      ).toEqual([`parent${separator}arrayChild${separator}0`]);
    });

    test('Leaf variable in structure should be included if value matches', () => {
      expect(
        generateListOfNodesMatchingSearchInVariablesContainer(
          // @ts-expect-error - TS7005 - Variable 'variablesContainer' implicitly has an 'any' type.
          variablesContainer,
          'danger'
        )
      ).toEqual([
        `parent2${separator}structureChild${separator}firstStructureChild`,
      ]);
    });

    test('All branches should be included if each variable matches by the name and/or the value', () => {
      expect(
        generateListOfNodesMatchingSearchInVariablesContainer(
          // @ts-expect-error - TS7005 - Variable 'variablesContainer' implicitly has an 'any' type.
          variablesContainer,
          'child'
        )
      ).toEqual([
        `parent${separator}arrayChild`,
        `parent${separator}stringChild`,
        `parent2${separator}boolChild`,
        `parent2${separator}structureChild`,
        `parent2${separator}structureChild${separator}firstStructureChild`,
        `parent2${separator}structureChild${separator}secondStructureChild`,
      ]);
    });
  });

  afterEach(() => {
    // @ts-expect-error - TS7005 - Variable 'variablesContainer' implicitly has an 'any' type.
    variablesContainer.delete();
    // @ts-expect-error - TS7005 - Variable 'parent' implicitly has an 'any' type.
    parent.delete();
    // @ts-expect-error - TS7005 - Variable 'stringChild' implicitly has an 'any' type.
    stringChild.delete();
    // @ts-expect-error - TS7005 - Variable 'arrayChild' implicitly has an 'any' type.
    arrayChild.delete();
    // @ts-expect-error - TS7005 - Variable 'parent2' implicitly has an 'any' type.
    parent2.delete();
    // @ts-expect-error - TS7005 - Variable 'boolChild' implicitly has an 'any' type.
    boolChild.delete();
    // @ts-expect-error - TS7005 - Variable 'structureChild' implicitly has an 'any' type.
    structureChild.delete();
    // @ts-expect-error - TS7005 - Variable 'firstStructureChild' implicitly has an 'any' type.
    firstStructureChild.delete();
    // @ts-expect-error - TS7005 - Variable 'secondStructureChild' implicitly has an 'any' type.
    secondStructureChild.delete();
  });
});
