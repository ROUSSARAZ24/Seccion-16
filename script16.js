function validarFormulario(){
    let Nombre=document.getElementById("Nombre").value;
    if(Nombre==""){
        alert("Todos los campos son obligatorios. ");
        return false;
        }        
        return true;
        }
    

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
    }