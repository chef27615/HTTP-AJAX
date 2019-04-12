import React from 'react'

const Friend = props => {
    console.log('props: ', props)
    const { age, email, name } = props.friend
    const {updateFriend}=props
    console.log(updateFriend)
  return (
    <div className="friend-card">
      <h2>{name}</h2>
      <h4>{age}</h4>
      <h4>{email}</h4>
      <button
        onClick={() => props.delFriend(props.friend.id)}
      >delete</button>
      <button
        onClick={()=> updateFriend(props.friend)}
      >update</button>
    </div>
  )
}
export default Friend;