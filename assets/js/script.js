// array vacio para ir agregando las imagenes
let carrito = []

//llamamos a la imagen
const imagenes = document.querySelectorAll('.cambiar_color')

//llamamos al modal body
const carritoImg = document.querySelector('.modal-body')

//hacemos un foreach a las imagenes para cuando se le haga click a la imagen en especifico se ponga opaca
imagenes.forEach((img) => {
  img.addEventListener('click', () => {
    img.style.opacity = '0.5'
    const imagenClonada = img.cloneNode(true)
    carrito.push(imagenClonada)

    // Mostrar la imagen en el carrito,creamos el elemento img luego asignmos la imagenClonada
    //finalmente al carritoImg le agregamos la imagen
    const imagenEnCarrito = document.createElement('img')
    imagenEnCarrito.src = imagenClonada.src
    imagenEnCarrito.style.width = '100px'
    carritoImg.appendChild(imagenEnCarrito)
  })
})
