import React from 'react';
import ListEntry from './ListEntry.jsx'


class List extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <ul>
      {
        this.props.cows.map((cow, index) => (
           <li> <ListEntry name={cow.name} description={cow.description} key={cow.name} id={cow.id} click={this.props.click} /> </li>
        ))
      }
    </ul>
    )
  }
}

export default List;