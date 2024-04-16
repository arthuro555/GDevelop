import {GDevelopAuthorizationWebSocketApi} from './ApiConfigs';

let webSocket: WebSocket | null | undefined;

export const setupAuthenticationWebSocket = ({
  onConnectionEstablished,
  onTokenReceived,
  onError,
  onTimeout,
}: {
  onConnectionEstablished: (connectionId: string) => void,
  onTokenReceived: (
    arg1: {
      provider: 'apple' | 'google' | 'github',
      data: any
    },
  ) => Promise<void>,
  onError: (arg1: Error) => void,
  onTimeout: () => void
}) => {
  webSocket = new WebSocket(GDevelopAuthorizationWebSocketApi.baseUrl);
  const timeoutId = setTimeout(onTimeout, 10000);
  webSocket.onopen = () => {
    console.info('WebSocket - Open.');
    if (webSocket) {
      webSocket.send(JSON.stringify({ action: 'getConnectionId' }));
    }
  };
  webSocket.onclose = () => {
    console.info('WebSocket - Closed.');
    clearTimeout(timeoutId);
  };
// @ts-expect-error - TS2322 - Type 'Event | undefined' is not assignable to type '((this: WebSocket, ev: Event) => any) | null'. | TS1005 - ';' expected. | TS7006 - Parameter 'any' implicitly has an 'any' type.
  webSocket.onerror = event: any => {
    console.error('WebSocket - Error:', event);
    clearTimeout(timeoutId);
// @ts-expect-error - TS2345 - Argument of type 'Event | undefined' is not assignable to parameter of type 'Error'.
    onError(event);
  };

// @ts-expect-error - TS2322 - Type 'Event | undefined' is not assignable to type '((this: WebSocket, ev: MessageEvent<any>) => any) | null'. | TS1005 - ';' expected. | TS7006 - Parameter 'MessageEvent' implicitly has an 'any' type.
  webSocket.onmessage = event: MessageEvent => {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2339 - Property 'data' does not exist on type 'Event'.
    if (event.data) {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2339 - Property 'data' does not exist on type 'Event'.
      if (typeof event.data !== 'string') {
        console.error(
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2339 - Property 'data' does not exist on type 'Event'.
          `WebSocket - event data of type ${typeof event.data} not supported.`
        );
        return;
      }
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2339 - Property 'data' does not exist on type 'Event'.
      const messageContent = JSON.parse(event.data);
      if (messageContent.type === 'authenticationResult') {
        const messageData = messageContent.data;
        onTokenReceived(messageData);
        return;
      }
      if (messageContent.type === 'connectionId') {
        const messageData = messageContent.data;
        const connectionId = messageData.connectionId;
        if (!connectionId) {
          console.error('WebSocket - No connectionId received.');
          return;
        }
        clearTimeout(timeoutId);
        onConnectionEstablished(connectionId);
        return;
      }
    }
  };
  return webSocket;
};

export const terminateWebSocket = () => {
  if (webSocket) {
    webSocket.close();
    webSocket = null;
  }
};
