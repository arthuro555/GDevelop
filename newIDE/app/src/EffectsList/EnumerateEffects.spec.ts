import {enumerateEffectsMetadata} from './EnumerateEffects';
import { makeTestExtensions } from '../fixtures/TestExtensions';
import { makeTestProject } from '../fixtures/TestProject';
const gd: libGDevelop = global.gd;

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('EnumerateEffects', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can enumerate effects for layers', () => {
    makeTestExtensions(gd);
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'void'.
    const { project } = makeTestProject(gd);
    const enumeratedEffectsMetadata = enumerateEffectsMetadata(project);

    expect(enumeratedEffectsMetadata).toContainEqual(
      expect.objectContaining({
        type: 'FakeSepia',
        fullName: 'Fake Sepia Effect',
        isMarkedAsNotWorkingForObjects: false,
      })
    );
    expect(enumeratedEffectsMetadata).toContainEqual(
      expect.objectContaining({
        type: 'FakeSepiaThatWouldWorkOnlyForLayers',
        fullName: 'Fake Sepia Effect only for layers',
        isMarkedAsNotWorkingForObjects: true,
      })
    );
    expect(enumeratedEffectsMetadata).toContainEqual(
      expect.objectContaining({
        type: 'FakeNight',
        fullName: 'Fake Night Effect',
        isMarkedAsNotWorkingForObjects: false,
      })
    );
  });
});
