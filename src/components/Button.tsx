import React, {FC} from "react";
import "./Button.scss";

interface Props {
  label: string;
  onClick: () => void;
}

const Button: FC<Props> = ({label, onClick}: Props) => {
  return (
    <div id={"submit_button"} onClick={() => onClick()} >
      <label>{label}</label>
    </div>
  );
};

export default Button;
