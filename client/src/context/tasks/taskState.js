import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
  TASK_PROJECT,
  ADD_TASK,
  VALIDATE_TASK
} from '../../types';

const TaskState = props => {

  const initialState = {
    tasks: [
      {name: "Elegitar plataforma", status: true, projectId: 1},
      {name: "Elegitar colores", status: false, projectId: 2},
      {name: "Elegitar hosting", status: true, projectId: 3},
    ],
    taskProject: null,
    taskError: false,
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Obtener las tareas de un proyecto
  const getTasksPerProjectId = projectId => {
    dispatch({
      type: TASK_PROJECT,
      payload: projectId
    })
  }

  const addNewTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }


  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        taskProject: state.taskProject,
        taskError: state.taskError,
        getTasksPerProjectId,
        addNewTask,
        validateTask

      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;