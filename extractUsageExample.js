function replaceAll (str, find, replace) {
  return str.replace(new RegExp(find, 'gi'), replace)
}

module.exports = (content) => {
  // |==Usage example\(s\)==
  let regex = /(==Usage example==|==Usage example\(s\)==[\n\r])([\s\S]*?)(==References==|==Changelog==)/gmi
  let match = regex.exec(content)
  if (match) {
    match[2] = match[2].replace(/\* '''/gi, '')
    match[2] = replaceAll(match[2], "'''", '')
  }
  return match === null ? '' : match[2]
}
