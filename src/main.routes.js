const { Router } = require('express');
const { allBooks, addBook, getById, deleteBook, editBook } = require('./main.controllers');


const router = Router();





router.get("/books", allBooks)
router.get("/books/:id", getById)
router.post("/books", addBook)
router.delete("/books/:id", deleteBook)
router.patch("/books/:id", editBook)

module.exports = router