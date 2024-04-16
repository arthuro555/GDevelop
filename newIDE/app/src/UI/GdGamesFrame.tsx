import * as React from 'react';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
import useForceUpdate from '../Utils/UseForceUpdate';
import { delay } from '../Utils/Delay';
import { useIsMounted } from '../Utils/UseIsMounted';
import {
  PrivateGameTemplateListingData,
  PrivateAssetPackListingData,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/Shop';

export type GdGamesMessageEventData = Readonly<{
  id?: string | any,
  privateAssetPackListingData?: PrivateAssetPackListingData,
  privateGameTemplateListingData?: PrivateGameTemplateListingData
}>;

type Props = {
  loadErrorMessage: React.ReactNode,
  path: string,
  onMessageReceived: (data: GdGamesMessageEventData) => void,
  supportedMessageIds: Array<string>
};

const styles = {
  iframe: {
    border: 0,
    flex: 1,
  },
} as const;

const gdGamesHost = 'https://gd.games';
// const gdGamesHost = 'http://localhost:4000';

export const GdGamesFrame = ({
  loadErrorMessage,
  path,
  onMessageReceived,
  supportedMessageIds,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const paletteType = gdevelopTheme.palette.type;

  const loadState = React.useRef<'loading' | 'loaded' | 'errored'>('loading');
  const isMounted = useIsMounted();
  const forceUpdate = useForceUpdate();

  const url = new URL(path, gdGamesHost);
  url.searchParams.set('supportedMessageIds', supportedMessageIds.join(','));
  url.searchParams.set('theme', paletteType);

  React.useEffect(
    () => {
      const callback = (event: MessageEvent) => {
        if (
          event.origin === gdGamesHost &&
          event.data &&
          typeof event.data === 'object'
        ) {
          if (event.data.id === 'pageLoaded') {
            loadState.current = 'loaded';
            forceUpdate();
          } else {
            onMessageReceived(event.data);
          }
        }
      };

      window.addEventListener('message', callback);

      return () => window.removeEventListener('message', callback);
    },
    [forceUpdate, onMessageReceived]
  );

  React.useEffect(
    () => {
      (async () => {
        await delay(6000);
        if (!isMounted.current) return;

        // Consider the loading of the iframe as a failure if not completed/errored
        // after 6s.
        if (loadState.current === 'loaded') return;
        loadState.current = 'errored';
        forceUpdate();
      })();
    },
    [forceUpdate, isMounted]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
      {loadState.current !== 'errored' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <iframe
          src={url.toString()}
          title="gdgames"
          style={{
            ...styles.iframe,
            visibility: loadState.current === 'loaded' ? 'visible' : 'hidden',
          }}
        />
      )}
      {loadState.current === 'loading' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div
          style={{
            position: 'absolute',
            inset: 30,
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PlaceholderLoader style={{ width: '100%', height: '100%' }} />
        </div>
      )}
      {loadState.current === 'errored' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderError
          onRetry={() => {
            loadState.current = 'loading';
            forceUpdate();
          }}
        >
          {loadErrorMessage}
        </PlaceholderError>
      )}
    </>
  );
};
