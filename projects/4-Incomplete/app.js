/* In this project we will calculate the correlatives of the subjects of a student.
    * The correlatives are the grades of the subjects that are related to the subject of the student.
    * In order to course a subject, you need to approve the correlatives that are related to the subject.
    * If you have approved all the correlatives, you can course the subject.
    * We are going to read a JSON file (materias.json) that contains the subjects and the correlatives. 
    * We will use the JSON.parse() method to convert the JSON string into a JavaScript object.
    * We will use the forEach() method to iterate through the object.
    * We will use the prompt() method to ask the user to enter the name of the subject.
    * We will use the if() statement to check if the subject is in the object.
    * If the subject is in the object, we will use the forEach() method to iterate through the correlatives.
    * We are going to create a new array that contains the correlatives of a subject. */
// Import the local JSON file 'materias.json' as data
const MAT = [
    {
      "name": "Seminario de Ingenieria en Informatica I",
      "id": 75.71,
      "credits": 3,
      "correlatives": [75.07],
      "obligatoria":false
    },
    {
      "name": "Seminario de Ingenieria en Informatica II",
      "id": 75.72,
      "credits": 3,
      "correlatives": [75.06, 75.44],
      "obligatoria":false
    },
    {
      "name": "Idioma Portugues (*)",
      "id": 78.05,
      "credits": 4,
      "correlatives": [0],
      "obligatoria":false
    },
    {
      "name": "Idioma Italiano (*)",
      "id": 78.04,
      "credits": 4,
      "correlatives": [0],
      "obligatoria":false
    },
    {
      "name": "Idioma Frances (*)",
      "id": 78.03,
      "credits": 4,
      "correlatives": [0],
      "obligatoria":false
    },
    {
      "name": "Idioma Aleman (*)",
      "id": 78.02,
      "credits": 4,
      "correlatives": [0],
      "obligatoria":false
    },
    {
      "name": "Idioma Ingles (*)",
      "id": 78.01,
      "credits": 4,
      "correlatives": [0],
      "obligatoria":false
    },
    {
      "name": "Arquitectura de Software",
      "id": 75.73,
      "credits": 4,
      "correlatives": [75.07 , 75.09],
      "obligatoria":false
    },
    {
      "name": "Sistemas Multimediales",
      "id": 75.64,
      "credits": 4,
      "correlatives": [66.74 , 75.74],
      "obligatoria":false
    },
    {
      "name": "Taller de Desarrollo de Proyectos III",
      "id": 75.55,
      "credits": 4,
      "correlatives": [75.46 , 75.47  , 75.48],
      "obligatoria":false
    },
    {
      "name": "Tecnicas de Produccion de Software III",
      "id": 75.54,
      "credits": 4,
      "correlatives": [75.48 , 75.53],
      "obligatoria":false
    },
    {
      "name": "Tecnicas de Produccion de Software II",
      "id": 75.53,
      "credits": 4,
      "correlatives": [75.51],
      "obligatoria":false
    },
    {
      "name": "Tecnicas de Produccion de Software I",
      "id": 75.51,
      "credits": 4,
      "correlatives": [75.15 , 75.52],
      "obligatoria":false
    },
    {
      "name": "Calidad en Desarrollo de Sistemas",
      "id": 75.48,
      "credits": 4,
      "correlatives": [75.45],
      "obligatoria":false
    },
    {
      "name": "Teoria de Lenguaje",
      "id": 75.31,
      "credits": 4,
      "correlatives": [75.41],
      "obligatoria":false
    },
    {
      "name": "Recursos Humanos",
      "id": 71.44,
      "credits": 4,
      "correlatives": "+144 credits",
      "obligatoria":false
    },
    {
      "name": "Circuitos de Informacion en la Empresa",
      "id": 71.42,
      "credits": 4,
      "correlatives": [71.46],
      "obligatoria":false
    },
    {
      "name": "Estructura Economica Argentina",
      "id": 71.18,
      "credits": 4,
      "correlatives": [0],
      "obligatoria":false
    },
    {
      "name": "Simulacion de Sistemas de Control",
      "id": 66.55,
      "credits": 4,
      "correlatives": [66.18],
      "obligatoria":false
    },
    {
      "name": "Teoria de la Informacion y Codificacion",
      "id": 66.24,
      "credits": 4,
      "correlatives": [66.74 , 66.75 , 66.70],
      "obligatoria":false
    },
    {
      "name": "Fisica III D",
      "id": 62.15,
      "credits": 4,
      "correlatives": [61.08 , 62.03],
      "obligatoria":false
    },
    {
      "name": "Mecanica Racional",
      "id": 62.11,
      "credits": 4,
      "correlatives": [61.10 , 62.01],
      "obligatoria":false
    },
    {
      "name": "Sistemas Distribuidos II",
      "id": 75.63,
      "credits": 4,
      "correlatives": [75.74],
      "obligatoria":false
    },
    {
      "name": "Tecnicas de Programacion Concurrente II",
      "id": 75.62,
      "credits": 4,
      "correlatives": [75.59],
      "obligatoria":false
    },
    {
      "name": "Evaluacion de Proyectos y Manejo de Riesgos",
      "id": 75.58,
      "credits": 4,
      "correlatives": [75.46 , 75.48],
      "obligatoria":false
    },
    {
      "name": " Modelos de Proceso de Desarrollo",
      "id": 75.57,
      "credits": 4,
      "correlatives": [75.46 , 75.48],
      "obligatoria":false
    },
    {
      "name": "Sistemas de Programacion no convencional de Robots",
      "id": 75.7,
      "credits": 6,
      "correlatives": [75.50],
      "obligatoria":false
    },
    {
      "name": "Sistemas Automaticos de Diagnostico y Deteccion de Fallas II ",
      "id": 75.69,
      "credits": 6,
      "correlatives": [75.67],
      "obligatoria":false
    },
    {
      "name": "Introduccion a los Sistemas Inteligentes",
      "id": 75.5,
      "credits": 6,
      "correlatives": [61.09 , 71.14],
      "obligatoria":false
    },
    {
      "name": "Analisis Numerico II A",
      "id": 75.38,
      "credits": 6,
      "correlatives": [75.52],
      "obligatoria":false
    },
    {
      "name": "Teoria de Algoritmos II",
      "id": 75.3,
      "credits": 6,
      "correlatives": [75.29],
      "obligatoria":false
    },
    {
      "name": "Simulacion",
      "id": 75.26,
      "credits": 6,
      "correlatives": [61.09],
      "obligatoria":false
    },
    {
      "name": "Lenguajes de Programacion",
      "id": 75.16,
      "credits": 6,
      "correlatives": [75.14],
      "obligatoria":false
    },
    {
      "name": "Lenguajes Formales",
      "id": 75.14,
      "credits": 6,
      "correlatives": [61.09],
      "obligatoria":false
    },
    {
      "name": "Ingenieria Economica",
      "id": 71.46,
      "credits": 6,
      "correlatives": "+144 credits",
      "obligatoria":false
    },
    {
      "name": "Analisis y Resolucion de Problemas",
      "id": 71.41,
      "credits": 6,
      "correlatives": [71.15],
      "obligatoria":false
    },
    {
      "name": "Modelos y Optimizacion III",
      "id": 71.2,
      "credits": 6,
      "correlatives": [71.15],
      "obligatoria":false
    },
    {
      "name": "Modelos y Optimizacion II",
      "id": 71.15,
      "credits": 6,
      "correlatives": [61.09 , 71.14],
      "obligatoria":false
    },
    {
      "name": "Informacion en las Organizaciones",
      "id": 71.13,
      "credits": 6,
      "correlatives": [71.12],
      "obligatoria":false
    },
    {
      "name": "Estructura de las Organizaciones",
      "id": 71.12,
      "credits": 6,
      "correlatives": "+60 credits",
      "obligatoria":false
    },
    {
      "name": "Fundamentos Matematicos de la Vision en Robotica",
      "id": 67.61,
      "credits": 6,
      "correlatives": [61.08 , 75.07],
      "obligatoria":false
    },
    {
      "name": "Procesos Estocasticos",
      "id": 66.75,
      "credits": 6,
      "correlatives": [61.03 , 61.09],
      "obligatoria":false
    },
    {
      "name": "Señales y Sistemas",
      "id": 66.74,
      "credits": 6,
      "correlatives": [61.09 , 66.06],
      "obligatoria":false
    },
    {
      "name": "Criptografia y Seguridad Informatica",
      "id": 66.69,
      "credits": 6,
      "correlatives": [75.43],
      "obligatoria":false
    },
    {
      "name": "Redes Neuronales",
      "id": 66.63,
      "credits": 6,
      "correlatives": [66.74 , 66.75],
      "obligatoria":false
    },
    {
      "name": "Sistemas Biologicos",
      "id": 66.49,
      "credits": 6,
      "correlatives": [66.74 , 63.01],
      "obligatoria":false
    },
    {
      "name": "Procesamiento de Imagenes",
      "id": 66.47,
      "credits": 6,
      "correlatives": [61.09 , 66.74],
      "obligatoria":false
    },
    {
      "name": "Procesamiento del Habla",
      "id": 66.46,
      "credits": 6,
      "correlatives": [66.74],
      "obligatoria":false
    },
    {
      "name": "Tecnica Digital Avanzada",
      "id": 66.35,
      "credits": 6,
      "correlatives": [61.07 , 66.17],
      "obligatoria":false
    },
    {
      "name": "Robotica",
      "id": 66.32,
      "credits": 6,
      "correlatives": [62.11 , 66.18],
      "obligatoria":false
    },
    {
      "name": "Arquitecturas Paralelas",
      "id": 66.26,
      "credits": 6,
      "correlatives": [66.20],
      "obligatoria":false
    },
    {
      "name": "Organizacion de Computadoras",
      "id": 66.2,
      "credits": 6,
      "correlatives": [66.70],
      "obligatoria":false
    },
    {
      "name": "Circuitos de Pulsos",
      "id": 66.19,
      "credits": 6,
      "correlatives": [66.08 , 66.70],
      "obligatoria":false
    },
    {
      "name": "Teoria de Control I",
      "id": 66.18,
      "credits": 6,
      "correlatives": [66.74],
      "obligatoria":false
    },
    {
      "name": "Sistemas Digitales",
      "id": 66.17,
      "credits": 6,
      "correlatives": [66.70],
      "obligatoria":false
    },
    {
      "name": "Laboratorio de Microcomputadoras",
      "id": 66.09,
      "credits": 6,
      "correlatives": [66.02 , 66.70],
      "obligatoria":false
    },
    {
      "name": "Laboratorio",
      "id": 66.02,
      "credits": 6,
      "correlatives": [62.03],
      "obligatoria":false
    },
    {
      "name": "Estatica y Resistencia de Materiales B",
      "id": 64.05,
      "credits": 6,
      "correlatives": [61.03 , 61.08],
      "obligatoria":false
    },
    {
      "name": "Quimica",
      "id": 63.01,
      "credits": 6,
      "correlatives": [0],
      "obligatoria":false
    },
    {
      "name": "Analisis Funcional",
      "id": 61.19,
      "credits": 6,
      "correlatives": [61.10],
      "obligatoria":false
    },
    {
      "name": "Ecuaciones Diferenciales Ordinarias",
      "id": 61.18,
      "credits": 6,
      "correlatives": [61.03 , 61.08],
      "obligatoria":false
    },
    {
      "name": "Analisis matematico II A",
      "id": 61.1,
      "credits": 6,
      "correlatives": [61.03 , 61.08],
      "obligatoria":false
    },
    {
      "name": "Matematica Discreta",
      "id": 61.07,
      "credits": 6,
      "correlatives": [0],
      "obligatoria":false
    },
    {
      "name": "Organizacion de la Implantacion y el Mantenimiento",
      "id": 75.56,
      "credits": 6,
      "correlatives": [75.46  , 75.48],
      "obligatoria":false
    },
    {
      "name": "Teoria de Algoritmos I",
      "id": 75.29,
      "credits": 6,
      "correlatives": [75.41],
      "obligatoria":false
    },
    {
      "name": "Materiales Industriales I",
      "id": 72.01,
      "credits": 6,
      "correlatives": [63.01 , 64.05],
      "obligatoria":false
    },
    {
      "name": "Sistemas Graficos",
      "id": 66.71,
      "credits": 6,
      "correlatives": [75.41 , 61.03 , 61.08],
      "obligatoria":false
    },
    {
      "name": "Circuitos Electronicos I",
      "id": 66.08,
      "credits": 8,
      "correlatives": [62.15 , 66.02 , 66.06],
      "obligatoria":false
    },
    {
      "name": "Analisis de Circuitos",
      "id": 66.06,
      "credits": 10,
      "correlatives": [61.10 , 62.03],
      "obligatoria":false
    },
    {
      "name": "Taller de Programacion II",
      "id": 75.52,
      "credits": 4,
      "correlatives": [75.07 , 75.42],
      "obligatoria":true
    },
    {
      "name": "Taller de Programacion I",
      "id": 75.42,
      "credits": 4,
      "correlatives": [66.70 , 75.41],
      "obligatoria":true
    },
    {
      "name": "Legislacion y Ejercicio Profesional de la Ingenieria en Informatica",
      "id": 71.4,
      "credits": 4,
      "correlatives": "+140 credits",
      "obligatoria":true
    },
    {
      "name": "Introduccion al Pensamiento cientifico",
      "id": 40,
      "credits": 4,
      "correlatives": [],
      "obligatoria":true
    },
    {
      "name": "Introduccion al conocimiento de la sociedad y el Estado",
      "id": 24,
      "credits": 4,
      "correlatives": [],
      "obligatoria":true
    },
    {
      "name": "Trabajo Profesional",
      "id": 75.99,
      "credits": 6,
      "correlatives": "+140 credits",
      "obligatoria":true
    },
    {
      "name": "Taller de Desarrollo de proyectos II",
      "id": 75.47,
      "credits": 6,
      "correlatives": [75.44 , 75.45],
      "obligatoria":true
    },
    {
      "name": "Administracion y Control de Proyectos Informaticos II",
      "id": 75.46,
      "credits": 6,
      "correlatives": [75.44],
      "obligatoria":true
    },
    {
      "name": "Taller de Desarrollo de proyectos I",
      "id": 75.45,
      "credits": 6,
      "correlatives": [75.10],
      "obligatoria":true
    },
    {
      "name": "Administracion y Control de Proyectos Informaticos I",
      "id": 75.44,
      "credits": 6,
      "correlatives": [75.10],
      "obligatoria":true
    },
    {
      "name": "Introduccion a los Sistemas Distribuidos",
      "id": 75.43,
      "credits": 6,
      "correlatives": [75.08],
      "obligatoria":true
    },
    {
      "name": "Algoritmos y Programacion II",
      "id": 75.41,
      "credits": 6,
      "correlatives": [75.40],
      "obligatoria":true
    },
    {
      "name": "Algoritmos y Programacion I",
      "id": 75.4,
      "credits": 6,
      "correlatives": [0],
      "obligatoria":true
    },
    {
      "name": "Base de Datos ",
      "id": 75.15,
      "credits": 6,
      "correlatives": [75.06 , 75.09],
      "obligatoria":true
    },
    {
      "name": "Analisis Numerico I",
      "id": 75.12,
      "credits": 6,
      "correlatives": [61.03 , 61.08 , 75.41],
      "obligatoria":true
    },
    {
      "name": "Tecnicas de Diseño",
      "id": 75.1,
      "credits": 6,
      "correlatives": [75.08 , 75.09],
      "obligatoria":true
    },
    {
      "name": "Analisis de la Informacion",
      "id": 75.09,
      "credits": 6,
      "correlatives": [75.07],
      "obligatoria":true
    },
    {
      "name": "Sistemas Operativos",
      "id": 75.08,
      "credits": 6,
      "correlatives": [66.70],
      "obligatoria":true
    },
    {
      "name": "Algoritmos y Programacion III",
      "id": 75.07,
      "credits": 6,
      "correlatives": [75.41],
      "obligatoria":true
    },
    {
      "name": "Organizacion de Datos",
      "id": 75.06,
      "credits": 6,
      "correlatives": [61.08 , 75.41],
      "obligatoria":true
    },
    {
      "name": "Modelos y Optimizacion I",
      "id": 71.14,
      "credits": 6,
      "correlatives": [62.03 , 61.08 , 75.41],
      "obligatoria":true
    },
    {
      "name": "Estructura del Computador",
      "id": 66.7,
      "credits": 6,
      "correlatives": [62.03 , 75.41],
      "obligatoria":true
    },
    {
      "name": "Probabilidad y Estadistica B",
      "id": 61.09,
      "credits": 6,
      "correlatives": [61.03 , 61.08],
      "obligatoria":true
    },
    {
      "name": "Quimica",
      "id": 5,
      "credits": 6,
      "correlatives": [],
      "obligatoria":true
    },
    {
      "name": "Fisica",
      "id": 3,
      "credits": 6,
      "correlatives": [],
      "obligatoria":true
    },
    {
      "name": "Fisica II A",
      "id": 62.03,
      "credits": 8,
      "correlatives": [61.03 , 62.01],
      "obligatoria":true
    },
    {
      "name": "Algebra II A",
      "id": 61.08,
      "credits": 8,
      "correlatives": [0],
      "obligatoria":true
    },
    {
      "name": "Analisis matematico II A",
      "id": 61.03,
      "credits": 8,
      "correlatives": [0],
      "obligatoria":true
    },
    {
      "name": "Fisica I A ",
      "id": 62.01,
      "credits": 8,
      "correlatives": [0],
      "obligatoria":true
    },
    {
      "name": "Analisis Matematico A",
      "id": 66,
      "credits": 9,
      "correlatives": [],
      "obligatoria":true
    },
    {
      "name": "Algebra A",
      "id": 62,
      "credits": 9,
      "correlatives": [],
      "obligatoria":true
    },
    {
      "name": "CBC",
      "id": 0,
      "credits": 38,
      "correlatives": [66, 62, 3, 5, 24, 40],
      "obligatoria":true
    }
   ]

