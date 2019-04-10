import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Header from './componenet/Header';
import Footer from './componenet/Footer';
import FriendList from './componenet/FriendList';





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
      // console.log(res.data)
      this.setState({ friends: res.data});
    })
    .catch(err => {
      console.log('Error: ', err);
    })
  }
  
  
  render() {
    return (
      <div className="App">



        <Header />
        <Route
         path='/' 
         render={(props)=> <FriendList {...props} friends={this.state.friends} />}  
        />
        <Footer />
      </div>
    );
  }
}

export default App;
