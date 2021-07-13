import React, { Component } from 'react'
import Book from '../models/Book';

export default class AddBook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      isbn: ''
    };
  }

  onAddBook() {
    const book = new Book(this.state.title, this.state.author, this.state.isbn);
    this.props.createBook(book);
    this.setState({ title: '' , author: '', isbn: ''})
  }

  onTitleChanged(e) {
    this.setState({ title: e.target.value })
  }

  onAuthorChanged(e) {
    this.setState({ author: e.target.value })
  }

  onISBNChanged(e) {
    this.setState({ isbn: e.target.value })
  }

  render() {
    return (
      <form>
        <div className="mt-3 form-group">
          <label for="title">Title</label>
          <input 
            value={this.state.title} 
            type="text" 
            className="form-control" 
            id="title"
            onChange={(e) => this.onTitleChanged(e)}></input>

          <label for="author">Author</label>
          <input 
            value={this.state.author} 
            type="text" 
            className="form-control mb-5" 
            id="author"
            onChange={(e) => this.onAuthorChanged(e)}></input>
          
          <label for="isbn">ISBN#</label>
          <input 
            value={this.state.isbn} 
            type="text" 
            className="form-control mb-5" 
            id="isbn"
            onChange={(e) => this.onISBNChanged(e)}></input>
        </div>

        <button type="submit" onClick={() => this.onAddBook()}
            className="btn btn-light">Submit</button>
      </form>
    )
  }
}