function buscarPorId(id){
    return MAT.find(materia => materia.id === id)
}
function pathToMateria(id){
    // Esta funcion debe de mostrarme todas las materias que debo de cursar primero antes de poder anotarme a la buscada.
    // Para eso, traeremos el objeto perteneciente a la materia. Una vez traido el objeto, haremos dos bucles anidados.
    // Primero que nada, cada objeto contiene una propiedad ID que lo identifica del resto.
    // A su vez, cada objeto contiene una propiedad CORRELATIVAS que contiene la ID de dichas correlativas.
    // Entonces, la primera busqueda identificara las correlativas inmediatas de la materia.
    // Dichas correlativas inmediatas seran pusheadas a un array.
    // Por cada correlativa inmediata, se saltara a dicho objeto y se buscaran SUS propias correlativas inmediatas,  
    // De modo que estamos buscando las correlativas no inmediatas a la materia a cursar.
    // Haremos esto hasta que las materias tengan por correlativas:[0], que seria el CBC.
    const MATERIA_A_CURSAR = buscarPorId(id)
    console.log("Materia a Cursar -->\n   "+MATERIA_A_CURSAR.id)
    aCorrelativas = buscarPorId(id).correlatives
    // * Aca estaba el codigo que funcionaba a medias.
    bucarCorrelativas(aCorrelativas)
    aCorrelativas.reverse()
    console.log("Correlativas --> ")
    for (const i of aCorrelativas) {
            if (i==='CBC') {
                console.log("   "+i)
                continue
            }
            console.log("   "+i)
        }
    return "Funcion terminada"
}
function bucarCorrelativas(array){
    for (const i of array) {
        let correlativa = buscarPorId(i)
            for (const it of correlativa.correlatives) {
                if(it !== 0 && it!==array[array.length -1]){
                array.push(it)   
                } else if(it === 0){
                    array.push("CBC")
                }
            }
        if (array[array.length -1] === 'CBC') {
                break
    }
    return array
}}
/* *Ahora haremos lo inverso
 * * A partir de aprobar una materia, veremos cuales tenemos la posibilidad de cursar. 
 */
