var nombreUsuario = "Juan"//escribo var para arrancar a definir, espacio y el nombre de la variable identificando cada palabra con una mayúscula para facilitar su lectura
var largo = 8
var ancho = 10
var superficie = largo * ancho
document.write("Nombre del usuario: " + nombreUsuario)
document.write(superficie)
superficie = superficie + 1
document.writeln("usando superficie = superficie + 1 queda" + superficie)
superficie += 1
document.write("usando superficie += 1 queda" + superficie)
superficie++
document.write("usando superficie++ queda" + superficie)
console.log("Escribo desde la consola")
