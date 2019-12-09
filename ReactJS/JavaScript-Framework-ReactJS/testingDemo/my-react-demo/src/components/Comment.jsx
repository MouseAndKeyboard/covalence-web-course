import React from 'react';
import UserInfo from './UserInfo';

const Comment = props => {
    return (
        <div className="Comment">
            <UserInfo author={}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">

            </div>

        </div>
    )
}

export default Comment;