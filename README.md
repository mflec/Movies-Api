CHALLENGE BACKEND - NodeJs
🚀

Este repositorio es parte de un proyecto realizado a modo challenge para evaluar mis conocimientos en Back-End por parte de Alkemy.

Las indicaciones eran: 

Objetivo

Desarrollar una API para explorar el mundo de Disney, la cual permitirá conocer y modificar los
personajes que lo componen y entender en qué películas estos participaron. Por otro lado, deberá
exponer la información para que cualquier frontend pueda consumirla.

👉 Utilizar NodeJs y Express.

👉 Las rutas deberán seguir el patrón REST.

👉 Utilizar la librería Sequelize.


Requerimientos técnicos

1. Modelado de Base de Datos

● Personaje: deberá tener,

○ Imagen.

○ Nombre.

○ Edad.

○ Peso.

○ Historia.

○ Películas o series asociadas.

● Película o Serie: deberá tener,

○ Imagen.

○ Título.

○ Fecha de creación.

○ Calificación (del 1 al 5).

○ Personajes asociados.

● Género: deberá tener,

○ Nombre.

○ Imagen.

○ Películas o series asociadas.

2. Listado de Personajes

El listado deberá mostrar:

● Imagen.

● Nombre.

El endpoint deberá ser:

● /characters

3. Creación, Edición y Eliminación de Personajes (CRUD)
Deberán existir las operaciones básicas de creación, edición y eliminación de personajes.

4. Detalle de Personaje
En el detalle deberán listarse todos los atributos del personaje, como así también sus películas o
series relacionadas.

5. Búsqueda de Personajes
Deberá permitir buscar por nombre, y filtrar por edad, peso o películas/series en las que participó.
Para especificar el término de búsqueda o filtros se deberán enviar como parámetros de query:

● GET /characters?name=nombre

● GET /characters?age=edad

● GET /characters?movies=idMovie

6. Listado de Películas
Deberá mostrar solamente los campos imagen, título y fecha de creación.
El endpoint deberá ser:

● GET /movies

7. Detalle de Película / Serie con sus personajes
Devolverá todos los campos de la película o serie junto a los personajes asociados a la misma

8. Creación, Edición y Eliminación de Película / Serie
Deberán existir las operaciones básicas de creación, edición y eliminación de películas o series.

9.Búsqueda de Películas o Series
Deberá permitir buscar por título, y filtrar por género. Además, permitir ordenar los resultados
por fecha de creación de forma ascendiente o descendiente.
El término de búsqueda, filtro u ordenación se deberán especificar como parámetros de query:

● GET /movies?name=nombre

● GET /movies?genre=idGenero

● GET /movies?order=ASC | DESC
