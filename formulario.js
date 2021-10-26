function validaDNI(dni)
{
    var listaLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var expresion = /^\d{8}[A-Z]$/;

    var resultado = false;

    if(expresion.test(dni))
    {
        var numero = dni.substring(0,8);
        var letra = dni.substring(8,9);
        if(listaLetras[numero%23] == letra)
        {
            resultado = true;
        }
    }

    return resultado;
}

// Validaciones. Seguramente haya una manera mejor de hacer esto porque todas las funciones son iguales.

function validaCIF(cif)
{
    var expresion = /^([ABCEFGHJNPQRSUVW])(\d{7})([0-9A-J])$/;
    
    var resultado = false;

    if(expresion.test(cif))
    {
        resultado = true;
    }
    // Por poner, comprobaciones ulteriores (los números pares, las letras han de coincidir, etcétera)
    return resultado;
}

function validaCP(cp)
{
    var expresion = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;

    var resultado = false;
    
    if(expresion.test(cp))
    {
        resultado = true;
    }

    // Cargar automáticamente lo de la provincia

    return resultado;
}

function validaTelefono(tlf)
{
    var expresion = /^((\+|00)34)?\d{9}$/;

    var resultado = false;

    if(expresion.test(tlf))
    {
        resultado = true;
    }

    return resultado;
}

function validaFecha(fecha)
{
    var expresion = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;

    var resultado = false;

    if(expresion.test(fecha))
    {
        resultado = true;
    }

    return resultado;
}

function validaMatricula(matricula)
{
    var expresion = /^([A-Z]{1-2}(\d{4})([A-Z]{0-2}))|(\d{4}([A-Z]{3}))$/;

    var resultado = false;

    if(expresion.test(matricula))
    {
        resultado = true;
    }
    
    return resultado;
}

function validacionFormulario()
{
    var error = [];
    resultado = false;
    
    if(contenidoPersona.className == "visible")
    {
        // DNI
        dni = document.getElementById("dni");
        if(dni.value != "")
        {
            if(!validaDNI(dni))
            {
                error.push("DNI incorrecto");
            }
        }
        else
        {
            error.push("Falta un DNI");
        }

        // Nombre
        nombre = document.getElementById("nombre");
        if(nombre.value == "")
        {
            error.push("Falta un nombre");
        }

        // Apellido1
        apellido1 = document.getElementById("apellido1");
        if(apellido1.value == "")
        {
            error.push("Falta el primer apellido");
        }
    }
    else if(contenidoEmpresa.className == "visible")
    {
        // CIF
        cif = document.getElementById("cif");
        if(cif.value != "")
        {
            if(!validaCIF(cif))
            {
                error.push("CIF incorrecto");
            }
        }
        else
        {
            error.push("Falta un CIF");
        }

        // Razón social
        razon_social = document.getElementById("razon_social");
        if(razon_social.value == "")
        {
            error.push("Falta la razón social");
        }
    }

    if (contenidoDireccion.className == "visible")
    {
        // Dirección
        direccion = document.getElementById("direccion");
        if(direccion.value == "")
        {
            error.push("Falta la dirección")
        }

        // Código postal
        cp = document.getElementById("cp");
        if(cp.value != "")
        {
            if(!validaCP(cp))
            {
                error.push("Código postal incorrecto");
            }
        }
        else
        {
            error.push("Falta el código postal");
        }

        // Provincia: Se rellena automáticamente a partir del código postal.

        // Municipio: Se rellena automáticamente a partir de la provincia.

        // Teléfono
        tlf = document.getElementById("telefono")
        {
            if(tlf.value != "")
            {
                if(!validaTelefono(tlf))
                {
                    error.push("Teléfono incorrecto");
                }
            }
            else
            {
                error.push("Falta el teléfono");
            }
        }
    }
    
    if (contenidoFechas.className == "visible")
    {
        // Validaciones de fecha
    }

    // Vehículo
    matricula = document.getElementById("matricula");
    if(matricula.value != "")
    {
        if(!validaMatricula(matricula))
        {
            error.push("Matrícula incorrecta");
        }
    }
    else
    {
        error.push("Falta la matrícula");
    }

    f_mat = document.getElementById("f_matricula");
    if(f_mat.value != "")
    {
        if(!validaFecha(f_mat))
        {
            error.push("Fecha de matriculación incorrecta");
        }
    }
    else
    {
        error.push("Falta fecha de matriculación");
    }

    if (document.getElementById("marca").value == "")
    {
        error.push("Falta la marca");
    }
    if (document.getElementById("modelo").value == "")
    {
        error.push("Falta el modelo");
    }
    if (document.getElementById("cilindrada").value == "")
    {
        error.push("Falta la cilindrada");
    }
    
    n_puertas = document.getElementById("n_puertas"); // Hay que comprobar que sea número, zagal.
    if (n_puertas.value != "")
    {
        if (n_puertas.value > 5 || n_puertas.value < 2)
        {
            error.push("Nº de puertas incorrecto");
        }
    }
    else
    {
        error.push("Falta el nº de puertas");
    }

    // Más validaciones

    if(error.length > 0)
    {
        imprime_errores(error);
    }
    else
    {
        vacia_errores();
    }

    return resultado;
}

function imprime_errores(errores)
{
    var p = document.getElementById("errores");
    p.innerHTML = "Errores: ";
    p.innerHTML += "<ul>";
    for(i = 0; i < errores.length; i++)
    {
        p.innerHTML +="<li>"+errores[i]+"</li>";
    }
    p.innerHTML += "</ul>";
}

function vacia_errores(errores)
{
    var p = document.getElementById("errores");
    p.innerHTML = "";
}

window.addEventListener("load",function()
{
    botonRadioPersona = document.getElementById("tipoPersona");
    botonRadioEmpresa = document.getElementById("tipoEmpresa");
    botonSubmit = document.getElementById("botonSubmit");

    contenidoPersona = document.getElementById("contenedorPersona");
    contenidoEmpresa = document.getElementById("contenedorEmpresa");
    contenidoDireccion = document.getElementById("contenedorDireccion");
    contenidoFechas = document.getElementById("contenedorFechas");

    botonRadioPersona.onclick = function()
    {
        contenidoEmpresa.className = "oculto";
        contenidoPersona.className = "visible";
        contenidoDireccion.className = "visible";
        contenidoFechas.className = "visible";
    }

    botonRadioEmpresa.onclick = function()
    {
        contenidoEmpresa.className = "visible";
        contenidoPersona.className = "oculto";
        contenidoFechas.className = "oculto";
        contenidoDireccion.className = "visible";
    }

    botonSubmit.onclick = function()
    {
        resultado = validacionFormulario();
        if(resultado)
        {
            // Hacer lo del JSON.
        }
        else
        {
            alert("Ha habido algunos errores.");
        }
    }

    selectProvincia = document.getElementById("provincia");
    selectMunicipio = document.getElementById("municipio");

    cp = document.getElementById("cp");
    
    if(validaCP())
    {
        selectProvincia.innerHTML = "";
        
    }

    selectProvincia.onclick = function()
    {
        selectMunicipio.innerHTML = "";
        for(i = 0; i < provincia[nombreprov].length; i++)
        {
            selectMunicipio.innerHTML+="<option>"+provincia[nombreprov][i]+"</option>";
        }
    }
})