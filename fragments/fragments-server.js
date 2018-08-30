const http = require('http')
const url = require('url')
const fs = require('fs')


const PORT = process.env.PORT
const NAME = process.env.NAME
const PROJECT_PATH = process.env.NAME

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }
  switch(pathname) {
    case '/public/bundle.js':
      res.writeHead(200, jsHeader)
      return fs.createReadStream(`${PROJECT_PATH}/public/bundle.js`).pipe(res)
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': `<http://localhost:${PORT}/public/bundle.js>; rel="fragment-script"`
      })
      return res.end('')
  }
})

server.listen(PORT, () => {
  console.log(`fragment server ${NAME} started at ${PORT}`)
})
