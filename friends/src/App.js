import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends: [{
        id:'',
        name: '',
        age: 0,
        email: ''
      }]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res =>{
      console.log(res.data)
      this.setState({ friends: res.data});
    })
    .catch(err => {
      console.log('Error: ', err);
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
