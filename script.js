document.getElementById('miFormulario').addEventListener('submit',validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const usuarioError = document.getElementById('usuarioError');

    const nombre = document.getElementById('nombre').value;
    const nombreError = document.getElementById('nombreError');

    const contrasena = document.getElementById('contrasena').value;
    const contrasenaError = document.getElementById('contrasenaError');

    const repetirContrasena = document.getElementById('repetirContrasena').value;
    const repetirContrasenaError = document.getElementById('repetirContrasenaError');

    let esValido = true;


    const usuarioRegex = /^[a-zA-Z0-9_]{4,16}$/;
    const nombreRegex = /^[a-zA-Z]+$/;
    const passRegex = /^[a-zA-Z0-9]{8,16}$/;

    usuarioError.textContent = '';
    nombreError.textContent = '';
    contrasenaError.textContent = '';
    repetirContrasenaError.textContent = '';


    // Validar Usuario
    if(usuario === ''){
        usuarioError.textContent ='El nombre de usuario vacio es obligatorio';
        esValido = false;
    }else if(!usuarioRegex.test(usuario)){
        usuarioError.textContent = 'El nombre de usuario debe tener entre 4 y 16 digitos y solo puede contener letras, números y guion bajo.';
        esValido = false;
    }
    
    // Validar Nombre
    if(nombre === ''){
        nombreError.textContent ='El nombre vacio es obligatorio';
        esValido = false;
    }else if(!nombreRegex.test(nombre)){
        nombreError.textContent = 'El nombre solo puede contener letras.';
        esValido = false;
    }

    // Validar Contraseña
    if(contrasena === ''){
        contrasenaError.textContent ='La contraseña es obligatoria, completar';
        esValido = false;
    }else if(!passRegex.test(contrasena)){
        contrasenaError.textContent = 'La contraseña solo acepta de 8 a 16 caracteres y debe contener números y letras.';
        esValido = false;
    }

    //  Validar igualdad de Contraseñas
    if(contrasena !== repetirContrasena){
        repetirContrasenaError.textContent ='las contraseñas son distintas';
        esValido = false;
    }

    if (esValido == true) {
        alert('formulario valido')
    }
}
