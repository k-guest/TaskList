import './style.scss';

import Picture from './react.png';

function ReactApp () {
    return (
        <div className="react-app">
            <img className="react-app-picture" src={Picture} alt="react-app" />
            <div className="react-app-text">React App</div>
        </div>
    );
}

export default ReactApp;