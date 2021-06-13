const books = require('../books');

// Handler untuk menghapus buku
const deleteBookByIdHandler = (request, h) => {
  // dapatkan nilai id
  const { bookId } = request.params;

  // dapatkan index sesuai id yang di dapat
  const index = books.findIndex((book) => book.id === bookId);

  // pengecekan nilai index, tidak boleh nilai index -1
  // gunakan array splice() untuk menghapus array berdasarkan index
  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  // response saat gagal dihapus
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  deleteBookByIdHandler,
};
