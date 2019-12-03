
import React from 'react'

export class UserList extends React.Component {

  



    render() {
        return (
            <div>
                {this.props.children({
                    users: this.props.users,
                    saveUsers: this.saveUsers,
                    onUserChange: this.onUserChange
                })}
            </div>
        );
    }

    saveUsers = () => {
        this.props.saveUsers(this.state.users);
    };

    onUserChange = (user) => {
        // change user in the state
    };
}