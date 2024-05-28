import './scss/main.css';
import TopBar from './components/top-bar/TopBar';
import ProjectList from './components/project-showcase/ProjectList';
import SideBar from './components/side-bar/SideBar';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className='wrapper'>
            <div className="page-header">
                <TopBar />
            </div>
            
            <div className='page-body'>
                <ProjectList />
            </div>

            <div className='page-footer'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
