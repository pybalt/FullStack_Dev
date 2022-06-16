const a = [ 23, 45, 32 ];

const b = [ 12, 67, 75 ];

const encontrarGanador = function(a, b, callback) {
	let puntosPrimerParticipante = 0;

	let segundoParticipante = 0;

	for (let i = 0; i < 3; i++) {
		if (a[i] > b[i]) {
			puntosPrimerParticipante++;
		} else if (a[i] < b[i]) {
			segundoParticipante++;
		}
	}

	ganador = 
		puntosPrimerParticipante > segundoParticipante
		? `participante A con ${puntosPrimerParticipante} puntos` 
		: `participante B con ${segundoParticipante} puntos`;
	
	callback(puntosPrimerParticipante,segundoParticipante,ganador);
	return '\nFelicitaciones al ganador\n';
}; // primera etapa

const conTexto = (puntosPrimerParticipante, segundoParticipante, ganador) =>
{
	return console.log(`\nLos puntos del participante A son ${puntosPrimerParticipante}
y los puntos del participante B son ${segundoParticipante}
El ganador es ${ganador}`);
}
const conTabla = (puntosPrimerParticipante, segundoParticipante, ganador)=>
{
	return console.table({
		participanteA: puntosPrimerParticipante,
		participanteB: segundoParticipante,
		Ganador: ganador
	});
} 
const both = (puntosPrimerParticipante, segundoParticipante, ganador)=>
{
	array = [puntosPrimerParticipante,segundoParticipante,ganador];
	conTexto.apply(null, array), 
	conTabla.apply(null, array);
}
console.log(encontrarGanador(a, b, both));