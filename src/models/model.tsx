import {types, Instance} from "mobx-state-tree";

export const Model = types.model({
  label: types.optional(types.string, "")
}).actions((self) => ({
  setLabel(label: string) {
    self.label = label;
  }
})).actions((self) => ({
  submitLabel() {
    fetch('http://localhost:8080/log', {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify({
        message: self.label
      })
    });
  }
}));

export type ModelType = Instance<typeof Model>;
