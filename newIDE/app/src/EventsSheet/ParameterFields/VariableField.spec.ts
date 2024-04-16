// @ts-expect-error - TS6142 - Module './VariableField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/VariableField.tsx', but '--jsx' is not set.
import {quicklyAnalyzeVariableName, VariableNameQuickAnalyzeResults} from './VariableField';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('VariableField', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can quickly analyze if a variable name or expression looks good', () => {
    expect(quicklyAnalyzeVariableName('Test')).toBe(
      VariableNameQuickAnalyzeResults.OK
    );
    expect(quicklyAnalyzeVariableName('Test123')).toBe(
      VariableNameQuickAnalyzeResults.OK
    );
    expect(quicklyAnalyzeVariableName('Hello world')).toBe(
      VariableNameQuickAnalyzeResults.WRONG_SPACE
    );
    expect(quicklyAnalyzeVariableName(' "Test"')).toBe(
      VariableNameQuickAnalyzeResults.WRONG_SPACE
    );
    expect(quicklyAnalyzeVariableName('"Test"')).toBe(
      VariableNameQuickAnalyzeResults.WRONG_QUOTE
    );
    expect(quicklyAnalyzeVariableName('VariableString(MySubVariable)')).toBe(
      VariableNameQuickAnalyzeResults.WRONG_EXPRESSION
    );
    expect(quicklyAnalyzeVariableName('Test+2')).toBe(
      VariableNameQuickAnalyzeResults.WRONG_EXPRESSION
    );
    expect(quicklyAnalyzeVariableName('MyVariable.MySubVariable')).toBe(
      VariableNameQuickAnalyzeResults.OK
    );
    expect(quicklyAnalyzeVariableName('MyVariable.MySubVariable["Test"]')).toBe(
      VariableNameQuickAnalyzeResults.OK
    );
    expect(quicklyAnalyzeVariableName('MyVariable.MySubVariable[1 + 2]')).toBe(
      VariableNameQuickAnalyzeResults.OK
    );
    expect(quicklyAnalyzeVariableName('MyVariable.MySubVariable+2')).toBe(
      VariableNameQuickAnalyzeResults.WRONG_EXPRESSION
    );
    expect(
      quicklyAnalyzeVariableName('MyVariable[VariableString(AnotherVariable)]')
    ).toBe(VariableNameQuickAnalyzeResults.OK);
    expect(
      quicklyAnalyzeVariableName('MyVariable[Variable(AnotherVariable)]')
    ).toBe(VariableNameQuickAnalyzeResults.OK);
    expect(
      quicklyAnalyzeVariableName('MyVariable[Variable(AnotherVariable) + 2]')
    ).toBe(VariableNameQuickAnalyzeResults.OK);
  });
});
