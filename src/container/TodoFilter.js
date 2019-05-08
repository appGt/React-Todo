import React from 'react'
import { connect } from 'react-redux'
import { filterTodo } from './../actions'
import TodoFilter from './../components/TodoFilter'

class TodoFilterContainer extends React.Component {

  render() {
    return (
      <TodoFilter onFilter={this.props.onFilter} filter={this.props.filter}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: filter => {
      dispatch(filterTodo(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterContainer)