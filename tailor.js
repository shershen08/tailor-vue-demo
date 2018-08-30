'use strict'

const fs = require('fs')
const http = require('http')
const Tailor = require('node-tailor')
const tailor = new Tailor({
  templatesPath: __dirname + '/templates'
})

const PORT = 8089

http
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' })
      return res.end('')
    }

    if (req.url === '/commons/style.css') {

      fs.readFile(__dirname + '/commons/style.css', (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end('');
      });

    }

    req.headers['x-request-uri'] = req.url
    req.url = '/index'

    tailor.requestHandler(req, res)
  })
  .listen(PORT, function() {
    console.log(`Tailor server listening on port ${8089}`)
  })
