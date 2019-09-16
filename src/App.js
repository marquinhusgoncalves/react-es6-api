import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({
      users: response.data.results
    }))
  }

  render() {
    return <div className="App">React</div>
  };
}

export default App;
