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

    const formMessage = () => {
        if (username < 3) {
            return "Username must be greater than 2 characters";
        } 
    };
    const formMessageEmail = () => {
        if (email < 5) {
            return "Email must be greater than 5 characters";
        } 
    };
    const formMessagePassword = () => {
        if (password < 8) {
            return "Password must be greater than 8 characters";
        } 
    };
    const formMessageConfirmPassword = () => {
        if (confirmPassword < 8) {
            return "Password must be greater than 8 characters";
        } 
    };
    const formMessageConfirmPasswordMatch = () => {
        if (password != confirmPassword ) {
            return "Password must match";
        } 
    };



    return (
        <>
            <div className='container p-5'>
                <form onSubmit={createUser}>
                    <div>
                        <label>Username: </label>
                        <input className='form-control' type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                        <p className='text-danger'>{formMessage()}</p>  
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input className='form-control' type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <p className='text-danger'>{formMessageEmail()}</p>  
                    </div>
                    <div>
                        <label>Password: </label>
                        <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <p className='text-danger'>{formMessagePassword()}</p>  

                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input className='form-control' type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                        <p className='text-danger'>{formMessageConfirmPassword()}</p>  
                        <p className='text-danger'>{formMessageConfirmPasswordMatch()}</p>  


                    </div>
                    <input className='btn btn-primary' type="submit" value="Create User" />
                </form>

                <div className='card border border-dark d-flex justify-content-center align-items-center'>
                    <h5 className='card-header bg-dark text-white'>Your Form Data</h5>
                    <div className="card-body">
                        <div>Username: {username}</div>
                        <div>Email: {email}</div>
                        <div>Password: {password}</div>
                        <div>Confirm Password: {confirmPassword}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserForm;
