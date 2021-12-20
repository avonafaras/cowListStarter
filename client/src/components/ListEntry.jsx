import React from 'react';

class ListEntry extends React.Component {
  constructor(props){
    super(props);

    this.ClickTheCow = this.ClickTheCow.bind(this);

  }

  ClickTheCow() {
    this.props.click(this.props);
  }

  render() {
    return (
      <span onClick={this.ClickTheCow}> {this.props.name} </span>
    )
  }
}

export default ListEntry;