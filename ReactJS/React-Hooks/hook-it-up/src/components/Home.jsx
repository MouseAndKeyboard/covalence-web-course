import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = (props) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let resp = await fetch('https://jsonplaceholder.typicode.com/users');
        let obj = await resp.json();
        setUsers(obj);
    }

    useEffect(() => {
        getUsers();
    }, []);

    let cards = users.map(user => {
        let url = `/${user.id}/details/`
        return (
            <div key={user.id} className="row row-cols-4 row-cols-md-2">
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-header text-center">{user.name}</div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    {user.username}
                                </li>
                                <li className="list-group-item">
                                    {user.email}
                                </li>
                                <li className="list-group-item">
                                    {user.phone}
                                </li>
                                <li className="list-group-item">
                                    {user.website}
                                </li>
                            </ul>

                        </div>
                        <div className="card-footer">
                            <Link to={url} className="stretched-link">
                                View more info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            {cards}
        </div>
    );

}

export default Home;