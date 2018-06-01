import React, { Component } from 'react';
import UserItem from './userItem'

class UserList extends Component {
  
  render() {
 const user = this.props.datas.map((item, index) => <UserItem key={index} datas={item} />)   
    return (
      <div>
   {user}
 </div>
    );
  }
}

export default UserList;