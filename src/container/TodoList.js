import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from './../actions'
import TodoList from './../components/TodoList'

class TodoListContainer extends React.Component {
  render() {
    return (
      <TodoList todos={this.props.todos} onComplete={this.props.onComplete} />
    )
  }
}

const mapStateToProps = (state) => {
  switch (state.filter) {
    case 'complete':
      return {
        todos: state.todos.filter(item => item.complete)
      }
    case 'uncomplete':
      return {
        todos: state.todos.filter(item => !item.complete)
      }
    case 'all':
    default:
      return {
        todos: state.todos
      }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComplete: index => {
      dispatch(toggleTodo(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)