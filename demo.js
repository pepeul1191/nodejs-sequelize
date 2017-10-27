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

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});

const Usuario = sequelize.define('usuarios', {
	usuario: {
		type: Sequelize.STRING
	},
	contrasenia: {
		type: Sequelize.STRING
	}
});

const Post = sequelize.define('post', {}, {
	nombre: {
		type: Sequelize.STRING
	},
  	timestamps: true // timestamps will now be true
});

Usuario.sync({force: true}).then(() => {
	// Table created
	return Usuario.create({
		usuario: 'John',
		contrasenia: 'Hancock'
	});
});

Post.sync({force: true}).then();

Usuario.findAll().then(users => {
  console.log(users)
})