import React from 'react'
import Friend from './Friend'
 const FriendList = props => {
  
    const { friends } = props;
    return (
      
    <div>
      {friends.map(friend=><Friend friend={friend} />)}
    </div>
  );
}

export default FriendList;