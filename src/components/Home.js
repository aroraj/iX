import React, { Component } from 'react'

import firebase from '../firebase/firebase';

import Table from './Table';
import AddBook from './AddBook';
import Book from '../models/Book';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    /*let booksString = localStorage.getItem('books');
    booksString = booksString ? booksString : '[]';
    const books = JSON.parse(booksString);*/

    this.state = { books: [] };
  }

  async componentDidMount(){
    this.fetchBooks();
  }

  async fetchBooks() {
    try{
      const snapshot = await this.db.collection('books').get();
      const books = snapshot.docs.map(doc => Book.fromDocument(doc));
      this.setState({ books: books });
    } catch(err){
      console.log(err);
    }
  }

  async onBookCreated(book) {
    console.log(book);
    try {
      const docRef = this.db.collection('books').doc();
      await docRef.set({
        title: book.title,
        author: book.author,
        isbn: book.isbn
      });
      book.id = docRef.id;
      this.state.books.push(book);
      this.setState({ books: this.state.books });
    } catch(err){
      console.log(err);
    }
  }

  async onBookUpdated(book) {
    try {
      await this.db.collection('books').doc(book.id).update({
        title: book.title,
        author: book.author,
        isbn: book.isbn
      });
      const updatedBookArr = this.state.books.map(t => t.id === book.id ? book : t);
      this.setState({ books: updatedBookArr });
    } catch(err){
      console.log(err);
    }
  }

  async onBookRemoved(bookId) {
    try{
      await this.db.collection('books').doc(bookId).delete();
      const updatedBookArr = this.state.books.filter(book => book.id !== bookId);
      this.setState({ books: updatedBookArr });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container card mt-4 p-4">

        <div className="text-left">
          <h1>Add Book:</h1>
        </div>

        <AddBook
          createBook={(book) => this.onBookCreated(book)}
        />

        <Table
          books={this.state.books}
          bookUpdated={(bookId) => this.onBookUpdated(bookId)}
          bookRemoved={(bookId) => this.onBookRemoved(bookId)}
        />
        
      </div>
      
      
    );
  }
}