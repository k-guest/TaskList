import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import CreateTask from '../CreateTask/CreateTask';
import Card from '../Card/Card';

function App () {
    
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const updateList = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
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
            <div className="task-list">
                {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} updateList={updateList} deleteTask={deleteTask} />)}
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