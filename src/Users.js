import React from "react";
import './Users.css';
import { fetchUsers } from './service/userService';

export default class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            usersData: [],
            hasError: false
        }
        this.setUsers = this.setUsers.bind(this);
    }

    componentDidMount() {
        this.fetchUsersData();
    }

    setUsers(data) {
        this.setState({
            loading: false,
            usersData: data
        });
    }

    selectUser(user) {
        this.props.setSelectedUser({user: user});
    }

    fetchUsersData() {
        fetchUsers()
            .then(this.setUsers)
            .catch(err => {
                this.setState({
                    loading: false,
                    hasError: true
                })
            });
    }

    render(props) {
        if (this.state.loading) {
            return <h1>Loading ...</h1>;
        } else {
            if (this.state.hasError) {
                return <p>Error while loading Users. Please try again in sometime.</p>
            } else {
                let userCards = <h3>No Users found</h3>
                if (this.state.usersData && this.state.usersData.length > 0) {
                    userCards = <div className="user-cards">
                                    { 
                                        this.state.usersData.map((data) => (
                                            <div className="user-card" key={data.id} onClick={() => this.selectUser(data)}>
                                                <h3>{data.name}</h3>
                                                <h5>{data.email}</h5>
                                                <h5>{data.website}</h5>
                                            </div>
                                        )) 
                                    }
                                </div>
                }
                return (
                    <>
                        <h1>Welcome to Social Media</h1>
                        <h2>Select the user from below list to proceed</h2>
                        {userCards}
                    </>
                );
            }
        }
    }
}