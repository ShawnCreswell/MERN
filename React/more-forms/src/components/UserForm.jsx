import React, { useState } from 'react';
import { useFormik } from 'formik';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const validate = (values) => {
    //     const errors = {}
        
    //     if (!values.email){
    //         errors.email = 'Required'
        
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    //         errors.email = 'Invalid email address'
    //     }
    //     return errors
    // }

    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //     },
    //     validate,
    //     onSubmit: (values) => {
    //         alert(JSON.stringify(values, null, 2))
    //     },
    // })


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
        if (password !== confirmPassword ) {
            return "Password must match";
        } 
    };

    const ValidateEmail = (inputText) => {
        const mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if(inputText.value.match(mailformat))
        {
            alert("Valid email Address!");
            document.form1.text1.focus();
            return true
        }
        else
        {

            alert("You have entered an invalid email adress!")
            document.form1.text1.focus();
            return (false);
        }
    }

    // const validateEmail = () => {
    //     if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test($('#email').val())) { /* return true */ }
    // };


    const initialState = {
        username: {
            value: '',
            error: null
        }
        // email: {
        //     value: '',
        //     error: null
        // },
        // password: {
        //     value: '',
        //     error: null
        // }

    };


    return (
        <>
            <div className='container p-5'>
                <form onSubmit={createUser}>
                    <div>
                        <label>Username: </label>
                        <input className='form-control' type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                        <p className='text-danger'>{formMessage()}</p>  
                        {/* {initialState.username.error !== null && (
                            <p className='text-danger'>{initialState.username.error}</p>
                        )} */}
                    </div>
                    {/* <div>
                        <label for="email">Email Address: </label>
                        <input id='email' name='email' className='form-control' type="email" onChange={formik.createUser} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email && (
                            <span>{formik.errors.email}</span>
                            )}
                    </div> */}
                    <div>
                        <label for="email">Email Address: </label>
                        <input id='email' name='email' className='form-control' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
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
