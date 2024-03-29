---
title: Comenzar a utilizar Visor Discovery
---

<h1>Comenzar a utilizar Visor Discovery</h1>

**_Visor Discovery_** es una aplicación web, para acceder a ella debe utilizarse un navegador con el link de referencia.

Una de sus ventajas es que se puede trabajar desde cualquier sitio que disponga de internet, y los permisos adecuados de acceso.

Cuando se accede al link correspondiente del **_Visor Discovery_** se mostrará la página de inicio de la herramienta. En algunos casos, previamente, se necesitará validar la entrada con las credenciales de acceso. Su apariencia es la siguiente:

![Start screen](/001.jpg)

## Pantalla de inicio

La página de inicio en el **_Visor Discovery_** contiene tres secciones diferenciadas que son: "**Menú principal"**, "**System overview**", "**Catálogo general del Sistema**".

### Menú principal

Este menú se ubica en la parte superior de la página de inicio, y presenta la siguiente información:

![Start screen](/002.jpg)

A continuación, se explica cada uno de los componentes de este menú:

*   **Identificación de la herramienta "_Visor Discovery_"**. Cuando se posiciona sobre esta parte del "**Menú Principal**", se puede observar la versión y la última revisión de la herramienta.
*   **Nombre del Sistema**. "**stock2**".
*   **Home**. Vuelve a la página de inicio.
*   **Options**. Menú de tipo droplist que permite la navegación en las diferentes páginas de la herramienta, incluye las siguientes opciones:
    *   "**_Objects dictionary_**". Esta página muestra un catálogo general en formato tabla con todos los elementos pertenecientes al Sistema analizado. Incluye tres secciones con funciones específicas que se explicarán a lo largo de este manual.
    *   "**_System structure_**". Esta página muestra de forma gráfica todos los elementos pertenecientes al Sistema analizado, así como las relaciones entre sí ("precedencias" y "dependencias"). Incluye también un conjunto de herramientas orientadas al análisis completo del Sistema o elemento específico. Todas las funciones serán explicadas a lo largo de este manual.
    *   "**_Uses cases_**". Contiene una lista completa de todos los "**Casos de usos**". Se puede definir como "**Caso de uso**" de manera resumida, a los procesos de un Sistema que son orientados a una acción específica. Dentro de esta página se podrá hacer un recorrido en cada uno de estos, en varios niveles maximizando el análisis de los mismo.
*   **Configuration** <img src="/ico/001.png" alt="engranaje" width="20" height="20">. Al pulsar sobre este botón, se muestran una serie de switches que modifican la visualización de elementos en la página "**System structure**". A continuación, se explican:

*   **Exclude Files**. Al activar este switch, no se verán los elementos de tipo File (ficheros).
*   **Exclude Ile modules**. Los módulos Ile del Sistema no se mostrarán cuando este switch este activado.
*   **Exclude External**. Estos elementos no se verán cuando este switch esté activado.
*   **Init with open Clusters**. Cuando este switch está activado, los Clusters creados en el Sistema se mostrarán abiertos.
*   **Start empty network**. Si se active este switch, la página "**System structure**" se mostrará vacía.

*   **Full screen** <img src="/ico/002.png" alt="" width="20" height="20">. Pone en modo de pantalla completa la herramienta, para quitar este modo se tendrá que pulsar la tecla [**Esc**].

### System overview

En esta sección se muestra de forma resumida la composición del Sistema mostrando la cantidad específica de módulos, programas y ficheros que lo componen. A continuación, se muestra su apariencia:

![Start screen](/003.jpg)

Se puede observar el nombre del Sistema y posteriormente se observa también la cantidad de módulos, librerías, programas, ficheros, programas de servicios, programas QSYS y un total de objeto, que definen la composición resumida del mismo. Es importante decir que, en la parte inferior derecha se dispone de un botón color verde que al pulsarlo se accede directamente a la página "**System structure**".

### Catálogo del Sistema

Esta sección muestra más detalladamente la distribución de los tipos de elementos en el Sistema, es decir se visualizará la cantidad de elementos separados por tipo y atributo, por ejemplo, se verá la cantidad de programas RPG o ficheros PF entre otros.

![Start screen](/004.jpg)

En la parte inferior de esta sección se puede observar también la media de líneas de código que se han utilizado para crear los elementos del Sistema. A continuación, se mencionan:

*   **Sources lines**. Cantidad de líneas totales promedio por elemento.
*   **Lines of code**. Cantidad de líneas de código promedio por elemento, es decir líneas con instrucciones o comando en la creación del elemento.
*   **Blank lines**. Líneas en blanco promedio por elemento, es decir líneas vacías en la estructura del elemento.
*   **Comment lines**. Líneas de comentarios promedio por elemento, es decir son líneas de comentarios aquellas líneas que contenga el carácter o los caracteres que el lenguaje reconoce como tal, aunque no se especifique una frase.
*   **GOTO lines**. Instrucciones que presentan una estructura de control en la estructura del elemento.
*   **Cyclomatic complexity**. Este campo solo se mostrará para los elementos de tipos de programas, y se refiere al número de alternativas en el flujo del programa. Se obtiene como el número de decisiones binarias en el programa más uno. Para calcular el número de decisiones binarias se realiza un conteo de todas las instrucciones que presentan alternativas de ejecución basándose en condiciones: IF*, WH* (RPG), IF, MONMSG (CL), etc.
*   **Unused Routines**. Son rutinas no usadas, aquellas instrucciones que no son ejecutadas por el elemento.
*   **Unused code lines**. Promedio de las líneas de código no usadas, es decir líneas que no son invocadas por el elemento.

Al pulsar el icono <img src="/ico/003.png" alt="tres puntos" width="5" height="20"> ubicado en la parte inferior derecha de cada recuadro, se muestra un texto descriptivo indicando el significado de cada uno de ellos. A continuación, se muestra:

![Start screen](/005.jpg)
