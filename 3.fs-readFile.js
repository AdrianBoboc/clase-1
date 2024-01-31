/* const fs = require('node:fs')

console.log('Leyendo el primer archivo')
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)

console.log('Haciendo cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(text2)
*/

// Todo lo anterior es sincrono, ahora será asincrono para poder hacer otras cosas a la misma vez
const fs = require('node:fs') // RECORDAR VOLVER A INICIAR EL FS

console.log('Leyendo el primer archivo')
const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log('primer texto: ' + text)
})

console.log('Haciendo cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo')
const text2 = fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto: ' + text)
})
