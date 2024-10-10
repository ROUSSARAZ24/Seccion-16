function validarFormulario(){
    let Nombre=document.getElementById("Nombre").value;
    if(Nombre==""){
        alert("Todos los campos son obligatorios. ");
        return false;
        }        
        return true;
    
    let email=document.getElementById("email").value;
    if(email==""){
        alert("Todos los campos son obligatorios. ");
        return false;
        }        
        return true;
    
        let imagendeperfil=document.getElementById("imagen").value;
    if(imagendeperfil==""){
        alert("Todos los campos son obligatorios. ");
        return false;
        }        
        return true;
    }
    

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
    }