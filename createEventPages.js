const fetch = require('node-fetch')
const fs = require('fs-extra')

const getContentFromPage = require('./getContentFromPage')
const addToIndex = require('./linkIndex').addToIndex
const extractUsageExample = require('./extractUsageExample')
const extractFirstSyntaxHightlight = require('./extractFirstSyntaxHightlight')
const writeToFile = require('./writeToFile')
const replaceNoteBlocks = require('./replaceNoteBlocks')
const replaceSyntaxHightlighting = require('./replaceSyntaxHightlighting')
const replacePlaceholder = require('./replacePlaceholder')

async function getPagesInCategory (category) {
  let res = await fetch(`https://wiki.gt-mp.net/api.php?action=query&format=json&list=categorymembers&cmtitle=Category%3A${category}&cmlimit=500&cmsort=sortkey&cmdir=ascending`)
  let body = await res.text()
  return JSON.parse(body).query.categorymembers
}

function extractDescription (content) {
  let description = ''
  let contentLines = content.split('\n')
  
  for (let line of contentLines) {
    if (line.includes('Requirements') || line.includes('Syntax')) break
    if (!line.includes('NOTOC') && !line.includes('Template')) {
      description = description.concat(line + '\n')
    }
  }

  return description
}

async function concatTemp (category) {
  let files = await fs.readdir('./temp/' + category)
  let concatText = ''
  for (let file of files) {
    let fileContent = await fs.readFile('./temp/' + category + '/' + file)
    concatText = concatText.concat(fileContent)
  }

  return concatText + '\n'
}

function generateCategoryMarkdown (title, description, syntax, usage) {
  let markdown = `## ${title}
${description}
${syntax}
${usage !== '' ? '### Usage example(s)\n' + usage : '!> **TODO: ** Add usage example!'}
`

  return markdown
}

async function writeEventsToFile (eventSection) {
  await fs.emptyDir('./temp/' + eventSection)
  let pages = await getPagesInCategory(eventSection)
  
  for (let page of pages) {
    let content = await getContentFromPage(page.title)
    addToIndex(eventSection, page.title)
    
    let fileContents = ''
    if (!content.includes('==Syntax==')) {
      fileContents = generateCategoryMarkdown(page.title, extractDescription(content), '!> **TODO: ** Add Syntax', extractUsageExample(content))
    } else {
      fileContents = generateCategoryMarkdown(page.title, extractDescription(content), extractFirstSyntaxHightlight(content), extractUsageExample(content))
    }

    fileContents = replaceNoteBlocks(fileContents)
    fileContents = replaceSyntaxHightlighting(fileContents)
    fileContents = replacePlaceholder(fileContents)  
    await writeToFile('./temp/' + eventSection, page.title, fileContents)
  }

  let concatText = await concatTemp(eventSection)
  await writeToFile('docs', eventSection, concatText)
}

async function createEventPages () {
  await Promise.all([
    writeEventsToFile('Events_Server'),
    writeEventsToFile('Events_Client'),
    writeEventsToFile('Events')
  ])
}

module.exports = createEventPages
