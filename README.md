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
