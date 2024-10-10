
function validarFormulario(){
    let Nombre=document.getElementById("Nombre").value;
    let email=document.getElementById("email").value;
    let imagen=document.getElementById("imagen").value;
    if(Nombre==""|| email==""|| imagen==""){
        alert("Todos los campos son obligatorios...");
        return false;
    }
}
function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
    }