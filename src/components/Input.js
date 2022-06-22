import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type || "text"}
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onFocus={props.onFocus}
      value={props.value}
    />
  );
};

export default Input;
