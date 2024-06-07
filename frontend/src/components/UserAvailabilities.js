import React from 'react';



const UserAvailability = (props) => {
    const { dayAvailable } = props.availability;
    return (
        <h2>Days available: {dayAvailable}</h2>
    );
};

export default UserAvailability;