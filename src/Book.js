import React from 'react'

const Book = (props) => {
  const {isbn, title, author, deleteBook} = props 
  return (
    <div>
     <p>id: {isbn}--Title: {title}-- Author: {author}</p>
     <button onClick={() => deleteBook(isbn)}>delete book with id {isbn}</button>
    </div>
  )
}

export default Book 