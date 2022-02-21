let n = parseFloat(prompt('Quantos números deseja executar?'));

let array = [];
let numeros;
let potencia;
let raizQuadrada;
let raizCubica;
let adicao = 0;

for (let i = 1; i <= n; i++) {
    numeros = parseFloat(prompt('Digite os números: '));
    array.push(numeros);
}
console.log(array);

for (const numero of array) {
    adicao += numero;
}

let media = adicao / array.length;

console.log(`A soma é: ${adicao}
A média é: ${media}`);

for (let y of array) {
    potencia = Math.pow(y, 2)
    console.log(`A potência é: ${potencia}`)
}

for (let y of array) {
    raizQuadrada = Math.sqrt(y)
    console.log(`A raiz quadrada é: ${raizQuadrada}`)
}

for (let y of array) {
    raizCubica = Math.cbrt(y)
    console.log(`À raiz cubica é: ${raizCubica}`)
}