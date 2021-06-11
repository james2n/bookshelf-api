// const {
//   addBookHandler,
//   getAllBooksHandler,
//   getBookByIdHandler,
//   editBookByIdHandler,
//   deleteBookByIdHandler,
// } = require('./handler');

const { addBookHandler } = require('./handler/addBookHandler');
const { getAllBooksHandler } = require('./handler/getAllBooksHandler');
const { getBookByIdHandler } = require('./handler/getBookByIdHandler');
const { editBookByIdHandler } = require('./handler/editBookByIdHandler');
const { deleteBookByIdHandler } = require('./handler/deleteBookByIdHandler');

const routes = [
  // menyimpan buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // menampilkan seluruh buku
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // menampilkan detail buku berdasarkan Id
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  // mengubah data buku berdasarkan Id
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  // menghapus data buku berdasarkan Id
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
