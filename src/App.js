import { useState } from 'react';
import ModalComponent from './components/modal';
import TaskItemComponent from './components/taskItem';

function App() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className='wrapper d-center'>
      <ModalComponent 
        open={showAddModal} 
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

            <TaskItemComponent titleTask='Lembrete' />
            <TaskItemComponent titleTask='Prova de Programação' />
            <TaskItemComponent titleTask='Ministrar Aula' />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;