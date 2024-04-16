import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../../UI/Grid';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/ArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ArrowLeft.js' implicitly has an 'any' type.
import ArrowLeft from '../../../UI/CustomSvgIcons/ArrowLeft';
// @ts-expect-error - TS6142 - Module '../../../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../../../UI/TextButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../UI/Paper';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../AnnouncementsFeed' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/index.tsx', but '--jsx' is not set.
import { AnnouncementsFeed } from '../../../AnnouncementsFeed';
// @ts-expect-error - TS6142 - Module '../../../AnnouncementsFeed/AnnouncementsFeedContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/AnnouncementsFeedContext.tsx', but '--jsx' is not set.
import { AnnouncementsFeedContext } from '../../../AnnouncementsFeed/AnnouncementsFeedContext';

export const SECTION_PADDING = 30;

const styles = {
  title: { overflowWrap: 'anywhere', textWrap: 'wrap' },
  mobileContainer: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  desktopContainer: {
    paddingTop: SECTION_PADDING,
    paddingLeft: SECTION_PADDING,
    paddingRight: SECTION_PADDING,
  },
  mobileFooter: {
    padding: 5,
  },
  desktopFooter: {
    paddingLeft: SECTION_PADDING,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: SECTION_PADDING,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    overflowY: 'scroll', // Force a scrollbar to prevent layout shifts.
  },
  noScrollContainer: {
    overflowY: 'hidden',
  },
} as const;

type Props = {
  children: React.ReactNode,
  title: React.ReactNode,
  titleAdornment?: React.ReactNode,
  subtitleText?: React.ReactNode,
  renderSubtitle?: () => React.ReactElement,
  backAction?: () => void,
  flexBody?: boolean,
  renderFooter?: () => React.ReactElement,
  noScroll?: boolean,
  showUrgentAnnouncements?: boolean
};

const SectionContainer = ({
  children,
  title,
  titleAdornment,
  subtitleText,
  renderSubtitle,
  backAction,
  flexBody,
  renderFooter,
  noScroll,
  showUrgentAnnouncements,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const { announcements } = React.useContext(AnnouncementsFeedContext);
  const containerStyle: {
    paddingTop: number,
    paddingLeft: number,
    paddingRight: number
  } = isMobile ? styles.mobileContainer : styles.desktopContainer;
  const scrollStyle: {
    overflowY: string
  } = noScroll
    ? styles.noScrollContainer
    : styles.scrollContainer;
  const paperStyle = {
    ...styles.container,
    display: flexBody ? 'flex' : 'block',
    ...containerStyle,
    ...scrollStyle,
  } as const;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column useFullHeight noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper style={paperStyle} square background="dark">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noOverflowParent expand>
          {showUrgentAnnouncements && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AnnouncementsFeed canClose level="urgent" hideLoader />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              {announcements && announcements.length > 0 && <Spacer />}
            </>
          )}
          {backAction && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextButton
                onClick={backAction}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                icon={<ArrowLeft fontSize="small" />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Back</Trans>}
              />
            </Line>
          )}
          {title && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout
                noMargin
                alignItems="center"
                justifyContent="space-between"
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="bold-title" noMargin style={styles.title}>
                  {title}
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {titleAdornment && <Column noMargin>{titleAdornment}</Column>}
              </LineStackLayout>
              {subtitleText && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>{subtitleText}</Text>
                </Line>
              )}
              {renderSubtitle && renderSubtitle()}
            </SectionRow>
          )}
          {children}
        </Column>
      </Paper>
      {renderFooter && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Paper
          style={isMobile ? styles.mobileFooter : styles.desktopFooter}
          square
          background="dark"
        >
          {renderFooter()}
        </Paper>
      )}
    </Column>
  );
};

export const SectionRow = ({
  children,
  expand,
}: {
  children: React.ReactNode,
  expand?: boolean
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <div
    style={{ ...styles.rowContainer, ...(expand ? { flex: 1 } : undefined) }}
  >
    {children}
  </div>
);

export default SectionContainer;
