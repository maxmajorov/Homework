import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import { restoreState, saveState } from "./localStorage/localStorage";
import classes from "./HW6.module.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

function HW6() {
  const [value, setValue] = useState<string>("");

  const save = () => {
    saveState<string>("editable-span-value", value);
    console.log("saved in localStorage");
  };
  const restore = (value: any) => {
    const valueFromLocalStorage = restoreState<string>(
      "editable-span-value",
      ""
    );
    setValue(valueFromLocalStorage);
  };

  return (
    <>
      homeworks 6
      <div className={classes.hw6}>
        <div className={classes.span}>
          <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            spanProps={{ children: value ? undefined : "enter text..." }}
          />
        </div>
        <div className={classes.btns}>
          <Button
            onClick={save}
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button
            onClick={restore}
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </div>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativeSuperEditableSpan/>*/}
      </div>
    </>
  );
}

export default HW6;
