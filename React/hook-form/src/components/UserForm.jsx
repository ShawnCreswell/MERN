import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    

    return (
        <>
        <div className='container p-5'>
            <form onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input className='form-control' type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input className='form-control' type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input className='form-control' type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>
                <input className='btn btn-primary' type="submit" value="Create User" />
            </form>
            
            <div>
                <h4>Your Form Data</h4>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Password: {password}</div>
                <div>Confirm Password: {confirmPassword}</div>
            </div>
        </div>
        </> 
    );
};

export default UserForm;
