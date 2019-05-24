import React, {FC} from "react";
import {ModelType} from "../models/model";
import {observer} from "mobx-react";
import "./InteractiveLabel.scss";

interface Props {
  model: ModelType
}

const InteractiveLabel: FC<Props> = observer(({model}: Props) => {
  return (
    <div id={"interactive_label"}>
      <input onChange={(evt) => model.setLabel(evt.target.value)} placeholder={"Type something..."}/>
      <br />
      <label>{model.label}</label>
    </div>
  );
});

export default InteractiveLabel;
