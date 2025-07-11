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

function createItem(src) {
  const imgElement = document.createElement('img'); // Crea un nuevo elemento de imagen.
  imgElement.draggable = true; // Permite que la imagen sea arrastrable.
  imgElement.src = src; // Establece la fuente de la imagen al resultado de la lectura del archivo.
  imgElement.className = 'item-image'; // Asigna una clase CSS para estilizar la imagen.

  imgElement.addEventListener('dragstart', handleDragStart); // Agrega un evento para manejar el inicio del arrastre de la imagen.
  imgElement.addEventListener('dragend', handleDragEnd); // Agrega un evento para manejar el final del arrastre de la imagen.
  itemsSection.appendChild(imgElement); // Agrega la imagen al contenedor de elementos en el DOM.

  return imgElement; // Devuelve el elemento de imagen creado para su posible uso posterior.
}

// Esta función se ejecuta cuando el usuario selecciona una imagen desde su dispositivo.
imageInput.addEventListener('change', (event) => {
  const [file] = event.target.files; // Obtiene el primer archivo seleccionado por el usuario.
  if (file) {
    const reader = new FileReader(); // Crea un nuevo objeto FileReader para leer el archivo.

    reader.onload = (eventReader) => {
      createItem(eventReader.target.result); // Cuando la lectura del archivo se complete, crea un nuevo elemento de imagen con la fuente del archivo leído.
    };

    reader.readAsDataURL(file); // Lee el archivo como una URL de datos (data URL).
  }
});

let draggedElement = null; // Variable para almacenar el elemento que se está arrastrando.
let sourceContainer = null; // Variable para almacenar el contenedor de origen del elemento arrastrado.

const rows = $$('.tier .row'); // Selecciona todas las filas de la clase 'tier row' en el DOM.

rows.forEach((row) => {
  row.addEventListener('drop', handleDrop); // Agrega un evento para manejar el evento de soltar (drop) en cada fila.
  row.addEventListener('dragover', handleDragOver); // Agrega un evento para manejar el evento de arrastrar sobre (dragover) en cada fila.
  row.addEventListener('dragleave', handleDragLeave); // Agrega un evento para manejar el evento de salir del arrastre (dragleave) en cada fila.
});

itemsSection.addEventListener('dragover', handleDragOver); // Agrega un evento para manejar el evento de arrastrar sobre (dragover) en la sección de elementos.
itemsSection.addEventListener('drop', handleDrop); // Agrega un evento para manejar el evento de soltar (drop) en la sección de elementos.
itemsSection.addEventListener('dragleave', handleDragLeave); // Agrega un evento para manejar el evento de salir del arrastre (dragleave) en la sección de elementos.

function handleDrop(event) {
  event.preventDefault(); // Previene el comportamiento predeterminado del navegador al soltar un elemento.

  const { currentTarget, dataTransfer } = event; // Obtiene el elemento actual donde se suelta el elemento arrastrado y los datos del arrastre.

  if (sourceContainer && draggedElement) {
    sourceContainer.removeChild(draggedElement); // Elimina el elemento arrastrado del contenedor de origen.
  }

  if (draggedElement) {
    const src = dataTransfer.getData('text/plain'); // Obtiene la fuente de la imagen arrastrada desde los datos del arrastre.
    const imgElement = createItem(src); // Crea un nuevo elemento de imagen con la fuente obtenida.
    currentTarget.appendChild(imgElement); // Agrega el nuevo elemento de imagen al contenedor actual donde se soltó el elemento arrastrado.
  }
  currentTarget.classList.remove('drag-over'); // Elimina la clase CSS que indica que el contenedor está listo para recibir un elemento arrastrado.
  currentTarget.querySelector('.drag-preview')?.remove(); // Elimina la vista previa del elemento arrastrado, si existe.
}

function handleDragOver(event) {
  event.preventDefault(); // Previene el comportamiento predeterminado del navegador al arrastrar un elemento sobre otro.

  const { currentTarget, dataTransfer } = event; // Obtiene el elemento actual sobre el que se está arrastrando.
  if (sourceContainer === currentTarget) {
    return; // Si el contenedor de origen es el mismo que el contenedor actual, no hace nada.
  }
  currentTarget.classList.add('drag-over'); // Agrega una clase CSS para indicar que el contenedor está listo para recibir un elemento arrastrado.

  const dragPreview = document.querySelector('.drag-preview'); // Busca un elemento con la clase 'drag-preview' para mostrar una vista previa del elemento arrastrado.

  if (draggedElement && !dragPreview) {
    const previewElement = draggedElement.cloneNode(true); // Clona el elemento arrastrado para mostrar una vista previa.
    previewElement.classList.add('drag-preview'); // Agrega una clase CSS para estilizar la vista previa.
    currentTarget.appendChild(previewElement); // Agrega la vista previa al contenedor actual.
  }
}

function handleDragLeave(event) {
  event.preventDefault(); // Previene el comportamiento predeterminado del navegador al salir del área de arrastre.

  const { currentTarget } = event; // Obtiene el elemento actual del evento.
  currentTarget.classList.remove('drag-over'); // Elimina la clase CSS que indica que el contenedor está listo para recibir un elemento arrastrado.
  currentTarget.querySelector('.drag-preview')?.remove(); // Elimina la vista previa del elemento arrastrado, si existe.
}

function handleDragStart(event) {
  draggedElement = event.target; // Almacena el elemento que se está arrastrando.
  sourceContainer = draggedElement.parentNode; // Obtiene el contenedor del elemento arrastrado.
  event.dataTransfer.setData('text/plain', draggedElement.src); // Establece los datos del arrastre, en este caso, la fuente de la imagen arrastrada.
}

function handleDragEnd(event) {
  console.log('Drag ended', event.target); // Imprime un mensaje en la consola cuando termina el arrastre.
  draggedElement = null; // Limpia la variable al finalizar el arrastre.
  sourceContainer = null; // Limpia el contenedor de origen al finalizar el arrastre.
}
