// @flow
import { Trans } from '@lingui/macro';

import React, { PureComponent } from 'react';
import { List, ListItem } from '../UI/List';
import Dialog from '../UI/Dialog';
import FlatButton from '../UI/FlatButton';
import { Tabs, Tab } from '../UI/Tabs';
import { Column, Line } from '../UI/Grid';
import Window from '../Utils/Window';
import Text from '../UI/Text';
import PreferencesContext from './Preferences/PreferencesContext';
import {
  getUpdateStatusLabel,
  getUpdateButtonLabel,
  canDownloadUpdate,
  type UpdateStatus,
} from './UpdaterTools';
import Changelog from './Changelog';

type Props = {
  open: boolean,
  onClose: Function,
  updateStatus: UpdateStatus,
};

type State = {|
  currentTab: string,
|};

const styles = {
  logo: {
    width: '100%',
  },
};

// There must be missing tons of people.
// If you contributed to GDeveloppe but you're not in the list, please
// send a Pull Request on GitHub or open an issue ;)
const contributors = [
  // Core development team
  {
    name: 'Clément Pasteau',
    description: 'Core development team',
    link: 'https://github.com/ClementPasteau',
  },

  // GitHub contributors
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'Victor Levasseur',
    description:
      'Numerous code contributions to GDeveloppe and community moderation',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'Lizard-13',
    description:
      'Numerous code contributions to GDeveloppe and community moderation',
  },
  {
    name: "Christina 'Castpixel' Antoinette Neofotistou",
    description: 'Art and assets for the 8-bit Space Shooter example.',
    link: 'https://www.patreon.com/castpixel',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  { name: 'ale26reg', description: 'Contributions to GDeveloppe' },
  { name: 'dos1', description: 'Contributions to GDeveloppe' },
  {
    name: 'Aurélien Vivet',
    description:
      'Numerous code contributions to GDeveloppe and community management',
    link: 'https://www.witly.fr',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'Todor Imreorov',
    description: 'Numerous code contributions to GDeveloppe',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  { name: 'brylie', description: 'Contributions to GDeveloppe' },
  { name: 'Nnarol', description: 'Contributions to GDeveloppe' },
  { name: 'wild-master', description: 'Contributions to GDeveloppe' },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  { name: 'RandomShaper', description: 'Contributions to GDeveloppe' },
  { name: 'RyanNerd', description: 'Contributions to GDeveloppe' },
  { name: 'greater', description: 'Contributions to GDeveloppe' },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  { name: 'triptych', description: 'Contributions to GDeveloppe' },
  {
    name: 'Wend1go',
    description: 'Contributions to GDeveloppe, Tutorials, Examples',
  },
  { name: 'mattiascibien', description: 'Contributions to GDeveloppe' },
  { name: 'araujo921', description: 'Contributions to GDeveloppe' },
  { name: 'ronnystandtke', description: 'Contributions to GDeveloppe' },
  {
    name: 'Thomas Flecy',
    description: 'Contributions to GDeveloppe (original sound object extension)',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description:
      'Numerous code contributions to GDeveloppe and community moderation',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'The Gem Dev',
    description: 'Code contributions to GDeveloppe and tutorials on Youtube',
    link: 'https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'The Gem Dev',
    description: 'Contributions to GDeveloppe and tutorials on Youtube',
  },
  {
    name: 'D8H',
    description: 'Numerous code contributions to GDeveloppe',
    link: 'https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q',
  },
  {
    name: 'Harsimran Singh Virk',
    description: 'Numerous code contributions to GDeveloppe',
    link: 'https://github.com/HarsimranVirk',
  },
  {
    name: 'Nilay Majorwar',
    description: 'Numerous code contributions to GDeveloppe',
    link: 'https://github.com/nilaymaj',
  },

  // Community members:
  {
    name: 'ddabrahim',
    description: 'Lots of examples bundled with GDeveloppe',
    link: 'https://gametemplates.itch.io/',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'Gametemplates',
    description: 'Examples bundled with GDeveloppe',
    link: 'https://gametemplates.itch.io/',
  },
  { name: 'Mats', description: 'Tutorials, Examples' },
  { name: 'erdo', description: 'Tutorials, Examples' },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  { name: 'Jubileuksen3', description: 'Tutorials, Examples' },
  { name: 'LucaTexas', description: 'Tutorials, Examples' },
  { name: 'Kink', description: 'Forum moderator, tutorials, Examples' },
  { name: 'RicoTrooper', description: 'Tutorials' },
  { name: 'kalel', description: 'Tutorials' },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  { name: 'mtarzaim', description: 'Tutorials' },
  { name: 'Darkhog', description: 'Examples' },
  { name: 'Ricardo Graca', description: 'Tutorials, Examples' },
  { name: 'Diego Schiavon', description: 'Indiegogo Ubuntu contributor' },
  { name: 'conceptgame', description: 'Indiegogo super contributor' },
  {
    name: 'Jose David Cuartas Correa',
    description:
      'Author of Digitopolis (a book on how to make games with GDeveloppe4)',
  },

  {
    name: 'François Dumortier',
    description: 'GDeveloppe logo design',
    link: 'http://www.fdumortier.com',
  },
  {
    name: 'Constantine Shvetsov',
    description: 'Design of all the awesome icons',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description: 'Contributions to GDeveloppe and Moderation on the Forum',
    link: 'https://forum.gdevelop-app.com/u/arthuro555/summary',
  },
  {
    name: 'MillionthVector',
    description: 'Assets of various examples',
  },
  {
    name: 'Tristan Rhodes (Victris Games)',
    description: 'High quality extensions for GDeveloppe',
    link: 'https://www.youtube.com/channel/UClbq1M-D83t_bYhfa1mfyEQ',
  },
  {
    name: 'Entropy',
    description: 'High quality extensions for GDeveloppe',
    link: 'https://github.com/Entr0py404',
  },
  {
    name: 'FlokiTV',
    description: 'High quality extensions for GDeveloppe',
    link: 'https://github.com/Entr0py404',
  },
  {
    name: 'Silver-Streak',
    description:
      'Examples, bug reports, testing of new features, providing community support to users, community moderation',
    link: 'https://github.com/Silver-Streak',
  },
  {
    name: 'Jurfix',
    description: 'Discord moderation',
  },
  {
    name: 'Wishforge Games',
    description: 'Making high quality tutorials',
    link: 'https://www.wishforge.games/',
  },
  {
    name: 'Sleeper Games',
    description: 'Making the game feel starter',
    link: 'https://twitter.com/Sleeper_Games',
  },
  {
    name: 'VegeTato',
    description: 'Extensions for GDeveloppe',
  },
  {
    name: 'Leo Red',
    description: 'Reviewing examples submissions',
    link: 'https://github.com/Midhil457',
  },
  {
    name: 'add_',
    description: 'Extensions for GDeveloppe',
    link: 'https://github.com/add00',
  },
  {
    name: 'HelperWesley',
    description: 'Examples and youtube content that is relevant to GDeveloppe',
    link: 'https://www.youtube.com/channel/UC8RsU74-hU1pfNKHNMfiFfw',
  },
  {
    name: 'UlisesFreitas',
    description:
      'Numerous examples and making external services that integrate with GDeveloppe games',
    link: 'https://ulisesfreitas.itch.io/',
  },
  {
    name: 'IttaloXD',
    description: 'The GDeveloppe embassador in Brazil',
    link: 'https://twitter.com/ittaloxd',
  },
];

export default class AboutDialog extends PureComponent<Props, State> {
  state = {
    currentTab: 'about',
  };

  _openContributePage = () => {
    Window.openExternalURL('https://gdevelop-app.com/contribute/');
  };

  _openLink = (link: string) => {
    if (!link) return;

    Window.openExternalURL(link);
  };

  _changeTab = (currentTab: string) => {
    this.setState({ currentTab });
  };

  render() {
    const { open, onClose, updateStatus } = this.props;
    const { currentTab } = this.state;
    if (!open) return null;

    const updateStatusString = getUpdateStatusLabel(updateStatus.status);
    const updateButtonLabel = getUpdateButtonLabel(updateStatus.status);

    return (
      <Dialog
        actions={[
          <FlatButton
            key="website"
            label={<Trans>GDeveloppe Website</Trans>}
            primary={false}
            onClick={() => Window.openExternalURL('http://gdevelop-app.com')}
          />,
          <FlatButton
            key="close"
            label={<Trans>Close</Trans>}
            primary={false}
            onClick={onClose}
          />,
        ]}
        onRequestClose={onClose}
        cannotBeDismissed={false}
        open={open}
        maxWidth="sm"
        noMargin
      >
        <PreferencesContext.Consumer>
          {({ values, checkUpdates }) => (
            <Column noMargin>
              <img
                src="res/GD-logo.png"
                alt="GDeveloppe logo"
                style={styles.logo}
              />
              <Tabs value={currentTab} onChange={this._changeTab}>
                <Tab label={<Trans>About GDeveloppe</Trans>} value="about" />
                <Tab label={<Trans>What's new?</Trans>} value="changelog" />
                <Tab label={<Trans>Contributors</Trans>} value="contributors" />
              </Tabs>
              {currentTab === 'about' && (
                <React.Fragment>
                  <Column>
                    <Line>
                      <Text>
                        <Trans>GDeveloppe 6, based on GDeveloppe</Trans>
                      </Text>
                    </Line>
                    <Line>
                      <Text>{updateStatusString}</Text>
                    </Line>
                    <Line justifyContent="center">
                      {!!updateStatusString && (
                        <FlatButton
                          label={updateButtonLabel}
                          onClick={() =>
                            checkUpdates(canDownloadUpdate(updateStatus.status))
                          }
                        />
                      )}
                    </Line>
                  </Column>
                </React.Fragment>
              )}
              {currentTab === 'changelog' && (
                <Column>
                  <Changelog />
                </Column>
              )}
              {currentTab === 'contributors' && (
                <React.Fragment>
                  <Column>
                    <Text>
                      <Trans>
                        GDeveloppe was created by Florian "4ian" Rival. The parody
                        GDeveloppe was made by arthuro555.
                      </Trans>
                    </Text>
                    <Text>
                      <Trans>Contributors, in no particular order:</Trans>
                    </Text>
                  </Column>
                  <List>
                    {contributors.map(contributor => (
                      <ListItem
                        key={contributor.name}
                        primaryText={contributor.name}
                        secondaryText={contributor.description}
                        secondaryTextLines={
                          contributor.description.length < 30 ? 1 : 2
                        }
                        displayLinkButton={contributor.link ? true : false}
                        onOpenLink={() =>
                          this._openLink(contributor.link || '')
                        }
                      />
                    ))}
                  </List>
                  <Column expand>
                    <Text>
                      <Trans>
                        Thanks to all users of GDeveloppe! There must be missing
                        tons of people, please send your name if you've
                        contributed and you're not listed.
                      </Trans>
                    </Text>
                    <Line alignItems="center" justifyContent="center">
                      <FlatButton
                        label={<Trans>Contribute to GDeveloppe</Trans>}
                        onClick={this._openContributePage}
                      />
                    </Line>
                  </Column>
                </React.Fragment>
              )}
            </Column>
          )}
        </PreferencesContext.Consumer>
      </Dialog>
    );
  }
}
