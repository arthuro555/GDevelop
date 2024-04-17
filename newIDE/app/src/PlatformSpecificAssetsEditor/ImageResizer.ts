import optionalRequire from '../Utils/OptionalRequire';

const fs = optionalRequire('fs-extra');

export const getImageFromPath = (path: string): Promise<HTMLImageElement> => {
  const imageElement = document.createElement('img');

  const file = fs.readFileSync(path, { encoding: 'base64' });

  return new Promise<HTMLImageElement>(
    (
      resolve: (result: Promise<HTMLImageElement> | HTMLImageElement) => void,
      reject: (error?: any) => void
    ) => {
      imageElement.addEventListener('error', (event: Event) => {
        reject(event);
      });
      imageElement.addEventListener('load', () => {
        resolve(imageElement);
      });
      imageElement.src = `data:image/png;base64,${file}`;
    }
  );
};

export const resizeImage = (
  image: HTMLImageElement,
  outputFile: string,
  {
    width,
    height,
    transparentBorderSize = 0,
  }: {
    width: number;
    height: number;
    transparentBorderSize?: number;
  }
): Promise<boolean> => {
  return new Promise(
    (
      resolve: (result: Promise<boolean> | boolean) => void,
      reject: (error?: any) => void
    ) => {
      const canvasElement = document.createElement('canvas');
      canvasElement.width = width;
      canvasElement.height = height;
      const ctx = canvasElement.getContext('2d');

      // @ts-expect-error - TS2531 - Object is possibly 'null'.
      ctx.imageSmoothingEnabled = true;
      // @ts-expect-error - TS2531 - Object is possibly 'null'.
      ctx.imageSmoothingQuality = 'high';

      // @ts-expect-error - TS2531 - Object is possibly 'null'.
      ctx.drawImage(
        image,
        transparentBorderSize,
        transparentBorderSize,
        width - 2 * transparentBorderSize,
        height - 2 * transparentBorderSize
      );

      canvasElement.toBlob((blob) => {
        // @ts-expect-error - TS2531 - Object is possibly 'null'.
        blob.arrayBuffer().then((buffer) => {
          fs.writeFileSync(outputFile, Buffer.from(buffer));
          resolve(true);
        });
      }, 'image/png');
    }
  );
};
