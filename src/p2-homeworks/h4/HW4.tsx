import React, { ChangeEvent, useState } from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
  const [text, setText] = useState<string>("");
  const error = text ? "" : "Please, enter the text";

  const showAlert = () => {
    if (error) {
      alert("Please, enter the text");
    } else {
      alert(text); // если нет ошибки показать текст
    }
  };

  const [checked, setChecked] = useState<boolean>(false);
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.currentTarget.checked);

  return (
    <div>
      <hr />
      homeworks 4
      <div className={s.column}>
        <SuperInputText
          value={text}
          onChangeText={setText}
          onEnter={showAlert}
          error={error}
        />
        {/* 
        <SuperInputText
          className={s.blue} // проверьте, рабоет ли смешивание классов
        /> */}
        {/*----------------------------------------------------*/}
        <div className={s.buttons}>
          <SuperButton>default</SuperButton>

          <SuperButton
            red // пропсу с булевым значением не обязательно указывать true
            onClick={showAlert}
          >
            GO! {/*// название кнопки попадёт в children*/}
          </SuperButton>

          <SuperButton disabled>disabled</SuperButton>
        </div>
        {/*----------------------------------------------------*/}
        <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
          Checkbox 1 {/*// этот текст попадёт в children*/}
        </SuperCheckbox>
        {/*// onChange тоже должен работать*/}
        <SuperCheckbox checked={checked} onChange={testOnChange}>
          Checkbox 2
        </SuperCheckbox>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperInputText/>*/}
      {/*<AlternativeSuperButton/>*/}
      {/*<AlternativeSuperCheckbox/>*/}
      <hr />
    </div>
  );
}

export default HW4;
