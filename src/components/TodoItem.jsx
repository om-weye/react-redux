import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/actions';
import { editTodo } from '../redux/actions';

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if(isEditing && newText !== todo.text) {
            dispatch(editTodo(todo.id, newText));
        }
        setIsEditing(!isEditing);
    }

  return (
    <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {isEditing ? (
            <input type="text" value={newText} onChange={e => setNewText(e.target.value)} />
        ) : (
        <span onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.text}
        </span>)}

        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>

        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  )
}

export default TodoItem
