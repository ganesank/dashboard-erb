import React, { useContext } from 'react';
import { TasksContext } from '../../Context';
import TasksPerPage from './TasksPerPage';


function CategoryPage() {
  const {
    filterTasks, tasks, completedTasksSel, notCompletedTasksSel, pagination, setPagination,
  } = useContext(TasksContext);

  // eslint-disable-next-line max-len
  const changeTasksPerPage = ({ target }) => setPagination({ ...pagination, currentPage: 1, tasksPerPage: target.value });
const tasksPerPage =5;
  return (
    <>
      {
          filterTasks === 'allTasks' && tasks.length > tasksPerPage ? (
            <div display="flex" justifyContent="center">

              <TasksPerPage
                onChangeTasksPerPage={changeTasksPerPage}
              />
            </div>
          )
            : filterTasks === 'completed' && completedTasksSel.length > tasksPerPage ? (
              <div display="flex" justifyContent="center">

                <TasksPerPage
                  onChangeTasksPerPage={changeTasksPerPage}
                />
              </div>
            ) : filterTasks === 'notCompleted' && notCompletedTasksSel.length > tasksPerPage ? (
              <div display="flex" justifyContent="center">

                <TasksPerPage
                  onChangeTasksPerPage={changeTasksPerPage}
                  tasksPerPage={tasksPerPage}
                />
              </div>
            ) : null
        }
    </>
  );
}

export default CategoryPage;
