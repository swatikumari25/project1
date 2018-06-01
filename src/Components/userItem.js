import React from 'react';
const UserItem = (props) => (

    <div>

<div>{props.datas.Fname } { props.datas.Lnmae}</div>
<div>{props.datas.phoneno }</div>
<div>{props.datas.EmailId }</div>
    </div>
)

export default UserItem;