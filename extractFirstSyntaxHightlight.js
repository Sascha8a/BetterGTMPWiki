const replaceSyntaxHightlighting = require('./replaceSyntaxHightlighting.js')

function extractFirstSyntaxHightlight (content) {
  let start = content.indexOf('<syntaxhighlight')
  let end = content.substring(start).indexOf('</syntaxhighlight>') + '</syntaxhighlight>'.length
  let syntax = content.substring(start, start + end)

  syntax = syntax.trim()
  syntax = replaceSyntaxHightlighting(syntax)

  return syntax
}

module.exports = extractFirstSyntaxHightlight
 