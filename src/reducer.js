export const reducer = (state, action) => {
    if (action.type === 'GET_BOOK') {
      return {
        ...state,
        books: state.books.filter((book) => {
          return book !== action.name
        })
      }
    }
    if (action.type === 'NEW_INVENTORY_DATE') {
      return {
        ...state,
        inventoryDate: action.date
      }
    }
    if (action.type === 'toggle_open') {
      return {
        ...state,
        isOpen: !state.isOpen
      }
    }
    return state
  }