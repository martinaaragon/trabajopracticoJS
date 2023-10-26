let frase =prompt("Escribe una frase");
let nfrase =frase.length;
let i;
for (i = 0; i < nfrase; i++){
        if (frase.charAt(i,1) === 'a' || frase.charAt(i,1) === 'e' || frase.charAt(i,1) 
        === 'i' || frase.charAt(i,1) === 'o' || frase.charAt(i,1) === 'u'){
 document.write(frase.charAt (i,1))}
}