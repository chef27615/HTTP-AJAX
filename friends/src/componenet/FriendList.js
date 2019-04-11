import React, { Component } from 'react'



import Friend from './Friend'
import FriendForm from './FriendForm'

class FriendList extends Component{
    constructor(props){
        super(props);
    }

    // handleChange = e =>{
    //     console.log(e)
    // }
    
    // handleSubmit = newFriend =>{
    //     axios.post('http://localhost:5000/friends', newFriend)
    //    .then(res=>{console.log(res)})         
    //    .catch(err=>{console.log('Error: ', err)});
    // }

    render(){
        const {friends} = this.props
        return(

        <div>
        {friends.map(friend=>
        <Friend 
        friend={friend} 
        delFriend = {this.props.delFriend} 
        />)}

        <FriendForm 
        handleSubmit={this.props.handleSubmit} 
        handleChange={this.handleChange} 
        />
        </div> 
    )}
}



export default FriendList;


// const FriendList = props => {
  
//     const { friends } = props;
//     return (
      
//     <div>
//       {friends.map(friend=><Friend friend={friend} />)}
//       <FriendForm />
//     </div>
//   );
// }

//below was in the handleSubmit 
//axios.post('http://localhost:5000/friends', newFriend)
//         .then(res=>{console.log(res)})
//         .catch(err=>{console.log('Error: ', err)});