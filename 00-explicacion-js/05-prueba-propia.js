// PRUEBAS DE (FOR IN).

let cajaDeZapatillas = {
    nike: 'negras',
    adidas: 'azules',
    jordan: 'blancas',
};

for (let zapatillas in cajaDeZapatillas) {
    console.log(`las zapatillas son unas ${zapatillas} y son ${cajaDeZapatillas[zapatillas]}`);
};

//--------------------------------------\\

let personaRandom = {
    Nombre: 'Aitor',
    Apellido: 'Diaz',
    Altura: 1.75,
    Peso: '60 kg',
};

for (let datos in personaRandom) {
    console.log(`${datos}: ${personaRandom[datos]}`);
};

//-------------------------------------\\

let cajaDeComida = {
    Tomate: 'de pera',
    Lechuga: 'de iceberg',
    Pechuga: 'de pollo',
    Chuleton: 'de ternera',
    Jamo: 'de bellota',
}

for(let comida in cajaDeComida) {
    console.log(`${comida} ${cajaDeComida[comida]} `);
};

//---------------------------------------\\

let cajaJuguetesAnimales = {
    gatito: 'gris',
    perrito: 'dalmata',
    jirafa: 'amarilla',
    ballena: 'gris',
    hipopotamo: 'morado',
};

for(let animales in cajaJuguetesAnimales) {
    console.log(`Es un juguete de: ${animales} y son de color: ${cajaJuguetesAnimales[animales]}`);
};