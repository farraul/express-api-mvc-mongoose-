const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const PeliculaRouter = require('./routes/pelicula.routes');
const PedidoRouter = require('./routes/pedido.routes');
const UsuarioRouter = require('./routes/usuario.routes');
const UserRouter = require('./routes/user.router');

//Rutas
router.use('/pelicula', auth,  PeliculaRouter);
router.use('/pedido', auth, PedidoRouter);
router.use('/usuario', auth, UsuarioRouter);
router.use('/api', UserRouter); 


module.exports = router;