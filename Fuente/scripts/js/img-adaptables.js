// Obtengo todos los contenedores de imagenes que tiene el id "contenedor-img"
const contenedoresImg = document.querySelectorAll("#contenedor-img");

// Funcion que me genera una matriz de la imagen
function generarImagenes(arrayDatos) {

  let imagenes;

  // Diferencio entre las diferentes imagenes que tengo
  switch (arrayDatos[1]) {
    case  "img-decorativa":
      imagenes = [
        {
          ancho: 2240,
          jpg: `media/img/img-decorativa/jpg/${arrayDatos[0]}-3200px.jpg`,
          webp: `media/img/img-decorativa/webp/${arrayDatos[0]}-3200px.webp`,
          svg: `media/img/img-decorativa/svg/${arrayDatos[0]}.svg`,
        },
        {
          ancho: 1600,
          jpg: `media/img/img-decorativa/jpg/${arrayDatos[0]}-2240px.jpg`,
          webp: `media/img/img-decorativa/webp/${arrayDatos[0]}-2240px.webp`,
          svg: `media/img/img-decorativa/svg/${arrayDatos[0]}.svg`,
        },
        {
          ancho: 960,
          jpg: `media/img/img-decorativa/jpg/${arrayDatos[0]}-1600px.jpg`,
          webp: `media/img/img-decorativa/webp/${arrayDatos[0]}-1600px.webp`,
          svg: `media/img/img-decorativa/svg/${arrayDatos[0]}.svg`,
        },
        {
          ancho: 640,
          jpg: `media/img/img-decorativa/jpg/${arrayDatos[0]}-960px.jpg`,
          webp: `media/img/img-decorativa/webp/${arrayDatos[0]}-960px.webp`,
          svg: `media/img/img-decorativa/svg/${arrayDatos[0]}.svg`,
        },
        {
          ancho: 320,
          jpg: `media/img/img-decorativa/jpg/${arrayDatos[0]}-640px.jpg`,
          webp: `media/img/img-decorativa/webp/${arrayDatos[0]}-640px.webp`,
          svg: `media/img/img-decorativa/svg/${arrayDatos[0]}.svg`,
        },
        {
          ancho: 0,
          jpg: `media/img/img-decorativa/jpg/${arrayDatos[0]}-320px.jpg`,
          webp: `media/img/img-decorativa/webp/${arrayDatos[0]}-320px.webp`,
          svg: `media/img/img-decorativa/svg/${arrayDatos[0]}.svg`,
        },
      ]

      // Cambio la ubicacion de las imagenes en funcion de la carpeta donde se encuentre
      if (arrayDatos[2] == "1") {
        imagenes.forEach(element => {
          element.jpg = `../${element.jpg}`;
          element.webp = `../${element.webp}`;
        });

      } else if (arrayDatos[2] == "2") {
        imagenes.forEach(element => {
          element.jpg = `../../${element.jpg}`;
          element.webp = `../../${element.webp}`;
        });
      }
      break;
    
    case "img-producto":
      imagenes = [
        {
          ancho: 2240,
          jpg: `media/img/img-producto/jpg/${arrayDatos[0]}-3200px.jpg`,
          webp: `media/img/img-producto/webp/${arrayDatos[0]}-3200px.webp`,
          png: `media/img/img-producto/png/${arrayDatos[0]}-3200px.png`,
        },
        {
          ancho: 1600,
          jpg: `media/img/img-producto/jpg/${arrayDatos[0]}-2240px.jpg`,
          webp: `media/img/img-producto/webp/${arrayDatos[0]}-2240px.webp`,
          png: `media/img/img-producto/png/${arrayDatos[0]}-2240px.png`,
        },
        {
          ancho: 960,
          jpg: `media/img/img-producto/jpg/${arrayDatos[0]}-1600px.jpg`,
          webp: `media/img/img-producto/webp/${arrayDatos[0]}-1600px.webp`,
          png: `media/img/img-producto/png/${arrayDatos[0]}-1600px.png`,
        },
        {
          ancho: 640,
          jpg: `media/img/img-producto/jpg/${arrayDatos[0]}-960px.jpg`,
          webp: `media/img/img-producto/webp/${arrayDatos[0]}-960px.webp`,
          png: `media/img/img-producto/png/${arrayDatos[0]}-960px.png`,
        },
        {
          ancho: 320,
          jpg: `media/img/img-producto/jpg/${arrayDatos[0]}-640px.jpg`,
          webp: `media/img/img-producto/webp/${arrayDatos[0]}-640px.webp`,
          png: `media/img/img-producto/png/${arrayDatos[0]}-640px.png`,
        },
        {
          ancho: 0,
          jpg: `media/img/img-productoa/jpg/${arrayDatos[0]}-320px.jpg`,
          webp: `media/img/img-producto/webp/${arrayDatos[0]}-320px.webp`,
          png: `media/img/img-producto/png/${arrayDatos[0]}-320px.png`,
        },
      ]
      
      // Cambio la ubicacion de las imagenes en funcion de la carpeta donde se encuentre
      if (arrayDatos[2] == "1") {
        imagenes.forEach(element => {
          element.jpg = `../${element.jpg}`;
          element.webp = `../${element.webp}`;
          element.png = `../${element.png}`;
        });

      } else if (arrayDatos[2] == "2") {
        imagenes.forEach(element => {
          element.jpg = `../../${element.jpg}`;
          element.webp = `../../${element.webp}`;
          element.png = `../../${element.png}`;
        });
      }
      break;

    case "logotipo":
      imagenes = [
        {
          ancho: 256,
          png: `media/img/logotipo/png/${arrayDatos[0]}-512px.png`,
          svg: `media/img/ico-redes-sociales/svg/${arrayDatos[0]}.svg`,
        },
        {
          ancho: 128,
          png: `media/img/logotipo/png/${arrayDatos[0]}-256px.png`,
          svg: `media/img/ico-redes-sociales/svg/${arrayDatos[0]}.svg`,
        },
        {
          ancho: 0,
          png: `media/img/logotipo/png/${arrayDatos[0]}-128px.png`,
          svg: `media/img/ico-redes-sociales/svg/${arrayDatos[0]}.svg`,
        },
      ]

      // Cambio la ubicacion de las imagenes en funcion de la carpeta donde se encuentre
      if (arrayDatos[2] == "1") {
        imagenes.forEach(element => {
          element.png = `../${element.png}`;
          element.svg = `../${element.svg}`;
        });

      } else if (arrayDatos[2] == "2") {
        imagenes.forEach(element => {
          element.png = `../../${element.png}`;
          element.svg = `../../${element.svg}`;
        });
      }
      break;
  }

  return imagenes;
}

