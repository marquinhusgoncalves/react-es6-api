import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({
      users: [...this.state.users, ...response.data.results],
      loading: false
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    const {loading, users} = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users"></input>
        </form>
        {!loading
          ? users.map(user => (
            <div key={user.id.value}>
              <h3 style={{ color: 'red' }}>{user.name.first}</h3>
              <p>{user.email}</p>
              <hr/>
            </div>
          ))
          : <Loading message="Loading..."/>}
      </div>
    )
  };
}

export default App;
