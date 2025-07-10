Este proyecto esta hecho con vanilla js, donde aprenderemos a como utilizar diferentes temas con respecto a html, css y js.

Primera parte:

Tambien estoy reforzando temas antes vistos, como las variables golbales en css, estas variables se añaden en root, especificamente para el color de cada seccion.
El símbolo & se utiliza dentro de un bloque de reglas anidadas. Sin embargo, el CSS estándar no soporta la anidación ni el uso de &. Este símbolo es propio de preprocesadores como Sass o Less.

¿Qué hace &?
El & representa el selector padre actual.
Permite anidar reglas, haciendo el CSS más organizado y legible.

Ademas de usar custom properties:
Donde en el style.css-> .label -> background: var(--level, #09f); donde var añadimos --level y un color, esto con la finalidad de poder usarlo en cada lbael que se encuentra dentro del div class="row",
que a su vez contiene aside class="label" y asi poder estilar dentro de aside, y poder cambiar cada color.

Segunda parte:
Añadiendo los botones para elegir una imagen desde nuestro dispositivo.
Aprendimos 2 formas de poder hacer esto:
1.- con js
2.- cambiando un elemento en el html

La primera explicaba midu que es la mas basica y en la que casi todo desarrolador hace, en un archivo .js agregamos el siguente codigo:

const addButton = document.querySelector('#add-image-button');
const imageInput = document.querySelector('#image-input');

addButton.addEventListener('click', () => {
imageInput.click();
});

Esto hace el trabajo sin ningun problema.

La segunda forma tambien es conocida sin embargo no muy utilizada, y esto favorece al no cargar el proyecto con mucho javascript y funciona cambiando en el html el elmento button por label y dentro del label se añade input y hace el mismo trabajo.

Tercera parte del proyecto:

Termine de agregar los botones, estilarlos; ademas de agregar un section en el index para crear una "caja" donde iran las imagenes seleccionadas por el usuario.
El usuario podra elegir las imagenes que el quiera rankear.
Usé algo llamado miducof, basicamente son funciones abreviadas para seleccionar elementos en el DOM:

const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const imageInput = $('#image-input');
const itemsSection = $('#selector-items');

Esto con la intencion de escribrir menos codigo o mas bien dejar de escribir document.querySelector cada vez que vamos a interactuar con algun elemento.

Cuarta parte

Agregamos un atributo al input del html:
input accept="image/_" type="file" id="image-input" hidden />
accept="image/_", esto con la finalidad de que solo sean archivos tipo imagen: jpg, jpge, png, etc.

Drag and drop:
Añadimos imgElement.draggable = true en la funcion change, con la finalidad de que pueda tomar-agarrar y soltar.
Luego añadimos las siguientes funciones:
imgElement.addEventListener('dragstart', handleDragStart); // Agrega un evento para manejar el inicio del arrastre de la imagen.
imgElement.addEventListener('dragend', handleDragEnd); // Agrega un evento para manejar el final del arrastre de la imagen.

Agrege 2 funciones con la finaidad de poder seleccionar y arrastrar las imagenes rankear.

Ahora toca refactorizar una parte del codigo, en la cual se crea una funcion createItem, con la intencion de crear un lugar donde se quedara la imagen seleccionada.

Tambien creamos funciones para que haga el arrastre y soltar la imagen en el lugar que queramos.
Por el momento ya se puede seleccionar, arrastrar y colocar las donde queramos de acuerdo al ranked.
