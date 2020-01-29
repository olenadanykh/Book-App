const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');
const app = express();
const PORT = 3000;
const booksController = require('./server/controllers')

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './build')));

app.get('/books', (req, res) => {
    res.status(200).json(res.locals.books)
})

app.post('/books', booksController.postBooks, (req, res) => {
    res.status(200).send('OK')
})

// app.post('/books', booksController.deleteBooks, (req, res) => {
//     res.status(200).send('OK')
// })


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));


});





app.use((err,req, res,next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });



  module.exports = app;