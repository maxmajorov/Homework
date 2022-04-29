import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import classes from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId);
    console.log("click stop");
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true);
    console.log("on");
  };
  const onMouseLeave = () => {
    setShow(false);
    console.log("off");
  };

  // ========= EXAMPLES ========

  // new Date().toLocaleDateString(); // 19.12.2019
  // new Date().toLocaleTimeString(); // 11:02:48
  // new Date().toLocaleTimeString().slice(0,-3); // 11:02
  // new Date().toLocaleString(); // 19.12.2019, 11:02:48

  // ======================================= //

  const stringTime = time; // fix with date
  const stringDate = new Date().toLocaleDateString(); // fix with date

  return (
    <div className={classes.clockSection}>
      {!show ? (
        <div
          className={classes.time}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {stringTime}
        </div>
      ) : (
        <div
          className={classes.time}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {stringDate}
        </div>
      )}

      {/* <div
        className={classes.time}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div> */}

      {/* {show && <div>{stringDate}</div>} */}

      <div className={classes.clockControls}>
        <SuperButton onClick={start} color="primary">
          start
        </SuperButton>
        <SuperButton onClick={stop} color="secondary">
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
