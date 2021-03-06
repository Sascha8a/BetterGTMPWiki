const fs = require('fs-extra')
const fetch = require('node-fetch')

const getContentFromPage = require('./getContentFromPage')
const writeToFile = require('./writeToFile')
const extractFirstSyntaxHightlight = require('./extractFirstSyntaxHightlight')
const extractUsageExample = require('./extractUsageExample')
const addToIndex = require('./linkIndex').addToIndex
const replaceNoteBlocks = require('./replaceNoteBlocks')
const replaceSyntaxHightlighting = require('./replaceSyntaxHightlighting')
const replacePlaceholder = require('./replacePlaceholder')

function validateCategory (content) {
  if (!content.includes('==Syntax==')) return false
  if (!content.includes('syntaxhighlight')) return false
  return true
}

function generateCategoryMarkdown (title, description, syntax, usage) {
  let markdown = `## ${title}
${description}
${syntax}
${usage !== '' ? '### Usage example(s)\n' + usage : '!> **TODO: ** Add usage example!'}
`

  return markdown
}

function isValidDescription (line) {
  if (line.includes('NOEDITSECTION')) return false
  if (line.includes('NOTOC')) return false
  if (line === '') return false
  if (line === '{{New_API}}') return false
  return true
}

function extractDescription (content) {
  let contentLines = content.split('\n')
  let description = ''

  for (let line of contentLines) {
    if (!line.includes('==Syntax==')) {
      if (isValidDescription(line)) description = description.concat(line + '\n')
    } else {
      return description
    }
  }
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

async function writeCategoryToFile (category) {
  await fs.emptyDir('./temp/' + category)
  let pages = await getPagesInCategory(category)

  for (let page of pages) {
    let content = await getContentFromPage(page.title)
    let fileContents = ''

    if (!content.includes('==Syntax==')) {
      fileContents = generateCategoryMarkdown(page.title, extractDescription(content), '!> **TODO: ** Add Syntax', extractUsageExample(content))
    } else {
      fileContents = generateCategoryMarkdown(page.title, extractDescription(content), extractFirstSyntaxHightlight(content), extractUsageExample(content))
    }

    addToIndex(category, page.title)

    fileContents = replaceNoteBlocks(fileContents)
    fileContents = replaceSyntaxHightlighting(fileContents)
    fileContents = replacePlaceholder(fileContents)

    await writeToFile('./temp/' + category, page.title, fileContents)
  }

  let concatText = await concatTemp(category)
  await writeToFile('docs', category, concatText)
}

async function getPagesInCategory (category) {
  let res = await fetch(`https://wiki.gt-mp.net/api.php?action=query&format=json&list=categorymembers&cmtitle=Category%3A${category}&cmlimit=500&cmsort=sortkey&cmdir=ascending`)
  let body = await res.text()
  return JSON.parse(body).query.categorymembers
}

async function createCategoryPages () {
  await Promise.all([
    writeCategoryToFile('API_Server'),
    writeCategoryToFile('API_Client')
  ])
}

module.exports = createCategoryPages
