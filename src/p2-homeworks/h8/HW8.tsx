import React, { useState } from "react";
import {
  checkAgeAC,
  homeWorkReducer,
  sortDownAC,
  sortUpAC,
} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import classes from "./HW8.module.css";

export type PeoplesType = {
  _id: number;
  name: string;
  age: number;
};
export type UserType = Array<PeoplesType>;

const initialPeople = [
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<UserType>(initialPeople);
  const [sortAge, setSortAge] = useState<number>(0);

  const finalPeople = people.map((el: PeoplesType) => (
    <div key={el._id}>{`${el.name} ${el.age}`}</div>
  ));

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()));
  const sortDown = () =>
    setPeople(homeWorkReducer(initialPeople, sortDownAC()));
  const checkAge = () =>
    setPeople(homeWorkReducer(initialPeople, checkAgeAC(sortAge)));

  return (
    <div>
      <hr />
      homeworks 8{finalPeople}
      <hr />
      <span>Insert sort age: </span>
      <input
        value={sortAge}
        onChange={(e) => setSortAge(+e.currentTarget.value)}
      />
      <div className={classes.btns}>
        <SuperButton onClick={sortUp} color="primary">
          sort up
        </SuperButton>
        <SuperButton onClick={sortDown} color="secondary">
          sort down
        </SuperButton>
        <SuperButton onClick={checkAge} color="primary">
          check 18
        </SuperButton>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr />
    </div>
  );
}

export default HW8;
