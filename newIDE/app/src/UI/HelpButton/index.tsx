import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../TextButton';
import Window from '../../Utils/Window';
import { getHelpLink } from '../../Utils/HelpLink';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { useResponsiveWindowSize } from '../Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../HelpIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from '../HelpIcon';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Help'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Help.js' implicitly has an 'any' type.
import Help from '../CustomSvgIcons/Help';

type PropsType = {
  helpPagePath: string | null | undefined,
  label?: React.ReactNode,
  anchor?: string
};

/**
 * The button that can be used in any dialog to open a help page
 */
const HelpButton = (props: PropsType) => {
  const { isMobile } = useResponsiveWindowSize();
  if (!props.helpPagePath) return null;
  const helpLink = getHelpLink(props.helpPagePath, props.anchor);
  if (!helpLink) return null;

  const onClick = () => {
    if (props.helpPagePath) {
      Window.openExternalURL(helpLink);
    }
  };

  return !isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextButton
      onClick={onClick}
      target="_blank"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={props.label || <Trans>Help</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      icon={<Help />}
    />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <HelpIcon size="small" helpPagePath={props.helpPagePath} />
  );
};

export default HelpButton;
