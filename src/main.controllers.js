const {newConnection} = require("../bd")

const allBooks = async (req,res)=>{


    const connection = await newConnection()

    const result = await connection.query("SELECT * FROM books")

    res.json(result[0])

    connection.end;

    
}

const getById = async(req,res) => {

    const connection = await newConnection()

    const id =  req.params.id

    const result = await connection.query(`SELECT * FROM books WHERE IdBook = ?`, id)

    res.json(result[0])

    connection.end()

} 
const addBook = async(req,res)=>{

    const {title,author} = req.body
    
    const connection = await newConnection()

    const re = await connection.query(`INSERT INTO books (title,author) VALUES (?,?)`, [title,author])

    res.send('se creo el libro')


} 
const deleteBook = async(req,res)=>{

    const connection = await newConnection()

    const id =  req.params.id

    const result = await connection.query(`DELETE FROM books WHERE IdBook = ?`, id)

    res.send("se elimino")
}

const editBook = async (req, res) => {
    const connection = await newConnection();
    const id = req.params.id;
    const { IdBook, title, author } = req.body;
    const result = await connection.query(
        `UPDATE books SET title = ?, author = ? WHERE IdBook = ?`,
        [title, author, id]
    );
    res.send("Book updated");
};


module.exports = {
    allBooks,
    addBook,
    getById,
    deleteBook,
    editBook

}