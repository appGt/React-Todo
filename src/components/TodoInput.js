import React from 'react'

export default class TodoInput extends React.Component {
  state = {
    text: ''
  }
  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  add = () => {
    if (this.state.text && this.props.onAdd) {
      this.props.onAdd(this.state.text)
      this.setState({ text: '' })
    }
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.add()
    }
  }

  render() {
    return (
      <div className="input-wrapper">
        <input 
          className="input"
          onChange={this.onChange}
          value={this.state.text}
          onKeyUp={this.onKeyUp}
        />
        <button className="add" onClick={this.add}>add</button>
      </div>
    )
  }
}