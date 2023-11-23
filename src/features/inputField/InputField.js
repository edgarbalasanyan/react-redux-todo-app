import React from "react";
import "./inputField.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../todos/actions"


const InputField = () => {
  const [inpVal, setInpVal] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="inputField">
      <input
        className="input"
        placeholder="Enter a todo"
        value={inpVal}
        onChange={(e) => {
          setInpVal(e.target.value);
        }}
      ></input>
      <button
        className="add"
        onClick={() => {
          if (inpVal.trim() !== "") {
            setInpVal("")
            dispatch(add(inpVal));
          }
        }}
      >
        add
      </button>
    </div>
  );
};

export default InputField;
