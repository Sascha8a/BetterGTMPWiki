const fs = require('fs-extra')
const getFromIndex = require('./linkIndex').getFromIndex

module.exports = async (file) => {
  let fileContent = await fs.readFile(file, 'utf8')
  let regex = /(\[\[)([A-Za-z0-9]*)(\]\])/g
  while (true) {
    let match = regex.exec(fileContent)
    if (match === null) break
    let exactMatch = match[2]
    console.log(exactMatch)
    fileContent = fileContent.replace(match[0], `[${exactMatch}](${getFromIndex(exactMatch)})`)
  }
  await fs.unlink(file)
  await fs.writeFile(file, fileContent)
  console.log('Replaced links in file', file)
}
