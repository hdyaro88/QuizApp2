import { createStore } from "redux";
const initialState = { isDemo: false, isReallyLoggedIn: true, data: [], formFilled: false, link: "" };

const Reducer = (state = initialState, action) => {
  if (action.type === "demoStart") {
    console.log("Start");
    return { ...state, isDemo: true };
  }
  if (action.type === "LogIn") {
    return {
      ...state,
      isReallyLoggedIn: true,
    };
  }
  if (action.type === "data") {
    console.log(state.data, action.payload);
    return { ...state, data: [...state.data, action.payload] };
  }
  if (action.type === "Filled") {
    console.log(window.location.href)
    const link = `${window.location.href}quiz?id=${action.payload.id}`;
    return { ...state, formFilled: true, link: link };
  }
  return state;
};

const store = createStore(Reducer);
export default store;
