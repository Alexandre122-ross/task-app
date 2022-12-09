import { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([
    { uid: 'Task0120903', titleTask: 'Novo Lembrete', descritionTask: '', completeTask: false, priorityTask: true },
    { uid: 'Task0120903123', titleTask: 'Task', descritionTask: '', completeTask: true, priorityTask: false },
  ]);

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

  let values = {
    taskList, 
    handleAddTask, 
    handleCompletedTask, 
    handleFlagTask, 
    handleDeleteTask,
  };

  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;