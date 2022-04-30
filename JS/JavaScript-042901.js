var nota = 8
if (nota>=5) {
    document.write("¡Estoy aprobado!")
} else {
    document.write("hay que seguir laburando")
}
document.write("<br>", nota)

//operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "Suspendido":"aprobado!"
document.write("<br>","Estoy ",calificacion)

//Switch
switch(nota) {
    case 10:
        calificacion="Sobresaliente!"
        break;
    case 9:
    case 8:
        calificacion="Notable";
        break;
    case 7:
    case 6:
        calificacion="Bién";
    case 5:
        calificacion="Con lo justo y necesario";
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        calificacion="Insuficiente";
    break;
    default:
        calificacion="Nota errónea";
        break;
}
document.write("He obtenido un ", calificacion)