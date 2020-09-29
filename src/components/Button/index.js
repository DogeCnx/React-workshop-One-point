import React from "react";
import style from "./main.module.css";

function Button(props) {
  return (
    <>
      <button className={style.button}>{props.children}</button>
    </>
  );
}

export default Button;
