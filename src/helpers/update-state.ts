import type { FieldT, StateAction } from "../types";


export const updateState =
   <T>(setState: StateAction<T>) =>
   (field: FieldT<T>, value: any, toggle?: boolean) => {
      setState((prevState) => ({
         ...prevState,
         [field]:
            typeof value === "boolean" && toggle ? !prevState[field] : value,
      }));
   };
