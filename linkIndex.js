let index = {}

exports.addToIndex = (file, id) => {
  index[id.toLowerCase()] = `${file}.md?id=${id.toLowerCase()}`
}

exports.getFromIndex = (id) => {
  return index[id.toLowerCase()] || ''
}

exports.getIndex = () => {
  return index
}
