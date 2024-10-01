import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions';

const AddTodo = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if(text) {
            dispatch(addTodo(text));
            /**
             * addTodo('om')
             * return
             * {
                  type: ADD_TODO,
                  payload: 'om'
              }
             */
            setText('');
        }
    }

  return (
    <div>
      <input 
        type="text" 
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Add new todo'
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo
