import React from 'react'

const Friend = props => {
    console.log(props)
    const { age, email, name } = props.friend
  return (
    <div className="friend-card">
      <h2>{name}</h2>
      <h4>{age}</h4>
      <h4>{email}</h4>
      <button
        onClick={() => props.delFriend(props.friend.id)}
      >delete</button>
      <button
        onclick={()=> props.updateFriend(props.friend)}
      >update</button>
    </div>
  )
}
export default Friend;