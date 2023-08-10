import { useEffect, useState } from "react";
import axios from 'axios';
import Input from "../../base/forms/input/input";
import React from "react";

import "./style.css";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handlePasswordConfirmChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRegister = async() => {
       await axios.post("http://127.0.0.1:8000/api/guest/register", {name, username, email, password, image});
    };
    useEffect(() => {
        handleRegister
    }, []);
    return (
        <div className="signin-form">
            <h1>Register</h1>
            <Input
                id="name"
                label="Name"
                value={name}
                type="text"
                onChange={handleNameChange}
            />
            
            <Input
                id="username"
                label="Username"
                value={username}
                type="text"
                onChange={handleUsernameChange}
            />

            <Input
                id="email"
                label="Email"
                value={email}
                type="text"
                onChange={handleEmailChange}
            />
            <Input
                id="password"
                label="Password"
                value={password}
                type="password"
                onChange={handlePasswordChange}
            />
            <Input
                id="confirm"
                label="Confirm Password"
                value={password_confirm}
                type="password"
                onChange={handlePasswordConfirmChange}
            />
            <Input
                label="Image"
                value={image}
                type="file"
                onChange={handleImageChange}
                className="image-form"
            />
            <div>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default Register;