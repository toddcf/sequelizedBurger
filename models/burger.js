'use strict';

module.exports = function(sequelize, DataTypes) {
	var burgers = sequelize.define(
		'burgers',
		{
			burger_name: DataTypes.STRING,
			devoured: DataTypes.BOOLEAN
		},
		{
			classMethods:
				{
					associate: function(models)
						{
							// Define associations here.
						}
				}
		}
	);
	return burgers;
};

// var orm = require('../config/orm.js');

// var burger = {
// 	all: function(cb) {
// 		orm.all('burgers', function(res){
// 			cb(res)
// 		});
// 	},
// 	create: function(name,cb) {
// 		orm.create(
// 			'burgers',
// 			['burger_name', 'devoured'],
// 			[name, false],
// 			cb
// 		);
// 	},
// 	update: function(id, cb) {
// 		var condition = 'id=' + id;
// 		orm.update('burgers', {devoured : true}, condition, cb);
// 	}
// };

// module.exports = burger;