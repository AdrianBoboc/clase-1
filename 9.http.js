const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

console.log(process.env)

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

const desiredPort = process.env.PORT ?? 3000

// El puerto 0 indica que el servidor escucha en un puerto aleatorio.
/* server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
}) */

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
