const listController = require('../controllers/list');

const express = require('express');

const router = express.Router();

//router.get('/', groceryController.getAllGroceries);
//router.post('/', groceryController.postGrocery);
//router.put('/', groceryController.putGrocery);

router.get('/', listController.getAllLists);

///////////////////////////////////////////////////////////////////////////////////////////


router.get('/:id', listController.getOnesLists);

router.get('/il/:id', listController.getOnesInactiveLists);

router.get('/al/:id', listController.getOnesActiveLists);

////////////////////////////////////////////////////////////////////////////////////////////


router.post('/', listController.postOnesList);

////////////////////////////////////////////////////////////////////////////////////////////

router.put('/', listController.editOnesList);

router.put('/o/', listController.editStatusLists);

///////////////////////////////////////////////////////////////////////////////////////////

router.delete('/:id', listController.deleteOnesList);

module.exports = router;