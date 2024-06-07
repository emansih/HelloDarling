import React from 'react';



const DietaryRestrictions = (props) => {
    const { dietRetrictions } = props.dietaryRestrictions;
    return (
        <h2>Dietary Restrictions: {dietRetrictions}</h2>
    );
};

export default DietaryRestrictions;