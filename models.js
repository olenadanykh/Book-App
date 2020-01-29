const mongoose = require('mongoose');

const URI = "mongodb+srv://olenadanykh:31Lenok543542@cluster0-wtt28.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) return {books: {err: 'Error from mongoose.connect'}}
  console.log('Connected to MongoDB')
});
  
  const Schema = mongoose.Schema;

  const booksSchema = new Schema({
    title: String,
    author: String,
    pages: Number
  });
  
  // creats a model for the 'books' collection that will be part of the export
  const Books = mongoose.model('Books', booksSchema);
  
  
  // exports all the models in an object to be used in the controller
  module.exports = {
    Books
  }