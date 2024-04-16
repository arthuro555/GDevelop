// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItem } from '../UI/List';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module './Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from './Preferences/PreferencesContext';
import {
  getElectronUpdateStatusLabel,
  getElectronUpdateButtonLabel,
  canDownloadElectronUpdate,
  ElectronUpdateStatus,
  useServiceWorkerUpdateStatus,
  getServiceWorkerStatusLabel,
// @ts-expect-error - TS6142 - Module './UpdaterTools' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UpdaterTools.tsx', but '--jsx' is not set.
} from './UpdaterTools';
// @ts-expect-error - TS6142 - Module './Changelog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Changelog/index.tsx', but '--jsx' is not set.
import Changelog from './Changelog';
import {
  getIDEVersion,
  getGDCoreVersion,
  getIDEVersionWithHash,
} from '../Version';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';
const electron = optionalRequire('electron');

type Props = {
  open?: boolean,
  onClose: () => void,
  updateStatus: ElectronUpdateStatus
};

type TabName = 'about' | 'changelog' | 'contributors';

const styles = {
  logo: {
    width: '100%',
    aspectRatio: '16 / 5',
    objectFit: 'cover',
  },
} as const;

// There must be missing tons of people.
// If you contributed to GDevelop but you're not in the list, please
// send a Pull Request on GitHub or open an issue ;)
const contributors = [
  // Core development team
  {
    name: 'Clément Pasteau',
    description: 'Core development team',
    link: 'https://github.com/ClementPasteau',
  },
  {
    name: 'AlexandreSi',
    description: 'Core development team',
    link: 'https://github.com/AlexandreSi',
  },
  // Code contributors
  {
    name: 'Victor Levasseur',
    description:
      'Numerous code contributions to GDevelop and community moderation',
  },
  {
    name: 'Lizard-13',
    description:
      'Numerous code contributions to GDevelop and community moderation',
  },
  {
    name: "Christina 'Castpixel' Antoinette Neofotistou",
    description: 'Art and assets for the 8-bit Space Shooter example.',
    link: 'https://www.patreon.com/castpixel',
  },
  { name: 'ale26reg', description: 'Contributions to GDevelop' },
  { name: 'dos1', description: 'Contributions to GDevelop' },
  {
    name: 'Aurélien Vivet',
    description:
      'Numerous code contributions to GDevelop and community management',
    link: 'https://www.witly.fr',
  },
  {
    name: 'Todor Imreorov',
    description: 'Numerous code contributions to GDevelop',
  },
  { name: 'brylie', description: 'Contributions to GDevelop' },
  { name: 'Nnarol', description: 'Contributions to GDevelop' },
  { name: 'wild-master', description: 'Contributions to GDevelop' },
  { name: 'RandomShaper', description: 'Contributions to GDevelop' },
  { name: 'RyanNerd', description: 'Contributions to GDevelop' },
  { name: 'greater', description: 'Contributions to GDevelop' },
  { name: 'triptych', description: 'Contributions to GDevelop' },
  {
    name: 'Wend1go',
    description: 'Contributions to GDevelop, Tutorials, Examples',
  },
  { name: 'mattiascibien', description: 'Contributions to GDevelop' },
  { name: 'araujo921', description: 'Contributions to GDevelop' },
  { name: 'ronnystandtke', description: 'Contributions to GDevelop' },
  {
    name: 'Thomas Flecy',
    description: 'Contributions to GDevelop (original sound object extension)',
  },
  {
    name: 'Arthur Pacaud (arthuro555)',
    description:
      'Numerous code contributions to GDevelop and community moderation',
    link: 'https://forum.gdevelop.io/u/arthuro555/summary',
  },
  {
    name: 'The Gem Dev',
    description: 'Code contributions to GDevelop and tutorials on Youtube',
    link: 'https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q',
  },
  {
    name: 'D8H',
    description: 'Numerous code contributions to GDevelop',
    link: 'https://github.com/D8H',
  },
  {
    name: 'Harsimran Singh Virk',
    description: 'Numerous code contributions to GDevelop',
    link: 'https://github.com/HarsimranVirk',
  },
  {
    name: 'Nilay Majorwar',
    description: 'Numerous code contributions to GDevelop',
    link: 'https://github.com/nilaymaj',
  },

  // Community members:
  {
    name: 'ddabrahim',
    description: 'Examples for GDevelop',
    link: 'https://gametemplates.itch.io/',
  },
  {
    name: 'Gametemplates',
    description: 'Examples bundled with GDevelop',
    link: 'https://gametemplates.itch.io/',
  },
  { name: 'Mats', description: 'Tutorials, Examples' },
  { name: 'erdo', description: 'Tutorials, Examples' },
  { name: 'Jubileuksen3', description: 'Tutorials, Examples' },
  { name: 'LucaTexas', description: 'Tutorials, Examples' },
  { name: 'Kink', description: 'Forum moderator, tutorials, Examples' },
  { name: 'RicoTrooper', description: 'Tutorials' },
  { name: 'kalel', description: 'Tutorials' },
  { name: 'mtarzaim', description: 'Tutorials' },
  { name: 'Darkhog', description: 'Examples' },
  { name: 'Ricardo Graca', description: 'Tutorials, Examples' },
  { name: 'Diego Schiavon', description: 'Indiegogo Ubuntu contributor' },
  { name: 'conceptgame', description: 'Indiegogo super contributor' },
  {
    name: 'Jose David Cuartas Correa',
    description:
      'Author of Digitopolis (a book on how to make games with GDevelop 4)',
  },

  {
    name: 'François Dumortier',
    description: 'GDevelop logo design',
    link: 'http://www.fdumortier.com',
  },
  {
    name: 'Constantine Shvetsov',
    description: 'Design of all the awesome icons',
  },
  {
    name: 'MillionthVector',
    description: 'Assets of various examples',
  },
  {
    name: 'Tristan Rhodes (Victris Games)',
    description: 'High quality extensions for GDevelop',
    link: 'https://www.youtube.com/channel/UClbq1M-D83t_bYhfa1mfyEQ',
  },
  {
    name: 'Entropy',
    description: 'High quality extensions and art packs for GDevelop',
    link: 'https://github.com/Entr0py404',
  },
  {
    name: 'FlokiTV',
    description: 'High quality extensions for GDevelop',
    link: 'https://github.com/FlokiTV',
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
    link: 'https://github.com/Jurfix',
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
    description: 'Extensions for GDevelop',
    link: 'https://twitter.com/VegeTato_',
  },
  {
    name: 'Leo Red',
    description: 'Reviewing examples submissions',
    link: 'https://github.com/Midhil457',
  },
  {
    name: 'add_',
    description: 'Extensions for GDevelop',
    link: 'https://github.com/add00',
  },
  {
    name: 'HelperWesley',
    description: 'Examples and youtube content that is relevant to GDevelop',
    link: 'https://www.youtube.com/channel/UC8RsU74-hU1pfNKHNMfiFfw',
  },
  {
    name: 'UlisesFreitas',
    description:
      'Numerous examples and making external services that integrate with GDevelop games',
    link: 'https://ulisesfreitas.itch.io/',
  },
  {
    name: 'IttaloXD',
    description: 'The GDevelop embassador in Brazil',
    link: 'https://twitter.com/ittaloxd',
  },
  {
    name: 'PANDAKO',
    description: 'Translations in Japanese, extensions and blog',
    link: 'https://gdevelop-jp.blogspot.com',
  },
];

