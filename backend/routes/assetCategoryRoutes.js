const express = require('express');
const router = express.Router();
const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require('../controllers/assetCategoryController');

router.get('/', getAll);
router.post('/', createOne);
router.put('/:id', updateOne);
router.delete('/:id', deleteOne);

module.exports = router;
