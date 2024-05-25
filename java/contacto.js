

function validar(){
    let result = "";
    let flag =false;
    const regExpNombre = /^[A-Z ]+$/i;
    const regExpMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const regExpTelefono = /^[0-9]+$/;
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('mail');
    const empresa = document.getElementById('empresa');
    const telefono = document.getElementById('telefono');
    const pais = document.getElementById('pais');
    const mensaje = document.getElementById('mensaje');
    result = document.createElement("p");


    if (nombre.value == "" || nombre.value.length>40 || !regExpNombre.test(nombre.value)){
        result.innerHTML += "Nombre: Es un campo obligatorio y no puede contener numeros o simbolos <br>";
        flag=true;
    }else{
        result.innerHTML += "Nombre: ";
        result.innerHTML += nombre.value;
        result.innerHTML += "<br>";
    }

    if (email.value == "" || email.value.length>40 || !regExpMail.test(email.value)){
        result.innerHTML += "E-Mail: Es un campo obligatorio y debe tener un formato valido de direccion de correo<br>";
        flag=true;
    }else{
        result.innerHTML += "E-Mail: ";
        result.innerHTML += email.value;
        result.innerHTML += "<br>";
    }

    result.innerHTML += "Empresa/Negocio/Institucion: ";
    result.innerHTML += empresa.value;
    result.innerHTML += "<br>";

    if (telefono.value && (!regExpTelefono.test(telefono.value) || telefono.value.length>15)){
        result.innerHTML += "Telefono: Solo debe contener numeros<br>";
        flag=true;
    }else{
        result.innerHTML += "Telefono: ";
        result.innerHTML += telefono.value;
        result.innerHTML += "<br>";
    }

    result.innerHTML += "Pais: ";
    result.innerHTML += pais.options[pais.selectedIndex].text;
    result.innerHTML += "<br>";

    if (mensaje.value == "" || mensaje.value.length>300){
        result.innerHTML += "Mensaje: Es un campo obligatorio<br>";
        flag=true;
    }else{
        result.innerHTML += "Mensaje: ";
        result.innerHTML += mensaje.value;
        result.innerHTML += "<br>";
    }
    document.getElementById("div-res").innerHTML="";
    
    
    if (flag){        
        document.getElementById("div-res").appendChild(result);
        result.innerHTML += "Su mensaje no fue enviado, revise los datos mal cargados";
        return false
    }else{
        result.innerHTML += "Su mensaje fue enviado con exito";
        document.getElementById("div-res").appendChild(result);
        return true;}
}