const books = require('../books');

// handler untuk menampilkan buku by name, reading, finished dan all books
const getAllBooksHandler = (request, h) => {
  // dapatkan nilai name, reading dan finished
  const { name, reading, finished } = request.query;

  let filterBooks = books;

  // filter by name
  if (name !== undefined) {
    filterBooks = filterBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // filter by reading || buku yang sedang dibaca dan tidak
  // reading= 1 : true || reading= 0 : false
  if (reading !== undefined) {
    filterBooks = filterBooks.filter((book) => book.reading == reading);
  }

  // filter by finished || buku yang sudah selesai dibaca dan belum
  // finished=1 : true || finished= 0 : false
  if (finished !== undefined) {
    filterBooks = filterBooks.filter((book) => book.finished == finished);
  }

  // filter item yang ditampilkan
  filterBooks = filterBooks.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  // response dan tampilkan data saat berhasil di filter dan jika tidak tampilkan semua data buku
  const response = h.response({
    status: 'success',
    data: {
      books: filterBooks,
    },
  });

  response.code(200);
  return response;
};

module.exports = {
  getAllBooksHandler,
};
