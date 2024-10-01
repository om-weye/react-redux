import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state => state.todos));

  return (
    <ul>
        {todos.map(todo => <li style={{color : 'blue'}}>{todo.text}</li>)}
      
      <input type="checkbox" />
    </ul>
  )
}

export default TodoList
