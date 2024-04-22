// argumentos de entrada
console.log(process.argv)
// probar mediante "node 7.process.js aaaa --hola que tal--procesos"

// controlar el proceso y su salida
// si sale 0 es que todo ha salido bien
// si sale 1 es que algo ha fallado y queremos que salga
// process.exit(0)

// podemos controlar eventos del proceso
process.on('exit', () => {
  // ejecutar codigo
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
