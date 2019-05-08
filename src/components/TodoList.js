import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
export default class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array
  }
  render() {
    let { onComplete } = this.props
    return (
      <ul>
        {
          this.props.todos.map((todo, i) => <TodoItem todo={todo} key={i} index={i} onComplete={onComplete} />)
        }
      </ul>
    )
  }
}