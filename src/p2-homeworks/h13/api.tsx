import axios from "axios";
import { Params } from "react-router";

export const instance = axios.create({
  baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
});

export const requestAPI = {
  checkChanged(checked: boolean) {
    return instance.post(``, { success: checked });
  },
};
