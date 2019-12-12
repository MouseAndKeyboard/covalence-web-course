import React, {useState, useEffect} from 'react'

const App = (props) => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch('http://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users)
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <div className="row-md-12">
                <ul className="list-group">
                    {users.map( user => (
                        <li key={user.id} className="list-group-item">{user.name}</li>
                    ))}
                </ul> 
            </div>
        </div>
    );
}

export default App;