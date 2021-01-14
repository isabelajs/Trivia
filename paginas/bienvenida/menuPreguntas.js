//obtengo el nombre de usuario que fue guardado en el localStore
let user = localStorage.getItem("username");


//obtengo la etiqueta titulo
const titulo = document.getElementsByClassName("title")[0];


//concateno el nombre de usuario al titulo
titulo.textContent += ` ${user}!!`;




  

