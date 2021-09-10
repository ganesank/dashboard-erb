import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Tasks from './components/Tasks/Tasks';
import FormTask from './components/FormTask/FormTask';
import CategoryTasks from './components/CategoryLists/CategoryTasks';
import { MiddlewareActions } from './redux/Actions/Actions';


function App() {
  const dispatch = useDispatch();

  const [filterTasks, setFilterTasks] = useState('allTasks');

  const onFilterAll = () => setFilterTasks('allTasks');

  const onFilterCompleted = () => setFilterTasks('completed');

  const onFilterNotCompleted = () => setFilterTasks('notCompleted');

  useEffect(() => {
    dispatch(MiddlewareActions.fetchTasks());
  }, [filterTasks]);

  return (
    <div className="App">
      Todo-App
      <FormTask />
      <CategoryTasks
        filterTasks={filterTasks}
        onFilterAll={onFilterAll}
        onFilterCompleted={onFilterCompleted}
        onFilterNotCompleted={onFilterNotCompleted}
      />
      <Tasks filterTasks={filterTasks} />
    </div>
  );
}

export default App;
