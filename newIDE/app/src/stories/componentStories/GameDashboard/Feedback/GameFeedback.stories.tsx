import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

// @ts-expect-error - TS6142 - Module '../../../../GameDashboard/Feedbacks/GameFeedback' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Feedbacks/GameFeedback.tsx', but '--jsx' is not set.
import GameFeedback from '../../../../GameDashboard/Feedbacks/GameFeedback';

import {
  commentProcessed,
  commentUnprocessed,
  completeWebBuild,
  fakeSilverAuthenticatedUser,
  game1,
} from '../../../../fixtures/GDevelopServicesTestData';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import {
  GDevelopBuildApi,
  GDevelopPlayApi,
} from '../../../../Utils/GDevelopServices/ApiConfigs';
// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import { getPaperDecorator } from '../../../PaperDecorator';

export default {
  title: 'GameDashboard/Feedback/GameFeedback',
  component: GameFeedback,
  decorators: [getPaperDecorator('medium')],
};

export const DefaultGameFeedback = () => {
  const mock = new MockAdapter(Axios);
  mock
    .onGet(`${GDevelopPlayApi.baseUrl}/game/${game1.id}/comment`)
    .reply(200, [commentProcessed, commentUnprocessed])
    .onGet(`${GDevelopBuildApi.baseUrl}/build`)
    .reply(200, [completeWebBuild])
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GameFeedback
          i18n={i18n}
          authenticatedUser={fakeSilverAuthenticatedUser}
          game={game1}
        />
      )}
    </I18n>
  );
};

export const GameFeedbackOneSolvedComment = () => {
  const mock = new MockAdapter(Axios);
  mock
    .onGet(`${GDevelopPlayApi.baseUrl}/game/${game1.id}/comment`)
    .reply(200, [commentProcessed])
    .onGet(`${GDevelopBuildApi.baseUrl}/build`)
    .reply(200, [completeWebBuild])
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GameFeedback
          i18n={i18n}
          authenticatedUser={fakeSilverAuthenticatedUser}
          game={game1}
        />
      )}
    </I18n>
  );
};

export const GameFeedbackWithError = () => {
  const mock = new MockAdapter(Axios);
  mock
    .onGet(`${GDevelopPlayApi.baseUrl}/game/${game1.id}/comment`)
    .reply(500, 'Internal server error')
    .onGet(`${GDevelopBuildApi.baseUrl}/build`)
    .reply(200, [completeWebBuild])
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GameFeedback
          i18n={i18n}
          authenticatedUser={fakeSilverAuthenticatedUser}
          game={game1}
        />
      )}
    </I18n>
  );
};

export const GameFeedbackEmpty = () => {
  const mock = new MockAdapter(Axios);
  mock
    .onGet(`${GDevelopPlayApi.baseUrl}/game/${game1.id}/comment`)
    .reply(200, [])
    .onGet(`${GDevelopBuildApi.baseUrl}/build`)
    .reply(200, [completeWebBuild])
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GameFeedback
          i18n={i18n}
          authenticatedUser={fakeSilverAuthenticatedUser}
          game={game1}
        />
      )}
    </I18n>
  );
};
