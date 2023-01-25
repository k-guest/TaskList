import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import CreateTask from '../CreateTask/CreateTask';

function App () {
    
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <div className="app text-center">
                <h1 className="text-light">Task List</h1>
                <button className="btn btn-primary" onClick={() => setModal(true)}>New Task</button>
            </div>
            <TaskList />
            <CreateTask
                modal = {modal}
                toggle = {toggle}
            />
        </>
    );
}

export default App;