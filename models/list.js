const db = require('../util/database');

module.exports = class List {
    constructor(id, user_id, name, updated_date, status) {
        this.id = id;
        this.user_id = user_id;
        this.name = name;
        this.updated_date = updated_date;
        this.status = status;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // GET all lists from the table

    static fetchAllLists() {
        return db.execute('SELECT * from lists');
    }

    // GET all lists of a single user

    static fetchOnesLists(id) {
        return db.execute('SELECT * FROM lists WHERE user_id = (?)', [id]); 
    }

    //////////////////////////////////////////////////////////////////////////////////////////// GET only active lists of a user

    static fetchOnesActiveLists(id, status) {
        return db.execute('SELECT * FROM lists WHERE (user_id,status) = (?,?)', [id, status]); 
    }

    // GET only inactive lists of a user

    static fetchOnesInactiveLists(id, status) {
        return db.execute('SELECT * FROM lists WHERE (user_id,status) = (?,?)', [id, status]); 
    }
     
    // GET all lists and items info


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    

    /////////////////////////////////////////////////////////////////////////////////////////////////////////// POST a list of a user

    static createOnesList(listDetails) {
    	return db.execute(
            'INSERT INTO lists (user_id, name, updated_date, status) VALUES (?, ?, CURRENT_DATE, ?)',
            [listDetails.user_id, listDetails.name, listDetails.status]);
    }

    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////////////////// UPDATE a list : all values

    static updateOnesList(listDetails) {
    	return db.execute('UPDATE lists SET user_id = (?), name = (?), updated_date = CURRENT_DATE, status = (?) WHERE id = (?)',
         [listDetails.user_id, listDetails.name, listDetails.status, listDetails.id]);         
    }


    ///////////////////////////////////////////////////////////////////////////////////////////// UPDATE a list : Change status only
    static deactivateList(id) {
        return db.execute("UPDATE lists SET `status` = 0 WHERE id = (?)",[id]);
    }


    ////////////////////////////////////////// UPDATE all lists : Change status to inactive , i.e. , 0 , after 30 days without changes
    static updateStatusLists() {
        return db.execute("UPDATE lists SET `status` = CASE WHEN( DATEDIFF(CURRENT_DATE, `updated_date`) > 30) THEN 0 ELSE 1 END");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   

    // DELETE a list : not recommended for sensitive data , better option to change status

    static removeOnesList(id) {
        return db.execute('DELETE FROM lists WHERE id = (?)', [id]); 
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
}; 