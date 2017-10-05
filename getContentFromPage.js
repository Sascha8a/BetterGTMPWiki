const fetch = require('node-fetch')

async function getContentFromPage (title) {
  let res = await fetch(`https://wiki.gt-mp.net/index.php?title=${title}&action=raw`)
  let body = await res.text()
  return body
}

module.exports = getContentFromPage
