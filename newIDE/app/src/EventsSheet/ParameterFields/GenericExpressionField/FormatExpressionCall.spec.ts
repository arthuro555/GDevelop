import {formatExpressionCall, getVisibleParameterTypes} from './FormatExpressionCall';
import {
  filterExpressions,
  enumerateFreeExpressions,
  enumerateBehaviorExpressions,
  enumerateObjectExpressions,
} from '../../../InstructionOrExpression/EnumerateExpressions';

const makeFakeI18n = (fakeI18n: undefined): I18nType => ({
// @ts-expect-error - TS2698 - Spread types may only be created from object types.
  ...fakeI18n,
// @ts-expect-error - TS7006 - Parameter 'message' implicitly has an 'any' type.
  _: message => message.id,
});

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('FormatExpressionCall', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('properly formats a free function, with one or more arguments', () => {
    const freeExpressions = enumerateFreeExpressions(
      'number|string',
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const countExpression = filterExpressions(
      freeExpressions,
      'PickedInstancesCount'
    )[0];
    expect(
      formatExpressionCall(countExpression, ['MyObject'], {
        shouldConvertToString: false,
      })
    ).toBe('PickedInstancesCount(MyObject)');

    const atan2Expression = filterExpressions(freeExpressions, 'atan2')[0];
    expect(
      formatExpressionCall(atan2Expression, ['1', '2'], {
        shouldConvertToString: false,
      })
    ).toBe('atan2(1, 2)');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('properly formats a free function, with "code-only" parameters', () => {
    const freeExpressions = enumerateFreeExpressions(
      'number|string',
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const cameraHeightExpression = filterExpressions(
      freeExpressions,
      'CameraHeight'
    )[0];
    expect(
      formatExpressionCall(cameraHeightExpression, ['', '"My layer"', '0'], {
        shouldConvertToString: false,
      })
    ).toBe('CameraHeight("My layer", 0)');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('properly formats a free function, with "code-only" and optional parameters', () => {
    const freeExpressions = enumerateFreeExpressions(
      'number|string',
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const touchExpression = filterExpressions(freeExpressions, 'TouchX')[0];
    expect(
      formatExpressionCall(touchExpression, ['', '1'], {
        shouldConvertToString: false,
      })
    ).toBe('TouchX(1)');
    expect(
      formatExpressionCall(touchExpression, ['', '1', '"My layer"'], {
        shouldConvertToString: false,
      })
    ).toBe('TouchX(1, "My layer")');
    expect(
      formatExpressionCall(touchExpression, ['', '1', '', ''], {
        shouldConvertToString: false,
      })
    ).toBe('TouchX(1)');
    expect(
      formatExpressionCall(touchExpression, ['', '1', '', '2'], {
        shouldConvertToString: false,
      })
    ).toBe('TouchX(1, "", 2)');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('properly formats an object function', () => {
    const objectsExpressions = enumerateObjectExpressions(
      'number|string',
      'Sprite'
    );
    const variableStringExpression = filterExpressions(
      objectsExpressions,
      'Variable'
    )[0];
    expect(variableStringExpression).not.toBeUndefined();
    expect(
      formatExpressionCall(
        variableStringExpression,
        ['MyObject', 'Variable1'],
        { shouldConvertToString: false }
      )
    ).toBe('MyObject.Variable(Variable1)');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('properly formats an object function with an argument', () => {
    const objectsExpressions = enumerateObjectExpressions(
      'number|string',
      'Sprite'
    );
    const pointXExpression = filterExpressions(objectsExpressions, 'PointX')[0];
    expect(pointXExpression).not.toBeUndefined();
    expect(
      formatExpressionCall(pointXExpression, ['MyObject', '"MyPoint"'], {
        shouldConvertToString: false,
      })
    ).toBe('MyObject.PointX("MyPoint")');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('properly formats an object behavior function', () => {
    const behaviorsExpressions = enumerateBehaviorExpressions(
      'number|string',
      'PlatformBehavior::PlatformerObjectBehavior'
    );
    const jumpSpeedExpression = filterExpressions(
      behaviorsExpressions,
      'JumpSpeed'
    )[0];
    expect(jumpSpeedExpression).not.toBeUndefined();
    expect(
      formatExpressionCall(
        jumpSpeedExpression,
        ['MyObject', 'PlatformerObject'],
        { shouldConvertToString: false }
      )
    ).toBe('MyObject.PlatformerObject::JumpSpeed()');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('properly formats an object behavior function and converts to string', () => {
    const behaviorsExpressions = enumerateBehaviorExpressions(
      'number|string',
      'PlatformBehavior::PlatformerObjectBehavior'
    );
    const jumpSpeedExpression = filterExpressions(
      behaviorsExpressions,
      'JumpSpeed'
    )[0];
    expect(jumpSpeedExpression).not.toBeUndefined();
    expect(
      formatExpressionCall(
        jumpSpeedExpression,
        ['MyObject', 'PlatformerObject'],
        { shouldConvertToString: true }
      )
    ).toBe('ToString(MyObject.PlatformerObject::JumpSpeed())');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can return the visible parameters of a function', () => {
    const objectsExpressions = enumerateObjectExpressions(
      'number|string',
      'Sprite'
    );
    const pointXExpression = filterExpressions(objectsExpressions, 'PointX')[0];
    expect(pointXExpression).not.toBeUndefined();

    expect(getVisibleParameterTypes(pointXExpression)).toEqual([
      'objectPointName',
    ]);
  });
});
