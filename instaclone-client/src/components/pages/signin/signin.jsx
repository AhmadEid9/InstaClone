import React, { useState } from "react";
import Input from "../../base/forms/input/input";

import "./style.css"
import axios from "axios";

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSignIn = async () => {
      const response  = await axios.post("http://127.0.0.1:8000/api/guest/login", { email, password }).catch((e) => console.log(e));

      console.log(response.data.user);

      const name = response.data.user.name;
      const username = response.data.user.username;
      const useremail = response.data.user.email;
      const image = response.data.user.image;
      const token = response.data.user.token;

      console.log(name);
      localStorage.setItem('user_name', name);

      console.log(username);
      localStorage.setItem('user_name', username);

      console.log(useremail);
      localStorage.setItem('user_name', useremail);

      console.log(image);
      localStorage.setItem('user_name', image);

      console.log(token);
      localStorage.setItem('user_name', token);


    };
  
    return (
      <div className="signin-form">
        <h1>Sign In</h1>
        <Input
          id="email"
          label="Email:"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          id="password"
          label="Password:"
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    );
  };
  
  export default Signin;
  