---
title: Apéndice A. Conceptos y Términos
---

A lo largo de este manual se han utilizado palabras y términos con significado específico para el mismo, para ello se ha hecho una tabla con las palabras utilizadas y su significado.

<table class="tablem" cellpadding="8" cellspacing="8">

<thead>

<tr>

<td width="186">Término</td>

<td width="774">Descripción</td>

</tr>

</thead>

<tbody>

<tr>

<td width="166" valign="top">

**File o Fichero**

</td>

<td width="454" valign="top">

Objetos contenedores de datos.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Programas**

</td>

<td width="454" valign="top">

Elementos ejecutables que pueden ser de distintas clases: COBOL, RPG, CL, etc.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Unresolved**

</td>

<td width="454" valign="top">

Se refiere a los componentes que, no perteneciendo al Sistema, son llamados por elementos de él, dando lugar a una potencial inconsistencia.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Lib. (Librería)**

</td>

<td width="454" valign="top">

Fuentes de datos que utilizan ciertos elementos para funcionar.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Name**

</td>

<td width="454" valign="top">

Nombre propio asignado a un elemento.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Type**

</td>

<td width="454" valign="top">

Calificativo de un elemento que puede ser de distintas clases: PGM (Programas), File (Ficheros), Menús, etc.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Attr. (Atributo)**

</td>

<td width="454" valign="top">

Característica propia del tipo del elemento (lenguaje empleado para crear el elemento).

</td>

</tr>

<tr>

<td width="166" valign="top">

**Elemento**

</td>

<td width="454" valign="top">

Componente de un Sistema. Son fundamentalmente programas y ficheros. Los programas pueden ser de distintos tipos y escritos en distintos lenguajes. Los ficheros, a su vez, pueden tener múltiples estructuras y en general se pueden considerar como de datos.

</td>

</tr>

<tr>

<td width="166" valign="top">

**F.**

</td>

<td width="454" valign="top">

Función del elemento en dos direcciones: C/S.

</td>

</tr>

<tr>

<td width="166" valign="top">

**C. (Service Client)**

</td>

<td width="454" valign="top">

Se refiere a los elementos que proveen servicios fuera del Sistema, es decir relación máquina-humano.

</td>

</tr>

<tr>

<td width="166" valign="top">

**S. (Service Server)**

</td>

<td width="454" valign="top">

Se refiere a los elementos que proveen servicios dentro del Sistema.

</td>

</tr>

<tr>

<td width="166" valign="top">

**droplist**

</td>

<td width="454" valign="top">

O menú de tipo droplist. Es un tipo de control usado en los menús de la herramienta que, al marcarse con el ratón, despliega un conjunto de opciones seleccionables.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Switch**

</td>

<td width="454" valign="top">

Botón que activa una función, se conoce también como interruptor.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Clusters**

</td>

<td width="454" valign="top">

En los Sistemas de una cierta dimensión, el elevado número de objetos dificulta su uso. Un "**Cluster**" es una agrupación de objetos con el único objetivo de reducir el número de componentes visualizados y facilitar la visualización y manipulación del Sistema.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Complejidad ciclomática**

</td>

<td width="454" valign="top">

Este campo solo se mostrará para los elementos de tipos de programas, y se refiere al número de alternativas en el flujo del programa. Se obtiene como el número de decisiones binarias en el programa más uno. Para calcular el número de decisiones binarias se realiza un conteo de todas las instrucciones que presentan alternativas de ejecución basándose en condiciones: IF*, WH* (RPG), IF, MONMSG (CL), etc.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Grupos**

</td>

<td width="454" valign="top">

Algunos conjuntos de objetos, dentro de los que constituyen un Sistema, pueden tener relaciones que aconsejen agruparlos para su tratamiento conjunto o para su análisis. Estos conjuntos, que pueden ser definidos por el usuario en todo momento, se denominan Grupos.

Un caso habitual, es el de los Grupos constituidos por objetos que pertenecen a un mismo Subsistema funcional.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Líneas de código**

</td>

<td width="454" valign="top">

Total, de líneas que se emplean para crear un elemento.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Línea de código muerto**

</td>

<td width="454" valign="top">

Líneas de código que jamás son utilizadas por el elemento.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Líneas de código de programación**

</td>

<td width="454" valign="top">

Instrucciones que manejan la información que recibe el elemento y devuelve como resultado la instrucción deseada. Éstas se emplean para crear un elemento.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Líneas GOTO**

</td>

<td width="454" valign="top">

Instrucciones que se refieren a una estructura de control determinada en el código.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Fichero DSPF**

</td>

<td width="454" valign="top">

Elemento que termina reflejando información en pantalla.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Fichero PRTF**

</td>

<td width="454" valign="top">

Elemento que genera un archivo de impresión.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Selection Depth**

</td>

<td width="454" valign="top">

Usado junto a Edge direction, tiene la función de definir el nivel a que se quiere llegar en la búsqueda de relaciones de un elemento con otro; los niveles son: 0, 1, 2, 3 y All.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Edge direction**

</td>

<td width="454" valign="top">

Tiene la función de seleccionar la dirección en la que se relaciona un elemento con los restantes. Las direcciones son: to (elementos a los que llama el elemento seleccionado), from (elementos que llaman al elemento seleccionado) y both (elementos relacionados en ambas direcciones).

</td>

</tr>

<tr>

<td width="166" valign="top">

**Relación**

</td>

<td width="454" valign="top">

Es el vínculo que puede existir entre componentes dentro del Sistema. Un componente puede llamar a otro o, recíprocamente, ser llamado por otro. Esto se considera como una relación.

</td>

</tr>

<tr>

<td width="166" valign="top">

**External**

</td>

<td width="454" valign="top">

Se refiere a los componentes que, perteneciendo al Sistema, no están sin embargo incluidos en un determinado Subsistema, por lo que son externos a éste.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Subsistema**

</td>

<td width="454" valign="top">

Conjunto de componentes incluidos dentro de un Sistema y que tienen en común la realización de una función aislable o identificable dentro del Sistema.

</td>

</tr>

<tr>

<td width="166" valign="top">

**Sistema**

</td>

<td width="454" valign="top">

Conjunto de componentes interrelacionados que se orientan a una funcionalidad. Suele poder dividirse en Subsistemas. Puede denominarse también Aplicación.

</td>

</tr>

</tbody>

</table>
