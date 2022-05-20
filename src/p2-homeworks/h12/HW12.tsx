import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStateType } from "../h10/bll/store";
import { SuperSelect } from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeAC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ["dark", "red", "lemon", "purple", "some"];

function HW12() {
  const theme = useSelector<RootStateType, string>(
    (state) => state.themeSwitch.themes
  );
  const dispatch = useDispatch();

  const onChangeCallback = (color: string) => {
    dispatch(changeThemeAC(color));
  };

  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + "-text"]}>homeworks 12</span>
      <SuperSelect
        options={themes}
        value={theme}
        onChangeOption={onChangeCallback}
      />

      <hr />
    </div>
  );
}

export default HW12;
