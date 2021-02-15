const Item = require('../models/item');

exports.getAllItems = async (req,res,next) => {
    try {
        const [getResponse]  = await Item.fetchItems(req.params.id);
        res.status(200).json(getResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};


exports.addItem = async (req,res,next) => {
    try {

         const list_id = req.body.list_id;
         const item_desc = req.body.item_desc;
         

         const item = {
         	list_id: list_id,
            item_desc: item_desc,
        }

        const postResponse  = await Item.createItem(item);
        res.status(201).json(postResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};



exports.updateItem = async (req,res,next) => {
    try {
         const id = req.body.id;
         const list_id = req.body.list_id;
         const item_desc = req.body.item_desc;
         

         const item = {
         	id : id,
         	list_id: list_id,
            item_desc: item_desc
        }

        const editResponse  = await Item.editItem(item);
        res.status(201).json(editResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};



exports.removeItem = async (req,res,next) => {
    try {
        const delResponse  = await Item.deleteItem(req.params.id);
        res.status(201).json(delResponse);
    }  catch (err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }        
        next(err);
    }
};