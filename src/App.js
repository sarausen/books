import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './state'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleGetBook = (book) => {
    dispatch({ type: 'GET_BOOK', name: book })
  }
  const handleChangeDate = (e) => {
    dispatch({ type: 'NEW_INVENTORY_DATE', date: e.target.value })
  }
  const handleOpen = () => {
    dispatch({ type: 'toggle_open' })
  }

  return (
    <div>
      <h1>Библиотека</h1>
      <div className="open">
        {state.isOpen ? 'Открыто' : 'Закрыто'}
        <button onClick={handleOpen}>
          {state.isOpen ? 'Закрыть' : 'Отркыть'}
        </button>
      </div>

      <input 
        type="date"
        value={state.inventoryDate}
        onChange={handleChangeDate}
      />
      <ul>
        {
          state.books.map((book) => (
            <li key={book}>
              <span>{book}</span>
              <button onClick={() => handleGetBook(book)}>Взять книгу</button>
            </li>
          ))
        }
      </ul>
    </div>
    
  )
}

export default App