import {types, Instance} from "mobx-state-tree";

export const Model = types.model({
  label: types.optional(types.string, "")
}).actions((self) => ({
  setLabel(label: string) {
    self.label = label;
  }
}));

export type ModelType = Instance<typeof Model>;
