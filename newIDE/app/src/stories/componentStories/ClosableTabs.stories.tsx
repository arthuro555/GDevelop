import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
  ClosableTabs,
  ClosableTab,
  TabContentContainer,
// @ts-expect-error - TS6142 - Module '../../UI/ClosableTabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ClosableTabs.tsx', but '--jsx' is not set.
} from '../../UI/ClosableTabs';
import ValueStateHolder from '../ValueStateHolder';
// @ts-expect-error - TS6142 - Module '../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../../ObjectsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectsList/index.tsx', but '--jsx' is not set.
import ObjectsList from '../../ObjectsList';
import GDevelopJsInitializerDecorator, {
  testProject,
// @ts-expect-error - TS6142 - Module '../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
} from '../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
import { HotReloadPreviewButtonProps } from '../../HotReload/HotReloadPreviewButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Home'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Home.js' implicitly has an 'any' type.
import Home from '../../UI/CustomSvgIcons/Home';
import fakeResourceManagementProps from '../FakeResourceManagement';

export default {
  title: 'UI Building Blocks/ClosableTabs',
  component: ClosableTabs,
  decorators: [GDevelopJsInitializerDecorator],
};

export const ThreeTabs = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue={0}
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ClosableTabs>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ClosableTab
              onActivated={action('Tab 1 activated')}
              closable={false}
              active={value === 0}
              onClick={() => onChange(0)}
              label={null}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Home />}
              onClose={action('Close tab 1')}
              onCloseAll={action('Close all')}
              onCloseOthers={action('Close others')}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ClosableTab
              onActivated={action('Tab 2 activated')}
              closable
              active={value === 1}
              onClick={() => onChange(1)}
              label="Tab 2"
              icon={null}
              onClose={action('Close tab 2')}
              onCloseAll={action('Close all')}
              onCloseOthers={action('Close others')}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ClosableTab
              onActivated={action('Tab 3 activated')}
              closable
              active={value === 2}
              onClick={() => onChange(2)}
              label="Tab 3 with a long label"
              icon={null}
              onClose={action('Close tab 3')}
              onCloseAll={action('Close all')}
              onCloseOthers={action('Close others')}
            />
          </ClosableTabs>
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TabContentContainer active={value === 0}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                style={{ backgroundColor: 'green', height: '100%', flex: 1 }}
              >
                Tab 1 content
              </div>
            </TabContentContainer>
          }
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TabContentContainer active={value === 1}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                style={{ backgroundColor: 'green', height: '100%', flex: 1 }}
              >
                Tab 2 content
              </div>
            </TabContentContainer>
          }
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TabContentContainer active={value === 2}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                style={{ backgroundColor: 'green', height: '100%', flex: 1 }}
              >
                Tab 3 content
              </div>
            </TabContentContainer>
          }
        </Column>
      </FixedHeightFlexContainer>
    )}
  />
);

export const LongLabels = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue={0}
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ClosableTabs>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ClosableTab
              onActivated={action('Tab 1 activated')}
              closable
              active={value === 0}
              label="Tab 1 with a very very long label"
              icon={null}
              onClose={action('Close tab 1')}
              onCloseAll={action('Close all')}
              onCloseOthers={action('Close others')}
              onClick={() => onChange(0)}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ClosableTab
              onActivated={action('Tab 2 activated')}
              closable
              active={value === 1}
              onClick={() => onChange(1)}
              label="Small 2"
              icon={null}
              onClose={action('Close tab 2')}
              onCloseAll={action('Close all')}
              onCloseOthers={action('Close others')}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ClosableTab
              onActivated={action('Tab 3 activated')}
              closable
              active={value === 2}
              onClick={() => onChange(2)}
              label="Tab 3 with a very very loooooooooooooooooooooooooooooooooooooooooong label"
              icon={null}
              onClose={action('Close tab 3')}
              onCloseAll={action('Close all')}
              onCloseOthers={action('Close others')}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ClosableTab
              onActivated={action('Tab 4 activated')}
              closable
              active={value === 3}
              onClick={() => onChange(3)}
              label="Small 4"
              icon={null}
              onClose={action('Close tab 4')}
              onCloseAll={action('Close all')}
              onCloseOthers={action('Close others')}
            />
          </ClosableTabs>
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TabContentContainer active={value === 0}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                style={{ backgroundColor: 'green', height: '100%', flex: 1 }}
              >
                Tab 1 content
              </div>
            </TabContentContainer>
          }
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TabContentContainer active={value === 1}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                style={{ backgroundColor: 'green', height: '100%', flex: 1 }}
              >
                Tab 2 content
              </div>
            </TabContentContainer>
          }
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TabContentContainer active={value === 2}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                style={{ backgroundColor: 'green', height: '100%', flex: 1 }}
              >
                Tab 3 content
              </div>
            </TabContentContainer>
          }
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TabContentContainer active={value === 3}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div
                style={{ backgroundColor: 'green', height: '100%', flex: 1 }}
              >
                Tab 4 content
              </div>
            </TabContentContainer>
          }
        </Column>
      </FixedHeightFlexContainer>
    )}
  />
);

