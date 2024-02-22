const numeroAleatorio = Math.floor(Math.random() * 50) + 1;

let intentos = 0;

const maxIntento = 10;

alert("Bienvenido al adivina adivinador, si lo conseguis tengo una noticia que decirte al final! ")

while (intentos < maxIntento) {
    
    const numeroUsuario = Number(prompt("Adivine el numero ganador entre 1 y 50!"));

    if (numeroUsuario == numeroAleatorio) {
        alert("USTED ADIVINO EL NUMERO!!!!");
        break;
    } else if (numeroUsuario < numeroAleatorio) {
        alert("Te doy una pista el numero es mayor!");
    } else {
        alert("Te doy una pista el numero es menor!");
    }

    intentos++;

}

if (intentos === maxIntento) {
    alert("Se le acabaron los intentos! El numero correcto era: --  " + numeroAleatorio + "  --  Aunque no hayas descubierto el numero te doy la noticia igual.");

}

