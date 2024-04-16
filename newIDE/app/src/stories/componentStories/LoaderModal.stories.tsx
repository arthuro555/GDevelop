import * as React from 'react';

import { useTimeout } from '../../Utils/UseTimeout';
// @ts-expect-error - TS6142 - Module '../../UI/LoaderModal' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LoaderModal.tsx', but '--jsx' is not set.
import LoaderModal from '../../UI/LoaderModal';

export default {
  title: 'UI Building Blocks/LoaderModal',
  component: LoaderModal,
};

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Default = () => <LoaderModal show />;

const STEP_COUNT = 4;

export const WithProgress = () => {
  const [step, setStep] = React.useState<number>(0);
  useTimeout(() => {
    if (step < STEP_COUNT) setStep(step + 1);
  }, 2000);
  const messages = [
    'Hello',
    "it's gonna be fun!",
    'Just wait a bit',
    'Drumrolls',
  ];
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LoaderModal
      show
      message={messages[Math.min(step, messages.length - 1)]}
      progress={(step / STEP_COUNT) * 100}
    />
  );
};
