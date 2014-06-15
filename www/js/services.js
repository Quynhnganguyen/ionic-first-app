angular.module('starter.services', ['starter.config'])

/**
 * A simple example service that returns some data.
 */
.factory('DB', function($q, DB_CONFIG){
	var self = this;
	self.db = null;

	self.init = function(){
		self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);
		angular.forEach(DB_CONFIG.tables, function(table){
			var columns=[];

			angular.forEach(table.columns, function(column){
				columns.push(column.name+' '+column.type);
			});

			var query = 'create table if not exists' + table.name + ' ('+ column.join(',') + ')';
			self.query(query);
			console.log('table' + table.name + 'initialized');
		});
		self.executeSql("INSERT INTO inscription VALUES (1,'Ryan', 'Howard', 'Vice President, North East','ryan@dundermifflin.com', 'motdepasse')");
	};

	self.query = function(query, bindings){
		bindings = typeof bindings !== 'undefined' ? bindings : [];
		var deferred = $q.defer();

		self.db.transaction(function(transaction){
			transaction.executeSql(query, bindings, function(transaction, result){
				deferred.resolve(result);
			}, function(transaction, error){
				deferred.reject(error);
			});
		});
		return deferred.promise;
	};

	self.fetchAll = function(result){
		var output = [];

		for (var i = 0; i< result.rows.length; i++){
			output.push(result.rows.item(i));
		}
		return output;
	};

	self.fetch = function(result){
		return result.rows.item(0);
	};
	return self;
})

.factory('Inscription', function(DB){
	var self = this;

	self.all = function(){
		return DB.query('select * from inscription')
		.then(function(result){
			return DB.fetchAll(result);
		});
	};

	self.getById = function(id){	
		return DB.query('select * from inscription where id = '+id)
		.then(function(result){
			result DB.fetch(result);
		});
	};
	// self.getByEmail = function(email){	
	// 	return DB.query('select * from users where email = ?',[email])
	// 	.then(function(result){
	// 		result DB.fetch(result);
	// 	});
	// };

	// self.insertUser = function(user){
	// 	return DB.query('insert into users(nom,prenom,adresse,email,password) 
	// 		values ('+user.nom+','+ user.prenom+','+ user.adresse+ ','+ user.mail+','+ user.password')')
	// 	.then(function(result){
	// 		return DB.result;
	// 	});
	// };
	return self;
});