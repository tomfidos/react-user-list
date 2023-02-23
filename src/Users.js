import React, {Component} from 'react';
import './Users.css';

class Users extends Component {

    render() {
        return (
            <div className="list">
                <h1>User list</h1>
                <form>
                    <input type="text" placeholder="Enter name"/>
                    <button type="submit">Add user</button>
                </form>
            </div>
        );
    }
}

export default Users;