// Recorro todos los contenedores
contenedoresImg.forEach(contenedorImg => {

  // Obtengo el tamaño del contenedor y ejecuto la funcion de cambiar imagen
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      cambiarImagen(entry.contentRect.width);
    }
  });

  // Obtengo los datos del atributo data-info y lo convierto la cadena JSON a un array
  const dataInfo = contenedorImg.dataset.info;
  const arrayDatos = JSON.parse(dataInfo);

  // Obtengo los sources del contenedor
  const sourceWebp = contenedorImg.querySelector("#sourceWebp");
  const sourcePng = contenedorImg.querySelector("#sourcePng");
  const sourceJpg = contenedorImg.querySelector("#sourceJpg");
  const sourceSvg = contenedorImg.querySelector("#sourceSvg");
  const imagen = contenedorImg.querySelector("#imagen");

  // Obtengo la matriz de la imgen
  const imagenes = generarImagenes(arrayDatos);

  resizeObserver.observe(contenedorImg);

  const cambiarImagen = (anchoContenedor) => {
    // Obtengo la imagen que le voy a asignar al contenedor
    const imagenSeleccionada = imagenes.find(img => anchoContenedor >= img.ancho);

    // Comentarios de consola para comprobar el funcionamiento
    // console.log(`Ancho: ${anchoContenedor} | Imagen: ${imagenSeleccionada.jpg} | ${imagenSeleccionada.webp} | ${imagenSeleccionada.png} | ${imagenSeleccionada.svg}`);
    // console.log(arrayDatos);

    // Compruebo que valores son nulos y cuales no.
    // Cambio las fuentes de <source> y <img>
    if (sourceWebp) {
      sourceWebp.srcset = imagenSeleccionada.webp;
    }
    if (sourcePng) {
      sourcePng.srcset = imagenSeleccionada.png;
    }
    if (sourceJpg) {
      sourceJpg.srcset = imagenSeleccionada.jpg;
    }
    if (sourceSvg) {
      sourceSvg.srcset = imagenSeleccionada.svg;
    }

    // Asigna a la etiqueta img svg, png o jpg.
    if (imagenSeleccionada.svg) {
      imagen.src = imagenSeleccionada.svg;
    } else if (imagenSeleccionada.png) {
      imagen.src = imagenSeleccionada.png;
    } else if (imagenSeleccionada.jpg) {
      imagen.src = imagenSeleccionada.jpg;
    }
  }
});