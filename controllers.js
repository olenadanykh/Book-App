const { Books } = require('./models');
const booksController = {};



booksController.getBooks = (req, res, next) => {
    Books.find({}, (err, books) => {
    if(err) return next(err);
        // send the list of all books
       res.locals.books = books;
    return next();
    });
}

booksController.postBooks = (req, res, next) => {
    const { title, author, pages } = req.body;
    // console.log(req.body)
    Books.create({ title, author, pages }, (err, booksAdded) => {
        if (err) return next(err);
        return next();
    })

}

// booksController.deleteBooks = (req, res, next) => {
//     const { titles, authors, pages } = req.body;
//     Books.deleteOne({ titles, authors, pages }, (err, booksDeleted) => {
//         if(err) return next(err);
//         return next();
//     })


// }

  module.exports = booksController;