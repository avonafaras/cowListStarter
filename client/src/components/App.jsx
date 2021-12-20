import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';
import Info from './Info.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      infoName: '',
      infoDescription: ''
    }

  }

  componentDidMount() {
    axios.get('/api/cows')
      .then((response) => {
        this.setState({
          cows: response.data,
        })
      })
      .catch(err => console.log(err));
  }
  //Form
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

  //Info
  HandleNameClick(param) {
    console.log('Now clicked: ', param);
    this.setState({
      infoName: param.name,
      infoDescription: param.description
    })
  }


  render() {
    return (
      <div>
        <Header length={this.state.cows.length} />
        <Info name={this.state.infoName} description={this.state.infoDescription} />
        <Form addACow={this.addACow.bind(this)} />
        <List click={this.HandleNameClick.bind(this)} cows={this.state.cows} addACow={this.addACow} />
      </div>
    )
  }
}

export default App;