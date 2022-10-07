export const IDGenerator = () => {
  var temp = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return (
    temp() +
    temp() +
    '-' +
    temp() +
    '-' +
    temp() +
    '-' +
    temp() +
    '-' +
    temp() +
    temp() +
    temp()
  );
};
