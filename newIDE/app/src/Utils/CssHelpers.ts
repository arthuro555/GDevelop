let pixelatedImageRenderingValue: string | null | undefined = null;
export const getPixelatedImageRendering = (): string => {
  if (pixelatedImageRenderingValue) return pixelatedImageRenderingValue;

  return (pixelatedImageRenderingValue = global.CSS.supports(
    'image-rendering: crisp-edges'
  )
    ? 'crisp-edges'
    : 'pixelated');
};
