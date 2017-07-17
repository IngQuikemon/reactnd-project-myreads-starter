import React from 'react'

function BookItem(props){
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${props.bookItem.imageLinks.smallThumbnail})`
            }}></div>
          <div className="book-shelf-changer">
            <select value={props.bookItem.shelf}
              onChange={(event) => props.onUpdateStatus(props.bookItem,event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.bookItem.title}</div>
        <div className="book-authors">{props.bookItem.authors}</div>
      </div>
    </li>
  )
}

export default BookItem
