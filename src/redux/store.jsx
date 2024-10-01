import { createStore } from "redux";
import todoReducer from "./reducer";

/**
 * STORAGE
 */
const store = createStore(todoReducer);

export default store;