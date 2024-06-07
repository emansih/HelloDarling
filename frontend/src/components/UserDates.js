import React from 'react';



const UserDates = (props) => {
    const { dateStart, dateEnd } = props.userDates;
    return (
        <h2>Date between: {dateStart} till {dateEnd}</h2>
    );
};

export default UserDates;