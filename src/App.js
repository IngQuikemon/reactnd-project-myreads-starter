import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state ={
    books : [],
    searchedBooks : []
  }

  /*
  * @description Loads the current content of the user bookshelf
  */
  componentDidMount(){
    this.refreshShelf();
  }
  /*
  * @description search the books based on the text placed on the search
  * by title or author field
  * @param {string} criteria - text to search on the api
  */
  searchBooks = (criteria) =>
  {
    //set the variable of the current shelf to update the search query accordingly
    let currentShelf = this.state.books;
    //Verifies if the criteria has values
    if(criteria !== null && criteria !== ''){
      //if it does, searchs the api based on the criteria and only 10 books
      BooksAPI.search(criteria,20).then((searchedBooks) => {
        let resultFiltered = searchedBooks.filter((book) =>
          book.imageLinks !== undefined);
          resultFiltered.forEach(function(item,index,array){
            let book = currentShelf.find((book)=> book.id === item.id);
            if(book !== undefined && book !== null){
              item.shelf = book.shelf;
            }
          });
        if(searchedBooks.length > 0 ){
          this.setState({searchedBooks : resultFiltered});
        }else{
          this.setState({searchedBooks: []});
        }
      });
    }
  }

  /*
  * @description Clears the SearchBooks data.
  */
  clearSearchData = () => {
    this.setState({searchedBooks : []})
  }

  /*
  * @description updates the shelf of the book selected and updates the
  * bookshelf data.
  * @param {object} book - the book object to be updated
  * @param {string} shelf - the shelf where is going to be added to
  */
  updateBook = (book,shelf) =>{
    BooksAPI.update(book,shelf).then((response)=>{
      this.refreshShelf();
    })
  }

  /*
  * @description Refresh the current shelf.
  * @param {object} all - contains the list of books returned by the api.
  */
  refreshShelf = (all) => {
    BooksAPI.getAll().then((books) =>{
        this.setState({books});
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/Search" render={() => (
            <SearchBooks
              searchedBooks={this.state.searchedBooks}
              onSearchBooks={this.searchBooks}
              onUpdateStatus={this.updateBook}
              onClearSearchData={this.clearSearchData}/>
          )} />
        <Route exact path="/" render={() => (
            <ListBooks books={this.state.books}
              onUpdateStatus={this.updateBook}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
