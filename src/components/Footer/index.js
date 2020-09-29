import React from "react";
import style from "./main.module.css";
import Button from "../Button";

function Footer(props) {
  return (
    <>
      <div className={style.container}>
        <div className={style.Copyright}>CopyRight ©</div>
        <div className={style.button}>
          <Button>Log In</Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
