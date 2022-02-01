import React from "react";
import classes from "./Message.module.css";

type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessagePropsType) {
  return (
    <div className={classes.message}>
      <img src={props.avatar} className={classes.avatar} alt={props.name} />
      <div className={classes.messageItem}>
        <div className={classes.nameMessage}>
          <span className={classes.name}>{props.name}</span>
          <span className={classes.item}>{props.message}</span>
        </div>

        <div className={classes.time}>{props.time}</div>
      </div>
    </div>
  );
}

export default Message;
