/*
Con estas lineas de código, se agrega un botón que permite al usuario seleccionar una imagen desde su dispositivo.
Al hacer clic en el botón, se simula un clic en el input de tipo file, lo que abre el diálogo de selección de archivos.
El input de tipo file está oculto para que no sea visible en la interfaz, pero sigue siendo funcional.
El usuario puede seleccionar una imagen y luego se puede manejar el evento de cambio para procesar la imagen seleccionada.
Este código es útil para aplicaciones web donde se necesita que el usuario suba imágenes, como en un formulario o una galería de imágenes.

Pero no es necesario ya que desde el HTML se puede cambiar el input por label y así se puede hacer clic en el label para abrir el input de tipo file.
Esto permite una mejor experiencia de usuario y un diseño más limpio.
*/

// Estas dos líneas de código definen funciones abreviadas para seleccionar elementos en el DOM de una página web utilizando JavaScript.

//La primera línea:
//crea una función llamada $ que toma un selector de CSS como argumento (el) y devuelve el primer elemento del DOM que coincide con ese selector. Es una forma rápida y concisa de acceder a un solo elemento, similar a cómo funciona jQuery con el símbolo $.

//La segunda línea:
//crea una función llamada $$ que también toma un selector de CSS como argumento (el) pero devuelve todos los elementos del DOM que coinciden con ese selector. Esto es útil cuando se necesita trabajar con múltiples elementos a la vez, como al aplicar estilos o agregar eventos a varios elementos similares en una página web.
// Estas funciones son útiles para simplificar el código y hacerlo más legible al interactuar con el DOM.

const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const imageInput = $('#image-input');
const itemsSection = $('#selector-items');

// Esta función se ejecuta cuando el usuario selecciona una imagen desde su dispositivo.
imageInput.addEventListener('change', (event) => {
  const [file] = event.target.files; // Obtiene el primer archivo seleccionado por el usuario.
  if (file) {
    const reader = new FileReader(); // Crea un nuevo objeto FileReader para leer el archivo.

    reader.onload = (eventReader) => {
      const imgElement = document.createElement('img'); // Crea un nuevo elemento de imagen.
      imgElement.src = eventReader.target.result; // Establece la fuente de la imagen al resultado de la lectura del archivo.
      imgElement.className = 'item-image'; // Asigna una clase CSS para estilizar la imagen.
      itemsSection.appendChild(imgElement); // Agrega la imagen al contenedor de elementos en el DOM.
    };

    reader.readAsDataURL(file); // Lee el archivo como una URL de datos (data URL).
  }
});
