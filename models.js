const Sequelize = require('sequelize');
var database = require('./database');

var db = database.db;

const Usuario = db.define('usuarios', {
	usuario: {
		type: Sequelize.STRING
	},
	contrasenia: {
		type: Sequelize.STRING
	}
});

const Post = db.define('post', {}, {
	nombre: {
		type: Sequelize.STRING
	},
  	timestamps: true
});

exports.usuario = Usuario;
exports.post = Post;