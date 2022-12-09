import { useState } from 'react';
import { BsCheckCircle, BsFlag, BsFlagFill, BsTrash } from 'react-icons/bs';
import { useTask } from '../../context/taskProvider';
import InputDataComponent from '../inputData';
import './style.modal.css';

function ModalComponent({ open, data, handleClose }) {
  const [titleTask, setTitleTask] = useState(data.titleTask);
  const [descriptionTask, setDescriptionTask] = useState(data.descriptionTask);
  const [completeTask, setCompleteTask] = useState(data.completeTask);
  const [priorityTask, setPriorityTask] = useState(data.priorityTask);
  const { handleAddTask } = useTask();

  const handleModalAction = () => {
    if(titleTask !== '') {
      let data = { titleTask, descriptionTask, completeTask, priorityTask }

      handleAddTask(data);

      // Reset
      setTitleTask('');
      setDescriptionTask('');
      setCompleteTask(false);
      setPriorityTask(false);

      // Close Modal
      handleClose();
    }
  }

  return (
    <div className={`modal_bg-container d-center- ${open ? 'modal_bg_active-container' : ''}`}>
      <div className={`modal-container ${open ? 'modal_active-container' : ''}`}>
        <div className='header_modal-container'>
          <h2 className='title-text'> Add Task </h2>
        </div>

        <div className='section_modal-container'>
          <div className='quick_action-container'>
            <BsCheckCircle 
              size={22} 
              color={completeTask ? '#009cff' : null} 
              className='icon' 
              onClick={() => setCompleteTask(!completeTask)}  
            />

            <div className='icon-container'>
              {!priorityTask
                ? <BsFlag
                  size={22}
                  className='icon flag-icon'
                  onClick={() => setPriorityTask(true)}
                />
                : <BsFlagFill
                  size={22}
                  className='icon flag-icon flag_active-icon'
                  onClick={() => setPriorityTask(false)}
                />}
              <BsTrash size={22} className='icon trash-icon disable-icon' />
            </div>
          </div>

          <form className='form_modal-container'>
            <InputDataComponent 
              type='text'
              label='Title'
              value={titleTask}
              handleChange={setTitleTask}
              />
            <InputDataComponent 
              type='textarea'
              label='Description'
              value={descriptionTask}
              handleChange={setDescriptionTask}
            />

            <div className='form_action-container'>
              <button 
                type='button' 
                className='btn-container btn_aborter-container'
                onClick={handleClose}
              > 
                Cancelar 
              </button>
              
              <button 
                type='button' 
                className='btn-container btn_confirme-container'
                onClick={handleModalAction}
              > 
                Add 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;