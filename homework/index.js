import Book from './Book.js';
//
// const book1 = new Book("Три мушкетера", "Александр Дюма", 1844);
// const book2 = new Book("1984", "Джордж Оруэлл", 1949);
// const book3 = new Book("Гарри Поттер", "Дж. К. Роулинг", 1997);
//
//
// book1.printInfo();
// book2.printInfo();
// book3.printInfo();


import EBook from './EBook.js';

// const ebook = new EBook("1984", "Джордж Оруэлл", 1949, "PDF");
//
// ebook.printInfo();

// const myEbook = new EBook("1984", "Джордж Оруэлл", 1949, "PDF");
//
// console.log(myEbook.name);
// console.log(myEbook.fileFormat);
//
// myEbook.name = "Дни в бирме";
// myEbook.fileFormat = "EPUB"

// myEbook.printInfo();

// const book1 = new Book("Три мушкетера", "Александр Дюма", 1844);
// const book2 = new Book("1984", "Джордж Оруэлл", 1949);
// const ebook1 = new EBook("Гарри Поттер", "Дж. К. Роулинг", 1997, "EPUB");
// const ebook2 = new EBook("Код да Винчи", "Дэн Браун", 2003, "PDF");
//
// const allBooks = [book1, book2, ebook1, ebook2];
//
// const oldestBook = Book.findOldest(allBooks);
//
// console.log("Самая старая книга:");
// oldestBook.printInfo();

const book1 = new Book("1984", "Джордж Оруэлл", 1949);

const ebook1 = EBook.fromBook(book1, "PDF");

ebook1.printInfo();

