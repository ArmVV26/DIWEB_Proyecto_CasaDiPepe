# DIWEB_Proyecto_CasaDiPepe
> [!NOTE]
> ## Descripción del Repositorio
> Este repositorio contiene el proyecto **Casa di Pepe**, desarrollado para la asignatura **Diseño de Interfaces Web** como parte del curso de **2º DAW**.
> 
> El objetivo del proyecto es diseñar y estructurar una página web completa para un restaurante ficticio llamado **Casa di Pepe**.
>
> Creado por: **Armando Vaquero Vargas**  

## Organización del Proyecto 
El repositorio está estructurado en dos carpetas principales:  

### 1. [Docs](https://github.com/ArmVV26/CasaDiPepe/tree/main/Docs)
Contiene todos los documentos explicativos del desarrollo de la página web. Incluye:
- Información sobre las necesidades del restaurante.
- Explicación del proceso de obtención y conversión de los diferentes recursos.

### 2. [Fuente](https://github.com/ArmVV26/CasaDiPepe/tree/main/Fuente)
Contiene todos los archivos necesarios para implementar el proyecto web. Esta carpeta está organizada de la siguiente manera:  

### 2.1. Estructura Interna 
- `html/`: Contiene los archivos HTML correspondientes a cada página de la web. Páginas: ***carta/pasta.html***, ***carta.html***, ***cuenta-html***, ***formulario-registro.html***, ***formulario-reserva.html***, ***inicio-sesion.html***, ***sobre-nosotros.html*** y ***tienda.html***.
- `media/`: Carpeta que contiene las carpetas *img* y *fonts*.
  + `fonts/`: Incluye las tipografías usadas en el proyecto.
  + `img/`: Almacena todas las imágenes usadas en el proyecto, organizadas por tipo:
    - hero-image (avif, jpg, webp).
    - img-decorativa (jpg, svg, webp).
    - img-producto (jpg, png, webp).
    - logotipo (png, svg).
> La nomenclatura de las imagenes es: *tipoImg-nombreImg-resolucion(AxB).extensión*.
- `scripts/`: Carpeta que contiene los scripts.
  + `js/`: Contiene los scripts JS usados para el diseño de la web. Los scripts son:
    -  ***generar-calendario.js***: Script para generar el calendario usado en la página ***formulario-reserva.html***.
    -  ***img-adaptables.js***: Script que detecta un cambio en el contenedor de las imágenes y le asigna una imagen en función del tamaño del contenedor.
    -  ***iniciar-sesion.js***: Script que sirve para iniciar sesión.
    -  ***menu-desplegable.js***: Script que activa el menú desplegable cuando la resolución de la web se reduce.
    -  ***menu-rango-tienda.js***: Script que configura el menú desplegable secundario y el rango de precio de la página ***tienda.html***.
- `style/`: Carpeta que contiene las carpetas de estilo CSS y SASS.
  + `css/`: Contiene las hojas de estilo (CSS) usadas para diseñar la web.
  + `sass/`: Contiene los archivos con los contenidos SASS usados para el diseño de la web. Organización:
    - En la raíz se encuentran los archivos ***.scss*** de todas las páginas.
    - `base/`: Contiene los estilos base de la web (***_base.scss***, ***_reset.scss*** y ***_typography.scss***).
    - `components/`: Contiene los estilos de los componentes usados en la web (***_buttons.scss***). 
    - `img/`: Contiene el estilo de las *hero-images* de la web (***_img-*.scss***).
    - `layout/`: Contiene los estilos de la cabecera, introducción y pie de página de la web (***_footer.scss***, ***_header.scss*** y ***_section.scss***).
    - `pages/`: Contiene el estilo propio de todas las webs (***_*.scss***).
    - `utils/`: Contiene los estilos de las utilidades usadas en la web (***_media-query.scss***, ***_mixins.scss*** y ***_variables.scss***).

### 3. [Index.html](https://armvv26.github.io/DIWEB_Proyecto_CasaDiPepe/)
Archivo principal que actúa como punto de entrada a la web.

### 4. Package.json
El archivo ***package.json*** centraliza la configuración del entorno de desarrollo del proyecto y automatiza diversas tareas. Voy a explicar las herramientas y los *scripts* usados, además de una explicación del funcionamiento que tiene este proyecto.

### 4.1. Herramientas
Para compilar, prefijar, minimizar y empaquetar en el proyecto he usado las siguientes herramientas:
1. **npm-run-all**: Esto nos permite ejecutar comandos en paralelo (***run-p***) o de forma secuencial (***run-s***).
2. **Parcel**: Es una herramienta que permite compilar, prefijar, minimizar y empaquetar todos los archivos del proyecto web, sin la necesidad de una configuración, rápida y escalable.
3. **rimraf**: Es un módulo que permite la eliminación profunda de archivos.
4. **sass**: Permite compilar archivos ***.scss*** a archivos ***.css***.

```bash
npm install --save-dev npm-run-all parcel rimraf sass
```

> [!IMPORTANT]
> He intentando usar el modulo **parcel-reporter-static-files-copy**, que sirve para compiar carpetas estáticas. Lo que pasa es que no funcionaba de forma correcta y al final lo he hecho de otra manera.

