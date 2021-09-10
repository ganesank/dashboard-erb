import React, { useState } from 'react';
import { Button } from 'baseui/button';
import { Input, SIZE } from 'baseui/input';
import { useDispatch } from 'react-redux';
import { MiddlewareActions } from '../../redux/Actions/Actions';


const FormTask = () => { 
  const [taskInput, setTaskInput] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const clearInput = () => setTaskInput('');

  const postTask = () => {
    if (taskInput) {
      const taskObj = {
        text: taskInput,
        completed: false,
      };

      dispatch(MiddlewareActions.postTask(taskObj));
      setTaskInput('');
    }
  };

  return (
    <div mb={20}>
      <Input fontSize={24} onChange={handleChange} value={taskInput} role="textbox" />
      <div display="flex">
        <Button onClick={clearInput}>
          {' '}
          s
        </Button>
        <Button onClick={postTask}>
          {' '}
          s
        </Button>

      </div>
    </div>
  );
};

export default FormTask;
