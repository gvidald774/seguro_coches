function validacionFormulario()
{
    
}

window.addEventListener("load",function()
{
    botonRadioPersona = document.getElementById("tipoPersona");
    botonRadioEmpresa = document.getElementById("tipoEmpresa");

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
})