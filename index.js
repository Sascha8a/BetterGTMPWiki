const createCategoryPages = require('./createCategoryPages')
const createEventPages = require('./createEventPages')
const replaceLinksInFile = require('./replaceLinksInFile')

async function main () {
  await Promise.all([
    // createCategoryPages(),
    createEventPages()
  ])
  replaceLinksInFile('./docs/API_Server.md')
  replaceLinksInFile('./docs/API_Client.md')
  replaceLinksInFile('./docs/Events_Server.md')
  replaceLinksInFile('./docs/Events_Client.md')
  replaceLinksInFile('./docs/Events.md')
}

main()
