import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import UserCard from './UserCard'
import UserAvailability from './UserAvailabilities';
import DietaryRestrictions from './DietaryRestrictions';

const User = () => {
    
    const { userId } = useParams();
    const [users, setUsers] = useState([]);
    const [userAvailability, setUserAvailability] = useState([]);
    const [userDietaryRestrictions, setUserDietaryRestrictions] = useState([]);
    const [userDate, setUserDates] = useState([]);
    
    useEffect(() => {
        const client = axios.create({
            baseURL: "http://localhost:3000/api/v1" 
        });
        client.get('/users/' + userId + '/availability').then((response) => {
            setUserAvailability(response.data);
        });

        client.get('/users/' + userId + '/dietaryRestrictions').then((response) => {
            setUserDietaryRestrictions(response.data);
        });
    }, []);
    
    const showUser = () => {
        if(users.length !== 0){
            return users.map(user => {
                return <UserCard key={user.userId} user={user}/>
            })
        }
    }

    const showUserAvailability = () => {
        if(userAvailability.length !== 0){
            return userAvailability.map(availability => {
                return <UserAvailability key={availability.userAvailabilityId} availability={availability} />
            })
        }
    }

    const showUserDietaryRestrictions = () => {
        if(userDietaryRestrictions.length !== 0){
            return userDietaryRestrictions.map(dietaryRestrictions => {
                return <DietaryRestrictions key={dietaryRestrictions.userAvailabilityId} dietaryRestrictions={dietaryRestrictions} />
            })
        }
    }

    return (
        <div className="container">
            <div className="row">
                {showUserAvailability()}
                {showUserDietaryRestrictions()}
            </div>
        </div>
    );
};

export default User