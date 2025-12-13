# react-js-81725

Repositorio creado para presentar las entregas de la comisión: #81725-react-js

# Concepto del proyecto

## 💡 Idea: E‑commerce de un Quiosco
La aplicación surge con la idea un quiosco online, se estableció "KioscoYa" como nombre ya que etimológicamente quiosco con "K" es correcto segun la RAE, a demás "Ya" da una sensación de inmediatez atractiva para el cliente. En la aplicación, el cliente puede:
- Navegar por la página buscando los productos disponibles a través de la main page, las categorías y el combo de búsqueda.
- Podrá tambien seleccionar las cantidades deseadas de cada producto.
- Visualizar el valor unitario, el subtotal por producto, la sumatoria total y el impuesto correspondiente, todo de forma detallada en el carrito.
El carrito de compras incluye dos acciones principales:
- Vaciar carrito, que elimina todos los productos seleccionados.
- Confirmar compra, que avanza al proceso de finalización.
Avanzado éste paso, el cliente deberá cargar un formulario con sus datos:
- Datos del cliente (Nombre, Apellido y e-Mail).
Al confirmar la compra, el sistema genera un ticket final con el detalle de la operación, incluyendo:
- Productos adquiridos.
- Precio total.
- El cliente recibirá un número de orden sobre la cual podría realizar el seguimiento de su pedido.

![projectLogo](/public/assets/images/mainPage.png)


## ⚙️ Instalación y ejecución

Pre-Requisitos:
- Node.js: Instalar versión LTS (recomendado). Versión 22.21.0
- Git: Para clonar repositorios.
- Un gestor de paquetes: npm (incluido con Node). Versión 11.6.2

1. Clonar el repositorio:
- Primero deberá seleccionar una carpeta vacía (confirme que no tenga archivos ocultos dentro).
- Luego deberá ejecutar una terminal (la mas común es CMD o PowerShell).
- - Ejecutará el comando `cd {PATH_LA_CARPETA_VACÍA}` para posicionarse en el lugar deseado.
- - Ejecutará el comando `git clone https://github.com/89pabloalvarez/react-js-81725.git`.
- - Por último seleccionará la rama correspondiente con el siguiente comando `git checkout main`. (en el caso de que por defecto ya este posicionado en main, este paso no es necesario).

2. Instalar las dependencias:
- Para instalar todos los paquetes para que funcione correctamente el proyecto, deberá ejecutar el comando `npm install`. Esperaremos que termine de ejecutar.

3. Crear variables de entorno:
- Dada las precauciones de seguridad, el proyecto no disponibiliza las variables de entorno, pero en el caso de contar con las mismas proporcionadas por el owner del proyecto, podrá crear un archivo `.env` en la raiz del proyecto con las variables necesarias para que se ejecute correctamente la conexión con los servicios de FIREBASE.

4. Ejecución del proyecto:
- Por último, para levantar el proyecto de manera local deberá ejecutar el comando `npm run dev`. Aguarda unos instantes y luego estará ejecutandose en `http://localhost` la aplicación junto con el puerto disponible que encuentre, por ejemplo: `http://localhost:5173/`; si abre ésa dirección en un browser podrá abrir la página del proyecto.
- Alternativamente si cuenta con el IDE Visual Studio Code y levanta el proyecto desde ahi, en los scripts del package.json ya se encuentra el comando `"start:open": "npm run dev:open"` el cual a demás de levantar el proyecto, también abre la página directamente en el browser predeterminado.


## 🌐 Versión Host

