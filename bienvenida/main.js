//obtengo el boton por su clase
let button = document.getElementsByClassName("button")[0]
    //le agrego un evento click la funcion guardar nombre
    button.addEventListener("click",guardarNombre);



function guardarNombre(){
    //obtengo el valor del input mediante su clase
    let username = document.getElementsByClassName("name")[0].value;
    //guardo el nombre del usuario en el localStore
    localStorage.setItem("username",username)
    //redirecciono a la siguiente pagina
    location.href = "../menu-preguntas/index.html";
}