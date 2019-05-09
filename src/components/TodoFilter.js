import React from 'react'

export default class TodoFilter extends React.Component {

  onClick = (e, type) => {
    if (this.props.onFilter) {
      this.props.onFilter(type)
    }
  }

  render() {
    return (
      <div className="todoFilter">
        <span className={this.props.filter === 'all' ? 'active' : ''} onClick={e => this.onClick(e, 'all')}>all</span>
        <span className={this.props.filter === 'complete' ? 'active' : ''} onClick={e => this.onClick(e, 'complete')}>complete</span>
        <span className={this.props.filter === 'uncomplete' ? 'active' : ''} onClick={e => this.onClick(e, 'uncomplete')}>uncomplete</span>
      </div>
    )
  }
}