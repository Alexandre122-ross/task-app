import { BsCheckCircle, BsFlag, BsTrash } from 'react-icons/bs';
// Style
import './style.taskItem.css';

function TaskItemComponent({ titleTask }) {
  return (
    <li className='task_item-container'>
      <button type='button' className='btn-container'>
        <BsCheckCircle size={20} />
        <h2 className='title-text'> {titleTask} </h2>
        <div className='icons-container d-center'>
          <BsFlag size={20} className='flag-icon' />
          <BsTrash size={20} className='trash-icon' />
        </div>
      </button>
    </li>
  );
}

export default TaskItemComponent;