const itemController = require('../controllers/item');

const express = require('express');

const router = express.Router();

//router.get('/', groceryController.getAllGroceries);
//router.post('/', groceryController.postGrocery);
//router.put('/', groceryController.putGrocery);

router.get('/:id', itemController.getAllItems);

router.post('/add/', itemController.addItem);

router.put('/edit/', itemController.updateItem);

router.delete('/delete/:id', itemController.removeItem);


module.exports = router;