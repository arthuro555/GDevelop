import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../AnnouncementsFeed/AnnouncementsFeedContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/AnnouncementsFeedContext.tsx', but '--jsx' is not set.
import { AnnouncementsFeedContext } from '../AnnouncementsFeed/AnnouncementsFeedContext';
// @ts-expect-error - TS6142 - Module '../MainFrame/RouterContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/RouterContext.tsx', but '--jsx' is not set.
import RouterContext from '../MainFrame/RouterContext';
import { getOnClick } from './PromotionHelper';
// @ts-expect-error - TS6142 - Module '../UI/Slideshow/Slideshow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Slideshow/Slideshow.tsx', but '--jsx' is not set.
import Slideshow from '../UI/Slideshow/Slideshow';
import {
  homepageDesktopMenuBarWidth,
  homepageMediumMenuBarWidth,
// @ts-expect-error - TS6142 - Module '../MainFrame/EditorContainers/HomePage/HomePageMenuBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/HomePageMenuBar.tsx', but '--jsx' is not set.
} from '../MainFrame/EditorContainers/HomePage/HomePageMenuBar';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../MainFrame/EditorContainers/HomePage/SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import { SECTION_PADDING } from '../MainFrame/EditorContainers/HomePage/SectionContainer';

const promotionDesktopRatio = 5038 / 459;
const promotionMobileRatio = 18 / 7;

type PromotionsSlideshowProps = {
  type?: 'game' | 'asset-pack' | 'game-template'
};

const PromotionsSlideshow = ({
  type,
}: PromotionsSlideshowProps) => {
  const { promotions, error } = React.useContext(AnnouncementsFeedContext);
  const { navigateToRoute } = React.useContext(RouterContext);
  const { isMobile, isMediumScreen } = useResponsiveWindowSize();

  const filteredPromotions =
    promotions && type
// @ts-expect-error - TS7006 - Parameter 'promotion' implicitly has an 'any' type.
      ? promotions.filter(promotion => promotion.type === type)
      : promotions;

  const slideShowItems = filteredPromotions
// @ts-expect-error - TS7006 - Parameter 'promotion' implicitly has an 'any' type.
    ? filteredPromotions.map(promotion => ({
        id: promotion.id,
        imageUrl: promotion.imageUrl,
        mobileImageUrl: promotion.mobileImageUrl,
        onClick: getOnClick({ promotion, navigateToRoute }),
      }))
    : null;

  if (error) {
    // In case of error, just don't display the promotions.
    return null;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Slideshow
      items={slideShowItems}
      itemDesktopRatio={promotionDesktopRatio}
      itemMobileRatio={promotionMobileRatio}
      additionalMarginForWidthCalculation={
        isMobile
          ? 0
          : isMediumScreen
          ? homepageMediumMenuBarWidth + 2 * SECTION_PADDING
          : homepageDesktopMenuBarWidth + 2 * SECTION_PADDING
      }
    />
  );
};

export default PromotionsSlideshow;
