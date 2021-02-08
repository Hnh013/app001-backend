const db = require('../util/database');

module.exports = class Grocery {
    constructor(id, item) {
        this.id = id;
        this.item = item;
    }

    static fetchAll() {
        return db.execute('SELECT * from grocery');
    }

    static post(item) {
    	return db.execute('INSERT into grocery (item) VALUES (?)', [item]);
    }

    static update(id, item) {
    	return db.execute('UPDATE grocery set item = ? WHERE id = ?', [item, id]);         
    }

    static delete(id) {
        return db.execute('DELETE from grocery WHERE id = ?', [id]);	
    }

    
}; 