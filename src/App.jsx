import './scss/main.css';
import TopBar from './components/top-bar/TopBar';
import ProjectList from './components/project-showcase/ProjectList';
import SideBar from './components/side-bar/SideBar';

function App() {
    return (
        <div className='background'>
            <TopBar />
            <SideBar />
            
            <div className='main-content-container'>
              <ProjectList />
            </div>

            <div id='bottom-bar'></div>
        </div>
    );
}

export default App;
