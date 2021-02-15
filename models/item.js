const db = require('../util/database');

module.exports = class Grocery {
    constructor(id, item) {
        this.id = id;
        this.list_id = list_id
        this.item_desc = item_desc;
    }

    static fetchItems(id) {
        return db.execute('SELECT * from items WHERE list_id = (?)', [id]);
    }

    
    static createItem(item) {
    	return db.execute('INSERT INTO items (list_id, item_desc) VALUES(?,?)', [item.list_id, item.item_desc, item.list_id]);
    }

    static editItem(item) {
    	return db.execute('BEGIN UPDATE items SET list_id = (?), item_desc = (?) WHERE id = (?)', [item.list_id, item.item_desc, item.id, item.list_id]);         
    }

    static deleteItem(id) {
        return db.execute('DELETE from items WHERE id = (?)', [id]);	
    }

    
}; 
