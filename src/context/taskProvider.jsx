import { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([
    { uid: '201salkd', titleTask: 'Test - 01', descriptionTask: '', completeTask: false, priorityTask: false },
  ]);
  const [dataTaskUpdate, setDataTaskUpdate] = useState({uid: '', titleTask: '', descriptionTask: ''});

  const handleAddTask = (dataTask) => {
    dataTask.uid = `${dataTask.titleTask.slice(0, 2)}${new Date().getTime()}`;

    setTaskList((oldState) => [...oldState, dataTask]);
  };
  const handleCompletedTask = (e, dataTask) => {
    e.stopPropagation();

    const updateTask = taskList.filter((item) => {
      if(dataTask.uid === item.uid) {
        item.completeTask = !item.completeTask;
      }

      return item;
    })

    setTaskList(updateTask);
  };
  const handleFlagTask = (e, dataTask) => {
    e.stopPropagation();

    const updateTask = taskList.filter((item) => {
      if (dataTask.uid === item.uid) {
        item.priorityTask = !item.priorityTask;
      }

      return item;
    })

    setTaskList(updateTask);
  };
  const handleDeleteTask = (e, dataTask) => {
    e.stopPropagation();

    const deleteTask = taskList.filter((item) => item.uid !== dataTask.uid);

    setTaskList(deleteTask);
  };
  const handleUpdateTask = (dataTask) => {
    const findIndexTask = taskList.findIndex((item) => item.uid === dataTask.uid);

    taskList[findIndexTask] = dataTask;
  };
  const handleShowUpdateModal = (dataTask) => setDataTaskUpdate(dataTask);
  const handleCloseUpdateModal = () => setDataTaskUpdate({uid: '', titleTask: '', descriptionTask: ''});

  let values = {
    taskList, 
    dataTaskUpdate,
    handleAddTask, 
    handleCompletedTask, 
    handleFlagTask, 
    handleDeleteTask,
    handleUpdateTask,
    handleShowUpdateModal,
    handleCloseUpdateModal,
  };

  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;