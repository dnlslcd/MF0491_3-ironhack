async function getPuzzle(wordCount) {
    let hiddenSentence = "Buena Suerte";

    const response = await fetch("https://puzzle.mead.io/puzzle?wordCount=1");
    const data = await response.json;
    return hiddenSentence;
}


// 1. Implementa una llamada a la API para que cada vez que se inicia el juego, se obtenga una palabra aletória

// 2. Fíjate que la función getPuzzle tiene un parámetro, que indica el número de palabras a obtener. Usa el valor de dicho parámetro 
   // para hacer la petición a la API con el número de palabras deseados.