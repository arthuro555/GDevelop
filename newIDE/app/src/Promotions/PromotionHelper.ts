import {Promotion} from '../Utils/GDevelopServices/Announcement';
// @ts-expect-error - TS6142 - Module '../MainFrame/RouterContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/RouterContext.tsx', but '--jsx' is not set.
import { Route, RouteArguments } from '../MainFrame/RouterContext';
import Window from '../Utils/Window';

export const getOnClick = (
  {
    promotion,
    navigateToRoute,
  }: {
    promotion: Promotion,
    navigateToRoute: (route: Route, additionalArgument?: RouteArguments) => void
  },
): () => void | null | undefined => {
  const productId = promotion.productId;
  if (productId) {
    if (promotion.type === 'game-template') {
      return () =>
        navigateToRoute('store', { 'game-template': `product-${productId}` });
    }
    if (promotion.type === 'asset-pack') {
      return () =>
        navigateToRoute('store', { 'asset-pack': `product-${productId}` });
    }
  }

  const linkUrl = promotion.linkUrl;
  if (linkUrl) {
    return () => Window.openExternalURL(linkUrl);
  }

// @ts-expect-error - TS2322 - Type 'undefined' is not assignable to type '() => void | null | undefined'.
  return undefined;
};
