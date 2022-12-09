import { useState } from 'react';
import { useTask } from './context/taskProvider';
import ModalComponent from './components/modal';
import TaskItemComponent from './components/taskItem';

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const { taskList } = useTask();

  return (
    <div className='wrapper d-center'>
      <ModalComponent 
        open={showAddModal} 
        data={{ uid: '', titleTask: '', descriptionTask: '' }}
        handleClose={() => setShowAddModal(false)} 
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
                handeActiveTaskUpdate={(data) => console.log(data)}
              />
            )}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;