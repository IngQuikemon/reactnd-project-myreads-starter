import React, {Component} from 'react'
import BookItem from './BookItem'

class BookShelf extends Component {
  /*
  * @description Transforms the title of the shelf to the filter name used
  * on the books shelf property to filter the books being sent.
  * @param {string} shelfTitle - contains the text to be searched on the api
  * @returns {string} Filter text to use when filtering the book list.
  */
  selectFilter = (shelfTitle) => {
    let stringsSubstracted = shelfTitle.split(' ');
    stringsSubstracted.forEach(function(item,index,array){
      array[index] = (index === 0 ?
        item.substring(0,1).toLowerCase() :
        item.substring(0,1).toUpperCase()) +
        item.substring(1,item.length);
    })
    return ''.concat(...stringsSubstracted);
  }
  render(){
    const {books,onUpdateStatus,shelfName} = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter((book)=>book.shelf === this.selectFilter(shelfName)).
              map((book) =>(
                <BookItem
                  key={book.id}
                  bookItem={book}
                  onUpdateStatus={onUpdateStatus}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
