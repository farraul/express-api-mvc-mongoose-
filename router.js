const router = require('express').Router();

//Importamos Routes definidas en views
const PeliculaRouter = require('./routes/pelicula.routes');
const PedidoRouter = require('./routes/pedido.routes');
const UsuarioRouter = require('./routes/usuario.routes');

//Rutas
router.use('/pelicula', PeliculaRouter);
router.use('/pedido', PedidoRouter);
router.use('/usuario', UsuarioRouter);

module.exports = router;