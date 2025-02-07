/*
    En este script voy a hacer los eventos necesarios para:
        1.- Mostrar/Ocultar el menu secundario de la tienda.
        2.- Actulizar el boton de rango.
*/

// Script del menu secundario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-desp-sec").addEventListener("click", function() {
      document.querySelector(".enlaces-secundarios").classList.toggle("activo-sec");
    });
  });
  


// Con este codigo muetro el valor que se indica en el range
document.addEventListener("DOMContentLoaded", function () {
    let valor = document.getElementById("rango-precio");
    let mostrar = document.querySelector(".obtener-rango");

    mostrar.innerHTML = valor.value; 

    valor.oninput = function() {
        mostrar.innerHTML = this.value;
    }
});