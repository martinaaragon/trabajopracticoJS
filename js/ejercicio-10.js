const numero = parseInt(prompt("Ingrese un número"));

if ( numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
        document.write("El numero es divisible por al menos uno de los cuatro: 2, 3, 5, 7");
} else{
        document.write("El número no es divisible por ninguno de los cuatro");
}