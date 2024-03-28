// Imagina que tienes una caja de juguetes con diferentes juguetes adentro. Cada juguete tiene un nombre escrito en él. Quieres saber el nombre de cada juguete, así que usas un bucle `for...in` para recorrer todos los juguetes y mostrarte sus nombres.

// Ahora, aquí tienes el ejemplo en código:


// Imagina que esta es tu caja de juguetes

let cajaDeJuguetes = {
    pelota: "redonda",
    muñeca: "de porcelana",
    carro: "rojo",
    avion: "de plástico"
};

// Ahora, vamos a usar el bucle for...in para recorrer los juguetes

for (let juguete in cajaDeJuguetes) {
    console.log("El juguete es un " + juguete + " y es " + cajaDeJuguetes[juguete]);
}


// En este ejemplo:

// - `cajaDeJuguetes` es como tu caja de juguetes con diferentes juguetes dentro.
// - Usamos el bucle `for...in` para recorrer cada juguete en la caja.
// - En cada iteración del bucle, la variable `juguete` contendrá el nombre del juguete actual.
// - Usamos `cajaDeJuguetes[juguete]` para obtener el tipo de cada juguete.

// Entonces, cuando ejecutes este código, verás en la consola algo así:

// El juguete es un pelota y es redonda
// El juguete es un muñeca y es de porcelana
// El juguete es un carro y es rojo
// El juguete es un avion y es de plástico
