import { useState } from 'react';
import { BsCheckCircle, BsFlag, BsTrash } from 'react-icons/bs';
import InputDataComponent from '../inputData';
import './style.modal.css';

function ModalComponent({ open, handleClose }) {
  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');

  const handleAddTask = () => {
    if(titleTask !== '') {
      console.log('Title: ' + titleTask);
      console.log('Description: ' + descriptionTask);

      // Reset
      setTitleTask('');
      setDescriptionTask('');

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
            <BsCheckCircle size={22} />

            <div className='icon-container'>
              <BsFlag size={22} className='flag-icon' />
              <BsTrash size={22} className='trash-icon' />
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
                onClick={handleAddTask}
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