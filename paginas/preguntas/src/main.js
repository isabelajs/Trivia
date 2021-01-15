//obtengo las opciones de respuesta en un html colletion
let opciones = document.getElementsByClassName("opcion");

//obtengo el boton que me direcciona a la siguiente pregunta
let siguientePregunta = document.getElementById("nextQuestion");

//al boton le agrego la función actualizar pregunta
siguientePregunta.addEventListener("click",actualizarPregunta)

//direcciono al score
let score = document.getElementById("puntaje")

let puntaje = 0;
let indicePregunta =1;
const numeroPreguntas = 5;
let  timer = document.getElementById("timer")
let chronometer;
//creamos una variable para que guarde el boton seleccionado
var seleccionada;


let defectTime = 30;
let contador = defectTime;


//inicializar el timer despues de que la pagina esta cargada
setTimer()

// recorro cada una de las opciones
for (const opcion of opciones) { 
    //al clickear una opcion se va a evaluar si es cierto
    opcion.addEventListener("click", function(){evaluar(opcion)});
}


function evaluar(opcion){
    
    //si la variable seleccionada esta vacia se ejecute el codigo
    if(seleccionada == undefined){
        //le asigno a la variable la opcion que seleccione, para que no me permita el ciclo y no me deje seleccionar más opciones
        seleccionada = opcion

        clearInterval(chronometer)
        //si la opcion tiene la clase correcta se pinta de verde,sino de rojo
        //correcta
        if(opcion.classList.contains("correcta")) {
            opcion.style.background = "lightgreen";
            puntaje += 200;
            score.textContent = puntaje.toString()
        } 
        //no es correcta
        else{
            opcion.style.background = "lightsalmon"
        }
    }

}

function actualizarPregunta(byTimer=false){

    //controlo el boton de siguiente al preguntar si la variable contiene algun valor(en esta caso si ya le dio click a algo)
    if(seleccionada !== undefined || byTimer==true){

        clearInterval(chronometer)

        contador = defectTime;
        timer.textContent = contador;

        setTimer()
        //si el indice de la pregunta es menor que el numero de preguntas, se cambian las pantallas de las preguntas
        if (indicePregunta < numeroPreguntas){
            //obtengo la pregunta actual
            let preguntaActual = document.getElementById(indicePregunta);
            //le agrego a mi pregunta actual la clase hidden para que se oculte
            preguntaActual.classList.add("hidden");

            //subo el indice de la pregunta
            indicePregunta++

            //obtengo mi siguiente pregunta
            let preguntaNueva = document.getElementById(indicePregunta);
            //remuevo en la lista de clases hidden en la nueva pregunta
            preguntaNueva.classList.remove("hidden")

            //obtengo la locación del contador
            let contador = document.getElementById("contador")
            //le asigno el valor al contador de acuerdo al indice de pregunta que estamos
            contador.textContent = indicePregunta
            //reasigno la variable para que el ciclo pueda volver a ejecutarse
            seleccionada = undefined;
        }
        //enviar a la html de resultados
        else{
            //guardo el puntaje final para usarlo en la pagina de resultados
            localStorage.setItem("puntajeFinal",score.textContent);
            location.href = "../score/index.html";
        }
    }
}



function setTimer(){

    chronometer = setInterval(() => {
        contador--
        timer.textContent = contador;


        if(contador==0){
            timer.textContent = contador;
            clearInterval(chronometer);
            actualizarPregunta(true);
      
        }

    }, 1000);


}
