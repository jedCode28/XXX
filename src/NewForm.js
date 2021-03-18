import React, { useState } from 'react'

const NewForm = (props) => {
  const {addBook} = props 
  const [ titleName, setTitleName] = useState('')
  const [ authorName, setAuthorName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(titleName)
    console.log(authorName)
    addBook({title: titleName, author: authorName})
  }
  return (
    <div>
      <h1>New Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input 
          onChange={(e)=>{setTitleName(e.target.value)}}
        />
        <p>Author:</p>
        <input
          onChange={(e)=>{setAuthorName(e.target.value)}}
         />
        <button type='submit'>add</button>
      </form>
    </div>
  )
}
export default NewForm