document.getElementById('miFormulario').addEventListener('submit',validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;

    let esValido = true;



    const usuarioRegex = /^[a-zA-Z0-9_]{4,16}$/

    if(usuario === ''){
        usuarioError.textContent ='el nombre de usuario vacio es obligatorio';
        esValido = false;
    }else if(!usuarioRegex.test(usuario)){
        usuarioError.textContent = 'El nombre de usuario debe tener entre 4 y 16 digitos y solo pudee contener números y guion bajo.';
        esValido = false;
    }



    if (esValido == true) {
    alert('formulario valido')
    }

    console.log('hola');
}
