import React, { Component } from 'react';
import './BookTable.css';


export default class Table extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.books.map(book => {
                return <tr key={book.id}>
                  <th>{book.title}</th>
                  <td>
                    {book.author}
                  </td>
                  <td>
                    {book.isbn}
                  </td>
                  <td>
                    <i className="bi bi-x green underline pointer"
                    onClick={() => this.props.bookRemoved(book.id)}></i>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>


      </div>
    )
  }
}
