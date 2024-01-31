const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/dragon-secret-files/passwords.txt')
console.log(base)

const filename = path.basename('/tmp/dragon-secret-files/passwords.txt', '.txt')
console.log(filename)

const extension = path.extname('/tmp/dragon-secret-files/passwords.txt')
console.log(extension)
