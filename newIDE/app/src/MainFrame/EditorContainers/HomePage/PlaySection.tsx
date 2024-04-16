import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module './SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer, { SectionRow } from './SectionContainer';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceHolderLoader from '../../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../../UI/ErrorBoundary';

const styles = {
  iframe: {
    border: 0,
  },
} as const;

const PlaySection = () => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const paletteType = gdevelopTheme.palette.type;
  const [iframeHeight, setIframeHeight] = React.useState<any>(null);

  window.addEventListener('message', event => {
    if (
      event.origin === 'https://gd.games' &&
      event.data.id === 'set-embedded-height'
    ) {
      setIframeHeight(event.data.height);
    }
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Play!</Trans>}
      flexBody
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      subtitleText={<Trans>Explore games made by others</Trans>}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <iframe
          src={`https://gd.games/embedded/${paletteType}`}
          title="gdgames"
          style={{ ...styles.iframe, height: iframeHeight }}
          scrolling="no" // This is deprecated, but this is the only way to disable the scrollbar.
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        {!iframeHeight && <PlaceHolderLoader />}
      </SectionRow>
    </SectionContainer>
  );
};

const PlaySectionWithErrorBoundary = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Play section</Trans>}
    scope="start-page-play"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <PlaySection />
  </ErrorBoundary>
);

export default PlaySectionWithErrorBoundary;
