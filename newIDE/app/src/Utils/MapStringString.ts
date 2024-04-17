export const toNewGdMapStringString = (object: {
  [key: string]: string;
}): gd.MapStringString => {
  const map = new gd.MapStringString();
  for (var key in object) {
    map.set(key, object[key]);
  }

  return map;
};
