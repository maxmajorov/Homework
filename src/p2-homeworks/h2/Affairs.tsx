import React from "react";
import Affair from "./Affair";
import { AffairType, FilterType } from "./HW2";
import classes from "./Affairs.module.css";

type AffairsPropsType = {
  data: Array<AffairType>;
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((el: AffairType) => (
    <Affair
      key={el._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={el}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const setAll = () => {
    props.setFilter("all");
  };
  const setHigh = () => {
    props.setFilter("high");
  };
  const setMiddle = () => {
    props.setFilter("middle");
  };
  const setLow = () => {
    props.setFilter("low");
  };

  return (
    <div className={classes.affairs}>
      {mappedAffairs}

      <button className={classes.button} onClick={setAll}>
        All
      </button>
      <button className={classes.button} onClick={setHigh}>
        High
      </button>
      <button className={classes.button} onClick={setMiddle}>
        Middle
      </button>
      <button className={classes.button} onClick={setLow}>
        Low
      </button>
    </div>
  );
}

export default Affairs;
