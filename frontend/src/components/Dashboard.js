import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import UserCard from './UserCard'
const Dashboard = () => {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    const client = axios.create({
        baseURL: "http://localhost:3000/api/v1" 
    });
    client.get('/users').then((response) => {
        setUsers(response.data);
    });
  }, []);

  const renderUserCards = () => {
    if (users.length != 0){
        return users.map(user => {
            return <UserCard key={user.userId} user={user}/>
        })
    }}

    const showUsers = () => {
        if(users.length !== 0){
            return renderUserCards()
        }

        return <div className="alert alert-warning" data-testid="alertMsg">No users found</div>
    }

    return (
        <div className="container">
             <Link to="/booking">Setup Dates</Link>
             <br />
             <br />
             <br />
            <div className="row">
                {showUsers()}
            </div>
        </div>
    );
};

export default Dashboard