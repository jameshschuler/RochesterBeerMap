import React from "react";

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <div className="field">
      <div className="control">
        <input
          autoComplete="off"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
