// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import { getHelpLink } from '../../Utils/HelpLink';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ItchIo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ItchIo.js' implicitly has an 'any' type.
import ItchIo from '../../UI/CustomSvgIcons/ItchIo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/GameJolt'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GameJolt.js' implicitly has an 'any' type.
import GameJolt from '../../UI/CustomSvgIcons/GameJolt';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Poki'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Poki.js' implicitly has an 'any' type.
import Poki from '../../UI/CustomSvgIcons/Poki';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/CrazyGames'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CrazyGames.js' implicitly has an 'any' type.
import CrazyGames from '../../UI/CustomSvgIcons/CrazyGames';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/NewsGround'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/NewsGround.js' implicitly has an 'any' type.
import NewsGround from '../../UI/CustomSvgIcons/NewsGround';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Check'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Check.js' implicitly has an 'any' type.
import Check from '../../UI/CustomSvgIcons/Check';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Help'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Help.js' implicitly has an 'any' type.
import Help from '../../UI/CustomSvgIcons/Help';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
import { ExportFlowProps } from '../ExportPipeline.flow';

const getIconStyle = ({
  isMobile,
}: {
  isMobile: boolean
}) => {
  return {
    height: isMobile ? 30 : 48,
    width: isMobile ? 30 : 48,
    margin: 10,
  };
};

export const ExplanationHeader = () => {
  const { isMobile } = useResponsiveWindowSize();
  const iconStyle = getIconStyle({ isMobile });
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            This will export your game to a folder. You can then upload it on a
            website/game hosting service and share it on marketplaces and gaming
            portals like CrazyGames, Poki, Game Jolt, itch.io, Newgrounds...
          </Trans>
        </Text>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ItchIo color="secondary" style={iconStyle} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <GameJolt color="secondary" style={iconStyle} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Poki color="secondary" style={iconStyle} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CrazyGames color="secondary" style={iconStyle} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NewsGround color="secondary" style={iconStyle} />
      </Line>
    </Column>
  );
};

type HTML5ExportFlowProps = (ExportFlowProps) & {
  exportPipelineName: string
};

export const ExportFlow = ({
  disabled,
  launchExport,
  isExporting,
  exportPipelineName,
  exportStep,
}: HTML5ExportFlowProps) =>
  exportStep !== 'done' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
        label={
          !isExporting ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Export as a HTML5 game</Trans>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Exporting...</Trans>
          )
        }
        primary
        id={`launch-export-${exportPipelineName}-button`}
        onClick={launchExport}
        disabled={disabled || isExporting}
      />
    </Line>
  ) : null;

export const DoneFooter = ({
  renderGameButton,
}: {
  renderGameButton: () => React.ReactElement
}) => {
  const openLearnMore = () => {
    Window.openExternalURL(
      getHelpLink(
        '/publishing/html5_game_in_a_local_folder/#3rd-party-hosting-sites'
      )
    );
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout noMargin justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Check fontSize="small" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Done!</Trans>
        </Text>
      </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          You can now upload the game to a web hosting to play to the game.
        </Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="center">{renderGameButton()}</Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Learn more about publishing to platforms</Trans>}
          primary
          onClick={openLearnMore}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftIcon={<Help />}
        />
      </ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Your game won't work if you open the index.html file on your
            computer. You must upload it to a web hosting platform (Itch.io,
            Poki, CrazyGames etc...) or a web server to run it.
          </Trans>
        </AlertMessage>
      </Line>
    </Column>
  );
};

export const html5Exporter = {
  key: 'webexport',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  tabName: <Trans>Web</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  name: <Trans>HTML5</Trans>,
  helpPage: '/publishing/html5_game_in_a_local_folder',
} as const;
