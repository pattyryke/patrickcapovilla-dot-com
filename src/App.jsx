import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.css';
import TopBar from './components/top-bar/TopBar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import SoundboardPage from './pages/SoundboardPage';


// To add more pages later, just:

// 1. Create src/pages/YourPage.jsx
// 2. Add a <Route path='/your-path' element={<YourPage />} /> in App.jsx
// 3. Add a project entry in ProjectList.jsx with url: '/your-path'

function App() {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <div className="page-header">
                    <TopBar />
                </div>

                <div className='page-body'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/soundboard' element={<SoundboardPage />} />
                    </Routes>
                </div>

                <div className='page-footer'>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
