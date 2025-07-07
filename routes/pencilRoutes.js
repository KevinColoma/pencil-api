const express = require('express');
const router = express.Router();
const controller = require('../controllers/pencilController');

router.post('/', controller.createPencil);
router.get('/', controller.getAllPencils);
router.put('/:id', controller.updatePencil);
router.delete('/:id', controller.deletePencil);
router.get('/search', controller.searchPencil);

module.exports = router;