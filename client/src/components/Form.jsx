import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      cowName: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target
    const name = target.name;
    const value = target.value;

    this.setState ({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addACow(this.state.cowName, this.state.description);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="input Cow name" name="cowName" value={this.state.cowName} onChange={this.handleChange}></input>
        <label>Description</label>
        <input type="text" placeholder="input Cow description" name="description" value={this.state.description} onChange={this.handleChange}></input>
        <button>Add a Cow</button>
      </form>
    )
  }
}

export default Form