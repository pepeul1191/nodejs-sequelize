var models = require('./models');

var usuarios = models.usuario;

usuarios.findOne().then(usuairo => {
  	console.log(usuairo.get('usuario'));
});