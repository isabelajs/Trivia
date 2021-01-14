//obtengo el boton por su clase
let button = document.getElementsByClassName("button")[0]
    //le agrego un evento click la funcion guardar nombre
    button.addEventListener("click",guardarNombre);



function guardarNombre(){
    //obtengo el valor del input mediante su clase
    let username = document.getElementsByClassName("name")[0].value;
    
    localStorage.setItem("username",username)
    
    //si el nombre esta vacio por favor rellene el espacio
    if(username==""){
        //alerto 
        alert("Por favor ingresa tu nombre");
    }else{
        //redirecciono a la siguiente pagina
        location.href = "./menuPreguntas.html";
    }   
        
}   