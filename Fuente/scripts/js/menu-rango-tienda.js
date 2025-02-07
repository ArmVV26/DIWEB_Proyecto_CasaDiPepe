// Con este codigo muetro el valor que se indica en el range
document.addEventListener("DOMContentLoaded", function () {
    let valor = document.getElementById("rango-precio");
    let mostrar = document.querySelector(".obtener-rango");

    mostrar.innerHTML = valor.value; 

    valor.oninput = function() {
        mostrar.innerHTML = this.value;
    }
});