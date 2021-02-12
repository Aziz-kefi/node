const fs=require('fs')
const http=require('http')

let port = process.argv[2]
let file = process.argv[3]

http.createServer(function (request, response) {
  fs.createReadStream(file).pipe(response)
}).listen(+port, function () {
  console.log(' http://localhost:%s', port)
})