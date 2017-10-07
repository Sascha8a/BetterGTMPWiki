module.exports = (content) => {
  // |==Usage example\(s\)==
  let regex = /(==Usage example==|==Usage example\(s\)==[\n\r])([\s\S]*?)(==References==|==Changelog==)/gmi
  let match = regex.exec(content)
  return match === null ? '' : match[2]
}
