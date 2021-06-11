const { nanoid } = require('nanoid');
const _ = require('lodash');
const books = require('../books');

const getAllBooksHandler = (request, h) => {
  // const { name, reading, finished } = request.query;

  // if (reading !== undefined) {
  //   books.filter((book) => book.reading === (reading === '1'))
  // }

  // const filterBook = books.map((book) => ({
  //   id: book.id,
  //   name: book.name,
  //   publisher: book.publisher,
  // }));

  //todo: cari supaya nama buku kosong dan pageRead lebih besar dari pageCount supaya tidak menampilkan data

  if (books !== undefined) {
    return {
      status: 'success',
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    };
  }

  //* sudah ok cuman masalah di ambil data
  // if (filterBook !== undefined) {
  //   return {
  //     status: 'success',
  //     data: {
  //       books: filterBook,
  //     },
  //   };
  // }
};
// ----------------

module.exports = {
  getAllBooksHandler,
};
