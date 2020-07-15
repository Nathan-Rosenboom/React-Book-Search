const express = require('express');
const router = express.Router();
const { book } = require('../controllers');

router.get('/', book.list);

router.post('/', book.add);

router.delete('/:_id', book.remove);

module.exports = router;