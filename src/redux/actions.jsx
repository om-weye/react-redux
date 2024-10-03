export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

/**
 * POSSIBLE ACTION TO BE DONE ON STORE
 */

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const editTodo = (id, newText) => ({
    type: EDIT_TODO,
    payload: {id, newText}
})