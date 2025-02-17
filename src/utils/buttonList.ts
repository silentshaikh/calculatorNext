import type { ButtonLists } from "./typeButton";

export const buttonList: ButtonLists[] = [
  {
    value: "9",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "9", operation: "number" }
    }
  },
  {
    value: "8",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "8", operation: "number" }
    }
  },
  {
    value: "7",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "7", operation: "number" }
    }
  },
  {
    value: "*",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "*", operation: "multiply" }
    }
  },
  {
    value: "6",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "6", operation: "number" }
    }
  },
  {
    value: "5",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "5", operation: "number" }
    }
  },
  {
    value: "4",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "4", operation: "number" }
    }
  },
  {
    value: "-",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "-", operation: "subtract" }
    }
  },
  {
    value: "3",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "3", operation: "number" }
    }
  },
  {
    value: "2",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "2", operation: "number" }
    }
  },
  {
    value: "1",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "1", operation: "number" }
    }
  },
  {
    value: "/",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "/", operation: "divide" }
    }
  },
  {
    value: "0",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "0", operation: "number" }
    }
  },
  {
    value: ".",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: ".", operation: "decimal" }
    }
  },
  {
    value: "=",
    dispatchBtn: {
      type: "CALCULATE_RESULT",
      // payload: { operation: "equal" }
    }
  },
  {
    value: "+",
    dispatchBtn: {
      type: "CALCULATE_NUMBER",
      // payload: { value: "+", operation: "add" }
    }
  },
  {
    value: "AC",
    dispatchBtn: {
      type: "CLEAR_ALL",
      // payload: { operation: "clear" }
    }
  },
  {
    value: "DEL",
    dispatchBtn: {
      type: "DELETE_LAST",
      // payload: { operation: "delete" }
    }
  }
];
