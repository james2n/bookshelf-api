const { addBookHandler } = require('./handler/addBookHandler');
const { getAllBooksHandler } = require('./handler/getAllBooksHandler');
const { getBookByIdHandler } = require('./handler/getBookByIdHandler');
const { editBookByIdHandler } = require('./handler/editBookByIdHandler');
const { deleteBookByIdHandler } = require('./handler/deleteBookByIdHandler');

const routes = [
  // untuk menambah buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // untuk menampilkan seluruh buku atau berdasarkan query request
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // untuk menampilkan detail buku berdasarkan Id
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  // untuk mengubah data buku berdasarkan Id
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  // untuk menghapus data buku berdasarkan Id
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
