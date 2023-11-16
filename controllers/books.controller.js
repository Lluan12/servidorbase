const Book = require('../models/book.model');

exports.getBooks = async (req, res) => {
	try {
		const books = await Book.find();
		return res.status(200).json(
			{
				message: "Libros obtenidos con exito",
				data: books
			}
		);
	} catch (error) {
		return res.status(500).json(
			{
				message: "Error al consultar libros",
				data: error
			}
		);
	}
}

// Consultar libro por Id
exports.getBookById = async (req, res) => {
	const bookId = req.params.bookId;
	try {
		const book = await Book.findById(bookId);
		return res.status(200).json(
			{
				message: "Libro obtenido con exito",
				data: book
			}
		);
	} catch (error) {
		return res.status(500).json(
			{
				message: "Error al consultar libro",
				data: error
			}
		);
	}
}

// Crear nuevo libro
exports.newBook = async (req, res) => {
	try {
		const {titulo, autor, isbn, genero, precio, stock} = req.body;
		const newBook = new Book({titulo, autor, isbn, genero, precio, stock});
		await newBook.save();
		return res.status(200).json(
			{
				message: "Libro creado con exito",
				data: newBook
			}
		);
	} catch (error) {
		return res.status(500).json(
			{
				message: "Error al crear libros",
				data: error
			}
		);
	}
}

// Actualizar libro por Id
exports.updateBook = async (req, res) => {
	const bookId = req.params.bookId;
	const newData = req.body;
	try {
		const updateBook = await Book.findByIdAndUpdate(bookId, newData, {new: true});
		return res.status(201).json(
			{
				msg: "Actualizar libro por Id",
				data: updateBook
			}
		);
	} catch (error) {
		return res.status(500).json(
			{
				message: "Error al actualizar libro",
				data: error
			}
		);
	}
}

exports.deleteBook = async (req, res) => {
	const bookId = req.params.bookId;
	try {
		await Book.findByIdAndDelete(bookId);
		return res.status(201).json(
			{
				msg: "Libro eliminado con Id: " + bookId,
			}
		);
	} catch (error) {
		return res.status(500).json(
			{
				message: "Error al eliminar libro",
				data: error
			}
		);
	}
}