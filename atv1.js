const alunos = [
	{
		nome: 'Maysa',
		nota: 10,
		turma: '2B',
	},
	{
		nome: 'Ester',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Felipe',
		nota: 6,
		turma: '2B',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let {nota, nome} = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 7));