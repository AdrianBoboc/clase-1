const fs = require('node:fs/promises')
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo')
const text = fs.readFilePromise('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto: ' + text)
  })

// El codigo de arriba y de abajo hacen lo mismo, solo que el de arriba está promificado (ha hehco el readFile como una promesa)
// y el de abajo es directamente una promesa, siempre está mejor hecho lo nativo, directamente como una promesa (lo de abajo)

console.log('Haciendo cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo')
const text2 = fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto: ' + text)
  })
