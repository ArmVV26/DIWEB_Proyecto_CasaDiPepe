// Año actual y mes actual
let actualYear = new Date().getFullYear();
let actualMes = new Date().getMonth();
let diaSeleccionado = null; // Variable para almacenar el dia seleccionado

// Nombres de los meses
const nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Funcion que genera el calendario en funcion del mes y año
function generateCalendar() {
    // Actualiza el encabezado con el nombre del mes y año
    document.getElementById('mesYear').textContent = `${nombreMeses[actualMes]} ${actualYear}`;
    
    // Calculamos el primer, ultimo dia del mes y el total de dias
    const primerDia = new Date(actualYear, actualMes, 1);
    const ultimoDia = new Date(actualYear, actualMes + 1, 0);
    const totalDias = ultimoDia.getDate();
    
    const diaSemana = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    
    // Obtenemos la fecha actual para comparar (sin tener en cuenta la hora)
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Genero el contenido del calendario (que sera una tabla)
    let calendarHTML = '<table>';
    
    // Cabecera
    calendarHTML += '<thead><tr>';
    diaSemana.forEach(dayName => {
        calendarHTML += `<th>${dayName}</th>`;
    });
    calendarHTML += '</tr></thead>';
    
    // Body del mes
    calendarHTML += '<tbody><tr>';
    
    // Dia de la semana del primer dia del mes (%7 asegura que este dentro de una semana)
    let comienzoDia = (primerDia.getDay() + 6) % 7;
    
    // Relleno celdas vacias hasta llegar al primer dia del mes
    for (let i = 0; i < comienzoDia; i++) {
        calendarHTML += '<td class="celdas-vacias"></td>';
    }
    
    // Relleno los dias del mes
    for (let day = 1; day <= totalDias; day++) {
        // Si es el inicio de una nueva semana (y no es el primer dia) cerramos la fila e iniciamos otra.
        if ((comienzoDia + day - 1) % 7 === 0 && day !== 1) {
            calendarHTML += '</tr><tr>';
        }

        // Creamos la fecha que corresponde al dia que se esta generando
        let cellDate = new Date(actualYear, actualMes, day);
        cellDate.setHours(0, 0, 0, 0); 

        // Determinamos las clases que tendra la celda.
        // Si la fecha es anterior a hoy, le agregamos la clase "celdas-vacias".
        let clases = [];
        if (cellDate < hoy) {
            clases.push("celdas-vacias");
        }
        // Cada celda tendra un manejador de clic para seleccionar el dia
        calendarHTML += `<td class="${clases.join(' ')}" onclick="selectDay(event, this)">${day}</td>`;
    }
    
    // Rellenar celdas vacias al final de la ultima semana, si es necesario
    let finDias = (7 - ((comienzoDia + totalDias) % 7)) % 7;
    for (let i = 0; i < finDias; i++) {
        calendarHTML += '<td class="celdas-vacias"></td>';
    }
    
    calendarHTML += '</tr></tbody></table>';
    
    // Insertamos el calendario en el contenedor
    document.getElementById('calendar').innerHTML = calendarHTML;
}

// Funcion para manejar clics en los dias
function selectDay(e, elemento) {
    e.preventDefault();

    // Si ya hay un dia seleccionado, le quitamos la clase
    if (diaSeleccionado) {
        diaSeleccionado.classList.remove("celda-selec");
    }

    // Seleccionamos el nuevo dia y le agregamos la clase
    elemento.classList.add("celda-selec");
    diaSeleccionado = elemento;
}


// Listeners para los botones de navegacion
document.getElementById('antMes').addEventListener('click', (event) => {
    event.preventDefault();
    if (actualMes === 0) {
        actualMes = 11;
        actualYear--;
    } else {
        actualMes--;
    }
    generateCalendar();
});

document.getElementById('sigMes').addEventListener('click', (event) => {
    event.preventDefault();
    if (actualMes === 11) {
        actualMes = 0;
        actualYear++;
    } else {
        actualMes++;
    }
    generateCalendar();
});

// Inicializamos el calendario
generateCalendar();