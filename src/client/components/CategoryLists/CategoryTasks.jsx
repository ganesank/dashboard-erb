 
import React from 'react';
import { Button } from 'baseui/button';
import PropTypes from 'prop-types';

const CategoryTasks = ({
  filterTasks, onFilterAll, onFilterCompleted, onFilterNotCompleted,
}) => (

  <div mb={20} display="flex" justifyContent="space-evenly">
    {
      filterTasks === 'allTasks' ? <Button disabled color="default" variant="contained">All</Button>
        : <Button onClick={onFilterAll} color="default" variant="contained">All</Button>
    }
    {
      filterTasks === 'completed' ? <Button disabled color="primary" variant="contained">Show Completed</Button>
        : <Button onClick={onFilterCompleted} color="primary" variant="contained">Show Completed</Button>
    }
    {
      filterTasks === 'notCompleted' ? <Button disabled color="secondary" variant="contained">Show not Completed</Button>
        : <Button onClick={onFilterNotCompleted} color="secondary" variant="contained">Show not Completed</Button>
    }
  </div>
);

CategoryTasks.defaultProps = {
  filterTasks: 'allTasks',
};

CategoryTasks.propTypes = {
  filterTasks: PropTypes.string,
  onFilterAll: PropTypes.func.isRequired,
  onFilterCompleted: PropTypes.func.isRequired,
  onFilterNotCompleted: PropTypes.func.isRequired,

};

export default CategoryTasks;