- A través de `VERCEL` se hosteó la página de éste proyecto en éste link: [KioscoYa.com](https://react-js-81725.vercel.app/).


### 🗂️ Para el desarrollo se utilizó:

### - 📄 React + Vite
- Como tecnología CORE para el proyecto.
### - 📄 Bootstrap + Bootstrap-Icons
- Para los estilos de la página.
### - 📄 Sweet Alert
- Como alertas para comunicarle al usuario.
### - 📄 React Router Dom
- Para la navegación.
### - 📄 FIREBASE
- Como base de datos para los productos y pedidos.


# Este proyecto fue desarrollado por Pablo Alvarez (Paul Rammone).
[LinkedIn](https://react-js-81725.vercel.app/)

## ENTREGA FINAL:

En ésta entrega sin duda me superé, en muy poco tiempo vi evolucionar mi página usando librerias externas que ni sabía que existían, lo que a su vez me impulsó a investigar que otras existen y fue muy interesante! Me gustó sacar el mock y ver que mis datos estaban guardados en una base de datos, la aplicación de repente tomó otro formato, le di volume al carrito y al manejo de los productos, el control de stock, las alertas, incluso hacer un componente loader con el spinner y la alerta me encantó!! Extraer las funciones para firebase, y usar algunas funciones en el context que se comunica a través de otros componentes me dio otras perspectivas que me volvió loco!! despues empezar a "jugar" con los apartados visuales.. por ejemplo en un momento me dije voy a inhabilitar el botón comprar si no tiene stock, ah y a demas le voy a agregar una imagen etiqueta superpuesta o mas tirando para la parte lógica, abri dos paginas en simultaneo y agregue al carrito los mismos articulos y en una pagina le consumí todo el stock y en la otra procesé la compra y en tiempo real me valido de que no había stock (funcionando el método que diseñe y no me llevo el stock en negativo! jaja), empezar a jugar con los botones del alert y después con la navegación, me encanto!; despues formatear la orden y tal como un "post" de una api clásica el addDoc agregando a una collection nueva de firebase el registro nuevo es espectacular, despues ver que me grababa datos innecesarios y hacer una funcion para guardar solo los datos que necesitava, fue una experiencia excelente, me encantó!! gracias por todo!!

## SEGUNDA ENTREGA:

Se tomó la observación de la primer entrega respecto a la separación de responsabilidades, se tomaron los contenedores padre para resolver la lógica y los hijos para exponer el componente visual, tarjetas, listas, detalles, etc. Solo el Cart quedó como estaba porque todavia no es funcional, es SOLO visual, lo voy a acomodar cuando le de uso, hasta la prop esta hardcodeada, le meti mucho amor y tiempo, por favor no tomar en cuenta el cart, prometo cuando este funcional estará como corresponde!!
Se aplicaron los cambios correspondientes para la entrega n°2 sobre las rutas de navegación sobre la web, se dejo el NavBar como estaba, convirtiendo los anchor en Links de react-dom, asi como tambien se hizo el método en el mock para filtrar categorias que se incorporaron en un CategoryNav, con un aside (ya lo había hecho en el curso de HTML, quería ver como quedaba en react) asi que tuve que dividir el main en un layout de 2 "partes" (mas bien componentes padres) me gustó el resultado, tuve que ponerle "block" en flex para que quede anclado sino cuando scrolleaba lo perdia de vista, en fin, tambien hice el filtro por ID y un filtro por texto que lo haré para la entrega final POR FAVOR no me evaluen el search que meti, lo terminare en la entrega final!! tengo que meter un listener o algo ahi para que cuando escriba se actualicen los productos, todavia lo estoy maquinando en mi cabeza!! los métodos de simulación de API ya estarían todos, incluso fui un paso mas y le agregué un "rejected" al getProductById para indicar cuando un ID no se encuentra en la lista de productos, eso lo manejo en el componente contenedor donde si no encuentra el objeto me devuelve la respuesta de la api en un "Alert" de bootstrap, se acomodaron algunos estilos que eran básicos en la entrega anterior y se le dio una mejor forma. Se agregaron nuevas funcionalidades en el helper, como por ejemplo el formateo de las url para sacar los espacios y convertirlos en "-", tambien se dejaron ahi las funciones de "suma" y "resta" de productos que se hará mas adelante, se cumplio incluso que no era requerido con la inclusión del componente "ProductCount" que es el que manejará las cantidades del producto.

## PRIMER ENTREGA:

Ante las experiencias previas que tuve en otros proyectos realmente no sentí muy complicado React, de hecho, todo lo contrario, hay cosas mejor y mas faciles resueltas que hacer a mano un engache entre html, javascript y css.
En ésta primer entrega armo la estructura del proyecto como me lo imagino en la cabeza, realmente puede variar para futuras entregas, me falta toda la parte del route para poder navegar entre componentes, arme los componentes header, footer y main que corresponde a una estructura básica de una página como contenedores, luego arme otros componentes "hijos" como el cart de compras y el nav, el footer es simplemente una imagen y un parrafo, la página es un titulo y un parrafo tambien, simplemente para no estar vacíos, claro está que cuando tenga resuelto el route poblaré la página de "Acerca de Nosotros"; "home" sería la página de inicio cuando se abre la página ahi se verían los productos, tal vez pienso un menú lateral como un componente extra, pero bueno, me faltan aprender bastantes cosas. Para ésta primera entrega, se entiende que se requería sólo la estructura de la página. Los links del nav no navega a ningun lado.