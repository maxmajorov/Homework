import React, { useState } from "react";
import { UserType } from "../HW3";
import SuperButton from "./SuperButton/SuperButton";
import SuperInputText from "./SuperInputText/SuperInputText";
import s from "./../Greeting.module.css";

type AlternativeGreetengPropsType = {
  users: Array<UserType>;
  addUserCallback: (name: string) => void;
};

const AlternativeGreeting: React.FC<AlternativeGreetengPropsType> = (props) => {
  const [name, onChangeName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const addUser = () => {
    if (!name) {
      setError("Attention! Please, enter your name!");
    } else {
      alert(`Hello, ${name}!`);
      props.addUserCallback(name);
      onChangeName("");
      setError("");
    }
  };

  const onEnter = () => {
    addUser();
  };

  let totalUsers = props.users.length;
  return (
    <div className={s.flex}>
      <SuperInputText
        value={name}
        onChangeName={onChangeName}
        error={error}
        onEnter={onEnter}
      />
      <SuperButton addUser={addUser}>ADD</SuperButton>
      <span>Total: {totalUsers}</span>
      <br />
    </div>
  );
};

export default AlternativeGreeting;
