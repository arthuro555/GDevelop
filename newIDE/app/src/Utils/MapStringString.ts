const gd: libGDevelop = global.gd;

export const toNewGdMapStringString = (
  object: {
    [key: string]: string
  },
): gdMapStringString => {
  const map = new gd.MapStringString();
  for (var key in object) {
    map.set(key, object[key]);
  }

  return map;
};
