import { Dispatch } from "react";

export interface ButtonLists {
  value: string;
  dispatchBtn: DispahAction;
}
export interface ContextChild {
  children: JSX.Element;
}
export interface ContextType {
  buttonList: ButtonLists[];
  value: string;
  setValue: (e: string) => void;
  dispatch: Dispatch<Action>;
  btnState:Result;
  showResult:boolean;
}
export interface DispahAction{
  type: string;
} 
export interface Result {
  result: string;
}
export interface Action{
  type: string;
  payload: {
    value:string;
  };
 
}
// export interface Payload {
//   value?: string  ;
//   operation: string;
// }

