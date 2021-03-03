// @flow
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import * as React from 'react';
import FlatButton from '../../../UI/FlatButton';
import Paper from '@material-ui/core/Paper';
import IconButton from '../../../UI/IconButton';
import Language from '@material-ui/icons/Language';
import { type RenderEditorContainerPropsWithRef } from '../BaseEditor';
import Window from '../../../Utils/Window';
import { Line } from '../../../UI/Grid';
import GDevelopLogo from './GDevelopLogo';
import ScrollBackground from './ScrollBackground';
import RaisedButton from '../../../UI/RaisedButton';
import Text from '../../../UI/Text';
import {
  ColumnStackLayout,
  ResponsiveLineStackLayout,
} from '../../../UI/Layout';
import ForumIcon from '@material-ui/icons/Forum';
import HelpIcon from '@material-ui/icons/Help';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const styles = {
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: 400,
  },
  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexShrink: 0,
    maxWidth: 400,
  },
  logoPaper: {
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
  },
};

type Props = {|
  project: ?gdProject,

  isActive: boolean,
  projectItemName: ?string,
  project: ?gdProject,
  setToolbar: (?React.Node) => void,

  // Project opening
  canOpen: boolean,
  onOpen: () => void,
  onCreate: () => void,
  onOpenProjectManager: () => void,
  onCloseProject: () => Promise<void>,

  // Other dialogs opening:
  onOpenGamesShowcase: () => void,
  onOpenHelpFinder: () => void,
  onOpenLanguageDialog: () => void,
|};

export class StartPage extends React.Component<Props, {||}> {
  shouldComponentUpdate(nextProps: Props) {
    // Prevent any update to the editor if the editor is not active,
    // and so not visible to the user.
    return nextProps.isActive;
  }

  getProject() {
    return undefined;
  }

  updateToolbar() {
    if (this.props.setToolbar) this.props.setToolbar(null);
  }

  forceUpdateEditor() {
    // No updates to be done
  }

  render() {
    const {
      project,
      canOpen,
      onOpen,
      onCreate,
      onOpenProjectManager,
      onCloseProject,
      onOpenGamesShowcase,
      onOpenHelpFinder,
      onOpenLanguageDialog,
    } = this.props;

    return (
      <I18n>
        {({ i18n }) => (
          <ScrollBackground>
            <div style={styles.innerContainer}>
              <Line expand justifyContent="center">
                <div style={styles.centerContainer}>
                  <Paper
                    elevation={2}
                    style={{
                      ...styles.logoPaper,
                    }}
                  >
                    <GDevelopLogo />
                    <Text>
                      <Trans>
                        GDevelop is an easy-to-use game creator with no
                        programming language to learn.
                      </Trans>
                    </Text>
                  </Paper>
                  <ColumnStackLayout noMargin>
                    {!project && canOpen && (
                      <RaisedButton
                        label={<Trans>Open a project</Trans>}
                        fullWidth
                        onClick={onOpen}
                        primary
                      />
                    )}
                    {!project && (
                      <RaisedButton
                        label={<Trans>Create a new project</Trans>}
                        fullWidth
                        onClick={onCreate}
                        primary
                      />
                    )}
                    {!!project && (
                      <RaisedButton
                        label={<Trans>Open Project Manager</Trans>}
                        fullWidth
                        onClick={onOpenProjectManager}
                        primary
                      />
                    )}
                    {!!project && (
                      <FlatButton
                        label={<Trans>Close project</Trans>}
                        fullWidth
                        onClick={() => {
                          onCloseProject();
                        }}
                      />
                    )}
                    {
                      <FlatButton
                        label={<Trans>Search the documentation</Trans>}
                        fullWidth
                        onClick={onOpenHelpFinder}
                      />
                    }
                  </ColumnStackLayout>
                </div>
              </Line>
              <Line noMargin>
                <ResponsiveLineStackLayout
                  alignItems="center"
                  justifyContent="space-between"
                  expand
                >
                  <Line noMargin justifyContent="center">
                    <FlatButton
                      icon={<SportsEsportsIcon />}
                      label={<Trans>GDevelop Games</Trans>}
                      onClick={onOpenGamesShowcase}
                    />
                    <FlatButton
                      icon={<ForumIcon />}
                      label={<Trans>Community Forums</Trans>}
                      onClick={() =>
                        Window.openExternalURL('https://forum.gdevelop-app.com')
                      }
                    />
                    <FlatButton
                      icon={<HelpIcon />}
                      label={<Trans>Help and tutorials</Trans>}
                      onClick={() =>
                        Window.openExternalURL(
                          'http://wiki.compilgames.net/doku.php/gdevelop5/start'
                        )
                      }
                    />
                  </Line>
                  <Line noMargin alignItems="center" justifyContent="center">
                    <IconButton
                      className="icon-youtube"
                      onClick={() =>
                        Window.openExternalURL(
                          'https://www.youtube.com/c/GDevelopApp'
                        )
                      }
                      tooltip={t`Tutorials on YouTube`}
                    />
                    <IconButton
                      className="icon-discord"
                      onClick={() =>
                        Window.openExternalURL('https://discord.gg/rjdYHvj')
                      }
                      tooltip={t`GDevelop on Discord`}
                    />
                    <IconButton
                      className="icon-reddit"
                      onClick={() =>
                        Window.openExternalURL(
                          'https://www.reddit.com/r/gdevelop'
                        )
                      }
                      tooltip={t`GDevelop on Reddit`}
                    />
                    <IconButton
                      className="icon-twitter"
                      onClick={() =>
                        Window.openExternalURL(
                          'https://twitter.com/GDevelopApp'
                        )
                      }
                      tooltip={t`GDevelop on Twitter`}
                    />
                    <IconButton
                      className="icon-facebook"
                      onClick={() =>
                        Window.openExternalURL(
                          'https://www.facebook.com/GDevelopApp'
                        )
                      }
                      tooltip={t`GDevelop on Facebook`}
                    />
                    <FlatButton
                      label={i18n.language}
                      onClick={onOpenLanguageDialog}
                      icon={<Language />}
                    />
                  </Line>
                </ResponsiveLineStackLayout>
              </Line>
            </div>
          </ScrollBackground>
        )}
      </I18n>
    );
  }
}

export const renderStartPageContainer = (
  props: RenderEditorContainerPropsWithRef
) => (
  <StartPage
    ref={props.ref}
    project={props.project}
    isActive={props.isActive}
    projectItemName={props.projectItemName}
    setToolbar={props.setToolbar}
    canOpen={props.canOpen}
    onOpen={props.onOpen}
    onCreate={props.onCreate}
    onOpenProjectManager={props.onOpenProjectManager}
    onCloseProject={props.onCloseProject}
    onOpenGamesShowcase={props.onOpenGamesShowcase}
    onOpenHelpFinder={props.onOpenHelpFinder}
    onOpenLanguageDialog={props.onOpenLanguageDialog}
  />
);
