const books = require('../books');

// Handler untuk mengubah/edit data buku
const editBookByIdHandler = (request, h) => {
  // dapatkan nilai id
  const { bookId } = request.params;

  // dapatkan data buku berdasakan id
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  // isikan nilai terbaru untuk 'updatedAt'
  const updatedAt = new Date().toISOString();

  // dapatkan index pada object books berdasarkan id yang di tentukan
  const index = books.findIndex((book) => book.id === bookId);

  // response jika tidak melampirkan name
  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  // response jika melampirkan nilai 'readPage' yang lebih besar dari nilai 'pageCount'
  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  // Jika index ditemukan dari catatan yang dicari
  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };
    // response berhasil diperbarui
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  // response saat gagal diperbarui
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  editBookByIdHandler,
};
