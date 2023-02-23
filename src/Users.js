import React, {Component} from 'react';
import './Users.css';
import UserList from './UserList';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        };
    }

    addUser = (event) => {
        event.preventDefault();
        const newUser = {
            id: Date.now(),
            name: this._input.value,
        };
        this.setState(state => {
            return({
                userList: state.userList.concat(newUser)
            });
        });
        this._input.value = '';
    }

    render() {
        return (
            <div className="container">
                <h1>User list</h1>
                <form onSubmit={this.addUser}>
                    <input type="text" placeholder="Enter name" ref={(elem) => {this._input = elem;}}/>
                    <button type="submit">Add user</button>
                </form>
                <UserList users={this.state.userList}/>
            </div>
        );
    }
}

export default Users;
