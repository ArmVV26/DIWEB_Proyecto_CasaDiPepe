const contenedor = document.getElementById("contenedor-img");
const picture = document.getElementById("picture");
const sourceJpg = document.getElementById("sourceJpg");
const sourceWebp = document.getElementById("sourceWebp");
const sourceSvg = document.getElementById("sourceSvg");
const imgMain = document.getElementById("img-main");

// Definir imágenes disponibles según tamaño
// ¡¡¡Cuidado!!! La ruta de las imágenes es relativa al archivo HTML (que en este caso coincide con la de este script, pero podría no ser así)
const imagenes = [
  { ancho: 3200,
    jpg: "media/img/img-decorativa/jpg/decorativa-PaginaPrincipal-RS-1-3200px.jpg",
    webp: "media/img/img-decorativa/webp/decorativa-PaginaPrincipal-RS-1-3200px.webp",
    svg: "media/img/img-decorativa/svg/decorativa-PaginaPrincipal-RS-1.svg"
  },
  { ancho: 2240,
    jpg: "media/img/img-decorativa/jpg/decorativa-PaginaPrincipal-RS-1-2240px.jpg",
    webp: "media/img/img-decorativa/webp/decorativa-PaginaPrincipal-RS-1-2240px.webp",
    svg: "media/img/img-decorativa/svg/decorativa-PaginaPrincipal-RS-1.svg"
  },
  { ancho: 1600,
    jpg: "media/img/img-decorativa/jpg/decorativa-PaginaPrincipal-RS-1-1600px.jpg",
    webp: "media/img/img-decorativa/webp/decorativa-PaginaPrincipal-RS-1-1600px.webp",
    svg: "media/img/img-decorativa/svg/decorativa-PaginaPrincipal-RS-1.svg"
  },
  { ancho: 740,
    jpg: "media/img/img-decorativa/jpg/decorativa-PaginaPrincipal-RS-1-960px.jpg",
    webp: "media/img/img-decorativa/webp/decorativa-PaginaPrincipal-RS-1-960px.webp",
    svg: "media/img/img-decorativa/svg/decorativa-PaginaPrincipal-RS-1.svg"
  },
  { ancho: 640,
    jpg: "media/img/img-decorativa/jpg/decorativa-PaginaPrincipal-RS-1-640px.jpg",
    webp: "media/img/img-decorativa/webp/decorativa-PaginaPrincipal-RS-1-640px.webp",
    svg: "media/img/img-decorativa/svg/decorativa-PaginaPrincipal-RS-1.svg"
  },
  { ancho: 0,
    jpg: "media/img/img-decorativa/jpg/decorativa-PaginaPrincipal-RS-1-320px.jpg",
    webp: "media/img/img-decorativa/webp/decorativa-PaginaPrincipal-RS-1-320px.webp",
    svg: "media/img/img-decorativa/svg/decorativa-PaginaPrincipal-RS-1.svg"
  },
];

// Función para cambiar la imagen según el tamaño del contenedor
const cambiarImagen = (anchoContenedor) => {
  const imagenSeleccionada = imagenes.find(img => anchoContenedor >= img.ancho);

  // Si ya está cargada, no hacer nada
  if (imgMain.dataset.actual === imagenSeleccionada.jpg) return;

  // Cambiar las fuentes de <source> y <img>
  sourceJpg.srcset = imagenSeleccionada.jpg;
  sourceWebp.srcset = imagenSeleccionada.webp;
  sourceSvg.srcset = imagenSeleccionada.svg;
  imgMain.src = imagenSeleccionada.jpg;
  
  // Guardar la imagen actual para evitar recargas innecesarias
  imgMain.dataset.actual = imagenSeleccionada.jpg;
};

// Observar cambios en el tamaño del contenedor
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    cambiarImagen(entry.contentRect.width);
  }
});

resizeObserver.observe(contenedor);