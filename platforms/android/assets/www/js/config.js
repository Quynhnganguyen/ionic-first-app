angular.module('starter.config', [])

.constant('DB_CONFIG', {
    name: 'DB',
    tables: [
      {
            name: 'users',
            columns: [
                {name: 'id', type: 'serial primary key'},
                {name: 'nom', type: 'text'},
                {name: 'prenom', type: 'text'},
                {name: 'adresse', type: 'text'},
                {name: 'email', type: 'text'},
                {name: 'password', type: 'text'}
            ]
        }
    ]
});