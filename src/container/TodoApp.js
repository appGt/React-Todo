import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import '../style/TodoApp.scss'

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="todoApp">
        <header>
          <div>
            <TodoInput />
            <TodoFilter />
          </div>
        </header>
        <TodoList />
      </div>
    )
  }
}