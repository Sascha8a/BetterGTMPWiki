function replaceSyntaxHightlighting (content) {
  content = content.replace('<syntaxhighlight lang="JS" >', '```javascript\n')
  content = content.replace('<syntaxhighlight lang="JS">', '```javascript\n')
  content = content.replace('<syntaxhighlight lang="C#" >', '```csharp\n')
  content = content.replace('<syntaxhighlight lang="C#">', '```csharp\n')
  content = content.replace('</syntaxhighlight>', '\n```')
  return content
}

module.exports = replaceSyntaxHightlighting
