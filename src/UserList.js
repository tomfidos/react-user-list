import React from 'react';
import './UserList.css';

const UserList = (props) => {
    const users = props.users;
    const userElements = users.map(user => <li key={user.id}>{user.name}<span onClick={() => {props.remove(user.id);}}>X</span></li>);

    return (
        <ul className="list">
            {userElements}
        </ul>
    );
}

export default UserList;
