import Book from './Book.js';

class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat; }
    set fileFormat(format) {
        const allowed = ["PDF", "EPUB", "MOBI"];
        if (!allowed.includes(format)) {
            console.log(`Ошибка: формат должен быть один из ${allowed.join(", ")}`);
            return;
        }
        this._fileFormat = format;
    }

    printInfo() {
        console.log(`Название: ${this._name}, Автор: ${this._author}, Год: ${this._year}, Формат файла: ${this._fileFormat}`);
    }

    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.name, bookInstance.author, bookInstance.year, fileFormat);
    }

}

export default EBook;
