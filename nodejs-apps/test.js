const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('/home/labo_adm/sample_web_EPFC_ECAM/www_root').pipe(res)
})

server.listen(process.env.PORT || 80)

