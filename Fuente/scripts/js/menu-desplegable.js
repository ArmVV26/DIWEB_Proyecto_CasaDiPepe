// Este Script lo creo para hacer un menu desplegable
/*
    Selecciono el elemento con id "menu-desp" y le indico que cuando haga clic,
        a la clase ".enlaces" se le añada la clase "activo"
*/
document.getElementById("menu-desp").addEventListener("click", function() {
    document.querySelector('.enlaces').classList.toggle('activo');
});