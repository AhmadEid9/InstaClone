import "./style.css";
import { Link } from "react-router-dom";

import address from './assets/address-book.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={address} alt="Logo" class="logo"/>
        </div>
        <ul className="nav-list">
            <li><Link to="/">Contacts</Link></li>
            <li><Link to="/">New</Link></li>
            <li><Link to="/">Map</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;