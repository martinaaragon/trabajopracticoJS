const numero1 =parseInt(prompt("Ingrese un primer número"));
const numero2 =parseInt(prompt("Ingrese un segundo número"));
const numero3 =parseInt(prompt("Ingrese un tercer número"));

if(numero1 > numero2 && numero1 > numero3){
document.write(`El número 1  (${numero1})  es mayor que el número 2  (${numero2}) y el número 3  (${numero3})` );
} else if (numero3 > numero1 && numero3 > numero2){
        document.write(`El numero 3 (${numero3})  Es mayor que el  número 1 (${numero1}) y que el número 2 (${numero2})`);
} else{
        document.write(`los numeros ingresados son iguales (${numero2}) `);
}