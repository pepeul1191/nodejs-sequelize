const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	//host: 'localhost',
	dialect: 'sqlite',
	pool: {
		 max: 5,
		 min: 0,
		 idle: 10000
	},
	storage: 'db/test.db'
});

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('usuarios', {
usuario: {
type: Sequelize.STRING
},
contrasenia: {
type: Sequelize.STRING
}
});

User.sync({force: true}).then(() => {
	// Table created
	return User.create({
		usuario: 'John',
		contrasenia: 'Hancock'
	});
});

User.findAll().then(users => {
  console.log(users)
})