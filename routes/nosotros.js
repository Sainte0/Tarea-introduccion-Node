var express = require('express');
const { route } = require('.');
var router = express.Router( );

// Ruta 1: Página de inicio
router.get('/', function(req, res , next) {
    res.send('¡Hola, esta es la página de inicio!');
  });
  
  // Ruta 2: Página "acerca de"
  router.get('/about', function(req, res , next) {
    res.send('Esta es la página "Acerca de nosotros".');
  });
  
  // Ruta 3: Página de contacto
  router.get('/contact', function(req, res, next)  {
    res.send('Puedes contactarnos en contact@example.com.');
  
});

module.exports = router;