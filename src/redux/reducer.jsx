/**
 * WORKING OF AN ACTION
 */
import { ADD_TODO, TOGGLE_TODO } from "./actions";

const initialState = {
    todos : []
}

/**
 * action = {
        type: ADD_TODO,
        payload: 'om'
    }
 */
const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: state.todos.length, text: action.payload, completed: false}
                ]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id == action.payload ? {...todo, completed: !todo.completed} : todo
                )
            }
        default:
            return state;
    }
}

export default todoReducer