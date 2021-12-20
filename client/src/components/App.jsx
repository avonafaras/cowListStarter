import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
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

  addACow(cowName, description) {
    axios.post('/api/cows', {
      name: cowName,
      description: description
    })
    .then((response) => {
      this.setState({
        cows: response.data
      })
      console.log(this.state.cows);
    })
    .catch((err) => console.log(err))
  }



  render() {
    return (
      <div>
        <Header length={this.state.cows.length}/>
        <Form addACow = {this.addACow.bind(this)} />
        <List cows={this.state.cows} addACow={this.addACow}/>
      </div>
    )
  }
}

export default App;