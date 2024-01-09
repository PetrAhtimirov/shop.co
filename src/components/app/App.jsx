import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.css';

const MainPage = lazy(() => import('../pages/mainPage/MainPage'));

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
