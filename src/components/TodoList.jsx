import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state => state.todos));

  return (
    <ul>
        {todos.map(todo => <TodoItem todo={todo} />)}
    </ul>
  )
}

export default TodoList
