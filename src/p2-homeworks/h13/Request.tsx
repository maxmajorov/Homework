import { Button, Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { requestAPI } from "./api";

export const Request = () => {
  const [checked, setChecked] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  console.log(response);
  console.log(error);

  const handleChange = () => {
    setChecked(!checked);
  };

  const requestHandler = () => {
    requestAPI
      .checkChanged(checked)
      .then((response) => {
        setResponse(JSON.stringify(response.data));
        setError("");
      })
      .catch((err) => {
        console.log({ ...err });
        console.log(err.response ? err.response.data.errorText : err.message);
        setError(err.response.data.info);
      });
  };

  return (
    <div>
      <Checkbox checked={checked} onChange={handleChange} />
      <Button variant="contained" color="secondary" onClick={requestHandler}>
        SEND REQUEST
      </Button>
      <div>{error ? error : response}</div>
    </div>
  );
};
