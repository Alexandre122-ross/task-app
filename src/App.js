import { useState } from 'react';
import { useTask } from './context/taskProvider';
import ModalComponent from './components/modal';
import TaskItemComponent from './components/taskItem';

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const { taskList, dataTaskUpdate } = useTask();

  return (
    <div className='wrapper d-center'>
      <ModalComponent 
        open={showAddModal} 
        modalData={{ uid: '', titleTask: '', descriptionTask: '', completeTask: false, priorityTask: false }}
        handleClose={() => setShowAddModal(false)} 
      />
      <ModalComponent 
        open={showUpdateModal}
        typeModal='update'
        modalData={dataTaskUpdate}
        handleClose={() => setShowUpdateModal(false)}   
      />

      <div className='app-container'>
        <h2 className='title-text'> To-Do List </h2>

        <div className='task-container'>
          <button 
            className='btn-container add_task_btn-container' 
            onClick={() => setShowAddModal(true)}
          >
            Add Task
          </button>

          <ul className='task_list-container'>

            {taskList.map((item) => 
              <TaskItemComponent 
                key={item.uid} 
                dataTask={item} 
                handleActiveUpdateModal={() => setShowUpdateModal(true)}
              />
            )}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;