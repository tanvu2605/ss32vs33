class Book {
    constructor(author, name) {
        this.author = author;
        this.name = name;
    }
}
var booksArray = [
    new Book("Author1", "Book1"),
    new Book("Author2", "Book2"),
    new Book("Author3", "Book3"),
];
var searchAuthor = prompt("Nhập tên tác giả:");
var foundBooks = booksArray.filter(function(book) {
    return book.author === searchAuthor;
});
if (foundBooks.length > 0) {
    console.log("Sách của tác giả " + searchAuthor + ":");
    foundBooks.forEach(function(book) {
        console.log("Tên sách: " + book.name);
    });
} else {
    console.log("Không tìm thấy sách của tác giả " + searchAuthor);
}