import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, ShopPage, ClothesItemPage } from '../pages/index';

import './app.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route
                        path="/clothesItem/:id"
                        element={<ClothesItemPage />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
