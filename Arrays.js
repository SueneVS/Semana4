let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Cálculo da soma utilizando reduce
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("A soma de todos os elementos do array é:", soma);

// Filtragem dos números pares utilizando o método filter
let pares = numeros.filter(n => {
    return n % 2 === 0;
});

console.log("O array de números pares é:", pares);

// Criação do array de quadrados utilizando o método map
let quadrados = numeros.map(n => {
    return n * n;
});

console.log("O array de quadrados é:", quadrados);