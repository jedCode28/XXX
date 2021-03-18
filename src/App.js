import './App.css';
import React, {useState, useEffect} from 'react'
import Books from './Books' 
import axios from 'axios';
import NewForm from './NewForm';


function App() {

  const [books, setBooks]= useState([])
  const [showForm, setShowForm] = useState(false)
  
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      let resh = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
      setBooks(resh.data.data)
    }catch(err){
      console.log('Error, you dickhead!')
    }
  }

  const deleteBook = (isbn) => {
    console.log(books)
    let filterBooks = books.filter( book => book.isbn !== isbn)
    setBooks(filterBooks)
    console.log(filterBooks) 
  }

  const addBook = (x) => {
    console.log('added book called')
  }


  return (
    <div className="App">
      <h1>Book List</h1>
      <button onClick={()=> setShowForm(!showForm)}>{showForm ? "hide" : "Show"}</button>
      {showForm && <NewForm addBook={addBook} />}
      <Books deleteBook={deleteBook} books={books} />
    </div>
  );
}

export default App;
