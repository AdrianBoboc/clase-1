const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al leer el directorio: ', err)
    return
  }
  files.forEach(file => {
    console.log(file)
  })
})

// para hacerlo como promesa sería de la siguiente forma:

/* fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    console.log("Error al leer el directorio: ",err)
  }) */
