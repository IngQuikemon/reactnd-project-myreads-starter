import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks(props) {
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            onUpdateStatus={props.onUpdateStatus}
            books={props.books}
            shelfName={'Currently Reading'} />
          <BookShelf
            onUpdateStatus={props.onUpdateStatus}
            books={props.books}
            shelfName={'Want to Read'} />
          <BookShelf
            onUpdateStatus={props.onUpdateStatus}
            books={props.books}
            shelfName={'Read'} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/Search" >Add a book</Link>
      </div>
    </div>
  )
}


export default ListBooks
