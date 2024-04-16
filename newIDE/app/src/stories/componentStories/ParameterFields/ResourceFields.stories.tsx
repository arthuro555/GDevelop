import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
import ValueStateHolder from '../../ValueStateHolder';

import ParameterRenderingService from '../../../EventsSheet/ParameterRenderingService';
import fakeResourceManagementProps from '../../FakeResourceManagement';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../UI/Grid';

// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/AudioResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/AudioResourceField.tsx', but '--jsx' is not set.
import AudioResourceField from '../../../EventsSheet/ParameterFields/AudioResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/ImageResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ImageResourceField.tsx', but '--jsx' is not set.
import ImageResourceField from '../../../EventsSheet/ParameterFields/ImageResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/VideoResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/VideoResourceField.tsx', but '--jsx' is not set.
import VideoResourceField from '../../../EventsSheet/ParameterFields/VideoResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/BitmapFontResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/BitmapFontResourceField.tsx', but '--jsx' is not set.
import BitmapFontResourceField from '../../../EventsSheet/ParameterFields/BitmapFontResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/FontResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/FontResourceField.tsx', but '--jsx' is not set.
import FontResourceField from '../../../EventsSheet/ParameterFields/FontResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/JsonResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/JsonResourceField.tsx', but '--jsx' is not set.
import JsonResourceField from '../../../EventsSheet/ParameterFields/JsonResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/TilemapResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/TilemapResourceField.tsx', but '--jsx' is not set.
import TilemapResourceField from '../../../EventsSheet/ParameterFields/TilemapResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/Model3DResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/Model3DResourceField.tsx', but '--jsx' is not set.
import Model3DResourceField from '../../../EventsSheet/ParameterFields/Model3DResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/AtlasResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/AtlasResourceField.tsx', but '--jsx' is not set.
import AtlasResourceField from '../../../EventsSheet/ParameterFields/AtlasResourceField';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/SpineResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/SpineResourceField.tsx', but '--jsx' is not set.
import SpineResourceField from '../../../EventsSheet/ParameterFields/SpineResourceField';

export const AllResourceFields = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AudioResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ImageResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <VideoResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <BitmapFontResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FontResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <JsonResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <TilemapResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Model3DResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AtlasResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={''}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SpineResourceField
            project={testProject.project}
            scope={{
              project: testProject.project,
              layout: testProject.testLayout,
            }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            value={value}
            onChange={onChange}
            parameterRenderingService={ParameterRenderingService}
            resourceManagementProps={fakeResourceManagementProps}
          />
        )}
      />
    </Line>
  </Column>
);

export default {
  title: 'ParameterFields',
  component: AllResourceFields,
};
