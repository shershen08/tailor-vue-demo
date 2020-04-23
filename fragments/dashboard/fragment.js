const http = require('http')
const url = require('url')
const fs = require('fs')

const PORT = 8090
const ASSETS_PATH = '/assets/'
 
const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }

  if (pathname.startsWith(ASSETS_PATH)) {
    res.writeHead(200)
    return fs.createReadStream('./public' + pathname).pipe(res)
  }

  switch(pathname) {
    case '/public/bundle.js':
      res.writeHead(200, jsHeader)
      return fs.createReadStream('./public/bundle.js').pipe(res)
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': `<http://localhost:${PORT}/public/bundle.js>; rel="fragment-script"`
      })
      return res.end('')
  }
})

server.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`)
})
