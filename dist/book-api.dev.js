"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();
var port = 3000; // Where we will keep books

var books = [];
app.use(cors()); // Configuring body parser middleware

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.post('/book', function (req, res) {
  // We will be coding here
  app.post('/book', function (req, res) {
    var book = req.body; // Output the book to the console for debugging

    console.log(book);
    books.push(book);
    res.send('Book is added to the database');
  });
  app.get('/book/:isbn', function (req, res) {
    // Reading isbn from the URL
    var isbn = req.params.isbn; // Searching books for the isbn

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = books[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var book = _step.value;

        if (book.isbn === isbn) {
          res.json(book);
          return;
        }
      } // Sending 404 when not found something is a good practice

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    res.status(404).send('Book not found');
  });
  app["delete"]('/book/:isbn', function (req, res) {
    // Reading isbn from the URL
    var isbn = req.params.isbn; // Remove item from the books array

    books = books.filter(function (i) {
      if (i.isbn !== isbn) {
        return true;
      }

      return false;
    });
    res.send('Book is deleted');
  });
  app.post('/book/:isbn', function (req, res) {
    // Reading isbn from the URL
    var isbn = req.params.isbn;
    var newBook = req.body; // Remove item from the books array

    for (var i = 0; i < books.length; i++) {
      var book = books[i];

      if (book.isbn === isbn) {
        books[i] = newBook;
      }
    }

    res.send('Book is edited');
  });
});
app.listen(port, function () {
  return console.log("Hello world app listening on port ".concat(port, "!"));
});