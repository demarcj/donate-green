export const url_converter = (url: string) => {
  return url.replaceAll(` `, `_`).toLocaleLowerCase()
}