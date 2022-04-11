import React from "react";
import s from "./App.module.css";
import HW5 from "../../../p2-homeworks/h5/HW5";

import Input from "@material-ui/core/Input";

const App = () => {
  return (
    <div className={s.App}>
      <div>react homeworks:</div>
      <HW5 />
      <Input />
    </div>
  );
};

export default App;
