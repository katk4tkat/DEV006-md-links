# 1. Proyecto  MDLinks

###¿Qué es Markdown?

Markdown es un lenguaje de marcado que permite dar formato a un texto plano utilizando caracteres especiales. Con este lenguaje, es posible aplicar estilos como itálicas, negritas, crear listas, encabezados, citas, insertar código en línea o en bloque, enlaces y más.

## Resumen del producto
Markdown se utiliza ampliamente en diversas plataformas como GitHub, foros y blogs, así como para crear documentación. Es común encontrar archivos en formato Markdown en todo tipo de repositorios.

Estos archivos suelen contener enlaces (links) que, en ocasiones, están rotos o ya no son válidos, lo que afecta considerablemente el valor de la información que se desea compartir.

Dentro de una comunidad de código abierto, se nos ha propuesto crear una herramienta utilizando Node.js. Esta herramienta permitirá al usuario explorar un directorio, filtrar los archivos en formato Markdown y extraer los enlaces que contengan para verificar su estado. La herramienta proporcionará información sobre si los enlaces están activos, rotos o no se pueden conectar, y también brindará estadísticas que se mostrarán en la consola, como la cantidad total de enlaces, el estado de cada enlace y la cantidad de enlaces únicos.

### Definir el problema:

Los archivos Markdown pueden contener enlaces que se encuentran rotos, lo que los vuelve rápidamente obsoletos. Revisar uno a uno los links es una tarea tediosa y difícil, es por eso que se vuelve necesario tener una herramienta que permita realizar la validación de forma rápida. 

### Solución: 
Generar una herramienta que permita al usuario validar si los links contenidos en su archivo MD están funcionando o no. 

##Diagrama de flujo 

Para poder diseñar esta herramienta, fue necesario implementar un [diagrama de flujo](https://miro.com/app/board/uXjVM7AfxS0=/?share_link_id=624662679560).

### Hitos importantes 

#### Convertir una ruta relativa en absoluta. 
Debe ser capaz de reconocer si una ruta es absoluta  o relativa, en caso de que sea relativa debe pasarla a ruta absoluta. 

#### Validar si la ruta es correcta. 
Una vez obtenida la ruta, es importante revisar si esta es correcta. Es importante que se realice primero el paso anterior, ya que sino podría dar un falso error en la validación. 
	
#### Ver si se trata de un archivo o directorio.
Esto nos permitirá dar una respuesta al usuario, para que si ingresa un directorio dar una lista de archivos MD disponibles, en caso de que no haya entregar esa información. 
#### Si es un archivo, validar que sea de extensión MD.
Una vez seleccionado el archivo, validar que sea de extensión MD para poder leerlo. 
#### Verificar si contiene links. 
Si el archivo tiene links, podremos trabajar con él. 
#### Dar la opción de validarlos o no
A través del parámetro options, el usuario podrá elegir si validar o no los links contenidos en el archivo. 

## 4. Resultado
