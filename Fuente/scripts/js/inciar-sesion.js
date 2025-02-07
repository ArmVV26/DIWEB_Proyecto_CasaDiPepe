// Selecciono el formulario
const form = document.querySelector(".inicio-formulario");

// Credenciales validas
const userValido = "usuario@example.com";
const passValida =  "12345";

// Obtenemos el evento submit del formulario
form.addEventListener("submit", (event) => {
    // Prevenimos que actue por defecto
    event.preventDefault();

    // Obtenemos los valores que ponemos en el formulario
    const correo = document.getElementById("correoUser").value;
    const pass = document.getElementById("passUser").value;

    // Comprobamos si los datos introducidos son iguales a los definidos arriba
    if (correo === userValido && pass === passValida) {
        window.location.href = "cuenta.html";
    } else {
        alert("Error - Usuario o contraseña incorrectos");
    }
});