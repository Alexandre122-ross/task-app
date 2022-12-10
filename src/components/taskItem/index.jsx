import { BsCheckCircle, BsFlag, BsFlagFill, BsTrash } from 'react-icons/bs';
import { useTask } from '../../context/taskProvider';
import './style.taskItem.css';

function TaskItemComponent({ dataTask, handleActiveUpdateModal }) {
  const { handleShowUpdateModal, handleCompletedTask, handleFlagTask, handleDeleteTask } = useTask();

  const handleActiveUpdate = () => {
    handleShowUpdateModal(dataTask);
    handleActiveUpdateModal();
  };

  return (
    <li className={`task_item-container ${dataTask.completeTask ? 'completed-task' : ''}`}>
      <button type='button' className='btn-container' onClick={handleActiveUpdate}>
        <BsCheckCircle size={20} onClick={(e) => handleCompletedTask(e, dataTask)} />
        <h2 className='title-text'> {dataTask.titleTask} </h2>
        <div className='icons-container d-center'>
          {!dataTask.priorityTask
            ? <BsFlag
              size={22}
              className='flag-icon'
              onClick={(e) => handleFlagTask(e, dataTask)}
            />
            : <BsFlagFill
              size={22}
              className='flag-icon flag_active-icon'
              onClick={(e) => handleFlagTask(e, dataTask)}
            />}
          <BsTrash 
            size={20} 
            className='trash-icon' 
            onClick={(e) => handleDeleteTask(e, dataTask)} 
          />
        </div>
      </button>
    </li>
  );
}

export default TaskItemComponent;