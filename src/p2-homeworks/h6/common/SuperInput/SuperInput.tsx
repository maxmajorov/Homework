import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
} from "react";
import Input from "@material-ui/core/Input";
import s from "./SuperInput.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputPropsType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

export const SuperInput: React.FC<SuperInputPropsType> = ({
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && // если есть пропс onChange
      onChange(e); // то передать ему е (поскольку onChange не обязателен)

    onChangeText && onChangeText(e.currentTarget.value);
  };

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    onEnter && // если есть пропс onEnter
      e.key === "Enter" && // и если нажата кнопка Enter
      onEnter(); // то вызвать его
  };

  const finalSpanClassName = `${s.error} ${error ? s.errorMessage : ""}`;
  const finalInputClassName = `${s.input} ${s.input_invalid} ${
    error ? s.input_invalid : s.input_valid
  }`;

  return (
    <>
      <Input
        type={"text"}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        placeholder="Write something here..."
        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </>
  );
};

// import React from "react";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& .MuiTextField-root": {
//         margin: theme.spacing(1),
//         width: "25ch",
//       },
//     },
//   })
// );

// export default function StateTextFields() {
//   const classes = useStyles();
//   const [name, setName] = React.useState("Cat in the Hat");
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           id="standard-name"
//           label="Name"
//           value={name}
//           onChange={handleChange}
//         />
//         <TextField
//           id="standard-uncontrolled"
//           label="Uncontrolled"
//           defaultValue="foo"
//         />
//       </div>
//       <div>
//         <TextField
//           id="filled-name"
//           label="Name"
//           value={name}
//           onChange={handleChange}
//           variant="filled"
//         />
//         <TextField
//           id="filled-uncontrolled"
//           label="Uncontrolled"
//           defaultValue="foo"
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           id="outlined-name"
//           label="Name"
//           value={name}
//           onChange={handleChange}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-uncontrolled"
//           label="Uncontrolled"
//           defaultValue="foo"
//           variant="outlined"
//         />
//       </div>
//     </form>
//   );
// }
