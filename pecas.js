var listaDePecas = ["Filtro de Ar", "Motor", "Amortecedor"]

if (listaDePecas.length < 10) {

    // se tiver menos do que 10, é possível cadastrar mais peças
    console.log("É possível cadastrar mais peças.")
} else {

    // se tiver mais que 10, não é possível cadastrar mais peças
    console.log("Não é possível cadastrar mais peças nessa lista.")
}

let peso = 50;
if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g.")
} else {
    console.log("A peça possui peso adequado.")
}

let nomePeca = "Disco De Freio"
if (nomePeca.length > 3) { //verifica se a quantidade de caracteres é maior do que 3.
    console.log("Nome da peça está adequado para o cadastro.")
} else if (nomePeca.length == 0) { //verifica se a quantidade de caracteres é igual a 0.
    console.log("O nome da peça não pode ser vazio.")
} else {
    console.log("O nome deve ter mais de 3 caracteres.")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio.")

    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais de 3 caracteres.")

    default:
        console.log("Nome da peça está adequado.")
        break;
}