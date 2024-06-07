import React from 'react';

const UserCard = (props) => {
    const userImageUrl = "https://picsum.photos/200/300"
    const { firstName, lastName, userGender, userPostCode, userId } = props.user;

    const fitImage = {
        width: "100%!important",
        height: "30em",
        objectFit: "cover",
        overflow: "hidden"
    }
    
    return (
        <div className="card col-lg-3 p-0 m-2"  data-testid="userCard">
            <a href={`/user/${userId}`} className="text-decoration-none">
                <img className="card-img-top overflow-hidden" src={userImageUrl} alt="Image 1 of User" style={fitImage}/>
                <img className="card-img-top overflow-hidden" src={userImageUrl} alt="Image 2 of User" style={fitImage}/>
                <img className="card-img-top overflow-hidden" src={userImageUrl} alt="Image 3 of User" style={fitImage}/>
                <div className="card-body p-3">
                    <h5 className="card-title">{firstName} {lastName}</h5>
                    <p className="card-text">PostCode: {userPostCode}</p>
                    <p className="card-text">Gender: {userGender}</p>
                </div>
            </a>
        </div>
    );
};

export default UserCard;