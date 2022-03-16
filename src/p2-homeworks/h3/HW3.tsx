import React, { useState } from "react";
import { v1 } from "uuid";
import AlternativeGreeting from "./Alternative/AlternativeGreeting";
import GreetingContainer from "./GreetingContainer";

// types
export type UserType = {
  _id: string;
  name: string;
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([
    { _id: v1(), name: "Max" },
  ]);

  const addUserCallback = (name: string) => {
    setUsers([{ _id: v1(), name: name }, ...users]);
  };

  console.log(users);

  return (
    <div>
      <hr />
      homeworks 3
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
      <hr />
      {/*для личного творчества, могу проверить*/}
      <AlternativeGreeting users={users} addUserCallback={addUserCallback} />
      <hr />
    </div>
  );
}

export default HW3;
