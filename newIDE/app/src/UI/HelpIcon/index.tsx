import React from 'react';
// @ts-expect-error - TS6142 - Module '../IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../IconButton';
import { getHelpLink } from '../../Utils/HelpLink';
import Window from '../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Help'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Help.js' implicitly has an 'any' type.
import Help from '../CustomSvgIcons/Help';

type PropsType = {
  helpPagePath: string | null | undefined,
  disabled?: boolean,
  style?: {
    padding?: number | string,
    width?: number,
    height?: number,
    transform?: string,
    transition?: string,
    opacity?: number,
    cursor?: 'pointer',
    margin?: number,
    marginRight?: number,
    marginLeft?: number,
    marginTop?: number,
    marginBottom?: number,
    visibility?: 'visible' | 'hidden'
  },
  size?: 'small'
};

/**
 * The icon that can be used in any dialog to open a help page
 */
const HelpIcon = (props: PropsType) => {
  const { helpPagePath } = props;
  if (!helpPagePath) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <IconButton
      onClick={() => Window.openExternalURL(getHelpLink(helpPagePath))}
      disabled={props.disabled}
      style={props.style}
      size={props.size}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Help />
    </IconButton>
  );
};

export default HelpIcon;
