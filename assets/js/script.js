// array vacio para ir agregando las imagenes
let carrito = []

//llamamos a la imagen
const imagenes = $('.cambiar_color')

//llamamos al modal body
const carritoImg = $('.modal-body')

$(document).ready(function () {
  //Vamos recorriendo el array de las imagenes
  imagenes.each(function (index, img) {
    // al hacer click en una imagen se vuelve opaca
    $(img).on('click', function () {
      $(this).css('opacity', '0.5')

      //la vamos juntando en el arreglo vacio
      carrito.push(this.src)

      //creamos la etiqueta imagen con los atributos correspondientes
      const imagenCarrito = $('<img>', { src: this.src })
      imagenCarrito.css('width', '100px')
      //aqui se ve en el modal
      carritoImg.append(imagenCarrito)
    })

    //al hacer doble click la imagen vuelve a su color normal
    $(img).on('dblclick', function () {
      $(this).css('opacity', '1')
      const imgSrc = this.src

      // Encuentra y elimina la imagen del carrito por su src
      carritoImg.find(`img[src="${imgSrc}"]`).remove()
    })
  })
})
