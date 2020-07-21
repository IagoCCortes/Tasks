export default function removeEmptyProperties(object: any) {
  return Object.keys(object).reduce((obj: any, key: string) => {
    if ([null, '', undefined].includes(object[key])) return obj;
    obj[key] = object[key];
    return obj;
  }, {});
}
