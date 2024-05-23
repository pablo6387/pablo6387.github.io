

function validar(){
    const regExpNombre = /^[A-Z ]+$/i;
    const regExpMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('mail');
    const telefono = document.getElementById('telefono');
    const mensaje = document.getElementById('mensaje');


    if (nombre.value == "" || nombre.value.length>40 || !regExpNombre.test(nombre.value)){
        console.log ("error");
    }

    if (email.value == "" || email.value.length>40 || !regExpMail.test(email.value)){
        console.log ("error");
    }

    return false;
}