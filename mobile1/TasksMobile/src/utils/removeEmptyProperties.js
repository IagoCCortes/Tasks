export default function removeEmptyProperties(object) {
  return Object.keys(object).reduce((obj, key) => {
    if ([null, '', undefined].includes(object[key])) {
      return obj;
    }
    obj[key] = object[key];
    return obj;
  }, {});
}
