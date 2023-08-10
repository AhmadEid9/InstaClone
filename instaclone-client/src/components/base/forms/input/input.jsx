import "./style.css";
import React from "react";

const Input = ({ label = "", id = "-1", value = "", type = "text", placeholder = "", onChange = null }) => {
    return (
      <div className="form-input">
        <label>{label}:</label>
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default Input;