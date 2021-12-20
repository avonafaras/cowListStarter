import React from 'react';
import axios from 'axios';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditClicked: false,
      cowName: '',
      description: ''
    }

    this.ClickTheCow = this.ClickTheCow.bind(this);
    this.editCow = this.editCow.bind(this);
    this.submitUpdatedInfo = this.submitUpdatedInfo.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  ClickTheCow() {
    this.props.click(this.props);
  }

  editCow() {
    console.log('clicked')
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {isEditClicked: !state.isEditClicked}
    });
  }


  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    })
  }

  submitUpdatedInfo(event) {
    event.preventDefault();
    axios.put(`/api/cows/${this.props.id}`, {
      name: this.state.cowName,
      description: this.state.description
    })
    .then(() => {
      console.log('Success PUT')
    })
    .catch((err) => console.log(err))
  }


  render() {
    if(this.state.isEditClicked) {
      console.log('ListEntry rerendered isEditClicked')
      return(
        <span onClick={this.ClickTheCow}> {this.props.name}
        <button onClick={this.editCow}>Edit</button>
        <button>Delete</button>
        <form onSubmit={this.submitUpdatedInfo}>
          <input placeholder="change name" name="cowName" value={this.state.cowName} onChange={this.handleChange}></input>
          <input placeholder="change description" name="description" value={this.state.description} onChange={this.handleChange}></input>
          <button>Change</button>
        </form>
      </span>

      )
    }
    console.log('ListEntry rerendered default')
    return (
      <span onClick={this.ClickTheCow}> {this.props.name}
        <button onClick={this.editCow}>Edit</button>
        <button>Delete</button>
      </span>
    )
  }
}

export default ListEntry;