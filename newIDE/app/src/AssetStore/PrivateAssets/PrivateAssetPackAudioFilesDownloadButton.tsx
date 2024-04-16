import * as React from 'react';
import PrivateAssetsAuthorizationContext from './PrivateAssetsAuthorizationContext';
import { PrivateAssetPack } from '../../Utils/GDevelopServices/Asset';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Music'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Music.js' implicitly has an 'any' type.
import Music from '../../UI/CustomSvgIcons/Music';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../UI/Grid';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';

const PrivateAssetPackAudioFilesDownloadButton = ({
  assetPack,
}: {
  assetPack: PrivateAssetPack
}) => {
  const { isMobile } = useResponsiveWindowSize();
  const { getPrivateAssetPackAudioArchiveUrl } = React.useContext(
    PrivateAssetsAuthorizationContext
  );
  const [
    isAudioArchiveUrlLoading,
    setIsAudioArchiveUrlLoading,
  ] = React.useState(false);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column expand alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
        primary
        label={
          isAudioArchiveUrlLoading ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Loading...</Trans>
          ) : isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Pack sounds</Trans>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Download pack sounds</Trans>
          )
        }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        icon={<Music />}
        disabled={isAudioArchiveUrlLoading}
        onClick={async () => {
          setIsAudioArchiveUrlLoading(true);
          const url = await getPrivateAssetPackAudioArchiveUrl(assetPack.id);
          setIsAudioArchiveUrlLoading(false);
          if (!url) {
            console.error(
              `Could not generate url for premium asset pack with name ${
                assetPack.name
              }`
            );
            return;
          }
          Window.openExternalURL(url);
        }}
      />
    </Column>
  );
};

export default PrivateAssetPackAudioFilesDownloadButton;
