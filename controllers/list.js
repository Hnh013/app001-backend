const List = require('../models/list');



exports.getAllLists = async (req,res,next) => {
    try {
        const [getResponse]  = await List.fetchAllLists();
        res.status(200).json(getResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};


exports.getOnesLists = async (req,res,next) => {
    try {
        const [getoneResponse]  = await List.fetchOnesLists(req.params.id);
        res.status(200).json(getoneResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};

//fetchOnesActiveLists
exports.getOnesActiveLists = async (req,res,next) => {
    try {
    	const status = 1;
        const [getoneActiveResponse]  = await List.fetchOnesActiveLists(req.params.id, status);
        res.status(200).json(getoneActiveResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};

//fetchOnesInactiveLists
exports.getOnesInactiveLists = async (req,res,next) => {
    try {
    	const status = 0;
        const [getoneInactiveResponse]  = await List.fetchOnesActiveLists(req.params.id, status);
        res.status(200).json(getoneInactiveResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};



exports.editStatusLists = async (req,res,next) => {
    try {
        const [getResponse]  = await List.updateStatusLists();
        res.status(200).json(getResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};




exports.editOnesList = async (req,res,next) => {
    try {
         const id = req.body.id;
         const user_id = req.body.user_id;
         const name = req.body.name;
         const updated_date = req.body.updated_date;
         const status = req.body.status;

         const listDetails = {
         	id : id,
         	user_id: user_id,
            name: name,
            updated_date: updated_date,
            status: status
        }

        const editResponse  = await List.updateOnesList(listDetails);
        res.status(201).json(editResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};





exports.postOnesList = async (req,res,next) => {
    try {

         const user_id = req.body.user_id;
         const name = req.body.name;
         
         const status = req.body.status;

         const listDetails = {
         	user_id: user_id,
            name: name,
            
            status: status
        }

        const postResponse  = await List.createOnesList(listDetails);
        res.status(201).json(postResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};

exports.editOnesList = async (req,res,next) => {
    try {
         const id = req.body.id;
         const user_id = req.body.user_id;
         const name = req.body.name;
         const status = req.body.status;

         const listDetails = {
         	id : id,
         	user_id: user_id,
            name: name,
            status: status
        }

        const editResponse  = await List.updateOnesList(listDetails);
        res.status(201).json(editResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};













exports.deleteOnesList = async (req,res,next) => {
    try {
        const delResponse  = await List.removeOnesList(req.params.id);
        res.status(201).json(delResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};