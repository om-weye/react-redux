import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Todo Application
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App
