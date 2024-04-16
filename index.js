//importar express
const express = require('express')

//importar handlebars
const exphbs = require('express-handlebars')
const path = require('path')
//instanciar express
const app = express()
app.use('/assets', express.static(path.join(__dirname, 'assets')))

// app.use('/assets', express.static(__dirname + 'assets'))
//middleware de la ruta bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/bootstrapjs', express.static(__dirname + '/node_modules/dist/js'))

//middleware de la ruta jquery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))

// app.use(express.static(__dirname + "/prueba"));

//ruta para imagenes
app.use(express.static(__dirname + '/img'))
//definir handlebars como motor de plantillas
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
//definir handlebars como motor de plantillas
app.engine(
  'handlebars',
  exphbs.engine({
    extname: '.handlebars', //extension de archivos
    defaultLayout: 'Main', // plantilla principal
    layoutsDir: __dirname + '/views', // directorio de plantilla principal
    partialsDir: __dirname + '/views/partials', // directorio de los partials
  }),
)

const productos = ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate']

app.get('/', function (req, res) {
  res.render('Main', {
    layout: 'Main',
    productos: productos,
  })
})

//levantando el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000')
})
