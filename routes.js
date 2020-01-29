const express = require('express');

const BooksController = require('./controllers');

const router = express.Router();

router.get('/books', BooksController.getBooks, (req, res) => res.status(200).json({}));

router.get('/', BooksController.getBooks,(req, res) => res.status(200).json([]));


router.post('/books', BooksController.postBooks, (req, res) => res.status(200).json({}));





module.exports = router;