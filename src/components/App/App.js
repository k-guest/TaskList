import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
// import TaskList from '../TaskList/TaskList';
import CreateTask from '../CreateTask/CreateTask';

function App () {
    
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }

    const [taskList, setTaskList] = useState([]);
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    return (
        <>
            <div className="app text-center">
                <h1 className="text-light">Task List</h1>
                <button className="btn btn-primary" onClick={() => setModal(true)}>New Task</button>
            </div>
            {/* <TaskList /> */}
            <div className="task-list">
                {taskList.map((obj) => <li>{obj.Name}</li>)}
            </div>
            <CreateTask
                modal = {modal}
                toggle = {toggle}
                save = {saveTask}
            />
        </>
    );
}

export default App;