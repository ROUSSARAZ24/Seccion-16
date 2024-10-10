function validarFormulario(){
    let Nombre=document.getElementById("Nombre").value.trim();
    let email=document.getElementById("email").value.trim();
    let imagen=document.getElementById("imagen").value.trim();
    if(Nombre==""|| email==""|| imagen==""){
        alert("Todos los campos son obligatorios. ");
        return false;
        }        
        return true;
        }
    
function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
    }