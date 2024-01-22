
function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;  
    this.displayFullInfo = function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("Trạng thái: " + (this.isAvailable ? "Có sẵn" : "Đã được mượn"));
    };
    this.borrow = function() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("Đã mượn sách: " + this.title);
        } else {
            console.log("Sách không có sẵn để mượn.");
        }
    };
    this.returnBook = function() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log("Đã trả sách: " + this.title);
        } else {
            console.log("Sách đã có sẵn, không cần trả.");
        }
    };
}
function Library() {
    this.books = [];

    this.addBook = function(book) {
        this.books.push(book);
    };
    this.displayLibraryBooks = function() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(function(book, index) {
            console.log("\nSách " + (index + 1) + ":");
            book.displayFullInfo();
        });
    };

    this.isBookAvailable = function(bookTitle) {
        var foundBook = this.books.find(function(book) {
            return book.title === bookTitle;
        });

        if (foundBook) {
            return foundBook.isAvailable;
        } else {
            console.log("Không tìm thấy sách có tiêu đề: " + bookTitle);
            return false;
        }
    };
}
var book1 = new Book("Title 1", "Author 1", 2020);
var book2 = new Book("Title 2", "Author 2", 2018);
var book3 = new Book("Title 3", "Author 3", 2022);
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayLibraryBooks();
book2.borrow();
book2.returnBook();
console.log("Trạng thái sách Title 2 trong thư viện: " + (library.isBookAvailable("Title 2") ? "Có sẵn" : "Đã được mượn"));
