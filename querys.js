const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	//host: 'localhost',
	dialect: 'sqlite',
	pool: {
		 max: 5,
		 min: 0,
		 idle: 10000
	},
	storage: 'db/test.db',
	define: {
		timestamps: false // true by default
	}
});

const Usuario = sequelize.define('usuarios', {
	usuario: {
		type: Sequelize.STRING
	},
	contrasenia: {
		type: Sequelize.STRING
	}
});

Usuario.findOne().then(usuairo => {
  	console.log(usuairo.get('usuario'));
});