function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: `Maysa`,
    idade: 18
}

const pessoa2 = { 
    nome: `Ester`,
    idade: 8
}
const animal = {
    nome: `Totó`,
    idade: 12,
    raca: `Yorkshire`
};

console.log(calculaIdade.call(pessoa1, 12));

// posso usar o apply mas com []