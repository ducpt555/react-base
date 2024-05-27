import React, { useState } from 'react';

const AddUserInfor = (props) => {
    const [user, setUser] = useState({
        id: '',
        name: 'duc',
        age: '22'
    });

    const handleOnChangeInputName = (event) => {
        console.log(event.target.value);
        setUser({
            ...user,
            name: event.target.value
        });
    };

    const handleOnChangeInputAge = (event) => {
        setUser({
            ...user,
            age: event.target.value
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.HandleAddUser(
            {
                id: Math.floor(Math.random() * 100),
                name: user.name,
                age: user.age
            });
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit} >
                <h1>Hello {user.name} - {user.age}</h1>
                <input type="text" onChange={handleOnChangeInputName} />
                <input type="number" onChange={handleOnChangeInputAge} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddUserInfor;
