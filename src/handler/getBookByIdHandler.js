const books = require('../books');

// Handler untuk menampilkan detail buku by ID
const getBookByIdHandler = (request, h) => {
  // dapatkan nilai id
  const { bookId } = request.params;

  // filter id untuk dapatkan nilai object
  const book = books.filter((b) => b.id === bookId)[0];

  // response saat berhasil dan tampilkan data buku
  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  // respons saat tidak berhasil
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  getBookByIdHandler,
};
