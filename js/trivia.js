let correctAnswers = 0; // Respuestas correctas
// Todas las preguntas
const questions = [
	"1. Cual es la nacionalidad de Patri Boníssima?",
	'2. Que es la Pauliceia Desvairada?', 
	'3. Por qué Patri se mudó de país?',
	'4. Cual es la carrera que Patri estudia atualmente?',
	'5. En que año Patri ha llegado en Argentina?',
];
// Opciones posibles en el multiple choice
const options = [
	'Francia', 'Argentina', 'Brasil', // 1
	"Capital de Francia", 'Nombre de una calle', 'Ciudad Agitada', // 2
	'Para estudiar', ' Porque se puso en pareja', 'Para trabajar', // 3
	'Cine', 'Artes Multimediales', 'Música', // 4
	'2018', '2021', '2020', // 5
];
// Asigna preguntas y respuestas a elementos HTML
for(let i = 0; i < 15; i++) {
	if(i < 6) {
		$('#preg' + (i + 1)).text(questions[i]);
	}
	$('#respuesta' + (i + 1)).text(options[i]);
}
// Setea la respuesta 
function setAnswer(k) {
	if(k == 0) {
		// Incorrecto
		isCorrect = false;
	} else if(k == 1) {
		// Correcto
		isCorrect = true;
	}
}
function checkCorrect(q) {
	// Array de las tres opciones posibles en la pregunta actual
	let currentAnswers = [];
	// Mete las opciones en el array
	for(let i = 1; i <= 3; i++) {
		currentAnswers.push($('#res' + q + '-' + i));
	}
	// Si alguna opcion fue elegida
	if(currentAnswers[0].is(':checked') || currentAnswers[1].is(':checked') || currentAnswers[2].is(':checked')) {
		let currentCard = $('#bloque' + q); // Pregunta actual
		let nextCard = $('#bloque' + (q + 1)); // Siguiente pregunta
		// Si es correcta
		if(isCorrect) {
			// Suma una respuesta correcta
			correctAnswers++;
			console.log('CORRECTO');
		} else {
			console.log('INCORRECTO')
		}
		// Oculta la pregunta actual
		if(q < 6) {
			currentCard.addClass('d-none');
		}
		// Muestra la pregunta siguiente
		nextCard.removeClass('d-none');
		// Muestra la cantidad de respuestas 
		$('#respuestas-correctas').text('Correct answers: ' + correctAnswers + '/5');
	} else {
		// Si no se eligió ninguna opción
		alert('Por favor, elija una opción');
	}
}