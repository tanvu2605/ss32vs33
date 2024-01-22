
function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;

    
    this.displayFullInfo = function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
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
}
var book1 = new Book("Title 1", "Author 1", 2020);
var book2 = new Book("Title 2", "Author 2", 2018);
var book3 = new Book("Title 3", "Author 3", 2022);
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayLibraryBooks();
