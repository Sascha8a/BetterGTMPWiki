const fetch = require('node-fetch')
const fs = require('fs-extra')

const getContentFromPage = require('./getContentFromPage')
const writeToFile = require('./writeToFile')
const extractFirstSyntaxHightlight = require('./extractFirstSyntaxHightlight')

function validateCategory (content) {
  if (!content.includes('==Syntax==')) return false
  if (!content.includes('syntaxhighlight')) return false
  return true
}

function generateCategoryMarkdown (title, description, syntax) {
  let markdown = `## ${title}
${description}
${syntax}
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

  let success = 0
  let errors = 0

  for (let page of pages) {
    let content = await getContentFromPage(page.title)

    if (!validateCategory(content)) {
      await writeToFile('errors', page.title, content)
      errors += 1
    } else {
      let fileContents = generateCategoryMarkdown(page.title, extractDescription(content), extractFirstSyntaxHightlight(content))
      await writeToFile('./temp/' + category, page.title, fileContents)
      success += 1
    }
  }

  console.log(category, success, errors)

  let concatText = await concatTemp(category)
  await writeToFile('docs', category, concatText)
}

async function getPagesInCategory (category) {
  let res = await fetch(`https://wiki.gt-mp.net/api.php?action=query&format=json&list=categorymembers&cmtitle=Category%3A${category}&cmlimit=500&cmsort=sortkey&cmdir=ascending`)
  let body = await res.text()
  return JSON.parse(body).query.categorymembers
}

async function createCategoryPages () {
  writeCategoryToFile('API_Server')
  writeCategoryToFile('API_Client')
}

module.exports = createCategoryPages
