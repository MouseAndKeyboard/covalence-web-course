import React, { useState, useEffect } from 'react'

const UserDetails = (props) => {
    const [user, setUser] = useState({});

    const getUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
        .then(resp => resp.json())
        .then(obj => {
            setUser(obj)
        })
        .catch(err => alert('error'))
    }

    useEffect(() => {
        getUser();
    }, []);

    if (!user.address){
        return (
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        );
    }

    return (
        <ul className="list-group">
            <li className="list-group-item">{user.name}</li>
            <li className="list-group-item">{user.username}</li>
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">{user.phone}</li>
            <li className="list-group-item">{user.website}</li>
            <li className="list-group-item">
                <ul className="list-group">
                    <li className="list-group-item">{user.address.street}</li>
                    <li className="list-group-item">{user.address.suite}</li>
                    <li className="list-group-item">{user.address.city}</li>
                    <li className="list-group-item">{user.address.zipcode}</li>
                    <li className="list-group-item">
                        <ul className="list-group">
                            <li className="list-group-item">{user.address.geo.lat}</li>
                            <li className="list-group-item">{user.address.geo.lng}</li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>
    );
}

export default UserDetails;