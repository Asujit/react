import React from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import FilterTask from './components/FilterTask'

const App = () => {
  return (
    <div className='main'>
      <h1>Task Manager</h1>
      <AddTask/>
      <FilterTask/>
      <TaskList/>
    </div>
  )
}

export default App