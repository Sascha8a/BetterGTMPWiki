module.exports = (content) => {
  let regex = /({{NoteBlock\|)([\s\S]*?)(}})/gmi
  while (true) {
    let match = regex.exec(content)
    if (match === null) break
    let exactMatch = match[2]
    content = content.replace(match[0], `\n?> *Note:* ${exactMatch}`)
  }

  let regex2 = /'''Note:''' ([\s\S]*?)\n/gmi
  while (true) {
    let match = regex2.exec(content)
    if (match === null) break
    let exactMatch = match[2]
    content = content.replace(match[0], `\n?> *Note:* ${exactMatch}`)
  }

  let regex3 = /''Note:'' ([\s\S]*?)\n/gmi
  while (true) {
    let match = regex3.exec(content)
    if (match === null) break
    let exactMatch = match[2]
    content = content.replace(match[0], `\n?> *Note:* ${exactMatch}`)
  }

  return content
}