function materiaAprobada(id){
  // ! Las materias que contengan en su array [correlativas] a MATERIA_APROBADA.id, deben mostrarse.
  const MATERIA_APROBADA = buscarPorId(id)
  aId_Correlativas = [] // * El array que contiene el valor de la propiedad 'id'+'correlatives' de todas las materias.
  for (const it of MAT) {
    let aInfo = []
    aInfo.push(it.id)
    aInfo.push(it.correlatives)
    aId_Correlativas.push(aInfo)
  }
  const IS_ARRAY = i => Object.prototype.toString.call(i) === '[object Array]' 
  // * IS_ARRAY = Evalua si el objeto 'i' es un Array
  const SOME = array => array.some(element => element === MATERIA_APROBADA.id) 
  // * ^^^ SOME = Evalua si el objeto contiene un algun elemento igual a MATERIA_APROBADA.id
  console.log("==============")
  var match = []
  for (const element of aId_Correlativas) {
    i = element[1]
    if (IS_ARRAY(i) && SOME(i)) {
      match.push(element[0])
    }
  }
  console.log(`Si aprobaste ${buscarPorId(id).name}, podes cursar: `)
  for (const iterator of match) {
    var obligatoria = buscarPorId(iterator).obligatoria === true ? "OBLIGATORIA":"ELECTIVA"
    console.log(`--> ${buscarPorId(iterator).name}, la cual es ${obligatoria}`)
  }
  const MAP = match.map(i => buscarPorId(i))
  return MAP
}
console.log(materiaAprobada(0))