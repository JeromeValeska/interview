import React from 'react'
import {UserList} from './userlist'

export class Main extends React.Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.fetchUsers();
    }

    async fetchUsers() {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();
        this.setState({users});
    }

    render() {
        return (
            <div className="App">
                <table>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => (
                            <tr key={index}>
                                <td><input value={user.name}   onChange={(e) => this.onChange (e, index,"name")}/></td>
                                <td><input value={user.surname}  onChange={(e) => this.onChange(e, index,"surname")}/></td>
                                <td><input value={user.age} onChange={(e) => this.onChange(e,  index ,"age")}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <UserList users={this.state.users}>{
                    ({users}) => {
                        return <ul>
                            {users.map((user, index) => <li key={index}>{user.id}: {user.name} {user.surname}</li>)}
                        </ul>
                    }
                }
                </UserList>
            </div>
        );
    }
    onChange = (event, index,prop) => {
        const list = [...this.state.users];
        list[index][prop] = event.target.value;
        this.setState({users : list})
    }
}