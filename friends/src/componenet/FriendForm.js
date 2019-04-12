import React, { Component } from 'react'

class FriendForm extends Component {
  
    state={
       
           name:'',
           age:'',
           email:'' 
        
    }

    componentDidMount(){
        if(this.props.currentFriend){
            this.setState({
                name: this.props.currentFriend.name,
                age: this.props.currentFriend.age,
                email: this.props.currentFriend.email
            })
        }
    }
  
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  
    handleSubmit = e =>{
        e.preventDefault();

        if(!this.props.currentFriend){
            this.props.handleSubmit(this.state)
        }

        else{
            this.props.updateFriend(this.state)
        }    
           this.setState({
            name:'',
            age:'',
            email:'' 
           }) 

        this.props.history.push('/')   
    }
    
    render() {
        console.log(this.state)
    return (
      <div>
        <div className="friendForm">
            <form onSubmit = {this.handleSubmit}>
                <input 
                type= 'text' 
                name= 'name'
                placeholder= 'name'
                value = {this.state.name}
                onChange = {this.handleChange}     
                />
                <input 
                type= 'text' 
                name= 'email'
                placeholder= 'email'
                value = {this.state.email}
                onChange = {this.handleChange}      
                />
                <input 
                type= 'text' 
                name= 'age'
                placeholder= 'age'
                value = {this.state.age}
                onChange = {this.handleChange}      
                />
                <button>Click Here</button>

            </form>
            
        </div>
      </div>
    )
  }
}


export default FriendForm;