const hotReloadPreviewButtonProps: HotReloadPreviewButtonProps = {
  hasPreviewsRunning: false,
  launchProjectDataOnlyPreview: action('launchProjectDataOnlyPreview'),
  launchProjectWithLoadingScreenPreview: action(
    'launchProjectWithLoadingScreenPreview'
  ),
};

export const WithObjectsList = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue={0}
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ClosableTabs>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ClosableTab
                onActivated={action('Tab 1 activated')}
                closable
                active={value === 0}
                label="Tab 1"
                icon={null}
                onClick={() => onChange(0)}
                onClose={action('Close tab 1')}
                onCloseAll={action('Close all')}
                onCloseOthers={action('Close others')}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ClosableTab
                onActivated={action('Tab 2 activated')}
                closable
                active={value === 1}
                label="Tab 2"
                icon={null}
                onClick={() => onChange(1)}
                onClose={action('Close tab 2')}
                onCloseAll={action('Close all')}
                onCloseOthers={action('Close others')}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ClosableTab
                onActivated={action('Tab 3 activated')}
                closable
                active={value === 2}
                label="Tab 3"
                icon={null}
                onClick={() => onChange(2)}
                onClose={action('Close tab 3')}
                onCloseAll={action('Close all')}
                onCloseOthers={action('Close others')}
              />
            </ClosableTabs>
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <TabContentContainer active={value === 0}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div
                  style={{
                    backgroundColor: 'green',
                    height: '100%',
                    flex: 1,
                  }}
                >
                  The second tab has a list of objects. Check that the scrolling
                  position is maintained while navigating between tabs.
                </div>
              </TabContentContainer>
            }
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <TabContentContainer active={value === 1}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ObjectsList
                  getThumbnail={() => 'res/unknown32.png'}
                  project={testProject.project}
                  objectsContainer={testProject.testLayout}
                  layout={testProject.testLayout}
                  resourceManagementProps={fakeResourceManagementProps}
                  onEditObject={action('On edit object')}
                  onExportAssets={action('On export assets')}
                  onAddObjectInstance={action('On add instance to the scene')}
                  selectedObjectFolderOrObjectsWithContext={[]}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
                  getValidatedObjectOrGroupName={newName => newName}
// @ts-expect-error - TS7006 - Parameter 'objectsWithContext' implicitly has an 'any' type. | TS7006 - Parameter 'cb' implicitly has an 'any' type.
                  onDeleteObjects={(objectsWithContext, cb) => cb(true)}
                  onRenameObjectFolderOrObjectWithContextFinish={(
// @ts-expect-error - TS7006 - Parameter 'objectFolderOrObjectWithContext' implicitly has an 'any' type.
                    objectFolderOrObjectWithContext,
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
                    newName,
// @ts-expect-error - TS7006 - Parameter 'cb' implicitly has an 'any' type.
                    cb
                  ) => cb(true)}
                  onObjectCreated={() => {}}
                  onObjectFolderOrObjectWithContextSelected={() => {}}
                  hotReloadPreviewButtonProps={hotReloadPreviewButtonProps}
                  canInstallPrivateAsset={() => false}
                />
              </TabContentContainer>
            }
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <TabContentContainer active={value === 2}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div
                  style={{
                    backgroundColor: 'green',
                    height: '100%',
                    flex: 1,
                  }}
                >
                  Tab 3 content
                </div>
              </TabContentContainer>
            }
          </Column>
        </FixedHeightFlexContainer>
      </DragAndDropContextProvider>
    )}
  />
);
