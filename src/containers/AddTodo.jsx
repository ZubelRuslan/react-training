import React from 'react';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.handleSubmit({
      text: this.state.text
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <>
        <input onInput={this.handleInput} value={this.state.text}/>
        <button onClick={this.handleSubmit} disabled={this.state.text.length === 0}> ADD</button>
      </>
    )
  }
}