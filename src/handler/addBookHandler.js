const { nanoid } = require('nanoid');
const books = require('../books');

// Handler untuk tambah buku
const addBookHandler = (request, h) => {
  // menangkap request dari client "request.payload"
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(16);
  const finished = pageCount == readPage;

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  // tidak ada input name
  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  // readPage lebih besar dari pageCount
  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  // proses insert buku
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };
  books.push(newBook);

  // mengecek apakah buku sudah berhasil ditambahkan
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  // response saat buku berhasil ditambahkan
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  // rsponse saat gagal tambah buku
  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};

module.exports = {
  addBookHandler,
};
