import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../../../MainFrame/EditorContainers/HomePage/BuildSection/MaxProjectCountAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/MaxProjectCountAlertMessage.tsx', but '--jsx' is not set.
import { MaxProjectCountAlertMessage } from '../../../../MainFrame/EditorContainers/HomePage/BuildSection/MaxProjectCountAlertMessage';
// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
import {
  limitsForSilverUser,
  limitsForGoldUser,
} from '../../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'HomePage/BuildSection/MaxProjectCountAlertMessage',
  component: MaxProjectCountAlertMessage,
  decorators: [paperDecorator],
};

export const ForIndieUser = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MaxProjectCountAlertMessage
    limits={limitsForSilverUser}
    onUpgrade={() => action('onUpgrade')()}
  />
);

export const ForProUser = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MaxProjectCountAlertMessage
    limits={limitsForGoldUser}
    onUpgrade={() => action('onUpgrade')()}
  />
);
