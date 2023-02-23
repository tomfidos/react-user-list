import React, {Component} from 'react';
import './Users.css';
import UserList from './UserList';

class Users extends Component {

    render() {
        return (
            <div className="container">
                <h1>User list</h1>
                <form>
                    <input type="text" placeholder="Enter name"/>
                    <button type="submit">Add user</button>
                </form>
                <UserList/>
            </div>
        );
    }
}

export default Users;
