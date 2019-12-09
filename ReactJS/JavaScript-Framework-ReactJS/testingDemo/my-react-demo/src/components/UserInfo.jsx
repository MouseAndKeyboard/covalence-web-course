import React from 'react';

const UserInfo = props => {
    return (
        <div className="UserInfo">
            <img src={props.author.avatarUrl} alt={props.author.name} className="Avatar" />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}

export default UserInfo;