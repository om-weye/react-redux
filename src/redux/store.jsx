import { createStore } from "redux";
import todoReducer from "./reducer";

const saveToLocalStorage = (state) => {
    try {
        // convert to string
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todos', serializedState);
    } catch (e) {
        console.warn(e)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (serializedState === null) return undefined;
        // convert to object
        return JSON.parse(serializedState)
    } catch (e) {
        console.warn(e)
        return undefined;
    }
}

/**
 * STORAGE
 */
const persistedState = loadFromLocalStorage();
const store = createStore(todoReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;