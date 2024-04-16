import {
  enumerateFreeExpressions,
  filterExpressions,
  enumerateObjectExpressions,
  enumerateBehaviorExpressions,
  enumerateAllExpressions,
} from './EnumerateExpressions';
import { createTree, TreeNode } from './CreateTree';
import { makeTestExtensions } from '../fixtures/TestExtensions';
import { EnumeratedExpressionMetadata } from './EnumeratedInstructionOrExpressionMetadata';
const gd: libGDevelop = global.gd;

const makeFakeI18n = (fakeI18n: undefined): I18nType => ({
// @ts-expect-error - TS2698 - Spread types may only be created from object types.
  ...fakeI18n,
// @ts-expect-error - TS7006 - Parameter 'message' implicitly has an 'any' type.
  _: message => message.id,
});

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('EnumerateExpressions', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate and filter free expressions (number only)', () => {
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
    const freeExpressions = enumerateFreeExpressions('number', makeFakeI18n());

    // Should find atan, atan2, atanh math function
    expect(filterExpressions(freeExpressions, 'atan')).toHaveLength(3);

    // Should find abs math function
    expect(filterExpressions(freeExpressions, 'abs')).toHaveLength(1);

    expect(filterExpressions(freeExpressions, 'CursorX')).toHaveLength(1);
    expect(filterExpressions(freeExpressions, 'CursorY')).toHaveLength(1);
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate and filter free expressions', () => {
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
    const freeExpressions = enumerateFreeExpressions('string', makeFakeI18n());

    // Should find ToString and LargeNumberToString:
    expect(filterExpressions(freeExpressions, 'ToString')).toHaveLength(2);

    // Should find atan, atan2, atanh math function
    expect(filterExpressions(freeExpressions, 'atan')).toHaveLength(3);

    // Should find abs math function
    expect(filterExpressions(freeExpressions, 'abs')).toHaveLength(1);

    expect(filterExpressions(freeExpressions, 'CursorX')).toHaveLength(1);
    expect(filterExpressions(freeExpressions, 'CursorY')).toHaveLength(1);
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate and filter object expressions (number only)', () => {
    const spriteObjectExpressions = enumerateObjectExpressions(
      'number',
      'Sprite'
    );
    expect(filterExpressions(spriteObjectExpressions, 'PointX')).toHaveLength(
      1
    );

    const objectExpressions = enumerateObjectExpressions('number', '');
    expect(filterExpressions(objectExpressions, 'PointX')).toHaveLength(0);
    expect(filterExpressions(objectExpressions, 'X')).toContainEqual(
      expect.objectContaining({
        type: 'X',
      })
    );
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate object expressions', () => {
    const spriteObjectExpressions = enumerateObjectExpressions(
      'string',
      'Sprite'
    );
    expect(filterExpressions(spriteObjectExpressions, 'PointX')).toHaveLength(
      1
    );
    expect(filterExpressions(spriteObjectExpressions, 'Layer')).toHaveLength(1);
    expect(
      filterExpressions(spriteObjectExpressions, 'AnimationFrameCount')
    ).toHaveLength(1);

    const objectExpressions = enumerateObjectExpressions('string', '');
    expect(filterExpressions(objectExpressions, 'PointX')).toHaveLength(0);
    expect(filterExpressions(objectExpressions, 'Layer')).toHaveLength(1);
    expect(filterExpressions(objectExpressions, 'X')).toContainEqual(
      expect.objectContaining({
        type: 'X',
      })
    );
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate and filter behavior expressions (number only)', () => {
    const platformerObjectBehaviorExpressions = enumerateBehaviorExpressions(
      'number',
      'PlatformBehavior::PlatformerObjectBehavior'
    );

    const jumpSpeedExpressions = filterExpressions(
      platformerObjectBehaviorExpressions,
      'JumpSpeed'
    );

    expect(jumpSpeedExpressions).toHaveLength(2);
    expect(jumpSpeedExpressions).toContainEqual(
      expect.objectContaining({
        type: 'JumpSpeed',
      })
    );
    expect(jumpSpeedExpressions).toContainEqual(
      expect.objectContaining({
        type: 'CurrentJumpSpeed',
      })
    );
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate behavior expressions', () => {
    makeTestExtensions(gd);
    const fakeBehaviorExpressions = enumerateBehaviorExpressions(
      'string',
      'FakeBehavior::FakeBehavior'
    );

    expect(fakeBehaviorExpressions).toHaveLength(2);
    expect(fakeBehaviorExpressions).toContainEqual(
      expect.objectContaining({
        type: 'SomethingReturningNumberWith1NumberParam',
      })
    );
    expect(fakeBehaviorExpressions).toContainEqual(
      expect.objectContaining({
        type: 'SomethingReturningStringWith1NumberParam',
      })
    );
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can create the tree of some object expressions', () => {
    const objectsExpressions = enumerateObjectExpressions('number', '');
    expect(createTree(objectsExpressions)).toMatchObject({
      Angle: {
        Angle: {
          displayedName: 'Angle',
          fullGroupName: 'Angle',
          name: 'Angle',
          type: 'Angle',
        },
      },
      'Movement using forces': {
        ForceX: {
          displayedName: 'X coordinate of the sum of forces',
          fullGroupName: 'Movement using forces',
          name: 'ForceX',
          type: 'ForceX',
        },
      },
    });
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate all expressions (number only)', () => {
    makeTestExtensions(gd);
    const allNumberExpressions: Array<EnumeratedExpressionMetadata> = enumerateAllExpressions(
      'number',
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    // Check a free expression:
    expect(allNumberExpressions).toContainEqual(
      expect.objectContaining({
        type: 'ToNumber',
      })
    );
    // Check a behavior expression:
    expect(allNumberExpressions).toContainEqual(
      expect.objectContaining({
        type: 'SomethingReturningNumberWith1NumberParam',
      })
    );

    // Sanity check string expressions are not there:
    expect(filterExpressions(allNumberExpressions, 'ToString')).toHaveLength(0);
    expect(
      filterExpressions(
        allNumberExpressions,
        'SomethingReturningStringWith1NumberParam'
      )
    ).toHaveLength(0);
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate all expressions', () => {
    makeTestExtensions(gd);
    const allExpressions: Array<EnumeratedExpressionMetadata> = enumerateAllExpressions(
      'string',
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    // Check a free expression:
    expect(allExpressions).toContainEqual(
      expect.objectContaining({
        type: 'ToNumber',
      })
    );
    expect(allExpressions).toContainEqual(
      expect.objectContaining({
        type: 'ToString',
      })
    );
    // Check a behavior expression:
    expect(allExpressions).toContainEqual(
      expect.objectContaining({
        type: 'SomethingReturningStringWith1NumberParam',
      })
    );
    expect(allExpressions).toContainEqual(
      expect.objectContaining({
        type: 'SomethingReturningNumberWith1NumberParam',
      })
    );
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can create the tree of all expressions', () => {
    const allExpressions: Array<EnumeratedExpressionMetadata> = enumerateAllExpressions(
      'number',
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const allExpressionsTree = createTree(allExpressions);

    // Check that some free expressions are there
    expect(allExpressionsTree).toHaveProperty('General');
    const generalTreeNode: TreeNode<EnumeratedExpressionMetadata> =
      // $FlowFixMe
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"General"' can't be used to index type 'TreeNode<EnumeratedExpressionMetadata>'.
      allExpressionsTree['General'];
    expect(generalTreeNode).toMatchObject({
      'Timers and time': {
        Time: {
          displayedName: 'Current time',
          fullGroupName: 'General/Timers and time',
          iconFilename: 'res/actions/time.png',
          isPrivate: false,
          name: 'Time',
          scope: {
            objectMetadata: undefined,
            behaviorMetadata: undefined,
          },
          type: 'Time',
        },
      },
    });

    // Check that some base object expressions are there
    expect(generalTreeNode).toHaveProperty('Objects');
    expect(
      // $FlowFixMe
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"Objects"' can't be used to index type 'TreeNode<EnumeratedExpressionMetadata>'.
      generalTreeNode['Objects']
    ).toMatchObject({
      Angle: {
        Angle: {
          displayedName: 'Angle',
          fullGroupName: 'General/Objects/Angle',
          iconFilename: 'res/actions/direction_black.png',
          isPrivate: false,
          name: 'Angle',
          scope: {
            objectMetadata: expect.anything(),
          },
          type: 'Angle',
        },
      },
    });

    // Check that some Sprite object expressions are there
    expect(generalTreeNode).toHaveProperty('Sprite');
    expect(generalTreeNode['Sprite']).toMatchObject({
      Position: {
        PointX: {
          displayedName: 'X position of a point',
          fullGroupName: 'General/Sprite/Position',
          iconFilename: 'res/actions/position_black.png',
          isPrivate: false,
          name: 'PointX',
          scope: {
            objectMetadata: expect.anything(),
          },
          type: 'PointX',
        },
      },
    });

    // Check that some behavior expressions are there
    const movementTreeNode: TreeNode<EnumeratedExpressionMetadata> =
      // $FlowFixMe
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"Movement"' can't be used to index type 'TreeNode<EnumeratedExpressionMetadata>'.
      allExpressionsTree['Movement'];
    expect(movementTreeNode).toHaveProperty('Platform behavior');
    expect(movementTreeNode['Platform behavior']).toMatchObject({
      'Platformer configuration': {
        MaxSpeed: {
          displayedName: 'Maximum horizontal speed',
          fullGroupName: 'Movement/Platform behavior/Platformer configuration',
          iconFilename: 'CppPlatform/Extensions/platformerobjecticon.png',
          isPrivate: false,
          name: 'MaxSpeed',
          scope: {
            behaviorMetadata: expect.anything(),
          },
          type: 'MaxSpeed',
        },
      },
    });
  });
});
