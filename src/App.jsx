import './components/project-showcase/Project.css';
import './components/top-bar/TopBar.css';
import './App.css';
import TopBar from './components/top-bar/TopBar';
import ProjectList from './components/project-showcase/ProjectList';

function App() {
    return (
        <div className='background'>
            <TopBar />

            <div className='main-content-container'>
              <ProjectList />
            </div>

            <div id='bottom-bar'></div>
        </div>
    );
}

export default App;
