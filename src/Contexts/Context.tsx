"use client";
import {
  ContextChild,
  ContextType,
  Action,
  Result,
} from "@/utils/typeButton";
import { createContext, useContext, useReducer, useState } from "react";
import { buttonList } from "@/utils/buttonList";

const CalculatorContext = createContext<ContextType | null>(null);

// Actions for Dispatch
const ACTION = {
  CALCULATE_RESULT: "CALCULATE_RESULT",
  CLEAR_ALL: "CLEAR_ALL",
  DELETE_LAST: "DELETE_LAST",
  CALCULATE_NUMBER: "CALCULATE_NUMBER",
};

// Initial state of the calculator
const initialState: Result = {
  result: "",
};

function Context({ children }: ContextChild) {
  const [value, setValue] = useState<string>(""); // State to display current input
  const [showResult, setShowResult] = useState<boolean>(false);
  const reducerBtn = (state: Result, action: Action): Result => {
    setShowResult(false);
    switch (action.type) {
      case ACTION.CALCULATE_RESULT:
        try {
          if (value === "") {
            alert("Please start your calculation");
          } else {
            console.log(state);
            state = { result: eval(value) };
            setShowResult(true);
          }
        } catch (error) {
          alert("Invalid Calcution. Please check your input");
          state = { result: "" };
        }
        return state;
      case ACTION.CALCULATE_NUMBER:
        const evlNum = value + action.payload.value;
        setValue(evlNum);
        state = { result: evlNum };
        return state;
      case ACTION.CLEAR_ALL:
        setValue("");
        state = { result: "" };
        return state;
      case ACTION.DELETE_LAST:
        const delValue = value.slice(0, -1);
        setValue(delValue);
        state = { result: delValue };
        return state;
      default:
        return state;
    }
  };

  const [btnState, dispatch] = useReducer(reducerBtn, initialState);

  return (
    <>
      <CalculatorContext.Provider
        value={{ buttonList, value, setValue, dispatch, btnState, showResult }}
      >
        {children}
      </CalculatorContext.Provider>
    </>
  );
}

export default Context;

// Custom Hook
const useCustomHook = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error(
      "useCustomHook must be used within a CalculatorContext.Provider"
    );
  }
  return context;
};
export { useCustomHook };