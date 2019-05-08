export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const toggleTodo = index => {
  return {
    type: 'TOGGLE_TODO',
    index
  }
}

export const filterTodo = filter => {
  return {
    type: 'FILTER_TODO',
    filter
  }
}
