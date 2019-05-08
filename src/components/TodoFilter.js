import React from 'react'

export default class TodoFilter extends React.Component {

  onClick = (e, type) => {
    if (this.props.onFilter) {
      this.props.onFilter(type)
    }
  }

  render() {
    return (
      <div>
        <button onClick={e => this.onClick(e, 'all')}>all</button>
        <button onClick={e => this.onClick(e, 'complete')}>complete</button>
        <button onClick={e => this.onClick(e, 'uncomplete')}>uncomplete</button>
        <br/>
        current state: {this.props.filter}
      </div>
    )
  }
}