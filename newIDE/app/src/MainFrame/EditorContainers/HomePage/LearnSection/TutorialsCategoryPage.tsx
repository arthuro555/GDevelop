import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer, { SectionRow } from '../SectionContainer';
import {
  Tutorial,
  TutorialCategory,
} from '../../../../Utils/GDevelopServices/Tutorial';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/LearnSection/index.tsx', but '--jsx' is not set.
import { formatTutorialToImageTileComponent, TUTORIAL_CATEGORY_TEXTS } from '.';
// @ts-expect-error - TS6142 - Module '../../../../UI/ImageTileGrid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ImageTileGrid.tsx', but '--jsx' is not set.
import ImageTileGrid from '../../../../UI/ImageTileGrid';
import { WindowSizeType } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';

const getColumnsFromWindowSize = (windowSize: WindowSizeType) => {
  switch (windowSize) {
    case 'small':
      return 1;
    case 'medium':
      return 3;
    case 'large':
      return 5;
    case 'xlarge':
      return 6;
    default:
      return 3;
  }
};

type Props = {
  onBack: () => void,
  tutorials: Array<Tutorial>,
  category: TutorialCategory
};

const TutorialsCategoryPage = ({
  category,
  tutorials,
  onBack,
}: Props) => {
  const texts = TUTORIAL_CATEGORY_TEXTS[category];
  const filteredTutorials = tutorials.filter(
    tutorial => tutorial.category === category
  );
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SectionContainer
          title={texts.title}
          subtitleText={texts.description}
          backAction={onBack}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ImageTileGrid
              items={filteredTutorials.map(tutorial =>
                formatTutorialToImageTileComponent(i18n, tutorial)
              )}
              getColumnsFromWindowSize={getColumnsFromWindowSize}
            />
          </SectionRow>
        </SectionContainer>
      )}
    </I18n>
  );
};

export default TutorialsCategoryPage;
