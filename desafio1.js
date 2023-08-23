

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para determinar o resultado com base na média
function determinarResultado(media) {
  if (media < 5) {
    return "REP";
  } else if (media >= 5 && media < 7) {
    return "REC";
  } else {
    return "APR";
  }
}

// Ler a entrada e calcular o resultado para cada caso
rl.on('line', (line) => {
  const media = parseFloat(line);
  
  // Determinar o resultado com base na média
  const resultado = determinarResultado(media);
  
  // Imprimir o resultado
  console.log(resultado);
})