### 4.2. Scripts
Los *scripts* que he usado para compilar, prefijar, minimizar y empaquetar el proyecto web son los siguientes:
```json
"compile:sass": "sass Fuente/styles/sass/:styles/css/",
"watch:sass": "sass --watch Fuente/styles/sass/:styles/css/",
"dev:parcel": "parcel index.html Fuente/html/*.html --dist-dir dev",
"build:parcel": "parcel build index.html Fuente/html/*.html --dist-dir build",
"limpia:dev": "rimraf dev .parcel-cache",
"limpia:build": "rimraf build .parcel-cache",
"copiarDev:media": "sleep 5 && cp -r Fuente/media/ dev/Fuente/media",
"copiarBuild:media": "sleep 5 && cp -r Fuente/media/ build/Fuente/media",
"dev:todo": "run-s limpia:dev && run-p dev:parcel copiarDev:media",
"build:todo": "run-s limpia:build && run-p build:parcel copiarBuild:media"
```
- ***compile:sass***: Este *script* se encarga de compilar todos los archivos ***.scss***, que se encuentran en la raíz de la carpeta, `sass/` a archivos ***.css*** y guardarlos `styles/css/`.
- ***watch:sass***: Hace lo mismo que el anterior, pero se queda en modo *watch*. Es decir, si activamos este *script* y guardamos un archivo ***.scss***, este automáticamente se compilará a ***.css***.
- ***dev:parcel***: *Script* que compila, prefija, minimiza y empaqueta los archivos indicados, generando una versión de desarrollo en la carpeta `dev/`, en la raíz del proyecto. Además, creará un servidor localhost donde podremos ver la web.
- ***build:parcel***: *Script* similar al anterior, pero orientado a producción. Este *script* realiza la compilación, optimización y empaquetado final del sitio, generando una versión optimizada y minificada del proyecto en la carpeta `build/`.
- ***limpia:dev***: Este *script* elimina la carpeta `dev/` y la caché de Parcel (`.parcel-cache/`).
- ***limpia:build***: Este *script* elimina la carpeta `buiild/` y la caché de Parcel (`.parcel-cache/`).
- ***copiarDev:media***: Este *script* espera 5 segundos para dar tiempo a que se generen los archivos `dev/` y luego copia recursivamente la carpeta `Fuente/media/` al directorio `dev/Fuente/media`. Esto asegura que todos los recursos multimedia estén disponibles en la versión de desarrollo.
- ***copiarBuild:media***: Este *script* hace lo mismo que el anterior, pero para la carpeta `build/`, es decir, para el modo producción.
- ***dev:todo***: Este *script* combina las tareas para facilitar el flujo de trabajo. Primero ejecuta ***limpia:dev***, y luego, en paralelo, ejecuta ***dev:parcel*** y ***copiarDev:media***, de forma que con solo un comando se levante todo lo necesario para trabajar en desarrollo.
- ***build:todo***: Este *script* hace lo mismo que el anterior, pero para el modo de producción.

> [!CAUTION]
> Si se ejecuta el script ***dev:parcel*** o ***build:parcel***, sin ejecutar ni ***copiarDev:media*** o ***copiarBuild:media***, ¡NO FUNCIONARÁ LA WEB DE FORMA CORRECTA!

### 4.3. Funcionamiento
En este apartado voy a explicar cómo descargar el repositorio, instalar las dependencias y utilizar los scripts de desarrollo y producción. 

#### 4.3.1. Descargar el repositorio
Para clonar el repositorio en tu equipo, abre: *Visual Studio Code*, una carpeta dentro de este y en una terminal pon el siguiente comando:
```bash
git clone https://github.com/ArmVV26/DIWEB_Proyecto_CasaDiPepe.git
```

#### 4.3.2. Instalar las dependencias
Una vez clonado el repositorio, accede al directorio del proyecto y ejecuta:
```bash
npm install
```
Este comando instalará todas las dependencias necesarias que se indican en el fichero `package.json`.

#### 4.3.3. Ejecución del Entorno de Desarrollo
Para iniciar el entorno de desarrollo, ejecuta el siguiente script:
```bash
npm run dev:todo
```
Al hacerlo se llevarán a cabo las siguientes acciones:
1. Se ejecuta ***limpia:dev*** para borrar la carpeta `dev/` y la caché de Parcel.
2. Se levanta el servidor de desarrollo mediante ***dev:parcel***, que compila, prefija, minimiza y empaqueta los archivos *HTML*, *CSS*, *JS* y otros recursos en la carpeta `dev/`.
3. Se copia la carpeta `Fuente/media` a `dev/Fuente/media` para que los archivos multimedia estén disponibles.
Con esto, se levanta un servidor localhost (normalmente: `http://localhost:1234`) donde podrás ver y probar la web en tiempo real.

#### 4.3.4 Ejecución del Entorno de Producción
Para generar una versión optimizada del sitio, ejecuta:
```bash
npm run build:todo
```
Este script realiza las mismas tareas que las del punto anterior, solo que en este caso, este *script* no levanta ningún servidor localhost. Por lo tanto, para comprobar que la versión de producción funciona correctamente, se tiene que hacer usando un servidor estático.
Para ello instalamos el servidor:
```bash
npm install -g serve
```
Una vez instalado, ejecutamos el siguiente comando:
```bash
serve build
```
Esto iniciará un servidor que servirá el contenido de la carpeta `build/` en una URL local. El mensaje de la terminal sería algo así:
```bash
   ┌──────────────────────────────────────────┐
   │                                          │
   │   Serving!                               │
   │                                          │
   │   - Local:    http://localhost:XXXX      │
   │   - Network:  http://X.X.X.X:XXXX        │
   │                                          │
   │   Copied local address to clipboard!     │
   │                                          │
   └──────────────────────────────────────────┘
```
---