const AboutDialog = ({
  onClose,
  updateStatus,
}: Props) => {
  const openContributePage = React.useCallback(() => {
    Window.openExternalURL('https://gdevelop.io/page/contribute/');
  }, []);

  const openReleaseNote = () =>
    Window.openExternalURL('https://github.com/4ian/GDevelop/releases');

  const openLink = React.useCallback((link: string) => {
    if (!link) return;

    Window.openExternalURL(link);
  }, []);

  const [currentTab, setCurrentTab] = React.useState<TabName>('about');

  const { checkUpdates } = React.useContext(PreferencesContext);

  // Electron update status
  const electronUpdateStatusString = getElectronUpdateStatusLabel(
    updateStatus.status
  );
  const electronUpdateButtonLabel = getElectronUpdateButtonLabel(
    updateStatus.status
  );

  // Web-app (service-worker) update status
  const serviceWorkerUpdateStatus = useServiceWorkerUpdateStatus();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>About GDevelop</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="website"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>GDevelop Website</Trans>}
          primary={false}
          onClick={() => Window.openExternalURL('https://gdevelop.io')}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          primary={false}
          onClick={onClose}
        />,
      ]}
      secondaryActions={
        currentTab === 'changelog'
          ? [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
                key="see-all"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>See all release notes</Trans>}
                primary={false}
                onClick={openReleaseNote}
              />,
            ]
          : undefined
      }
      onRequestClose={onClose}
      open
      maxWidth="sm"
      fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <img src="res/GD-logo.png" alt="GDevelop logo" style={styles.logo} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Tabs
            value={currentTab}
            onChange={setCurrentTab}
            options={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              { value: 'about', label: <Trans>About GDevelop</Trans> },
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              { value: 'changelog', label: <Trans>What's new?</Trans> },
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              { value: 'contributors', label: <Trans>Contributors</Trans> },
            ]}
          />
        </ColumnStackLayout>
      }
    >
      {currentTab === 'about' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  GDevelop is a full-featured, open-source game engine. Build
                  and publish games for any mobile, desktop or web game store.
                  It's super fast, easy to learn and powered by a community
                  making it better every day.
                </Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text allowSelection>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>This version of GDevelop is:</Trans> {getIDEVersion()}{' '}
                (editor full version: {getIDEVersionWithHash()}, core version:{' '}
                {getGDCoreVersion()})
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Updates</Trans>
              </Text>
              {!!electron && electronUpdateStatusString ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text>{electronUpdateStatusString}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
                    label={electronUpdateButtonLabel}
                    onClick={() =>
                      checkUpdates(
                        canDownloadElectronUpdate(updateStatus.status)
                      )
                    }
                  />
                </ColumnStackLayout>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>No information about available updates.</Trans>
                </Text>
              )}
              {!electron && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text>
                  {getServiceWorkerStatusLabel(serviceWorkerUpdateStatus)}
                </Text>
              )}
            </ColumnStackLayout>
          </Line>
        </React.Fragment>
      )}
      {currentTab === 'changelog' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Changelog />
        </Column>
      )}
      {currentTab === 'contributors' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>GDevelop was created by Florian "4ian" Rival.</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Contributors, in no particular order:</Trans>
            </Text>
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <List>
            {contributors.map(contributor => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ListItem
                key={contributor.name}
                primaryText={contributor.name}
                secondaryText={contributor.description}
                secondaryTextLines={contributor.description.length < 30 ? 1 : 2}
                displayLinkButton={contributor.link ? true : false}
                onOpenLink={() => openLink(contributor.link || '')}
              />
            ))}
          </List>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Thanks to all users of GDevelop! There must be missing tons of
                people, please send your name if you've contributed and you're
                not listed.
              </Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Contribute to GDevelop</Trans>}
                onClick={openContributePage}
              />
            </Line>
          </Column>
        </React.Fragment>
      )}
    </Dialog>
  );
};

const AboutDialogWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>About dialog</Trans>}
    scope="about"
    onClose={props.onClose}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AboutDialog {...props} />
  </ErrorBoundary>
);

export default AboutDialogWithErrorBoundary;
