import {extractGDevelopApiErrorStatusAndCode} from './Errors';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('Errors', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('Can extract status and code from a GDevelop API error', () => {
    expect(extractGDevelopApiErrorStatusAndCode(undefined)).toEqual(null);
    expect(
      extractGDevelopApiErrorStatusAndCode(new Error('Generic error'))
    ).toEqual(null);
    expect(extractGDevelopApiErrorStatusAndCode({})).toEqual(null);
    expect(extractGDevelopApiErrorStatusAndCode({ response: null })).toEqual(
      null
    );
    expect(extractGDevelopApiErrorStatusAndCode({ response: {} })).toEqual(
      null
    );
    expect(
      // $FlowExpectedError - faking error objects to test the function resilience.
      extractGDevelopApiErrorStatusAndCode({ response: { status: 'wrong' } })
    ).toEqual(null);
    expect(
      // $FlowExpectedError - faking error objects to test the function resilience.
      extractGDevelopApiErrorStatusAndCode({ response: { status: 400 } })
    ).toEqual({ status: 400, code: null });
    expect(
      // $FlowExpectedError - faking error objects to test the function resilience.
      extractGDevelopApiErrorStatusAndCode({
        response: { status: 400, data: null },
      })
    ).toEqual({ status: 400, code: null });
    expect(
      // $FlowExpectedError - faking error objects to test the function resilience.
      extractGDevelopApiErrorStatusAndCode({
        response: { status: 400, data: {} },
      })
    ).toEqual({ status: 400, code: null });
    expect(
      // $FlowExpectedError - faking error objects to test the function resilience.
      extractGDevelopApiErrorStatusAndCode({
        response: { status: 400, data: { code: 0xbad } },
      })
    ).toEqual({ status: 400, code: null });
    expect(
      // $FlowExpectedError - faking error objects to test the function resilience.
      extractGDevelopApiErrorStatusAndCode({
        response: { status: 400, data: { code: 'code/of-the-error' } },
      })
    ).toEqual({ status: 400, code: 'code/of-the-error' });
  });
});
