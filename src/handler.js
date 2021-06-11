// const { nanoid } = require('nanoid');
// const _ = require('lodash');
// const books = require('./books');

// // menyimpan buku
// const addBookHandler = (request, h) => {
//   const {
//     name,
//     year,
//     author,
//     summary,
//     publisher,
//     pageCount,
//     readCount,
//     readPage,
//     reading,
//   } = request.payload;

//   const id = nanoid(16);
//   let finished = false;
//   if (pageCount === readPage) {
//     finished = true;
//   }
//   const insertedAt = new Date().toISOString();
//   const updatedAt = insertedAt;

//   const newBook = {
//     name,
//     year,
//     author,
//     summary,
//     publisher,
//     pageCount,
//     readCount,
//     readPage,
//     reading,
//     id,
//     finished,
//     insertedAt,
//     updatedAt,
//   };
//   books.push(newBook);

//   if (name == null) {
//     const response = h.response({
//       status: 'fail',
//       message: 'Gagal menambahkan buku. Mohon isi nama buku',
//     });
//     response.code(400);
//     return response;
//   }

//   if (readPage > pageCount) {
//     const response = h.response({
//       status: 'fail',
//       message:
//         'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
//     });
//     response.code(400);
//     return response;
//   }

//   const isSuccess = books.filter((book) => book.id === id).length > 0;

//   if (isSuccess) {
//     const response = h.response({
//       status: 'success',
//       message: 'Buku berhasil ditambahkan',
//       data: {
//         bookId: id,
//       },
//     });
//     response.code(201);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Buku gagal ditambahkan',
//   });
//   response.code(500);
//   return response;
// };

// ------------------------------------------------------------------
// // menampilkan seluruh buku

// const getAllBooksHandler = () => ({
//   status: 'success',
//   data: {
//     books,
//   },
// });
// // ----------------
// // const getAllBooksHandler = (request, h) => {
// //   const { } =
// //   const index = books.findIndex((book) => book.id === id);
// // };
// -----------------------------------------------------------------
// // menampikan detail buku

// const getBookByIdHandler = (request, h) => {
//   const { id } = request.params;

//   const book = books.filter((b) => b.id === id)[0];

//   // if (book !== undefined) {
//   //   const response = h.response({
//   //     status: 'success',
//   //     data: {
//   //       book,
//   //     },
//   //   });
//   //   response.code(200);
//   //   return response;
//   // }
//   if (book !== undefined) {
//     return {
//       status: 'success',
//       data: {
//         book,
//       },
//     };
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Buku tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// -----------------------------------------------------------------
// // mengubah data buku
// const editBookByIdHandler = (request, h) => {
//   const { id } = request.params;
//   const {
//     name,
//     year,
//     author,
//     summary,
//     publisher,
//     pageCount,
//     readPage,
//     reading,
//   } = request.payload;

//   const updatedAt = new Date().toISOString();

//   const index = books.findIndex((book) => book.id === id);

//   // jika tidak melampirkan property name
//   if (name == null) {
//     const response = h.response({
//       status: 'fail',
//       message: 'Gagal memperbarui buku. Mohon isi nama buku',
//     });
//     response.code(400);
//     return response;
//   }

//   // jika melampirkan nilai 'readPage' yang lebih besar dari nilai 'pageCount'
//   if (readPage > pageCount) {
//     const response = h.response({
//       status: 'fail',
//       message:
//         'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
//     });
//     response.code(400);
//     return response;
//   }

//   // Jika buku berhasil ditambahkan
//   if (index !== -1) {
//     books[index] = {
//       ...books[index],
//       name,
//       year,
//       author,
//       summary,
//       publisher,
//       pageCount,
//       readPage,
//       reading,
//       updatedAt,
//     };
//     const response = h.response({
//       status: 'success',
//       message: 'Buku berhasil diperbarui',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Gagal memperbarui buku. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };
// -----------------------------------------------------------------
// // menghapus buku

// const deleteBookByIdHandler = (request, h) => {
//   const { id } = request.params;

//   const index = books.findIndex((book) => book.id === id);

//   if (index !== -1) {
//     books.splice(index, 1);
//     const response = h.response({
//       status: 'success',
//       message: 'Buku berhasil dihapus',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Buku gagal dihapus. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };
// ----------------------------------------------------------------
// Optional

// menampilkan seluruh buku berdasarkan nama

// --------------------------
// module.exports = {
//   addBookHandler,
//   getAllBooksHandler,
//   getBookByIdHandler,
//   editBookByIdHandler,
//   deleteBookByIdHandler,
// };
