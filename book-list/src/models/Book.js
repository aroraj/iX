export default class Book {
  constructor(title, author, isbn) {
    this.id = new Date().getTime();
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}