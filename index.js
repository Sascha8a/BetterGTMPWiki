const createCategoryPages = require('./createCategoryPages')
const replaceLinksInFile = require('./replaceLinksInFile')

async function main () {
  await createCategoryPages()
  replaceLinksInFile('./docs/API_Server.md')
  replaceLinksInFile('./docs/API_Client.md')
}

main()
