import React, { useState } from 'react';
import { Button } from 'baseui/button';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Input } from 'baseui/input';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MiddlewareActions } from '../../redux/Actions/Actions';


const Task = ({
  text, onRemove, onComplete, completed, id,
}) => {
  const [editTask, setEditTask] = useState(false);

  const [inputEditTask, setInputEditTask] = useState(text);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => setInputEditTask(target.value);

  const onEditTask = () => {
    if (editTask) {
      setEditTask(!editTask);
      setInputEditTask(text);
    }
    setEditTask(!editTask);
  };

  const postEditTask = (task) => {
    dispatch(MiddlewareActions.editTask(task));
    setEditTask(false);
  };

  return (

    <ListItem>
      {
          editTask
            ? <Input value={inputEditTask} onChange={handleChange} fullWidth className="input__edit" />
            : (
              <div p>
                {text}
              </div>
            )
      }
      <Button onClick={editTask
        ? () => postEditTask({ id, newText: inputEditTask }) : onComplete}
      >
        d
      </Button>
      <Button onClick={onEditTask}>
        ee
      </Button>
      <Button onClick={onRemove}>
        {' '}
        dd
      </Button>
    </ListItem>

  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,

};

export default Task;
