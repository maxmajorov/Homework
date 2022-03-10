import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void; // need to fix any
  error: string; // need to fix any
  totalUsers: number; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : s.valid; // need to fix with (?:)

  return (
    <div>
      <input value={name} onChange={setNameCallback} className={inputClass} />
      <button onClick={addUser} className={s.button}>
        ADD
      </button>
      <span>Total: {totalUsers}</span>
      <br />
      <span className={s.textError}>{error}</span>
    </div>
  );
};

export default Greeting;
