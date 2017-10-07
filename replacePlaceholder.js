function replaceAll (str, find, replace) {
  return str.replace(new RegExp(find, 'gi'), replace)
}

function replacePlaceholder (content) {
  content = replaceAll(content, 'Function Description', '!> **TODO: ** Add Function Description!')
  content = replaceAll(content, 'Example Description', '!> **TODO: ** Add Example Description!')
  return content
}

module.exports = replacePlaceholder
