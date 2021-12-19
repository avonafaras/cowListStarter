import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cows: []
    }
  }

  componentDidMount() {
    axios.get('/api/cows')
    .then((response) => {
      this.setState({
        cows: response.data
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        Hello from App component :)
      </div>
    )
  }
}

export default App;