class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }
    get name() { return this._name; }
    set name(newName) {
        if (newName.length < 2) return;
        this._name = newName;
    }

    get author() { return this._author; }
    set author(newAuthor) {
        if (newAuthor.length < 2) return;
        this._author = newAuthor;
    }

    get year() { return this._year; }
    set year(newYear) {
        if (typeof newYear !== "number" || newYear < 0) return;
        this._year = newYear;
    }

    printInfo () {
        console.log(`Название: ${this._name}, Автор: ${this._author}, Год: ${this._year}`);
    }

    static findOldest(books) {
            if (!books.length) return null;
            return books.sort((a, b) => a.year - b.year)[0];
        }
}

export default Book;