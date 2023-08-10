import "./style.css";
import { Link } from "react-router-dom";

import address from './assets/address-book.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={address} alt="Logo" class="logo"/>
        </div>
        <h3>
          InstaClone
        </h3>
        <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;