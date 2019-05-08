const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          complete: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo, index)=>
        index === action.index ? {
          ...todo,
          complete: true
        } : todo
      )

    default:
      return state;
  }
}

export default todo;