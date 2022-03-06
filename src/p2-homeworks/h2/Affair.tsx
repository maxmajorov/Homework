import React from "react";
import { AffairType } from "./HW2";
import classes from "./Affair.module.css";
import style from "./Affairs.module.css";

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

const Affair: React.FC<AffairPropsType> = (props) => {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  };

  return (
    <div>
      <span className={classes.affair}>{props.affair.name}</span>
      <button className={style.button} onClick={deleteCallback}>
        X
      </button>
    </div>
  );
};

export default Affair;
