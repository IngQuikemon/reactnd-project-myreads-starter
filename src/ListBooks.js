import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'


class ListBooks extends Component {
  render(){
    const {books} = this.props
    return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter((book)=>book.shelf === 'currentlyReading' ).map((book) =>(
                  <BookItem key={book.id} bookItem={book} />
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter((book)=>book.shelf === 'wantToRead' ).map((book) =>(
                  <BookItem key={book.id} bookItem={book} />
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter((book)=>book.shelf === 'read' ).map((book) =>(
                  <BookItem key={book.id} bookItem={book} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/Search" >Add a book</Link>
      </div>
    </div>
    )
  }

}

export default ListBooks