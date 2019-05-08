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

  onClick=()=>{
    if(this.state.text && this.props.onAdd){
      this.props.onAdd(this.state.text)
      this.setState({text: ''})
    }
  }

  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.text}/>
        <br/>
        <button onClick={this.onClick}>add</button>
      </div>
    )
  }
}