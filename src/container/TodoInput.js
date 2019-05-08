import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './../actions'
import TodoInput from './../components/TodoInput'

class TodoInputContainer extends React.Component {

  render() {
    return (
      <TodoInput onAdd={this.props.onAdd} />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: text => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInputContainer)