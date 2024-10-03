/**
 * WORKING OF AN ACTION
 */
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO } from "./actions";

const initialState = {
    todos : []
}

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
        case EDIT_TODO: 
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id == action.payload.id ? {...todo, text: action.payload.newText} : todo
                )
            }
        default:
            return state;
    }
}

export default todoReducer