import TaskItemComponent from './components/taskItem';

function App() {
  return (
    <div className='wrapper d-center'>
      <div className='app-container'>
        <h2 className='title-text'> To-Do List </h2>

        <div className='task-container'>
          <button className='btn-container add_task_btn-container'>
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