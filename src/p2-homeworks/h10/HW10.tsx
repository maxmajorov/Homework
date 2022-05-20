import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC } from "./bll/loadingReducer";
import { RootStateType } from "./bll/store";
import { LoaderVariant } from "./loader";

export const HW10 = () => {
  const loadingState = useSelector((state: RootStateType) => state.loading);
  const dispatch = useDispatch();

  console.log(loadingState);
  const setLoading = () => {
    dispatch(loadingAC(true));
    setTimeout(() => dispatch(loadingAC(false)), 2000);
    console.log("loading...");
  };

  return (
    <div>
      <hr />
      homeworks 10
      {loadingState.loading ? (
        <LoaderVariant />
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
};
