export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
    return [...state, action.payload]
      break;
    case 'REMOVE_INGREDIENT':
      return state.filter((item, index) => {
        return index !== action.payload;
      })
      break;
    default:
      return state;

  }
}
