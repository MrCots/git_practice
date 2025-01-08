function frasesmodelo() {
    let lineas = ["Solo con esfuerzo y consistencia conseguirás cumplir tus objetivos. No con negatividad.",
                  "No pierdas tiempo siendo negativo. Sé productivo. Pues de ello vendrá tu cambio.", 
                  "Tus sueños se cumplen con trabajo, no con culpa.",
                  "Que sea difícil no significa que sea imposible, que sea imposible no significa que vayas a rendirte.",
                  "Tu felicidad depende de la calidad de tus pensamientos"];

    const randomNumber = getRandomNumber(1, lineas.length);
    const randomPhrase = lineas[randomNumber - 1];

    return `Número aleatorio: ${randomNumber}, Frase: "${randomPhrase}"`;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(frasesmodelo());
