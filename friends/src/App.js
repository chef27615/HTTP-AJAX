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
      friends: [],
      currentFriend: null
    };
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
  
  handleSubmit = newFriend =>{
    axios.post('http://localhost:5000/friends', newFriend)
   .then(res=>{
     this.setState({friends: res.data})
   })         
   .catch(err=>{console.log('Error: ', err)});
}

delFriend = id =>{
  console.log('water!')
  axios.delete(`http://localhost:5000/friends/${id}`)
   .then(res=>{
     this.setState({friends: res.data})
   })         
   .catch(err=>{console.log('Error: ', err)});
}

updateFriend = friend => {
  console.log('fire!')
  this.setState({currentFriend:friend});
  this.props.history.push('/');
}

  
  render() {
    return (
      <div className="App">
        <Header />
        <Route
         path='/' 
         render={(props)=> <FriendList {...props} 
         friends={this.state.friends} 
         handleSubmit ={this.handleSubmit}
         delFriend = {this.delFriend}
         updateFriend = {this.updateFriend}
         />}  
        />
        <Footer />
      </div>
    );
  }
}

export default App;
