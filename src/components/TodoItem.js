import React from 'react'

export default class TodoItem extends React.Component {
  onClick = () => {
    if (!this.props.todo.complete && this.props.onComplete) {
      this.props.onComplete(this.props.index)
    }
  }
  render() {
    return (
      <li>
        <span
          style={{
            textDecoration: this.props.todo.complete ? 'line-through' : 'none',
            color: this.props.todo.complete ? '#080' : '#a11',
            cursor: this.props.todo.complete ? '' : 'pointer',
          }}
          onClick={this.onClick}
        >
          {
            this.props.todo.text
          }
        </span>
      </li>
    )
  }
}