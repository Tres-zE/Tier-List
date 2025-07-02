Este proyecto esta hecho con vanilla js, donde aprenderos a como utilizar diferentes temas con respecto a html, css y js.
Tambien estoy reforzando temas antes vistos, como las variables golbales en css, estas variables se añaden en root, especificamente para el color de cada seccion.
El símbolo & se utiliza dentro de un bloque de reglas anidadas. Sin embargo, el CSS estándar no soporta la anidación ni el uso de &. Este símbolo es propio de preprocesadores como Sass o Less.

¿Qué hace &?
El & representa el selector padre actual.
Permite anidar reglas, haciendo el CSS más organizado y legible.

Ademas de usar custom properties:
Donde en el style.css-> .label -> background: var(--level, #09f); donde var añadimos --level y un color, esto con la finalidad de poder usarlo en cada lbael que se encuentra dentro del div class="row", 
que a su vez contiene aside class="label" y asi poder estilar dentro de aside, y poder cambiar cada color.
