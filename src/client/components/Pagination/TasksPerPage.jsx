
import { Select } from 'baseui/select';
import React from 'react';
import PropTypes from 'prop-types';

function TasksPerPage({ onChangeTasksPerPage }) {
  return (
    <Select
      defaultValue={1}
      onChange={onChangeTasksPerPage}
    />
  );
}

TasksPerPage.propTypes = {
  onChangeTasksPerPage: PropTypes.func.isRequired,
};

export default TasksPerPage;
