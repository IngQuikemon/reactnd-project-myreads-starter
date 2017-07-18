import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'

class SearchBooks extends Component {

  /*
  * @description Cleans the search data from previous calls when opening the
  * search option.
  */
  componentDidMount(){
    this.props.onClearSearchData();
  }

  /*
  * @description Cleans the query data and send the request to search the api.
  * @param {string} criteria - contains the text to be searched on the api.
  */
  updateQuery = (criteria) =>
  {
    criteria = criteria.trim()
    if(this.props.onSearchBooks){
      this.props.onSearchBooks(criteria);
    }
  }

  render(){
    const {searchedBooks,onUpdateStatus} = this.props
    console.log(onUpdateStatus)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map((book) =>(
              <BookItem key={book.id}
                bookItem={book}
                onUpdateStatus={onUpdateStatus} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
