import React from "react";
import style from "./main.module.css";
import Button from "../Button";

function Navbar(props) {
  return (
    <>
      <div className={style.container}>
        <div className={style.logo}></div>
        <div className={style.button}>
          <Button>Sign In</Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
