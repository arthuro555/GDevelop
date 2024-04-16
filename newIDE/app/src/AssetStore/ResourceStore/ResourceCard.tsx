import * as React from 'react';
import { Resource } from '../../Utils/GDevelopServices/Asset';
import ButtonBase from '@material-ui/core/ButtonBase';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import FontDownload from '@material-ui/icons/FontDownload';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../../UI/CorsAwareImage';
// @ts-expect-error - TS6142 - Module '../../ResourcesList/CheckeredBackground' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/CheckeredBackground.tsx', but '--jsx' is not set.
import CheckeredBackground from '../../ResourcesList/CheckeredBackground';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Video'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Video.js' implicitly has an 'any' type.
import Video from '../../UI/CustomSvgIcons/Video';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/File'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/File.js' implicitly has an 'any' type.
import File from '../../UI/CustomSvgIcons/File';

const paddingSize = 10;
const styles = {
  previewContainer: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    position: 'relative',
    objectFit: 'contain',
    verticalAlign: 'middle',
    pointerEvents: 'none',
  },
  previewIconDarkTheme: {
    width: 40,
    height: 40,
    filter: 'grayscale(1) invert(1)',
  },
  previewIconLightTheme: {
    width: 40,
    height: 40,
  },
  cardContainer: {
    overflow: 'hidden',
    position: 'relative',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    backgroundColor: 'rgb(0,0,0,0.5)',
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  icon: { width: 32, height: 32 },
  audioElement: { width: 128, height: 40 },
} as const;

type ImageCardProps = {
  size: number,
  resource: Resource,
  onChoose: () => void,
  imageStyle?: {
    width: number,
    height: number,
    filter?: string
  }
};

const ImageCard = ({
  resource,
  onChoose,
  size,
  imageStyle,
}: ImageCardProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase onClick={onChoose} focusRipple>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={{ ...styles.cardContainer, width: size, height: size }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={{ ...styles.previewContainer, width: size, height: size }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CheckeredBackground />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CorsAwareImage
            key={resource.url}
            style={{
              ...styles.previewImage,
              maxWidth: 128 - 2 * paddingSize,
              maxHeight: 128 - 2 * paddingSize,
              ...imageStyle,
            }}
            src={resource.url}
            alt={resource.name}
          />
        </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.titleContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin style={styles.title}>
            {resource.name}
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin style={styles.title} size="body2">
            {resource.license}
          </Text>
        </div>
      </div>
    </ButtonBase>
  );
};

type GenericCardProps = {
  size: number,
  resource: Resource,
  onChoose: () => void,
  children: React.ReactNode
};

const GenericCard = ({
  resource,
  onChoose,
  size,
  children,
}: GenericCardProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={{ ...styles.cardContainer, width: size, height: size }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>{children}</Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.titleContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin style={styles.title}>
          {resource.name}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin style={styles.title} size="body2">
          {resource.license}
        </Text>
      </div>
    </div>
  );
};

type Props = {
  size: number,
  resource: Resource,
  onChoose: () => void
};

export const ResourceCard = ({
  resource,
  onChoose,
  size,
}: Props) => {
  const resourceKind = resource.type;
  const theme = React.useContext(GDevelopThemeContext);

  switch (resourceKind) {
    case 'image':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <ImageCard resource={resource} onChoose={onChoose} size={size} />;
    case 'svg':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ImageCard
          resource={resource}
          onChoose={onChoose}
          size={size}
          imageStyle={
            theme.palette.type === 'light'
              ? styles.previewIconLightTheme
              : styles.previewIconDarkTheme
          }
        />
      );
    case 'audio':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GenericCard onChoose={onChoose} resource={resource} size={size}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <audio controls src={resource.url} style={styles.audioElement}>
              Audio preview is unsupported.
            </audio>
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton onClick={onChoose} label={<Trans>Choose</Trans>} />
          </Line>
        </GenericCard>
      );
    case 'json':
    case 'tilemap':
    case 'tileset':
    case 'spine':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GenericCard onChoose={onChoose} resource={resource} size={size}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <File style={styles.icon} />
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton onClick={onChoose} label={<Trans>Choose</Trans>} />
          </Line>
        </GenericCard>
      );
    case 'video':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GenericCard onChoose={onChoose} resource={resource} size={size}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Video style={styles.icon} />
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton onClick={onChoose} label={<Trans>Choose</Trans>} />
          </Line>
        </GenericCard>
      );
    case 'font':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GenericCard onChoose={onChoose} resource={resource} size={size}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FontDownload style={styles.icon} />
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton onClick={onChoose} label={<Trans>Choose</Trans>} />
          </Line>
        </GenericCard>
      );
    case 'model3D':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GenericCard onChoose={onChoose} resource={resource} size={size}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FontDownload style={styles.icon} />
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton onClick={onChoose} label={<Trans>Choose</Trans>} />
          </Line>
        </GenericCard>
      );
    case 'atlas':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GenericCard onChoose={onChoose} resource={resource} size={size}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FontDownload style={styles.icon} />
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton onClick={onChoose} label={<Trans>Choose</Trans>} />
          </Line>
        </GenericCard>
      );
    default:
      return null;
  }
};
