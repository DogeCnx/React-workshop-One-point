import React, { useState } from "react";
import style from "./main.module.css";
import Search from "../Search";
import Button from "../Button";

function Content(props) {
  const [count, setCount] = useState("");
  return (
    <>
      <div className={style.container}>
        <div className={style.contentItem}>
          <div className={style.SearchBox}>
            <Search count={count} setCount={setCount}></Search>
            <Button>Submit</Button>
          </div>
          <p />
          <h1>{count}</h1>
          <p />
          Being human makes us susceptible to the onset of feelings. The role of
          these emotions varies. Some of them are useful while others may be
          harmful. The use of social media for self-expression has reached a
          point that it makes us feel we can say anything. This begins when we
          see people expressing anything and everything that come to mind. When
          we see everyone else voicing their likes and dislikes, their
          irritations and desires we tend to imitate what they do. And because
          many engage in this, we think that it is normal and healthy. However,
          when we get used to unbridled self-expression, we come to believe that
          all feelings are valid. We become convinced that in real life, we
          should also act on our emotions and our impulses. Using social media
          this way erodes our ability to regulate our actions and reactions. To
          illustrate, when something small irritates us we think that it's okay
          to feel this way. But isn't it better to foster one's patience and
          resilience instead of immediately complaining? Or when we develop an
          attraction to someone despite that person being in a relationship, and
          because social media has conditioned us that all feelings can be
          expressed, we tend to think that acting on this attraction is okay.
          Not all feelings deserve expression. We find ourselves creating our
          own problems when we let our present emotions control our actions.
        </div>
      </div>
    </>
  );
}

export default Content;
