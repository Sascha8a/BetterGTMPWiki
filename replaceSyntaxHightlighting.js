function replaceAll (str, find, replace) {
  return str.replace(new RegExp(find, 'gi'), replace)
}

function replaceSyntaxHightlighting (content) {
  content = replaceAll(content, '<syntaxhighlight lang="JS" >', '```javascript\n')
  content = replaceAll(content, '<syntaxhighlight lang="JS">', '```javascript\n')
  content = replaceAll(content, '<syntaxhighlight lang="C#" >', '```csharp\n')
  content = replaceAll(content, '<syntaxhighlight lang="C#">', '```csharp\n')
  content = replaceAll(content, '<syntaxhighlight lang="Csharp" >', '```csharp\n')
  content = replaceAll(content, '</syntaxhighlight>', '\n```')
  return content
}

module.exports = replaceSyntaxHightlighting
