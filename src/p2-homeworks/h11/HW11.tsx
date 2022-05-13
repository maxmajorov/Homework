import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const arrValues: any = [value1, value2];
  const valuesHandler = (value: number | number[]) => {
    setValue1(Array.isArray(value) ? value.reduce((a: number) => a) : value);
    setValue2(
      Array.isArray(value)
        ? value.reduce((a: number, b: number) => 0 + b)
        : value
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <hr />
      homeworks 11
      <div>
        <span>{value1}</span>
        <SuperRange onChangeRange={setValue1} value={value1} />
      </div>
      <div>
        <span>{value1}</span>
        &nbsp;
        <SuperDoubleRange onChangeRange={valuesHandler} value={arrValues} />
        &nbsp;
        <span>{value2}</span>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;
