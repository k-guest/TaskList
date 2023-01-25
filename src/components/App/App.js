import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from '../TaskList/TaskList';

function App () {
    return (
        <>
            <div className="app text-center">
                <h1 className="text-light">Task List</h1>
                <button className="btn btn-primary">New Task</button>
            </div>
            <TaskList />
        </>
    );
}

export default App;