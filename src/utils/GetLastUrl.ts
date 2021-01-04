export function getLastURL(url: string) {
  return url.substring(url.lastIndexOf('/') + 1)
}
